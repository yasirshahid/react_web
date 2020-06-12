import React, { useState } from 'react';
import './App.css';
import Message from './message.js';



function App() {
  let [count,setcount]=useState(0);

  return (
    <div className="App">
      <Message counter={count}/>
      <button onClick={()=>setcount(count+1)}>
        Value +</button>
    </div>
  );
}

export default App;
