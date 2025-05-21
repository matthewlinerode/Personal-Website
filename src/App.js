import logo from './logo.svg';
import './App.css';

function handleClick() {
  alert("Button clicked!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <button onClick={handleClick}>Click Here!</button>
      </header>
    </div>
  );
}

export default App;
