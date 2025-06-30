
import  { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn' onClick={() => setCount(count - 1)}>Decrement</button>
            <button className='reset' onClick={() => setCount(0)}>Reset</button>

        </div>
    );
    
}

export default Counter
//useState hook-hook
//addstate-data that changes over time
//class-stateful component,functional -statless component
//useState is a hook that allows you to add state to a functional component
//hooks -are special functions that let us hook into react features
