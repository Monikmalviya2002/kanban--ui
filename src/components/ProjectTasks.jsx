import { useState, useEffect } from "react";
import TaskColumn from "./TaskColumn";
import AddModal from "./AddModel";

export default function ProjectTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks-data");

    return saved
      ? JSON.parse(saved)
      : {
          todo: [],
          inprogress: [],
          completed: [],
        };
  });

  const [showAdd, setShowAdd] = useState(false);

  // 🔥 Auto-save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks-data", JSON.stringify(tasks));
  }, [tasks]);

  // ➕ Add Task
  const handleAddTask = (title, desc) => {
    const newTask = {
      id: Date.now(),
      title,
      desc,
    };

    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));

    setShowAdd(false);
  };

  // 🔄 Move Task between columns
  const handleMoveTask = (id, newStatus) => {
    setTasks((prev) => {
      let movedTask = null;

      const updated = {
        todo: prev.todo.filter((t) => {
          if (t.id === id) movedTask = t;
          return t.id !== id;
        }),
        inprogress: prev.inprogress.filter((t) => {
          if (t.id === id) movedTask = t;
          return t.id !== id;
        }),
        completed: prev.completed.filter((t) => {
          if (t.id === id) movedTask = t;
          return t.id !== id;
        }),
      };

      updated[newStatus].push(movedTask);

      return updated;
    });
  };

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span className="text-2xl font-bold mx-4">Projects</span>
        </div>

        <button
          onClick={() => setShowAdd(true)}
          className="px-4 py-2 mx-4 my-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition cursor-pointer"
        >
          Add New Task
        </button>
      </div>

      {/* COLUMNS */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <TaskColumn
          title="Yet To Start"
          status="todo"
          items={tasks.todo}
          onMove={handleMoveTask}
        />

        <TaskColumn
          title="In Progress"
          status="inprogress"
          items={tasks.inprogress}
          onMove={handleMoveTask}
        />

        <TaskColumn
          title="Completed"
          status="completed"
          items={tasks.completed}
          onMove={handleMoveTask}
        />
      </div>

      {/* ADD MODAL */}
      {showAdd && (
        <AddModal
          onClose={() => setShowAdd(false)}
          onSubmit={handleAddTask}
        />
      )}
    </div>
  );
}
