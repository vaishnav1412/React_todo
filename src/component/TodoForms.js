import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      setError('Please enter a task.');
      return;
    }

    addTodo(value);
    setValue('');
    setError('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setError('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className={`todo-input ${error ? 'error' : ''}`} value={value} placeholder='What is the task today?' onChange={handleChange} />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
      
      {error && <p className='error-message'>{error}</p>}
    </form>
  );
};

export default TodoForm;
