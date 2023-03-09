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
    <h1 style={{color:"peru"}}>INDIA COVID-19 DASHBOARD</h1>
    {
        show.map((elem)=>{
            return (
              <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"20px",color:"teal" }}>
                <h2>Active : {elem.active}</h2>
                <h2>Confirmed : {elem.confirmed}</h2>
                <h2>Deaths : {elem.deaths}</h2>
                <h2>Deltaconfirmed : {elem.deltaconfirmed}</h2>
              </div>
            );
        })
    }
    </>
  )
}

export default Statewise