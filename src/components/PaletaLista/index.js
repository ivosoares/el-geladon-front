import React, { useState } from "react";
import PaletaImg from "../../assets/images/banana-com-nutella.png";
import { paletas } from "../../mocks/paletas";
import './styles.css';

const PaletaLista = () => {
  const [paletasList, setPaletasList] = useState(paletas);
  const [paletaSlecionada, setPaletaSelecionada] = useState({})

  const adicionarItem = (paletaIndex) => {
    // se receber o indice adiciona o span no html.
    const paleta = {
      [paletaIndex]: Number(paletaSlecionada[paletaIndex] || 0) + 1
    }
    // faco uma copia do estado atual e adiciono o novo objeto apos o click do botao
    setPaletaSelecionada({...paletaSlecionada, ...paleta})
    console.log(paletaSlecionada);
  }
  
  const badgeCounter = (canRender, index) => {
    return Boolean(canRender) && (<span className="PaletaListaItem__badge">{paletaSlecionada[index]}</span>);
  }

  return (
    <div className="PaletaLista">
      {
        paletasList.map((paleta, index) => (
          <div className="PaletaListaItem" key={index}>
            {badgeCounter(paletaSlecionada[index], index)}
            <div>
              <h2 className="PaletaListaItem__titulo">{paleta.titulo}</h2>
              <p className="PaletaListaItem__preco">R${paleta.preco}</p>
              <p className="PaletaListaItem__descricao">{paleta.descricao}</p>
              <div className="PaletaListaItem__acoes Acoes">
                <button className="Acoes__adicionar Acoes__adicionar--preencher"
                  onClick={() => adicionarItem(index)}
                >
                  adicionar
                </button>
              </div>
            </div>
            <img src={paleta.foto} className="PaletaListaItem__foto" alt={`Paleta de ${paleta.sabor}`} />
          </div>
        ))
      }
    </div>
  );
};

export default PaletaLista;
