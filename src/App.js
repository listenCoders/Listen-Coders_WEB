import logo from './logo.svg';
import './App.css';
import Home from './Componant/Home/Home'
import Favicon from 'react-favicon'
import fIcon from './Image/lc logo.png'

function App() {
  return (
    <div className="App">
      <Favicon url={fIcon} />
      <Home></Home>
    </div>
  );
}

export default App;
