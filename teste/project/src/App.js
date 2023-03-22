import './App.css';
import HelloWorld from './components/helloworld.js';
import Pessoa from './components/Pessoa.js';
import Lorem  from './components/lorem';
import List from './components/List';

function App() {
  return (
    <div className="App">
    <p>Olá</p>
    <HelloWorld/>
    <Pessoa nome= "Kauan" idade = "19" profissao = "Programador"/>
    <Lorem/>

    <List/>
    </div>
    
  );
}

export default App;