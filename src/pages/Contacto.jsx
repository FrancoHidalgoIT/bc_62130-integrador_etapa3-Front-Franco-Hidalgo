import React from 'react'
import "./Contacto.scss";

const Contacto = () => {

  return (
  <>
    <body className='contacto-Body'>
      <div className="container-contacto-h1">
      <h1 className='contacto-h1'>Contacto</h1>    
      </div>

      <div className='container-form-contacto'>
        <form className='contacto-Form' action="procesar_formulario.php" method="post"/>
            <label className='contacto-label' htmlForfor="nombre">Nombre</label>
            <input className='contacto-input' type="text" id="nombre" name="nombre" required /><br/><br/>

            <label className='contacto-label' htmlForfor="apellido">Apellido</label>
            <input className='contacto-input' type="text" id="apellido" name="apellido" required /><br/><br/>

            <label className='contacto-label' htmlForfor="email">Email</label>
            <input className='contacto-input' type="email" id="email" name="email" required /><br/><br/>

            <label className='contacto-label' htmlForfor="telefono">Número de Teléfono</label>
            <input className='contacto-input' type="tel" id="telefono" name="telefono" /><br/><br/>

            <label className='contacto-label' htmlForfor="mensaje">Mensaje</label>
            <textarea className='contacto-input' id="mensaje" name="mensaje" rows="8" required/><br/>

            <input className='contacto-input' type="submit" value="Enviar"/>
        <form/>
      </div>

    </body>
  </>

  )
}

export default Contacto 