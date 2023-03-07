import React, { useState } from 'react'
import { Questions } from "./Api";
import MyAcc from './MyAcc';
import "./Accordion.css"

const Accordion = () => {
    const [data, setData] = useState(Questions);
  return (
    <>
    <h2 style={{fontSize:"30px",color:"red"}}>😍 Come Here If you want your Solution 😍</h2>
      <section className="main">
        <h1>React Interview Questions</h1>
        {data.map((elem) => {
          return <MyAcc key={elem.id} {...elem} />;
        })}
      </section>
    </>
  );
}

export default Accordion