import React from 'react';
import './style.css';

const PaletaItem = ({ paleta, quantidadeSelecionada, index, onRemove, onAdd }) => {
  const badgeCounter = (canRender, index) => {
    return Boolean(canRender) && (<span className="PaletaListaItem__badge">
      {quantidadeSelecionada}
    </span>);
  }

  const removeButton = (canRender, index) => {
    return Boolean(canRender) && (<button className="Acoes__remover" onClick={() => onRemove(index)}>remover</button>)
  }
  
  return (
    <div className="PaletaListaItem" key={index}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <h2 className="PaletaListaItem__titulo">{paleta.titulo}</h2>
        <p className="PaletaListaItem__preco">R${paleta.preco}</p>
        <p className="PaletaListaItem__descricao">{paleta.descricao}</p>
        <div className="PaletaListaItem__acoes Acoes">
          <button className={`Acoes__adicionar ${!quantidadeSelecionada ? "Acoes__adicionar--preencher" : ""}`}
            onClick={() => onAdd(index)}
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