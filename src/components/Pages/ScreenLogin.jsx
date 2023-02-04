import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/ScreenLogin.css";
import pokebola from "../../assets/pokebola.png";

export default function ScreenLogin() {
  return (
    <div className='body_login'>
      <div className="contenedor_login container w-75 bg-primary rounded ">
        <div className="row align-items-stretch">
          <div className="col bg-login d-none d-lg-block col-md ">
          </div>
          <div className="col bg-white">
            <h2 className='fw-bol text-center py-5'>Iniciar Sesión</h2>

            <form action="#">
              <div className="mb-4">
                <label htmlFor="email" className='form-label'>Correo electronico</label>
                <input type="email" className='form-control' name='email' />
              </div>
              <div className="mb-4">
              <label htmlFor="password" className='form-label'>Contraseña</label>
                <input type="password" className='form-control' name='password' />
              </div>
              <div className="d-grid">
                <button type='submit' className='btn btn-primary'><img src={pokebola} className='pokebola' alt="" />Iniciar sesion</button>
              </div>
              <div className="abajo-login my-3">
                <span>No tenes cuenta? <a href='#'>Registrarme</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}