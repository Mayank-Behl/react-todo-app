import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState(""); //intially an empty string
  // boolean state to know if we are editing
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form className="new-form-item" onSubmit={handleSubmit}>
      <div className="new-form-input">
        <label htmlFor="todo-item" className="font-bold text-xl">
          Add New Item
        </label>{" "}
        <br />
        <input
          className="border-2  border-black rounded-md mt-2 mb-2 pl-1"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          type="text"
          name="todo-item"
          id="todo-item"
        />
      </div>
      <div className="flex justify-center  m-auto mb-2 mt-2 pt-1 pb-1 border-1 border-teal-400 bg-teal-300 rounded-md hover:bg-teal-400 w-24">
        <button className="new-form-add-btn w-full">Add Todo</button>
      </div>
    </form>
  );
}
