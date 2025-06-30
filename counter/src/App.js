import  { useState } from 'react';
import './App.css';
import Counter from './counter';
function App() {
   const[darkMode, setDarkMode] = useState(false);
  return (

    <div className={darkMode ? 'container dark' : 'container light'}>
      <h1>Click Counter App:</h1>
      <Counter />
      <button className='reset' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default App;
