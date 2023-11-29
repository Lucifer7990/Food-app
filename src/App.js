import './App.css';
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <h1>hello</h1>
        <NavLink to="/about">About</NavLink>
        <br />
        <NavLink to="/products">Products</NavLink>
        <br />
        <NavLink to="/contact">Contact</NavLink>
        <br />
      </div>
  );
}


export default App;
