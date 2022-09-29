import React from 'react'
import './styles.css';
import PaletaLista from '../../components/PaletaLista';
import Navbar from '../../components/Navbar/Navbar';
import AdicionaPaletaModal from 'components/AdicionaPaletaModal';
import { useState } from 'react';

const Home = () => {
  const [canShowAdcionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);

  return (
    <main className="Home">
      <Navbar createPaleta={() => setCanShowAdicionaPaletaModal(true)}/>
      <section className='Home__container'>
        <PaletaLista/>
        {
          canShowAdcionaPaletaModal && (
          <AdicionaPaletaModal 
            closeModal={() => setCanShowAdicionaPaletaModal(false)}
          />)
        }
        
      </section>
    </main>
  )
}

export default Home