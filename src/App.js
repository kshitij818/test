import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Email from './components/Email'
import Task3 from './components/Task3'
import { Button } from 'reactstrap'
import Test from './components/Test'
import Task4 from './components/Task4'
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';
import Test4 from './components/Test4';
import Email1 from'./components/Email1';

  function App() {
  return (
    <div className="App">
      
      {/* <Hello/> */}
     
     {/* <Email/> */}
      {/* <Task3/>   */}
      {/* { <Test/>} */}
      <Task4/>
      {/* <ParentComponent/> */}
    {/* <Test4/> */}
        {/* <Email1/> */}
    </div>
  );
}

export default App;
