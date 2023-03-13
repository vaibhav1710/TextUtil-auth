
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
//  import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

 

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
  {/* //  <Router> */}
   <Navbar  title = "TextUtils" mode={mode}   toggleMode = {toggleMode}/>
   <div className='container' my-3='true'>
   <TextForm heading = "Enter the Text to analyze below" mode = {mode} />
    {/* <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode = {mode} />} />
          
  </Routes>*/}
   </div> 
  {/* //  </Router> */}
  </>
  );
}

export default App;
