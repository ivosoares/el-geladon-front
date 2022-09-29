import Modal from 'components/Modal'
import React from 'react'
import './style.css'
import { useState, useEffect } from 'react';
import { PaletaService } from 'services/PaletaService';

const AdicionaPaletaModal = ({closeModal, onCreatePaleta}) => {
  const form = {
    preco: "",
    sabor: "",
    recheio: "",
    descricao: "",
    foto: ""
  }

  const [formState, setFormState] = useState(form)
  const [canDisable, setCanDisable] = useState(true);

  const handleChange = (e, name) => {
    setFormState({...formState, [name]: e.target.value })
    console.log(formState)
  }

  const canDisableSendButton = () => {
    const response = !Boolean(
      formState.descricao.length &&
      formState.foto.length &&
      formState.sabor.length &&
      formState.preco.length
    )
    setCanDisable(response)
  }

  const createPaleta = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('\\').pop();

    const {sabor, recheio, descricao, preco, foto } = formState;
    
    const titulo = sabor + (recheio && ' com ' + recheio)

    const paleta = {
      sabor: titulo,
      descricao,
      preco,
      foto: `assets/images/${renomeiaCaminhoFoto(foto)}`
    }

    const response = await PaletaService.create(paleta);
    closeModal();
  }

  useEffect(() => {
    canDisableSendButton();
  })
  

  return (
    <Modal closeModal={closeModal}>
      <div className='AdicionaPaletaModal'>
        <form autoComplete='off'>
          <h2>Adicionar ao Cardápio</h2>
          <div>
            <label className='AdionaPaletaModal__text' htmlFor='preco'>Preço:</label>
            <input 
                id='preco'
                type='text'
                placeholder="R$00,00"
                name='preco'
                value={formState.preco}
                onChange={(e) => handleChange(e, 'preco')}
                required
            />
          </div>
          <div>
            <label className='AdionaPaletaModal__text' htmlFor='sabor'>Sabor:</label>
            <input 
                id='sabor'
                type='text'
                placeholder="Chocolate"
                name='sabor'
                value={formState.sabor}
                onChange={(e) => handleChange(e, 'sabor')}
                required
            />
          </div>
          <div>
            <label className='AdionaPaletaModal__text' htmlFor='recheio'>Recheio:</label>
            <input 
                id='recheio'
                type='text'
                placeholder="Banana"
                value={formState.recheio}
                name='recheio'
                onChange={(e) => handleChange(e, 'recheio')}
                required
            />
          </div>
          <div>
            <label className='AdionaPaletaModal__text' htmlFor='descricao'>Descrição:</label>
            <input 
                id='descricao'
                type='text'
                placeholder="Detalhe o produto"
                value={formState.descricao}
                name='descricao'
                onChange={(e) => handleChange(e, 'descricao')}
                required
            />
          </div>
          <div>
            <label className='AdionaPaletaModal__text AdicionaPaletaModal__foto-label' htmlFor='foto'>
              {!formState.foto.length ? 'Selecionar Imagem' : formState.foto}
            </label>
            <input 
                className='AdicionaPaletaModal__foto'
                id='foto'
                type='file'
                accept="image/png, image/gif, image/jpeg, image/jpg"
                value={formState.foto}
                name='foto'
                onChange={(e) => handleChange(e, 'foto')}
                required
            />
          </div>
          <button type='button' className='AdicionaPaletaModal__enviar' 
            disabled={canDisable}
            onClick={createPaleta}
          >
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default AdicionaPaletaModal