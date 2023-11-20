import { useContext } from 'react';
import './TablaFila.scss';
import ProductoContext from '../contexts/ProductoContext';
import Swal from 'sweetalert2';

const TablaFila = ({ producto, setProductoAEditar }) => {
  const { eliminarProductoContext } = useContext(ProductoContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Deseas eliminar este producto?',
      text: "En caso de eliminar, no podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id);
        Swal.fire(
          'Eliminado',
          'Tu producto ha sido eliminado correctamente',
          'success'
        );
      }
    });
  }

  const handleUpdate = (producto) => {
    setProductoAEditar(producto);
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button className='table-button-1' onClick={() => handleUpdate(producto)}>Editar</button>
        <button className='table-button-2' onClick={() => handleDelete(producto._id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila;
