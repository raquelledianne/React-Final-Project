import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Main from "./pages/Main.jsx";
import "./App.css";
import "./style.css"
import MovieDetails from "./pages/Movie.jsx";


export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
    </Router>
  );
}