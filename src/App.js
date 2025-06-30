import { useState } from 'react';
import './App.css';
import Counter from './counter';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName]=useState("");
  return (
    <div className={darkMode ? 'container dark' : 'container light'}>
      
      <button
        className={showContent ? 'off-btn' : 'on-btn'}
        onClick={() => setShowContent(!showContent)}
      >
        {showContent ? "Don't Show Text" : "Show Text"}
      </button>

      {showContent && (
        <>
          <h1>Click Counter App:</h1>
          <input 
          type="text"
          placeholder='enter your name'
          value={name}
          onChange={(e)=>setName(e.target.value)}/>
          <p>Hello,{name? name:"User"}</p>
          
          <Counter />
          
          <button className="reset" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
