import React, {useState, useEffect, useMemo} from 'react';

function App(){

  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  function adicionarTarefa(){
    setTarefas([...tarefas, input])
    setInput("");
  }

  return(
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ) )}
      </ul>

      <strong>Voce tem {totalTarefas}</strong>
      <br/>

      <input type='text' value={input} onChange={e => setInput(e.target.value)}></input>
      <button type='button' onClick={adicionarTarefa}>Adicionar</button>
    </div>
  )
}

export default App;