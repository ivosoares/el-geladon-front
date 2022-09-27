import Modal from 'components/Modal';
import React from 'react'
import './style.css';

const PaletaDetalhesModal = ({paleta, closeModal}) => {
  return (
    <Modal closeModal={closeModal}>
      <div className='PaletaDetalhesModal'>
        <div>
          <h3 className='PaletaDetalhesModal__titulo'>{paleta.titulo}</h3>
          <h4 className='PaletaDetalhesModal__preco'>R$ {Number(paleta.preco).toFixed(2)}</h4>
          <h4 className='PaletaDetalhesModal__descricao'><b>Sabor: </b>{paleta.sabor}</h4>
          {paleta.recheio && <h4 className="PaletaDetalhesModal__descricao"><b>Recheio: </b>{paleta.recheio}</h4>}
          <h4 className='PaletaDetalhesModal__descricao'><b>Descrição: </b>{paleta.descricao}</h4>
        </div>
        <img src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} className="PaletaDetalhesModal__foto"/>
      </div>
    </Modal>
  )
}

export default PaletaDetalhesModal