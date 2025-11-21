import { useState, useEffect } from "react";
import AddProjectModal from "./AddProjectModal";

export default function RightSidebar({ selectedProject, setSelectedProject }) {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects-data");
    return saved ? JSON.parse(saved) : [];
  });

  const [showAdd, setShowAdd] = useState(false);

  // Save projects to localStorage
  useEffect(() => {
    localStorage.setItem("projects-data", JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = (name) => {
    const newProject = { id: Date.now(), name };
    setProjects((prev) => [...prev, newProject]);
    setSelectedProject(newProject.id); // auto-select new project
    setShowAdd(false);
  };

  return (
    <aside className="bg-gray-100 border-l border-gray-300 p-4 min-h-full w-64 flex-shrink-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Projects</h2>
        <button
          onClick={() => setShowAdd(true)}
          className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          + Add
        </button>
      </div>

      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`p-2 mb-2 rounded shadow cursor-pointer ${
                selectedProject === project.id
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {project.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No projects yet</li>
        )}
      </ul>

      {showAdd && <AddProjectModal onClose={() => setShowAdd(false)} onSubmit={handleAddProject} />}
    </aside>
  );
}
