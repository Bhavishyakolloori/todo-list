import {FaPlus, FaPencilAlt} from 'react-icons/fa'
import  React,{useState,useEffect} from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import {db} from './firebase'
import TodoList from './Components/TodoList'
export default function App() {

  const [todos,setTodos] =useState([]);
  const [input,setInput]= useState("");
  const [changeindex,setChangeindex] = useState(-1);

  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db,'todos'),(snapshot) =>{
      setTodos(snapshot.docs.map((doc)=>({id: doc.id ,todo:doc.data().todo})));
    });

    return ()=>unsubscribe();
  },[])
  //add todo
  const addTodo = async() =>{
    try {
      if(input.trim() !== ''){
        //setTodos([...todos,{id: new Date(), todo:input}]);
        await addDoc(collection(db,'todos'),{todo: input})
        setInput('');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const editIndex = async(index)=>{
   setInput(todos[index].todo)
   setChangeindex(index);
  }

  const updateTodo = async()=>{
    try {
      if(input.trim() !== ''){
      //  const updatedTodos = [...todos]
      //  updatedTodos[changeindex].todo=input;
      //  setTodos(updatedTodos)
      const toDocRef = doc(db,'todos',todos[changeindex].id);
      await updateDoc(toDocRef,{todo : input});
       setChangeindex(-1)
       setInput('')
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const removeTodo = async(id)=>{
    // let filteredTodos = todos.filter((todo)=>todo.id !== id);
    // setTodos(filteredTodos)

    try{
      await deleteDoc(doc(db,'todos',id));
    }catch(error){
      console.log(error.message);
    }
  }
  return (
    <div className="min-h-screen text-center justify-center  flex flex-col items-center p-5 bg-custom-background bg-cover bg-center gap-4">
      <div className="bg-gray-100 p-5 rounded shadow-md w-full max-w-lg lg:w-1/4">
      <h1 className="text-3xl font-bold  mb-4">Todo App</h1>
      <div className="flex">
      <input type="text" placeholder="Add a todo" className="py-2 px-4 border rounded focus:outline-none w-full mr-2" value={input} onChange={(e)=> setInput(e.target.value)}>
      </input>
      <button onClick={changeindex === -1 ? addTodo : updateTodo} className="bg-gradient-to-r from-blue-400 to-blue-600 py-2 px-4 rounded shadow-md text-white mx-3">
        {changeindex === -1 ? <FaPlus/> : <FaPencilAlt/>}</button>
      </div>
      </div>

      {
        todos.length >0 && <TodoList todos= {todos} editIndex={editIndex} removeTodo={removeTodo}/>
       
      }
    </div>
  )
}