import { useContext } from "react";
import "./Carrito.scss";
import CarritoContext from "../contexts/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleEliminar = (id) => {
    //console.log(id)
    eliminarCarritoContext(id)
  }

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    return sumaTotal
  }

  const handleComprar = () => {
    guardarCarritoContext()
  }

  return (
    <>
      <h1 className="title-carrito-h1">Listado de productos en el carrrito</h1>
  
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th className="th-producto">Foto</th>
            <th className="th-producto">Nombre</th>
            <th className="th-producto">Cantidad</th>
            <th className="th-producto">Precio</th>
            <th className="th-producto">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            carrito.length <= 0 ? (
              <tr>
                <td colSpan={5} style={{textAlign: 'center'}}><strong>No hay productos</strong></td>
              </tr>
            ) : (
              carrito.map((producto, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={producto.foto} alt={producto.nombre} width="50px" />
                  </td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>
                    <button onClick={() => handleEliminar(producto.id)} type="button" className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))
            )
          }
          <tr>
            <td className="td-total" colSpan={3}><p>Total</p></td>
            <td><p>${parseFloat(calcularTotal()).toFixed(2)}</p></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div>
     
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
      { !carrito.length <= 0 && <button className="btn btn-primary" type="button" onClick={handleComprar}>Comprar</button>}
      </div>
    </>
  );
};

export default Carrito;
