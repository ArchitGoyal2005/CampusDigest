import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { useEffect, useState } from "react";

function LoginPage() {
  const navigate = useNavigate("/");
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (user === null) return;
    navigate("/");
  }, [user, navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    const { data } = await axios.post("/users/login", formData);
    setUser(data.data.user);
    console.log(data.data.user);
  }

  return (
    <div className="flex justify-center items-center  h-lvh">
      <form
        className="flex-col flex  bg-blue-100 p-12 gap-4 items-center text-3xl w-auto min-h-[50%] h-auto  rounded-md"
        onSubmit={handleLogin}
      >
        <label className="">Login</label>
        <input
          type="text"
          placeholder="E-Mail"
          className="bg-blue-50 placeholder:text-black rounded-lg p-3"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-blue-50 placeholder:text-black rounded-lg p-3"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button className="border-2 border-black p-2">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
