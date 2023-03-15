import './App.css';
import HelloWorld from './components/HelloWorld.js'

function App() {
  const name = 'kauan'

  return (
    <div className="App">
    <p>Olá {name}</p>
    <HelloWorld/>
    </div>
    
  );
}

export default App;