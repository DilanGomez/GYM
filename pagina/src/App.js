import './App.css';
import Form from './components/Form';
import RegistroU from './components/RegistroU';
import Olvidar from './components/Olvidar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Inicio from './components/Inicio';
import InfoGym from './components/InfoGym';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/registro' element={<RegistroU/>}/>
        <Route path='/' element={<Form/>}/>
        <Route path='/Olvidaste' element={<Olvidar/>}/>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/Info' element={<InfoGym/>}/>

      </Routes>
    </Router>
  );
}

export default App;
