import React, { useState } from 'react'
import "./Accordion.css"

const MyAcc = ({questions,answer}) => {
    const [show,setShow] = useState(false)
  return (
    <>
      <div className="heading">
        <p className='expand' onClick={()=>setShow(!show)}>{show?"-":"+"}</p>
        <h1>{questions}</h1>
      </div>
      {show && <h3 className='mid'>{answer}</h3>}
    </>
  );
}

export default MyAcc