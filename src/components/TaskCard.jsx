export default function TaskCard({ task, status, onMove }) {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
      <h3 className="font-semibold text-gray-800 text-lg">{task.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{task.desc}</p>

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {status !== "todo" && (
          <button
            className="px-3 py-1 text-xs rounded-full border border-blue-300 text-blue-600
                       hover:bg-blue-50 transition"
            onClick={() => onMove(task.id, "todo")}
          >
            Move to Todo
          </button>
        )}

        {status !== "inprogress" && (
          <button
            className="px-3 py-1 text-xs rounded-full border border-yellow-300 text-yellow-700
                       hover:bg-yellow-50 transition"
            onClick={() => onMove(task.id, "inprogress")}
          >
            Move to Progress
          </button>
        )}

        {status !== "completed" && (
          <button
            className="px-3 py-1 text-xs rounded-full border border-green-300 text-green-700
                       hover:bg-green-50 transition"
            onClick={() => onMove(task.id, "completed")}
          >
            Move to Done
          </button>
        )}
      </div>
    </div>
  );
}
