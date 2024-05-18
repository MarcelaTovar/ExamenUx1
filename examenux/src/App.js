import './App.css';
import './organismos/Barras/Barras'
import Barras from './organismos/Barras/Barras';
import BarraBotones from './molecules/BarraBotones/BarraBotones';

function App() {
  return (
    <div className="App">
            <div className="background-barra">
                <div className="top-bar">
                    <div className="navSearchBar">
                        <Barras />
                    </div>
                    
                </div>
            </div>
        </div>
  );
}

export default App;
