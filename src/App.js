import React from 'react';
import './App.css';
import { useState } from 'react';
import Message from './Message' ;
export default function App() {
  let [count, setCount] = useState(1) ;
  let [isMorning, setMorning] = useState(false) ;
  //setCount(10) ;  
  return (
    <div className={`box ${isMorning ? 'dayLight':'box'}`}>
      <h1>Have A Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message count={count}/>
      <br />
      <button onClick={
        () => setCount(++count)
        }> 
        Update Counter </button>

        <button onClick={()=>setMorning(!isMorning)}>Set Morning</button>
    </div>
  );
}

//export default App ;
