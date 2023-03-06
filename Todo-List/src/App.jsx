import { useState } from 'react'
import './App.css'

function App() {
  
  const[todo,setTodo]=useState("")
  const[todos,setTodos]=useState([])

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setTodos([...todos,todo])
  }

  return (
    <>
     <div className="App">
      <div className="inner_box">
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder='Add an Item' onChange={handleChange}/>
        <button onClick={handleClick}> +👍</button>
      </div>
      <ol>
        {
          todos.map((elem)=>{
            return  <li>{elem}</li>
          })
        }
      </ol>
      </div>
    </>
   
  )
}

export default App
