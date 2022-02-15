import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messages, type)=>{
        setAlert({
          msg:messages,
          typ:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1000);
  }



  const toggleMode = () =>{
    if (mode==='dark') {
      setMode('light');
      showAlert("Light mode has been enabled","success");
    }else{
      setMode('dark');
      showAlert("Dark mode has been enabled","success");
    }
  }
  return (
    <>
   <Router>
    <div className={`container-fluid bg-${mode}`}>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}  />
    <Routes>
    <Route path='/' element={<TextForm/>} />
    <Route path='/about' element={<About mode={mode}/>} />
    <Route path='/contact' element={<Contact mode={mode}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
