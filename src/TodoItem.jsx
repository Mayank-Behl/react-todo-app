export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  handleEditClick,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="edit-button" onClick={() => handleEditClick(id)}>
        Edit
      </button>
      <button className="delete-button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
