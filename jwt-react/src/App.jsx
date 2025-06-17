import { Route, Routes } from "react-router-dom";
import Header from "./pages/header/header";
import Login from "./pages/auth/login/login";
import Signup from "./pages/auth/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;