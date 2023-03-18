import React from "react";
import "../contact/contact.css";
import Footer from "../../Components/Footer";
import NewNavbar from "../../Components/NewNavbar";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <NewNavbar />
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Contacto</h1>

          <div className="form-content">
            <form>
              <label>
                <p className="form-title">Nombre</p>
                <input
                  type="text"
                  className="form1"
                  name="name"
                  placeholder="Nombre Completo"
                />
              </label>
            </form>

            <form>
              <label>
                <p className="form-title">Telefono</p>
                <input
                  className="form1"
                  type="text"
                  name="name"
                  placeholder="Ejemplo: +56 9 xxxxxxxx"
                />
              </label>
            </form>

            <form>
              <label>
                <p className="form-title">Email</p>
                <input
                  className="form1"
                  type="text"
                  name="name"
                  placeholder="ejemplo@email.com"
                />
              </label>
            </form>
          </div>
          <p></p>
          <div className="messaje">
            <p className="messaje-text">Mensaje</p>
          </div>
          <Button className="send">Enviar</Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
