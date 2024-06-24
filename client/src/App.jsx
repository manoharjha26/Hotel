import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/registration/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
