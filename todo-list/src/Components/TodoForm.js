import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //dont submit if it's an empty value
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='input' value={value}
                placeholder="Add a new ToDo"
                onChange={e => setValue(e.target.value)}></input>
        </form>
    );
}

export default TodoForm;