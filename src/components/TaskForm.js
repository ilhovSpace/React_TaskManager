import React,{useContext, useState, useEffect} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!editItem){
      addTask(value);
      setValue('');
    } else {
      editTask(value, editItem.id);
    }

  }

  useEffect(() => {
    if(editItem){
      setValue(editItem.title);
    } else {
      setValue("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        value={value} 
        type='text'
        className='task-input'
        placeholder='Add Task ...'
        required
      />
       <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>{editItem ? "Edit Task" : "Add Task"}</button>
        <button onClick={clearList} className='btn clear-btn'>Clear Tasks</button>
       </div>
    </form>
  );
};

export default TaskForm
