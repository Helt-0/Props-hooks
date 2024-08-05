import { useEffect, useState } from 'react';
import './Task.css'

function Task() {
  
  // Variaveis de estado
  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("Tarefa Pendente");


  // Função de efeito colateral
  useEffect(() => {

    if(finalizada === true){    // === Idêntico => verificar o conteúdo e o tipo da info.

      setTarefa("Tarefa Concluída");

    }

  }, [finalizada])

  function finalizaTarefa(){

    setFinalizada(true)

  }
  
  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: {tarefa}</h3>
        <button onClick={finalizaTarefa}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task