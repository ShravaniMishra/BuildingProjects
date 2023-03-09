import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [num,setNum] = useState(1)
  const [name,setName] = useState("")
  const [moves,setMoves] = useState("")

  useEffect(()=>{
    const getData = async () => {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name)
      setName(res.data.name)
      setMoves(res.data.moves.length)
    }
    getData()
  },[num])

  return (
    <div className="App">
      <h1>
        You have Choose <span style={{ color: "red" }}>{num}</span> value.
      </h1>
      <h2>
        My Name is <span style={{ color: "red" }}>{name}</span>.
      </h2>
      <h3>
        I have <span style={{ color: "red" }}>{moves}</span> Moves.
      </h3>
      <select value={num} onChange={(event) => setNum(event.target.value)}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default App
