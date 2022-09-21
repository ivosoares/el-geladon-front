import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import './assets/styles/main.css';

// seleciona o elemento no DOM com o id root no DOM e inicializa o react.
const root = ReactDOM.createRoot(document.getElementById('root'));
//renderiza o componente do react dentro da div (root)
root.render(
  // primeiro componente (garante o strict mode do react)
  // <React.StrictMode>
  <>
    {/* Importo o componente Home (principal) */}
    <Home/>
  </>
  // </React.StrictMode>
);