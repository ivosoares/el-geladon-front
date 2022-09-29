import React from 'react'
import './Navbar.css';
import LogoImg from '../../assets/logo.svg'
import SacolaImg from '../../assets/icons/sacola.svg'
import paletaImg from '../../assets/icons/paleta.svg'

const Navbar = ({createPaleta}) => {
  return (
    <header className="Home__header Header">
      <div className="row">
        <div className='Header_logo Logo'>
          <img src={LogoImg} width="70px" alt='Logo El Geladon' className='Logo__icone'/>
          <h1 className="Logo__titulo">El Geladon</h1>
        </div>
        <div className='Header__opcoes Opcoes'>
          <button type='button' className='Opcoes__paleta Paleta' onClick={() => createPaleta()}>
            <img src={paletaImg} alt='Logo Adicionar Paleta' width="40px" className='Paleta__icone'/>
          </button>
          <div className='Opcoes_sacola Sacola'>
            <img src={SacolaImg} width="40px" alt="Sacola de compras" className='Sacola__icone'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar