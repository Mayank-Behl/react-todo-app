import { TodoItem } from "./TodoItem";

export function TodoList({
  todos,
  filterCategory,
  deletedTodos,
  toggleTodo,
  handleEditClick,
  deleteTodo,
}) {
  const filteredTodos = todos.filter((todo) => {
    if (filterCategory === "all") {
      return true;
    } else if (filterCategory === "completed") {
      return todo.completed;
    } else if (filterCategory === "ongoing") {
      return !todo.completed;
    } else if (filterCategory === "deleted") {
      return deletedTodos.some((deletedTodo) => deletedTodo.id === todo.id);
    }
  });

  return (
    <ul className="todo-list">
      {filteredTodos.length === 0 && filterCategory !== "deleted" && (
        <p>No Todos</p>
      )}
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            handleEditClick={handleEditClick}
            deleteTodo={deleteTodo}
          />
        );
      })}
      {filterCategory === "deleted" && deletedTodos.length === 0 && (
        <p>No Deleted Todos</p>
      )}
      {filterCategory === "deleted" &&
        deletedTodos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            handleEditClick={handleEditClick}
            deleteTodo={deleteTodo}
          />
        ))}
    </ul>
  );
}
