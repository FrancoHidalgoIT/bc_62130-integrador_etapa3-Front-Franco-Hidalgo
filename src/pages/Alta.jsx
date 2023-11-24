import { useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import './Alta.scss'


const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)

  return (
    <>
    <div className='container-h1-Alta'>
    <h1 className='Alta-H1'>Formulario de alta de productos</h1>
    </div>
     {/*  <h2>Agregar producto</h2> */}
      <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
      <hr />
      <Tabla setProductoAEditar={setProductoAEditar} />
      </>
  )
}


export default Alta