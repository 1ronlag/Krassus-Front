import React from "react";
import "../home/home.css";
import Footer from "../../Components/Footer";
import home2 from "../../Assets/img/home2.png";
import NewNavbar from "../../Components/NewNavbar";


const Home = () => {
  return (
    <>
      <NewNavbar />
      <div className="homeContainer">
        <div className="principalText">
          <h1>
            <b>Bienvenidos</b>
          </h1>
          <h3>
            Krassus es el mejor complemento para las personas que gustan
            coleccionar <b>suculentas</b>  
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed repudiandae expedita debitis dicta sunt maxime doloribus esse mollitia ipsa, fuga, architecto laborum itaque asperiores ex odit ratione eaque hic natus?
          </h3>
          
        </div>
        <div className="home-img-container">
            <img
              className="home-img"
              src={home2}
              alt="foto de una suculenta en macetero"
            />
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
