import './App.css';
import Mensaje from './Mensaje.js'

function App() {
  return (
    <div className="App">
      <Mensaje  color="green" message="Estamos trabajando"/>
      <Mensaje  color="red" message="para ser mejores"/>
    </div>
  );
}

export default App;
