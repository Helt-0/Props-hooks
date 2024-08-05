import Card from "./components/Card/Card";
import Contador from "./components/Contador/Contador";
import Task from "./components/Task/Task";

function App() {
  return (
    <>

    <Card descricao="biblioteca do JS" titulo="React"/>
    <Card titulo="Spring" descricao="Framework de Java" />
    <Contador/>
    <Task />

    </>

  )
};

export default App
