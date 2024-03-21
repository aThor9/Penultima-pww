import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Empresa from './components/Empresa/Empresa.js';
import Contatos from './components/Contatos/Contatos.js';
import NavBar from './components/NavBar/NavBar.js';
// import styles from './components/NavBar/NavBar.modules.css';

function App() {
  return (
    <div className= "app">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element= {<NavBar></NavBar>}>4
            <Route index element ={<Home></Home>}></Route>
            <Route path='Empresa' element= {<Empresa></Empresa>}></Route>
            <Route path= 'Contatos' element={<Contatos></Contatos>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
