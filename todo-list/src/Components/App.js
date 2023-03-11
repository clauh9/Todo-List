import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

import "../index.css"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    //...todos spread operator to copy everything in the array
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  //set as completed/uncompleted
  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted) {
      newTodos[index].isCompleted = false;
    } else {
      newTodos[index].isCompleted = true;
    }

    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    //can also delete it like this: delete newTodos[index];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className='todo-list'>
        {todos.map((todo, index) =>
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
