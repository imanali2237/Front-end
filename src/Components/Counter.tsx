import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(prevCount=>prevCount+1);
    }
     const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

    return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>React Counter Component</h2>
      
      {/* Display the current count value */}
      <div style={{ fontSize: '48px', margin: '20px 0' }}>{count}</div>
      
      {/* Interactive buttons */}
      <div>
        <button onClick={decrement} style={buttonStyle}>- Decrease</button>
        <button onClick={reset} style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>Reset</button>
        <button onClick={increment} style={{ ...buttonStyle, backgroundColor: '#28a745' }}>Increase +</button>
      </div>
    </div>
  );

}
// Simple inline styling for buttons
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  margin: '0 5px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px'
};
export default Counter;