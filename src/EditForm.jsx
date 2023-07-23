export default function Editform({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form className="edit-form-item" onSubmit={onEditFormSubmit}>
      <div className="edit-form-input">
        <h2 className="italic font-bold text-2xl mb-2">Edit Todo</h2>
        <label
          htmlFor="update-item"
          className="font-bold italic text-2xl text-green-400"
        >
          Update Todo:{" "}
        </label>
        <input
          className="p-1 m-1 italic text-xl bg-lime-50 text-green-500"
          onChange={onEditInputChange}
          value={currentTodo.title}
          type="text"
          name="update-item"
          placeholder="Update Todo"
        />
        <button
          type="submit"
          className="italic m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-lime-400 bg-lime-300 rounded-md hover:bg-lime-400"
          onClick={onEditFormSubmit}
        >
          Update
        </button>
        <button
          type="button"
          className="italic m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-rose-400 bg-rose-400 rounded-md hover:bg-rose-500"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
