import logo from './logo.svg';
import './App.css';
import Camara from './componentes/Camara';
import Contador from './componentes/Contador';
import Calculadora from './componentes/Calculadora';

function App() {
  return (
    <div className="container text-center">
            <br />
            <div className="row">
                <div class="col">
                    <div className="card border-danger mb-3" style={{ width: '18rem' }}>
                        <div className="card-body">
                          <Calculadora/>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card border-info mb-3" style={{ width: '18rem', height:'16rem' }}>
                        <div className="card-body">
                          <Camara/>
                      </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-info mb-3" style={{ width: '18rem' }}>
                        <div className="card-body">
                          <Contador/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
