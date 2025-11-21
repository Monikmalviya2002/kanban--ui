import { useState, useEffect } from "react";
import TaskColumn from "./TaskColumn";
import AddModal from "./AddModel";

export default function ProjectTasks({ selectedProject, searchQuery }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks-data");
    return saved ? JSON.parse(saved) : {};
  });

  const [showAdd, setShowAdd] = useState(false);

 
  useEffect(() => {
    localStorage.setItem("tasks-data", JSON.stringify(tasks));
  }, [tasks]);

  
  const handleAddTask = (title, desc) => {
    if (!selectedProject) return;

    const newTask = {
      id: Date.now(),
      title,
      desc,
    };

    setTasks((prev) => ({
      ...prev,
      [selectedProject]: {
        todo: [...((prev[selectedProject]?.todo) || []), newTask],
        inprogress: prev[selectedProject]?.inprogress || [],
        completed: prev[selectedProject]?.completed || [],
      },
    }));

    setShowAdd(false);
  };

  
  const handleMoveTask = (id, newStatus) => {
    if (!selectedProject) return;

    setTasks((prev) => {
      let movedTask = null;
      const projectTasks = prev[selectedProject] || { todo: [], inprogress: [], completed: [] };

      const updated = {
        todo: projectTasks.todo.filter((t) => {
          if (t.id === id) movedTask = t;
          return t.id !== id;
        }),
        inprogress: projectTasks.inprogress.filter((t) => {
          if (t.id === id) movedTask = t;
          return t.id !== id;
        }),
        completed: projectTasks.completed.filter((t) => {
          if (t.id === id) movedTask = t;
          return t.id !== id;
        }),
      };

      updated[newStatus].push(movedTask);

      return { ...prev, [selectedProject]: updated };
    });
  };

  
  const filterTasks = (items) => {
    if (!searchQuery) return items;
    return items.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  if (!selectedProject)
    return <div className="text-gray-500">Select a project to view tasks</div>;

  const projectTasks = tasks[selectedProject] || { todo: [], inprogress: [], completed: [] };

  return (
    <div className="w-full">
      
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold mx-4">Tasks</span>
        <button
          onClick={() => setShowAdd(true)}
          className="px-4 py-2 mx-4 my-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition cursor-pointer"
        >
          Add New Task
        </button>
      </div>

    
      <div className="grid grid-cols-3 gap-6 mt-6">
        <TaskColumn
          title="Yet To Start"
          status="todo"
          items={filterTasks(projectTasks.todo)}
          onMove={handleMoveTask}
        />

        <TaskColumn
          title="In Progress"
          status="inprogress"
          items={filterTasks(projectTasks.inprogress)}
          onMove={handleMoveTask}
        />

        <TaskColumn
          title="Completed"
          status="completed"
          items={filterTasks(projectTasks.completed)}
          onMove={handleMoveTask}
        />
      </div>

     
      {showAdd && <AddModal onClose={() => setShowAdd(false)} onSubmit={handleAddTask} />}
    </div>
  );
}
