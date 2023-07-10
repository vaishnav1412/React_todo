import React,{useState} from 'react'
import Todoform from './TodoForms'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import EditTodoForm from './EditTodoForm';


uuidv4();




const TodoWrapper = () => {
    const [todos,setTodos ] =useState([])
    const addTodo =todo =>{
        setTodos([...todos,{id:uuidv4(),task:todo,compleated:false,isEditing:false}])
    }
    const togglecompleate = id =>{
        setTodos(todos.map(todo =>todo.id === id ? {...todo, compleated:!todo.compleated}:todo))
    }
    const deleteTodo =id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    
    const editTodo =id => {
 
        setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask=(task,id) => {
        setTodos(todos.map(todo => todo.id ===id ? {...todo,task,isEditing:!todo.isEditing}:todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>To-Do List</h1>
       
     <Todoform addTodo={addTodo} />
     {todos.map((todo,index)=>(
       todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
        ):(
            <Todo task={todo} key={index} togglecompleated={togglecompleate} deleteTodo={deleteTodo} editTodo={editTodo} />
        )

     ))}
    
    </div>
  )
}

export default TodoWrapper
