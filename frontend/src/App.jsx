import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./pages/AppLayout";
import SignupPage from "./pages/SignupPage";

function App() {
  axios.defaults.baseURL = "/api/v1";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AppLayout />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
