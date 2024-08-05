import { useState } from 'react';
import './Contador.css'

function Contador() {
  
// variável:
//  let valor: number = 0;

// Variável de Estado:
const [valor, setValor] = useState(0);

  function somarMaisUm(){

    setValor(valor+1);

  }

  function subtrairMaisUm(){

    setValor(valor-1);

  }
 
  console.log(valor);

  return (
    <div className="container">
        <p>O valor é: {valor}</p>
        <button onClick={somarMaisUm}>Somar 1</button>
        <button onClick={subtrairMaisUm}>Subtrair 1</button>
    </div>
  )
}

export default Contador