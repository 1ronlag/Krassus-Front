import React from "react";
import Card from "../../Components/Cards";
import NewNavbar from "../../Components/NewNavbar";
import "../store/store.css"


const Store = () => {
  return (
    <>
      <NewNavbar />
      <div className="store-container">
        <div className="store-content">

<div  className="store-title"><h1>
    Tienda
    </h1></div>
<Card/>


        </div>
      </div>
    </>
  );
};

export default Store;
