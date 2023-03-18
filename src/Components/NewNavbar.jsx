import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import SucuContext from "../Context/Context";

const NewNavbar = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  const { carrito } = useContext(SucuContext);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

  return (
    <>
      <Navbar className="d-flex flex-row" bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav>
            <Navbar.Brand>
              <h1 className="brand">K R A S U S</h1>{" "}
            </Navbar.Brand>
            {state?.logged ? (
              <div className="">
                <Nav className="me-auto">
                  <Nav.Link className={setActiveClass} end to="/Perfil">
                    <p className="nav-home mx-4 text-decoration-none">Perfil</p>
                  </Nav.Link>
             
                <Nav.Link className={setActiveClass} end to="/">
                  <span className="username">
                    {" "}
                    <p> Hola, {state?.name}</p>{" "}
                  </span>
                  </Nav.Link>
                  <Nav.Link className={setActiveClass} end to="/">
                  <button className="btn-logout" onClick={onLogout}>
                    Cerrar sesión
                  </button>
                  </Nav.Link>
                  </Nav>
              </div>
            ) : (
              <div className="">
                <Nav className="me-auto">
                  <NavLink className={setActiveClass} end to="/">
                    <p className="nav-home mx-4 text-decoration-none">Inicio</p>{" "}
                  </NavLink>
                  <NavLink className={setActiveClass} end to="/Historia">
                    <p className="nav-home mx-4 text-decoration-none">
                      Historia
                    </p>
                  </NavLink>
                  <NavLink className={setActiveClass} end to="/Cuidados">
                    <p className="nav-home mx-4 text-decoration-none">
                      Cuidados
                    </p>
                  </NavLink>
                  <NavLink className={setActiveClass} end to="/Tienda">
                    <p className="nav-home mx-4 text-decoration-none">Tienda</p>
                  </NavLink>
                  <NavLink className={setActiveClass} end to="/Contacto">
                    <p className="nav-home mx-4 text-decoration-none">
                      Contacto
                    </p>
                  </NavLink>

                  <NavLink className={setActiveClass} to="/Carrito">
                    <p className="nav-carrito">Carrito</p>
                  </NavLink>
                  <Container>
                    {" "}
                    <p className="Total"> Total: ${total}</p>{" "}
                  </Container>
                  <NavLink className={setActiveClass} end to="/Login">
                    <p className="nav-home mx-4 text-decoration-none">Login</p>
                  </NavLink>
                  <NavLink className={setActiveClass} end to="/Register">
                    <p className="nav-home mx-4 text-decoration-none">
                      Register
                    </p>
                  </NavLink>
                </Nav>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NewNavbar;
