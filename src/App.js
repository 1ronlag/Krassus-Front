import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/home/home";
import Login from "./Views/login/login";
import History from "./Views/history/history";
import Care from "./Views/care/care";
import Register from "./Views/register/register";
import Contact from "./Views/contact/contact";
import Perfil from "./Views/perfil/perfil";
import Store from "./Views/store/store";
import NotFound from "./Views/Notfound/NotFound";
import { SucuProvider } from "./Context/Context";
import Carrito from "./Views/cart/cart";
import { PrivateRoute } from "./Routes/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <SucuProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Historia" element={<History />} />
            <Route path="/Cuidados" element={<Care />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Tienda" element={<Store />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route
              path="/Perfil"
              element={
                <PrivateRoute>
                  <Perfil />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SucuProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
