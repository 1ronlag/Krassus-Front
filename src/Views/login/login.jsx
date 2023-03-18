import React from "react";
import "../login/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../Hook/UseForm";

const Login = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = (e) => {
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
              <form onSubmit={onLogin}>
                <h2>Login</h2>
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
                <div class="forget">
                  <label for="">
                    <input type="checkbox" />
                    Recuerdame{" "}
                    <a
                      href="https://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ¿Olvidaste tú password?
                    </a>
                  </label>
                </div>
                <button>Log in</button>
                <div class="register">
                  <p>Si no posees cuenta, </p>
                  <Link className="link1" to="/Register">
                    Registrate
                  </Link>
                  <div>
                    <Link className="link2" to="/">
                      Volver al inicio
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
