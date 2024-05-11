import {FaPencilAlt,FaTrash} from 'react-icons/fa'
function TodoItem({todo,editIndex,removeTodo,index}) {
  return (
    <li className="flex bg-white items-center justify-between p-3 rounded shadow-md mb-3">
        <span className="text-lg">{todo.todo}</span>
        <div>
        <button onClick={()=> editIndex(index)}className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded shadow-md text-white hover:from-yellow-200 hover:to-yellow-400 mx-3">
          <FaPencilAlt/></button>
        <button onClick={()=> removeTodo(todo.id)}className="p-2 bg-gradient-to-r from-red-400 to-red-600 rounded shadow-md text-white hover:from-red-200 hover:to-red-400 mx-3">
          <FaTrash/></button>
        </div>
      </li>
  )
}

export default TodoItem