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
        <button>Nurudeen's Path</button>
      </div>
    </>
  );
};
export default Home;
