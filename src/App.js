import App from './routes';
import './App.css';
import Encabezado from './component/Header';
import PieDePagina from './component/Footer';



function App() {
  return (
    <div className="App">
      <Encabezado/>
      <p>Nada</p>
      <PieDePagina/>
    </div>
  );
}

export default App;
