import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo' />
        <p>esto es una prueba</p>

        <SegundoComponente/>
        <p>esto es una prueba</p>

       <PrimerComponente/>


      </header>
    </div>
  );
}

export default App;
