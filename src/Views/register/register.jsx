import React from "react";
import "../register/register.css";
import { useForm } from "../../Hook/UseForm";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onRegister = (e) => {
    e.preventDefault();

    navigate("/Perfil", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };

  return (
    <>
      <div className="login-content">
        <section>
          <div class="form-box">
            <div class="form-value">
              <form onSubmit={onRegister}>
                <h2>Registrate</h2>
                <div class="inputbox">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}
                  <input
                    type="name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onInputChange}
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

                    onChange={onInputChange}
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
                    onChange={onInputChange}
                    required
                    autoComplete="off"
                  />
                  <label for="password">Password</label>
                </div>

                <button>Registrate</button>
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
