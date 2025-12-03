import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/Header/header";
import ListPage from "./Pages/ListPage";
import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import NotFound from "./Pages/NotFound";
import API from "./Api/api";
import React, { useState, useEffect } from "react";

import "./App.css";
function App() {
  const [todos, setTodos] = useState([]); /* State to hold todo items */
  const [loading, setLoading] = useState(true); /* Loading state */
  const [error, setError] = useState(null); /* Error state */

  /* Fetch todo items from the API */
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    API.get("todos/")
      .then((res) => {
        if (mounted) {
          setTodos(res.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  //create
  const addTodo = async (title) => {
    try {
      const res = await API.post("todos/", { title, done: false });
      setTodos((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };
  // toggle done
  const toggleTodo = async (id) => {
    const t = todos.find((x) => x.id === id);
    if (!t) return;

    setTodos((prev) =>
      prev.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
    );

    try {
      await API.put(`todos/${id}/`, { ...t, done: !t.done });
    } catch (err) {
      //rollback on error
      setTodos((prev) =>
        prev.map((x) => (x.id === id ? { ...x, done: t.done } : x))
      );
      console.error("toggle failed", err);
    }
  };

  //delete
  const deleteTodo = async (id) => {
    // optimistic remove
    const before = todos;
    setTodos((prev) => prev.filter((x) => x.id !== id));
    try {
      await API.delete(`todos/${id}/`);
    } catch (err) {
      setTodos(before); // rollback
      console.error("delete failed", err);
    }
  };

  // update title (edit)
  const updateTodo = async (id, data) => {
    try {
      const res = await API.patch(`todos/${id}/`, data);
      setTodos((prev) => prev.map((x) => (x.id === id ? res.data : x)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/add" element={<AddPage />} />
        {<Route path="/edit/:id" element={<EditPage />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
