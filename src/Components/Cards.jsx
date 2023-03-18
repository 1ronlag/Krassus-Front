import React from "react";
import { useContext } from "react";
import SucuContext from "../Context/Context";
import "../index.css"

const Card = () => {
  const { suculentas, addToCart } = useContext(SucuContext);

  return (
    <>
    <div></div>
      <div className="card-container">
        {suculentas.map((sucu) => (
          <div key={sucu.id} className="col">
            <div className="card">
              <img className="card-img-top" src={sucu.img} alt="" />
              <div className="card-body">
                <h4 className="card-title text-capitalize">{sucu.name}</h4>
                <hr />
                <p className="card-text">
                  <p className="family">Familia: {sucu.Familia} </p>
                  <p className="type">Tipo: {sucu.tipo} </p>
                  <p className="reproduction">Reproduccion: {sucu.Reproduccion} </p>
                  <p className="distribution">Distribucion: {sucu.distribucion} </p>
                </p>
              </div>

              <h2 className="text-center text-dark pb-3">
                Precio: ${sucu.price}
              </h2>

              <div className="d-flex justify-content-around mb-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => addToCart(sucu)}
                >
                  Añadir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
