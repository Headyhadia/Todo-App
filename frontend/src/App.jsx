// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/header";
import ListPage from "./Pages/ListPage";
import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import NotFound from "./Pages/NotFound";
import API from "./Api/api";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    API.get("todos/")
      .then((res) => {
        if (mounted) {
          setTodos(res.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (mounted) setError(err);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  // create
  const addTodo = async (title, description) => {
    try {
      const res = await API.post("todos/", { title, description, done: false });
      setTodos((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  // toggle done (optimistic)
  const toggleTodo = async (id) => {
    const t = todos.find((x) => x.id === id);
    if (!t) return;
    setTodos((prev) =>
      prev.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
    );
    try {
      await API.put(`todos/${id}/`, { ...t, done: !t.done });
    } catch (err) {
      setTodos((prev) =>
        prev.map((x) => (x.id === id ? { ...x, done: t.done } : x))
      );
      console.error("toggle failed", err);
    }
  };

  // delete
  const deleteTodo = async (id) => {
    const before = todos;
    setTodos((prev) => prev.filter((x) => x.id !== id));
    try {
      await API.delete(`todos/${id}/`);
    } catch (err) {
      setTodos(before);
      console.error("delete failed", err);
    }
  };

  // update (used by Edit page)
  const updateTodo = async (id, data) => {
    try {
      const res = await API.patch(`todos/${id}/`, data);
      setTodos((prev) => prev.map((x) => (x.id === id ? res.data : x)));
    } catch (err) {
      console.error(err);
    }
  };

  // show loading
  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;
  if (error)
    return <div style={{ padding: 20, color: "red" }}>Error loading todos</div>;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ListPage
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          }
        />
        <Route path="/add" element={<AddPage onAdd={addTodo} />} />
        <Route
          path="/edit/:id"
          element={<EditPage todos={todos} onUpdate={updateTodo} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
