import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, handleEditClick, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
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
    </ul>
  );
}
