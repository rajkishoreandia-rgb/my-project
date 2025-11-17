import {useState} from 'react';

function Counter() {
    let [counter, setcounter] = useState(0)
    const increaseCount= ()=>{
        if(counter < 10)
        setcounter(counter+1);
    }
    const decreaseCount=()=>{
        if(counter > 0)
        setcounter(counter-1);
    
      }
  return (
    <div>
          <h1 className="counterCss">{counter}</h1>
          <button className="btnCss" onClick={increaseCount}>Increase</button>
          <button className="btnCss"  onClick={decreaseCount}>Decrease</button>
        </div>
  )
}

export default Counter