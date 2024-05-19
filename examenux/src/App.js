import './App.css';
import Barras from './templates/Barras/Barras';
import Shorts from './atoms/Shorts/Shorts';

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
