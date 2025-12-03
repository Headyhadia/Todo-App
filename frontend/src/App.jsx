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

import "./App.css";
function App() {
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
