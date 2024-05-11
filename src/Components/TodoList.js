import TodoItem from './TodoItem'
function TodoList({todos,editIndex,removeTodo}) {
  return (
    <div className="bg-gray-100 p-5 rounded shadow-md w-full max-w-lg lg:w-1/4">
    <ul>
      {
        todos.map((todo,index)=>(
         <TodoItem key={index} index={index}
         todo={todo} editIndex={editIndex} removeTodo={removeTodo}/>
        ))
      }
    </ul>
  </div>
  )
}

export default TodoList