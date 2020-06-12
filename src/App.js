import React, { useState } from 'react';
import './App.css';
import Message from './message.js';



function App() {
  let [count,setcount]=useState(0);

  return (
    <div className="App">
      <Message counter={count}/>
      <button onClick={()=>setcount(++count)}>
        Value + </button>
      <button onClick={()=>setcount(--count)}>
        Value - </button>  
      <br/>
      <br/>
      <button onClick={()=>setcount(0)}>
        Reset </button>   
    </div>
  );
}

export default App;
