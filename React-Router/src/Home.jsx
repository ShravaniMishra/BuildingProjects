import React, { useState } from "react";

const Home = () => {
    let newTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(newTime);
    const handleClick = () => {
      newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    };
    setInterval(handleClick, 1000);
  return (
    <>
      <div className="Home_main">
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            textAlign:"center"
          }}
        >
          Welcome to my website
        </h1>
        <h3 style={{ fontSize: "25px",color:"white" ,textAlign:"right" ,marginRight:"10px",marginTop:"-55px"}}>{time}</h3>
        <div className="Home">
          <img
            style={{
              width: "40%",
              borderRadius: "11px",
              transition: "all 5.2s ease-in-out",
            }}
            src="https://i.ibb.co/5K0cjj6/Whats-App-Image-2023-03-04-at-8-30-28-PM.jpg"
            alt="Shravani"
          />
          <div>
            <h2>
              Hey It's me{" "}
              <span style={{ textDecoration: "bold", color: "brown" }}>
                Shravani Mishra.
              </span>
            </h2>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
