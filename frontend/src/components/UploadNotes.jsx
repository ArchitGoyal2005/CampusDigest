import { useState } from "react";
import axios from "axios";

function UploadNotes() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    branch: "",
    semester: "",
  });

  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const dataToSend = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        dataToSend.append(key, formData[key]);
      }
    }
    dataToSend.append("file", file);
    const { data } = await axios.post("/notes", dataToSend);
    console.log(data.data);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label>Name</label>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <label>subject</label>
      <input
        type="text"
        placeholder="subject"
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      />
      <label>semester</label>
      <input
        type="text"
        placeholder="semester"
        onChange={(e) =>
          setFormData({ ...formData, semester: parseInt(e.target.value) })
        }
      />
      <label>branch</label>
      <input
        type="text"
        placeholder="branch"
        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
      />
      <label>File</label>
      <input
        type="file"
        placeholder="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Submit</button>
    </form>
  );
}

export default UploadNotes;
