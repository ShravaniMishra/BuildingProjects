import { useState } from "react";
import "./App.css";
import {MdDeleteSweep}  from "react-icons/md";
import {CgAdd} from "react-icons/cg";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    let newList = todos.filter((elem, inde) => inde != index);
    setTodos(newList);
  };

  return (
    <>
      <div className="App">
        <div className="inner_box">
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add an Item"
            onChange={handleChange}
            value={todo}
            className="input"
          />
          <br />
          <br />
          <button onClick={handleClick}>
            <CgAdd style={{fontSize:"25px"}}/>
          </button>
        </div>
        <ol className="list">
          <div>
            {todos.map((elem, index) => {
              return (
                <li>
                  {elem}{" "}
                  <button onClick={() => deleteTodo(index)}>
                    <MdDeleteSweep style={{ fontSize: "20px" }} />
                  </button>
                </li>
              );
            })}
          </div>
        </ol>
      </div>
    </>
  );
}

export default App;
