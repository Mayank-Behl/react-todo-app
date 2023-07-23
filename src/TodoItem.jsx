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
          className=" m-1 h-4 w-4"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span className="ml-2">{title}</span>
      </label>
      <button
        className="edit-button m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-cyan-400 bg-cyan-300 rounded-md hover:bg-cyan-400"
        onClick={() => handleEditClick(id)}
      >
        Edit
      </button>
      <button
        className="delete-button m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-rose-400 bg-rose-300 rounded-md hover:bg-rose-400"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
