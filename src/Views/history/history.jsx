import React from "react";
import "../history/history.css";
import Footer from "../../Components/Footer";
import Sucu2 from "../../Assets/img/sucu2.png"
import NewNavbar from "../../Components/NewNavbar";



const History = () => {
  return (
    <>
      <NewNavbar />

      <div className="history-container">
        <div className="history-content">

          <h1 className="history-title">Historia</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam
            doloremque exercitationem eligendi possimus cumque beatae
            praesentium perferendis nam deserunt saepe quaerat reiciendis
            voluptate delectus nemo culpa omnis, dicta ipsa. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Numquam explicabo rerum
            cupiditate, quod fugit non quas ab aspernatur perferendis distinctio
            aliquam nam libero expedita provident eaque repellat unde quia.
            Quibusdam.
          </p>
        </div>

        <div className="history-img-container">
<img  className="history-img" src={Sucu2} alt="foto de una suculenta en macetero" />

        </div>


      </div>
      <Footer/>
    </>
  );
};

export default History;
