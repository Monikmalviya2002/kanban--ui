export default function AddModal({ onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const desc = e.target.desc.value.trim();

    if (!title) return;

    onSubmit(title, desc);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

        <label className="block mb-2 text-sm">Task Title</label>
        <input
          name="title"
          className="w-full border rounded-lg p-2 mb-4"
          placeholder="Enter task title"
        />

        <label className="block mb-2 text-sm">Description</label>
        <textarea
          name="desc"
          className="w-full border rounded-lg p-2 mb-4"
          placeholder="Task description..."
          rows="3"
        />

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
