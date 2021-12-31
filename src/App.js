// import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Center from "./wrappers/Center";
import Main from "./components/Main";
import ResetPassword from "./pages/ResetPassword";
import AccountActivation from "./components/AccountActivation";

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
          <Route
            path="/reset-password/:userId/:randomStr"
            element={<ResetPassword />}
          />
          <Route
            path="/confirm/:confirmationCode"
            element={<AccountActivation />}
          />
        </Routes>
      </Center>
    </Router>
  );
}

export default App;
