// import logo from './logo.svg';

import './App.css';

import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

import React, {useState} from 'react';
import Alert from './components/Alert';

import About from './components/About';

// import {
//   BrowserRouter, Route, Routes, Link
// } from "react-router-dom";
function App() {

  const [mode,setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode is enabled', 'success');
      document.title = 'kumar- Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled', 'success');
      document.title = 'kumar- Light Mode'
    }

  
  }

  const toggleDanger = ()=>{
    if (mode === 'light'){
      setMode('danger');
      document.body.style.backgroundColor = 'red';

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
{/* <BrowserRouter> */}
  
<div className="container mt-0 mb-3">
</div>

<Navbar mode={mode}  toggleMode={toggleMode}  toggleDanger={toggleDanger}/>
<Alert alert={alert}/>

{/* <Routes> */}
{/* <Route path="/about" exact element={<About/>} /> */}

{/* <Route path="/" element = {<TextForm/>}/> */}
{/* <TextForm/> */}
<TextForm heading='Enter the Text to Analysis' mode={mode} showAlert={showAlert} />
{/* <About/> */}
{/* </Route/> */}
{/* </Routes> */}
{/* </BrowserRouter> */}
   </>
  );
}

export default App;
