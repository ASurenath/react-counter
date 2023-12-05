import { useState } from 'react';
import './App.css';


function App() {
  const [num, setnum] = useState(0)
  const [sign, setsign] = useState('positive')
  
  function checkSign(n){
    n>=0?setsign('positive'):setsign('negative');
  }

  function increment() {
    setnum(num + 1)
    checkSign(num+1)  ///important point to note
  }
  function decrement() {
    setnum(num - 1)
    checkSign(num-1)
  }
  function reset() {
    setnum(0)
    checkSign(0)
    
  }
  return (
    <div className="App">
      <div id='counter' >
      <h2 className='fw-light mt-3 mb-0' >
          COUNTER
        </h2>
        <h1 className={sign}> {num} </h1>
        <span onClick={decrement} className="material-symbols-outlined">
          do_not_disturb_on
        </span>
        <span onClick={increment} className="material-symbols-outlined">
          add_circle
        </span>
        <span onClick={reset} className="material-symbols-outlined">
          refresh
        </span>
      </div>
    </div>
  );
}

export default App;
