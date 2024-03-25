import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import ProtectedRoute from "./components/PrivateRoutes/ProtectedRoute";
import DeleteUserPage from "./pages/DeleteUserPage";
import ItemsPage from "./pages/ItemsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Routes>
        <Route
          path="/update-user"
          element={<ProtectedRoute Component={UpdateUserPage} />}
        />
        <Route
          path="/delete-user"
          element={<ProtectedRoute Component={DeleteUserPage} />}
        />
        <Route
          path="/items"
          element={<ProtectedRoute Component={ItemsPage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
