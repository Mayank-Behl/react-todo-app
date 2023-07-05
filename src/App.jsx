import "../src/styles/App.css";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState(""); //intially an empty string
  const [todos, setTodos] = useState([]); //initially an empty array as it will have multile li componenets inside of the parent ul

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        //currentTodos === todos
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        if (todo.id != id) {
          return { ...todo };
        }
      });
    });
  }

  // setTodos([
  //   ...todos,
  //   { id: crypto.randomUUID(), title: newItem, completed: false },
  // ]);
  //This would work but calling it twice won't preserve the state of the first call, so that could be handled via passing a function along with a parameter

  return (
    <>
      <form className="new-form-item" onSubmit={handleSubmit}>
        <div className="new-form-input">
          <label htmlFor="todo-item">Add New Item</label> <br />
          <input
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
            type="text"
            name="todo-item"
            id="todo-item"
          />
        </div>
        <button className="new-form-add-btn">Add Todo</button>
      </form>
      <h1 className="display-todo-list">Todo List</h1>
      <ul className="todo-list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
