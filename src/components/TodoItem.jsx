import React from 'react'
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import { deleteTodo, markCompleted, markIncomplete, toggleTodo } from '../Redux/actions';
import { useDispatch } from 'react-redux';
const TodoItem = ({todo , index}) => {
    const dispatch = useDispatch();
    
    // const handleDeleteTodo = () =>{
    //     dispatch(deleteTodo(id))
    // }

    return (
    <>
        <li className='flex flex-col items-center sm:flex-row  sm:items-center justify-between border-b-2 py-2 gap-4'>
            <div className='flex items-center'>
                <span className='mr-4 text-gray-500'>{index + 1}</span>
                <span className={`mr-4 ${todo.completed ? "line-through text-red-500" : ""}`}>{todo.text}</span>
            </div>

            <div className="space-x-3 ml-8">
                <button onClick={() =>dispatch(toggleTodo(index))} className='mr-2 text-sm bg-blue-500 text-white sm:px-4 py-2 px-1 rounded'>{todo.completed ? < FaToggleOff/> : <FaToggleOn/>}</button>
                {
                    !todo.completed && (
                        <button onClick={() =>dispatch(markCompleted(index))} className='mr-2 text-sm bg-blue-500 text-white sm:px-4 py-2 px-1 rounded'><FaCheck/></button>
                    )
                }
                {
                    todo.completed && (
                        <button onClick={() =>dispatch(markIncomplete(index))} className='mr-2 text-sm bg-yellow-500 text-white sm:px-4 py-2 px-1 rounded'><FaTimes/></button>
                    )
                }
                <button onClick={()=> dispatch(deleteTodo(index))} className='mr-2 text-sm bg-blue-500 text-white sm:px-4 py-2 px-1 rounded'><MdDelete/></button>
            </div>
        </li>
    </>
  )
}

export default TodoItem
