import { useContext } from 'react'
import Card from '../components/Card'
import './Inicio.scss'
import ProductoContext from '../contexts/ProductoContext'
import Footer from '../components/Footer'


const Inicio = () => {
  const { productos } = useContext(ProductoContext)
   

  return (
<>
<main>

  <section className="section-cards">
    <header className="section-cards__header">
    
      <h1>Tech Store</h1>
      <p></p>
    </header>

    <div className="cards-container">
      {
        productos && productos.map ((producto, idx) => (
          <Card key={idx} producto={producto} />
        ))
      }
    </div> {/* <!-- .cards-container --> */}

  </section> {/* <!-- .section-cards --> */}
</main> {/* <!-- main --> */}





<script type="module" src="/main.js"></script>

</>
  )
}

export default Inicio