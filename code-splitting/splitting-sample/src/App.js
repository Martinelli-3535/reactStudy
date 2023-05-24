import logo from './logo.svg';
import notify from './notify';
import './App.css';

function App() {

  const onClick = () => {
    notify();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
