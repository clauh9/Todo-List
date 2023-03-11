import React from 'react';

function Todo({ todo, index, completeTodo, deleteTodo }) {
    return (
        <div className='todo'>
            <div className='todo-txt' style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
                {todo.text}
            </div>
            <div className='btn-container'>
                <button className='btn' onClick={() => completeTodo(index)}></button>
                <button onClick={() => deleteTodo(index)}>X</button>
            </div>
        </div>
    );

}

export default Todo;