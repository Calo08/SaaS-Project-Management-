import { useState, useEffect } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((res) => setProjects(res.data));
  }, []);

  const createProject = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/projects", { name, description, owner: "user_id" });
    window.location.reload();
  };

  return (
    <div>
      <h1>Projects</h1>
      <form onSubmit={createProject}>
        <input type="text" placeholder="Project Name" onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Create Project</button>
      </form>

      {projects.map((p) => (
        <div key={p._id}>
          <h2>{p.name}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
