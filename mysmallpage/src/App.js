import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar.js';
import Items from './components/leftbar';
import Bodyofthepage from './components/body.js';

function App() {
  return (
    <div className='container-fluid'> 
    <NavBar/> 
      <div className='row mt-3'>
        <Items/>
        <Bodyofthepage />  
      </div>
    </div>
  );
}

export default App;
