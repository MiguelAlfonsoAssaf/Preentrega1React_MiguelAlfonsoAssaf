//import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import './components/NavBar/Navbaritems.css';

function App() {

  return (
    <div className="App">
      <h1 className=' text-danger'> Hola Mundo</h1>
      <Navbar  items={['Home','Productos']} navbarlogo={"ZapateriaPATA"} />
      {/* <Navbar newclassname={"navbar navbar-expand-lg navbar-light bg-success"} navbarlogo={"CODER HOUSE"} /> */}
    </div>
  );
}

export default App;
