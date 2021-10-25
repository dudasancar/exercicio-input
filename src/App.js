import react, { useEffect, useState } from "react";

function App() {
    const [input, setInput] = useState('');
    const [lista, setLista] = useState(['']);
    const [inputEditar, setInputEditar] = useState('')
    const [aparecer, setAparecer] = useState(false);

    function Aparecer (item) {
      aparecer ? setAparecer(false) : setAparecer(true);
      setInputEditar(item);
    };
  
    function handleChangeInput(event) {
      setInput(event.target.value)
    }

    function handleChangeInputEditar(event) {
      setInputEditar(event.target.value)
    }

    function salvarItem() {
    const aux = [...lista];
    aux.push(input);
    setLista(aux);
  }

  function deletarItem(index) {
    const aux = [...lista];
    aux.splice(index, 1);
    setLista(aux);
  }

  function salvarItemEditar(index) {
    const aux = [...lista];
    aux[index] = inputEditar;
    setLista(aux);
    setAparecer(!aparecer)
  }


  return (
    <div className="App">
      <input type="text" value={input} onChange={handleChangeInput} />
      <button onClick={salvarItem}>salvar</button>
      <ul id="lista">
      {lista.map((item, index) => (
        <li>
          
          {aparecer ? (
            <input value={inputEditar} onChange={handleChangeInputEditar} />)
            : item
          }
          
          <button onClick={() => salvarItemEditar(index)}>salvar</button>
          <button onClick={() => Aparecer(item)}>editar</button>
          <button onClick={() => deletarItem(index)}>excluir</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
