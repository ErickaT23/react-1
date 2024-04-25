import logo from './gatito.png';
import fondo from './background-design-with-abstract-pattern-red_1308-38130.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${fondo})` }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        ¡列出最佳项目! 
        </p>
        <a
          className="App-link"
          href="https://platzi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos juntos en Platzi
        </a>
      </header>
    </div>
  );
}

export default App;
