import React, { useState, useEffect } from "react";
import PaletaItem from "../PaletaItem";
import { PaletaService } from "services/PaletaService";
import './styles.css';
import PaletaDetalhesModal from "components/PaletaDetalhesModal";

const PaletaLista = () => {
  const [paletasList, setPaletasList] = useState([]);
  const [paletaSlecionada, setPaletaSelecionada] = useState({})
  const [paletaModal, setPaletaModal] = useState(false);

  const adicionarItem = (paletaIndex) => {
    // se receber o indice adiciona o span no html.
    const paleta = {
      [paletaIndex]: Number(paletaSlecionada[paletaIndex] || 0) + 1
    }
    // faco uma copia do estado atual e adiciono o novo objeto apos o click do botao
    setPaletaSelecionada({...paletaSlecionada, ...paleta})
    console.log(paletaSlecionada);
  }

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSlecionada[paletaIndex] || 0) - 1
    }
    setPaletaSelecionada({...paletaSlecionada, ...paleta})
  }
  
  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletasList(response)
  }

  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId)
    setPaletaModal(response);
  }

  useEffect(() => {
    getLista();
  }, [])

  return (
    <div className="PaletaLista">
      {
        paletasList.map((paleta, index) => (
          <PaletaItem key={`PaletaItem-${index}`}
            paleta={paleta}
            quantidadeSelecionada={paletaSlecionada[index]}
            index={index}
            onRemove={index => removerItem(index)}
            onAdd={index => adicionarItem(index)}
            clickItem={(paletaId) => getPaletaById(paletaId)}
          />
          ))
        }
        {paletaModal && <PaletaDetalhesModal paleta={paletaModal} 
        closeModal={()=> setPaletaModal(false)} />}
    </div>
  );
};

export default PaletaLista;
