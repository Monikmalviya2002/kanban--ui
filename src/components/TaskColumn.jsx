import TaskCard from "./TaskCard";

export default function TaskColumn({ title, status, items, onMove }) {
  return (
    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
      
      {/* Column Header */}
     <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border mb-4">
  {/* Left: Title */}
  <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="px-2 py-1 text-xs rounded-full bg-blue-500 text-white">
          {items.length}
        </span>
      </div>

      {/* Tasks List */}
      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1 custom-scrollbar">
        {items.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            status={status}
            onMove={onMove}
          />
        ))}
      </div>
    </div>
  );
}
