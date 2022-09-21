import React from 'react'
import './styles.css';
import PaletaLista from '../../components/PaletaLista';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <main className="Home">
      <Navbar/>
      <section className='Home__container'>
        <PaletaLista/>
      </section>
    </main>
  )
}

export default Home