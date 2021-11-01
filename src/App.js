/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
var sudoku = require('./sudoku-js/sudoku.js');
var puzzle = sudoku.generate("easy");
var solvedPuzzle = sudoku.solve(puzzle);

solvedPuzzle = sudoku.solve(puzzle);

console.log(puzzle);
console.log(solvedPuzzle);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
