// import { useState } from 'react';
// import heroImg from './assets/hero.png';
// import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import * as d3 from 'd3';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const data = [4, 8, 15, 16, 23, 42];
  console.log('Max:', d3.max(data));

  return (
    <>
      <h1>Welcome to the App</h1>
      <p>Vite + React</p>
    </>
  );
}

export default App;
