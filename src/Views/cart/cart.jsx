import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import SucuContext from '../../Context/Context';
import "../cart/cart.css"
import NewNavbar from '../../Components/NewNavbar';

const Carrito = () => {
  const { carrito, increment, decrement } = useContext(SucuContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <>
    <NewNavbar/>
    <div className='cart-content'>
<Container className="pt-4">
      <div className="carrito p-5">
        <div className="detalles bg-light w-75 m-auto p-5">
          <h5>Detalles del pedido:</h5>
          <div className="p3 bg-white">
            {carrito.map((producto, i) => (
              <div key={i} className="d-flex justify-content-between py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={producto.img} width="50" alt="" />
                  <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <h6 className="mb-0 p-2 text-success">
                    ${producto.price * producto.count}
                  </h6>
                  <button
                    className="btn btn-secondary"
                    onClick={() => decrement(i)}
                  >
                    -
                  </button>
                  <b className="mx-2">{producto.count}</b>
                  <button
                    className="btn btn-secondary"
                    onClick={() => increment(i)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <h2 className="my-4">Total: ${total}</h2>
            <button className="btn btn-success">Ir a Pagar</button>
          </div>
        </div>
      </div>
      </Container>
      </div>
    </>
  );
};

export default Carrito;
