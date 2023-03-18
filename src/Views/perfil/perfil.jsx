import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNavbar from "../../Components/NewNavbar";
import "../perfil/perfil.css";
import Perfil1 from "../../Assets/img/perfil.png";
import Footer from "../../Components/Footer";

const Perfil = () => {
  return (
    <>
      <NewNavbar />

      <div className="perfil-container">
        <div className="content-perfil">

            <p>Nombre Usuario:</p>
            <p>Correo:</p>
            <p>Dirección:</p>
            <p>Teléfono:</p>
            <div className="butons">
              <Button className="collection" variant="primary" size="sm">
                Mi Coleccíon
              </Button>{" "}
              <Button  className="historial" variant="primary" size="sm">
                Historial de Compras
              </Button>{" "}

            </div>
        </div>
        <div className="imgperfil-container">
            <img className="perfil-img" src={Perfil1} alt="" />
          </div>
      </div>
      <Footer/>
    </>
  );
};

export default Perfil;
