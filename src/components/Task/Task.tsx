import { useEffect, useState } from 'react';
import './Task.css'

function Task() {

  // Variaveis de estado
  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("");

  const [incompleta, setIncompleta] = useState<boolean>(false);


  // Função de efeito colateral
  useEffect(() => {

    if (finalizada === true) {    // === Idêntico => verificar o conteúdo e o tipo da info.

      setTarefa("Tarefa Concluída");

    }

    else if (finalizada === false && incompleta === false) { setTarefa("Tarefa Pendente") }

  }, [finalizada])

  useEffect(() => {

    if (incompleta === true && finalizada === false) {

      setTarefa("Tarefa Incompleta")
    }

    else if (incompleta === false && finalizada === true) {

      setTarefa("Tarefa Concluída")

    }

    else if (incompleta === false  && finalizada === false) { 
      
      setTarefa("Tarefa Pendente") 
    
    }

  }, [incompleta])


  function finalizaTarefa() {

    setFinalizada(true)
    setIncompleta(false)

  }

  function tarefaIncompleta() {

    setIncompleta(true)
    setFinalizada(false)

  }

function tarefaPendente(){

  setIncompleta(false)
  setFinalizada(false)

}

  return (
    <div className="container">
      <h1>Tarefa</h1>
      <h3>Status da Tarefa: {tarefa}</h3>
      <button onClick={finalizaTarefa}>Concluir a Tarefa</button>
      <button onClick={tarefaIncompleta}>Tarefa Incompleta</button>
      <button onClick={tarefaPendente}>Tarefa Pendente</button>
    </div>
  )
}

export default Task