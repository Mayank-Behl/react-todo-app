import "../src/styles/App.css";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import Editform from "./EditForm";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  }); //initially an empty array as it will have multile li componenets inside of the parent ul

  // object state to set so we know which todo item we are editing
  const [isEditing, setIsEditing] = useState(false);
  // object state to set so we know which todo item we are editing
  const [currentTodo, setCurrentTodo] = useState({});

  //object state to filter the todos
  const [filterCategory, setFilterCategory] = useState("all");

  //To monitor delete todo state for filtering
  const [deletedTodos, setDeletedTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        //currentTodos === todos
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false, deleted: false },
      ];
    });
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
      const deletedTodo = currentTodos.find((todo) => todo.id === id);

      if (deletedTodo) {
        setDeletedTodos((currentDeletedTodos) => [
          ...currentDeletedTodos,
          deletedTodo,
        ]);
      }

      const updatedTodos = currentTodos.filter((todo) => todo.id !== id);
      return updatedTodos;
    });
  }

  function permanentlyDeleteTodo(id) {
    // Remove the todo from the deletedTodos state
    setDeletedTodos((currentDeletedTodos) =>
      currentDeletedTodos.filter((todo) => todo.id !== id)
    );

    // Permanently delete the todo by not including it in the main todos state
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  //function to get the value of the edit input and set the new state
  function handleEditInputChange(e) {
    // set the new state value to what's currently in the edit input box
    setCurrentTodo({ ...currentTodo, title: e.target.value });
    console.log(currentTodo);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleEditClick(id) {
    setIsEditing(true);
    // setCurrentTodo({ ...todos });
    setCurrentTodo(todos.find((todo) => todo.id === id));
  }
  // need to update the title instead of text
  function handleUpdateTodo(id, updatedTodo) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...updatedTodo };
        }
        return todo;
      });
    });
    setIsEditing(false);
  }

  // setTodos([
  //   ...todos,
  //   { id: crypto.randomUUID(), title: newItem, completed: false },
  // ]);
  //This would work but calling it twice won't preserve the state of the first call, so that could be handled via passing a function along with a parameter

  return (
    <div className="App">
      {isEditing ? (
        <Editform
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <NewTodoForm onSubmit={addTodo} />
      )}

      {/* Add the filter buttons */}
      <div className="filter-buttons">
        <button
          className="m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-cyan-400 bg-cyan-300 rounded-md hover:bg-cyan-400"
          onClick={() => setFilterCategory("all")}
        >
          All
        </button>
        <button
          className="m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-green-400 bg-green-300 rounded-md hover:bg-green-400"
          onClick={() => setFilterCategory("completed")}
        >
          Completed
        </button>
        <button
          className="m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-yellow-400 bg-yellow-300 rounded-md hover:bg-yellow-400"
          onClick={() => setFilterCategory("ongoing")}
        >
          Ongoing
        </button>
        <button
          className="m-1 pt-1 pb-1 pl-2 pr-2 border-1 border-red-400 bg-red-300 rounded-md hover:bg-red-400"
          onClick={() => setFilterCategory("deleted")}
        >
          Deleted
        </button>
      </div>

      <h1 className="display-todo-list font-bold textl mt-2 mb-1">Todo List</h1>
      <TodoList
        todos={todos}
        filterCategory={filterCategory}
        deletedTodos={deletedTodos}
        permanentlyDeleteTodo={permanentlyDeleteTodo}
        toggleTodo={toggleTodo}
        handleEditClick={handleEditClick}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
