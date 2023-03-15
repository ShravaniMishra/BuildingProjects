import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ComA from "./ComA";
// import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

// const FirstName = createContext();
// const LastName = createContext();

  const initialState = 0;

  const reducer = (state, action) => {
    if(action.type === "INCREMENT") {
      return state + 1;
    }
    else if(action.type === "DECREMENT") {
      return state - 1;
    }
    else{
      return state
    }
  }
function App() {

  const [state, dispatch] = useReducer(reducer,initialState)
// const [count, setCount] = useState(0)

// useEffect(()=>{
//   // alert("Hey You Clicked Me!!!")
//   document.title = `Clicked ${count} times`;
// })

  return (
    // <div className="App">
    //   <h1 className='text-primary text-capitalize text-center mt-5'>My Boostrap styling</h1>
    //   <button className="btn btn-success" onClick={()=>alert("Welcome Here")}>Click Me</button>
    // </div>
    <>
      {/* <h1 className="text-primary text-capitalize text-center mt-5">
       Working with UseEffect -- UseState --- UseContext ---BootStrap
      </h1>
      <button className="btn btn-success" onClick={() => {setCount(count+1)}}>
        Click Me : {count}
      </button>
      <FirstName.Provider value={"Shravani"}>
        <LastName.Provider value={"Mishra"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decr</button>
    </>
  );
}

export default App;
// export { FirstName , LastName};

