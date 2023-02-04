import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/ScreenRegister.css";
import pokebolaAbierta from "../../assets/pokebola-abierta.png";

export default function ScreenRegister() {
  return (
    <div className='body_register'>
      <div className="contenedor_register container w-75 bg-primary rounded ">
        <div className="row align-items-stretch">
          <div className="col bg-register d-none d-lg-block col-md ">
          </div>
          <div className="col bg-white">
            <h2 className='fw-bol text-center py-5'>Registrarse</h2>

            <form action="#">
            <div className="mb-4">
                <label className='form-label'>Nombre</label>
                <input className='form-control' />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className='form-label'>Correo electronico</label>
                <input type="email" className='form-control' name='email' />
              </div>
              <div className="mb-4">
              <label htmlFor="password" className='form-label'>Contraseña</label>
                <input type="password" className='form-control' name='password' />
              </div>
              <div className="mb-4">
              <label htmlFor="password" className='form-label'>Confirmar contraseña</label>
                <input type="password" className='form-control' name='password' />
              </div>
              <div className="d-grid">
                <button type='submit' className='btn btn-primary'><img src={pokebolaAbierta} className='pokebola_abierta' alt="" />Registrarme</button>
              </div>
              <div className="abajo_register my-3">
                <span>Ya tenes cuenta? <a href='#'>Iniciar Sesión</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}