import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  

  return (
    <div className="App">
      <h1 className='text-primary text-capitalize text-center mt-5'>My Boostrap styling</h1>
      <button className="btn btn-success" onClick={()=>alert("Welcome Here")}>Click Me</button>
    </div>
  );
}

export default App
