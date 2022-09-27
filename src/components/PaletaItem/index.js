import React from 'react';
import './style.css';

const PaletaItem = ({ paleta, quantidadeSelecionada, index, onRemove, onAdd, clickItem }) => {
  const badgeCounter = (canRender, index) => {
    return Boolean(canRender) && (<span className="PaletaListaItem__badge">
      {quantidadeSelecionada}
    </span>);
  }

  const removeButton = (canRender, index) => {
    return Boolean(canRender) && (<button className="Acoes__remover" onClick={(e) => {e.stopPropagation(); onRemove(index)}}>remover</button>)
  }
  
  return (
    <div className="PaletaListaItem" onClick={() => clickItem(paleta.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <h2 className="PaletaListaItem__titulo">{paleta.titulo}</h2>
        <p className="PaletaListaItem__preco">R${paleta.preco}</p>
        <p className="PaletaListaItem__descricao">{paleta.descricao}</p>
        <div className="PaletaListaItem__acoes Acoes">
          <button className={`Acoes__adicionar ${!quantidadeSelecionada ? "Acoes__adicionar--preencher" : ""}`}
            onClick={(e) => {e.stopPropagation(); onAdd(index)}}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img src={paleta.foto} className="PaletaListaItem__foto" alt={`Paleta de ${paleta.sabor}`} />
    </div>
  )
}

export default PaletaItem