import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { useEffect, useState } from "react";

function SignupPage() {
  const navigate = useNavigate("/");
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    if (user === null) return;
    navigate("/");
  }, [user, navigate]);

  async function handleSignup(e) {
    e.preventDefault();
    const { data } = await axios.post("/users/signup", formData);
    setUser(data.data.user);
    console.log(data.data.user);
  }

  return (
    <div className="flex justify-center items-center  h-lvh">
      <form
        className="flex-col flex  bg-blue-100 p-12 gap-8 items-center text-3xl w-auto min-h-[50%] h-auto rounded-md"
        onSubmit={handleSignup}
      >
        <label className="">Signup</label>
        <input
          type="text"
          placeholder="Name"
          className="bg-blue-50 placeholder:text-black rounded-lg p-3"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
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
        <input
          type="text"
          placeholder="Confirm Your Password"
          className="bg-blue-50 placeholder:text-black rounded-lg p-3"
          onChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
        />
        <button className="border-2 border-black p-2">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
