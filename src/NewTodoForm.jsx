import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState(""); //intially an empty string

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return (
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
  );
}
