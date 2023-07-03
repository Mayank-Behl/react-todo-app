import "../src/styles/App.css";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState(""); //intially an empty string
  const [todos, setTodos] = useState([]); //initially an empty array as it will have multile li componenets inside of the parent ul


  function handleSubmit(e) {
    e.preventDefault();

    setTodos((existingTodos) => {
        return [
          ...existingTodos, {id: crypto.randomUUID()}
        ]
    })

  }

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
        <li>
          <label>
            <input type="checkbox" /> Item1
          </label>
          <button className="delete-button">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Item2
          </label>
          <button className="delete-button">Delete</button>
        </li>
      </ul>
    </>
  );
}
