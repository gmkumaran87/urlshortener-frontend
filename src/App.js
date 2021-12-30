// import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Center from "./wrappers/Center";
import Main from "./components/Main";

// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "./store/auth-slice";

function App() {
  return (
    <Router>
      <Center>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Center>
    </Router>
  );
}

export default App;
