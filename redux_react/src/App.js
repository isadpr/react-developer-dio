import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import { useSelector, useDispatch } from 'react-redux';
import { salvarApto } from './store/apto/aptoSlice';
//selector: ler o estado
//dispatch: alterar o estado

function App() {
  const aptosSalvos = useSelector(state => state.aptos); //pegar os apartamentos dentro do estado (utilizar lista do redux)
  const dispatch = useDispatch();
  const [aptoSelecionado, editarAptoSelecionado] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Número" onChange={e => editarAptoSelecionado( apto => {
            return {...apto, ...{numero: e.target.value} };
          })} />
        <input type="text" placeholder="Preço" onChange={e => editarAptoSelecionado( apto => {
            return {...apto, ...{preco: e.target.value} };
          })} />
        <button style={{height: 40, width: 100}} onClick={() => dispatch(salvarApto(aptoSelecionado))}>Salvar</button>
        <input type="checkbox" onChange={e => editarAptoSelecionado(apto => {
          return {...apto, ...{temPromocao: e.target.checked}}
        })}></input>
        <div style={{display: 'flex'}}>
          {
            aptosSalvos.map((apto, index) => 
              <Display key={index} apto={apto} />
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
