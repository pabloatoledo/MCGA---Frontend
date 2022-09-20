import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='Formulary'>
      <form action="#">
        <label for="user">Usuario: </label>
        <input type="text" id="user" placeholder="Tu usuario" required></input>
        <label for="pass">Contraseña: </label>
        <input type="password" id="pass" placeholder="Tu contraseña" required></input>
        <button id="send">Enviar</button>
      </form>
    </div>
  );
}

export default App;
