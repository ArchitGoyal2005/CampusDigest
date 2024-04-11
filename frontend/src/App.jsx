import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./pages/AppLayout";
import SignupPage from "./pages/SignupPage";
import UploadNotes from "./components/UploadNotes";
import ChatComponent from "./components/ChatComponent";

function App() {
  axios.defaults.baseURL = "/api/v1";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AppLayout />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="chit-chat" element={<ChatComponent />} />
          <Route path="upload-notes" element={<UploadNotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
