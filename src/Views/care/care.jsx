import React from "react";
import "../care/care.css";
import Footer from "../../Components/Footer";
import Sucu1 from "../../Assets/img/sucu1.png"
import NewNavbar from "../../Components/NewNavbar";



const Care = () => {
  return (
    <>
      <NewNavbar />

      <div className="care-container">
        <div className="care-content">

          <h1 className="care-title">Cuidados</h1>
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

        <div className="care-img-container">
<img  className="care-img" src={Sucu1} alt="foto de una suculenta en macetero" />

        </div>


      </div>
      <Footer/>
    </>
  );
};

export default Care;
