import "../src/styles/App.css";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  }); //initially an empty array as it will have multile li componenets inside of the parent ul

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

  // setTodos([
  //   ...todos,
  //   { id: crypto.randomUUID(), title: newItem, completed: false },
  // ]);
  //This would work but calling it twice won't preserve the state of the first call, so that could be handled via passing a function along with a parameter

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="display-todo-list">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
