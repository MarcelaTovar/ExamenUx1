import './App.css';
import './organismos/Barras/Barras'
import Barras from './organismos/Barras/Barras';
import BarraBotones from './molecules/BarraBotones/BarraBotones';

function App() {
  return (
    <div className="App">
      <div class="background-barra">
        <Barras></Barras>
        <BarraBotones></BarraBotones>
      </div>
    </div>
  );
}

export default App;
