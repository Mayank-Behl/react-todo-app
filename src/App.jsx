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

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        //currentTodos === todos
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
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
      return currentTodos.filter((todo) => {
        if (todo.id != id) {
          return { ...todo };
        }
      });
    });
  }
  //function to get the value of the edit input and set the new state
  function handleEditInputChange(e) {
    // set the new state value to what's currently in the edit input box
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleEditClick(id) {
    setIsEditing(true);
    setCurrentTodo({ ...todos });
  }
  function handleUpdateTodo(id, updatedTodo) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { updatedTodo };
        }
        return todo;
      });
    });
    setIsEditing(false);
  }
  // const updatedItem = todos.map((todo) => {
  //   return todo.id === id ? updatedTodo : todo;
  // });
  // setIsEditing(false);
  // setTodos(currentTodo);
  // function toggleTodo(id, completed) {
  //   setTodos((currentTodos) => {
  //     return currentTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed };
  //       }
  //       return todo;
  //     });
  //   });
  // }

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

      <h1 className="display-todo-list">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleEditClick={handleEditClick}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
