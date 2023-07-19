export default function Editform({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form className="edit-form-item" onSubmit={onEditFormSubmit}>
      <div className="edit-form-input">
        <h2>Edit Todo</h2>
        <label htmlFor="">Update Todo: </label>
        <input
          onChange={onEditInputChange}
          value={currentTodo.title}
          type="text"
          name="update-item"
          placeholder="Update Todo"
        />
        <button type="submit" onClick={onEditFormSubmit}>
          Update
        </button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
