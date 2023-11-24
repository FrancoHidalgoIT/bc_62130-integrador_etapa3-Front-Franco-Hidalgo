import { useContext, useEffect, useState } from 'react'
import ProductoContext from '../contexts/ProductoContext'
import { useForm } from '../hooks/useForm'
import './Formulario.scss'
import DragDrop from './DragDrop'

const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  stock: '',
  marca: '',
  categoria: '',
  detalles: '',
  foto: '',
  envio: false,
}

const Formulario = ({ productoAEditar, setProductoAEditar}) => {
  const [form, setForm, handleChange] = useForm(formInicial)
  const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar, setProductoAEditar])


  const handleSubmit = async (e) => {
    e.preventDefault() // Detener el comportamiento del formulario
    try {
      if ( form.id === null ) {
        await crearProductoContext(form)
      } else {
        await actualizarProductoContext(form)
      }
      handleReset()
    } catch (error) {
      console.error('Ocurrió un error en el handleSubmit', error)  
    }
  }

  const handleReset = ()  => {
    setForm(formInicial)
    setProductoAEditar(null)
  }

  return (
    <div className='container_form-Alta'>
     {  <h3 style={{color: 'red'}}>{productoAEditar ? 'Editando' : 'Agregando'}</h3> }

      <form onSubmit={handleSubmit} className='form-Alta'>
        <div className='form-Alta_container'>
          <label className='form-Alta_Label' htmlFor="lbl-nombre">Nombre</label>
          <input className="form-Alta_Input" type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label className='form-Alta_Label' htmlFor="lbl-precio">Precio</label>
          <input className="form-Alta_Input" type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
        </div>
        <div>
          <label className='form-Alta_Label' htmlFor="lbl-stock">Stock</label>
          <input className="form-Alta_Input" type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
        </div>
        <div>
          <label className='form-Alta_Label' htmlFor="lbl-marca">Marca</label>
          <input className="form-Alta_Input" type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
        </div>
        <div>
          <label className='form-Alta_Label' htmlFor="lbl-categoria">Categoría</label>
          <input className="form-Alta_Input" type="text" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
        </div>
        <div>
          <label className='form-Alta_Label' htmlFor="lbl-detalles">Detalles</label>
          <input className="form-Alta_Input" type="text" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
        </div>
       {/*  <div>
          <label className='form-Alta_Label' htmlFor="lbl-foto">Foto</label>
          <input className="form-Alta_Input" type="text" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange} />
        </div> */}
        <DragDrop />
        <div>
          <label className='form-Alta_Label' htmlFor="lbl-envio">Envío</label>
          <input className="form-Alta_Input" type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
        </div>

        <button type="submit">Guardar</button>
        <button type="reset" onClick={handleReset}>Limpiar</button>
      </form>
    </div>
  )
}

export default Formulario