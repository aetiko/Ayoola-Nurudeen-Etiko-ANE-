import React from "react";
import "../styles/pages/Home.css";
import IntroImage from "../Images/backqrounds/1.jpg";

const Home = () => {
  return (
    <>
      <div className="section-one">
        <div className="introduction">
          <h1>Hi! I am Nurudeen</h1>
          <h6>"The light of Islam"</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quia repudiandae at alias ipsam enim eum, nostrum id. Quo quibusdam
            officiis earum et exercitationem reprehenderit distinctio quod
            asperiores obcaecati qui, eum tempora reiciendis soluta nam totam
            inventore sint sit minus. Minus aliquam veritatis animi, libero
            aliquid labore. Iste, maiores molestiae.
          </p>
        </div>
        <div className="intro-image">
          <img src={IntroImage} alt="A picture of Nurudeen Etiko" />
        </div>
        <button>Click to learn more about Nurudeen's Path</button>
      </div>
{/* 
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, backgroundColor: "black", height: "10px" }} />

        <p style={{ margin: "0 10px" }}>Time To Program</p>

        <div style={{ flex: 1, backgroundColor: "black", height: "10px" }} />
      </div> */}
    </>
  );
};
export default Home;
