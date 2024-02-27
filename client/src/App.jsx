import "./App.css";
import PlacePage from "./pages/PlacePage/PlacePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/place/:place" element={<PlacePage />} />

          <Route path="*" element={<NotFoundPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
