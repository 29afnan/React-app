import React from 'react';
import './App.css';
import Demo from './components/Demo';

function App() {

  const x=10;
  var text;
  if(x=== 10){
    text="Equal";
  }

  return (
    <div>
      <h2 className='demo'>Hello world</h2>
      <p style={{backgroundColor:"black",color:"white",}}></p>
      {50 + 5}
   
      <h2>{text}</h2>

      <h3>{x>=10 ? "x is greater than or equal to 10" : "no match"}</h3>


      <Demo para={x} />
      </div>   
  );
}

export default App;
