import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ComA from "./ComA";
import { createContext } from "react";

const FirstName = createContext();
const LastName = createContext();

function App() {
  

  return (
    // <div className="App">
    //   <h1 className='text-primary text-capitalize text-center mt-5'>My Boostrap styling</h1>
    //   <button className="btn btn-success" onClick={()=>alert("Welcome Here")}>Click Me</button>
    // </div>
    <>
      <FirstName.Provider value={"Shravani"}>
        <LastName.Provider value={"Mishra"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName , LastName};

