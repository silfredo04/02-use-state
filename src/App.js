import logo from './logo.svg';
import './App.css';
import {MiPrimerEstado} from './Components/MiPrimerEstado';
import {ComponenteTaller} from './Components/ComponenteTaller';

function App() {
  const fecha = new Date();
  const anoActual = fecha.getFullYear();
  console.log(anoActual); //2022
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en React - Hook useState</h1>
        <p>
          <MiPrimerEstado/>
        </p>
        <p>
          <ComponenteTaller
            anoActual={anoActual}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
