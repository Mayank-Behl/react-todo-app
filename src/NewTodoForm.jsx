import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState(""); //intially an empty string
  const [buttonClicked, setButtonClicked] = useState(false);
  // boolean state to know if we are editing
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") {
      // Show the warning message only if the input field is empty
      setButtonClicked(true);
      return;
    }
    onSubmit(newItem);
    setNewItem("");
    setButtonClicked(false); // Reset the buttonClicked state after successful form submission
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
        {buttonClicked && newItem.trim() === "" && (
          <p className="text-red-500">Input cannot be blank</p>
        )}
      </div>
      <div className="flex justify-center  m-auto mb-2 mt-2 pt-1 pb-1 border-1 border-teal-400 bg-teal-300 rounded-md hover:bg-teal-400 w-24">
        <button className="new-form-add-btn w-full">Add Todo</button>
      </div>
    </form>
  );
}
