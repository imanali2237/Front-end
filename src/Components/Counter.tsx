import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
    const increment=()=>{
      if(count===19){
        return
      }
       setCount(count+1)
    }
     const decrement = () => {
       if(count===0){
        return
      }
    setCount(count-1);
  };

  const reset = () => {
    setCount(0);
  };

    return (
      

      <div>
        <button onClick={decrement}>  Decrease</button>
        <button onClick={reset} >Reset</button>
        <button onClick={increment}>Increase +</button>
        <h1>{count}</h1>

    </div>
  );

}

export default Counter;