import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../register/register.css";
// import { useForm } from "../../Hook/UseForm";
import { Link } from "react-router-dom";
import axios from "axios";
  import { toast } from "react-toastify";


const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/users', {
        nombre,
        email,
        password,
        telefono,
        direccion,
      });
      if (res && res.data.success) {
       toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
       toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-content">
        <section>
          <div class="form-box">
            <div class="form-value">
              <form onSubmit={handleSubmit}>
                <h2>Registrate</h2>
                <div class="inputbox">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}
                  <input
                    type="name"
                    name="name"
                    id="name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    autoComplete="off"
                  />
                  <label for="name">Nombre</label>
                </div>

                <div class="inputbox">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                  />
                  <label for="email">Email</label>
                </div>

                <div class="inputbox">
                  {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="off"
                  />
                  <label for="password">Password</label>
                </div>

                <div class="inputbox">
                  {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                  <input
                    type="number"
                    name="telefono"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    autoComplete="off"
                  />
                  <label for="telefono">telefono</label>
                </div>

                <div class="inputbox">
                  {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                  <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                    autoComplete="off"
                  />
                  <label for="direccion">direccion</label>
                </div>

                <button type="submit">Registrate</button>
                <div className="link3">
                  <Link className="to" to="/">
                    Volver al inicio
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
