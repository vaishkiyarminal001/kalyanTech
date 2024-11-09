import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Pages/Home';
import { About } from './Component/Pages/About';
import { Navbar } from './Component/Navbar/Navbar';
import { Allrout } from './Component/Allrouts/Allrout';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Allrout/>
    
    </div>
  );
}

export default App;
