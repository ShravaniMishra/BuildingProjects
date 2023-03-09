import React, { useEffect, useState } from 'react'

const Statewise = () => {

    const [show,setShow] = useState([])
    const getData = async () => {
        let response = await fetch(`https://data.covid19india.org/data.json`);
        let data = await response.json()
        console.log(data.statewise)
        setShow(data.statewise)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <h1>INDIA COVID-19 DASHBOARD</h1>
    {
        show.map((elem)=>{
            return <div>Active : {elem.active} Confirmed : {elem.confirmed}</div>
        })
    }
    </>
  )
}

export default Statewise