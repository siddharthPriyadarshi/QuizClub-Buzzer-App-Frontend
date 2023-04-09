import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PlayerHome from "./layouts/PlayerHome";
import Display from "./layouts/Display";
import AdminDashboard from "./layouts/AdminDashboard";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerHome />} />
          <Route path="/display" element={<Display />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </div>
  );
}

export default App;
