import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [mode2, setMode2] = useState('light'); // for red mode
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  

  //red Mode
  const toggleMode2 = () => {
    if (mode2=== 'light') {
      setMode2('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode has been enabled", "success");
    } else {
      setMode2('light');
      document.body.style.backgroundColor = 'white';  
      showAlert("Light mode has been enabled", "success");
    };
  }

  //dark Mode
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';  
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    <Navbar mode={mode} mode2={mode2} home = "Home" features = "Features" toogleMode={toogleMode} toggleMode2={toggleMode2} />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} mode={mode} mode2={mode2} />
    {/* <About/> */}
    {/* <Router>
      <Navbar mode={mode} mode2={mode2} home = "Home" features = "Features" toogleMode={toogleMode} toggleMode2={toggleMode2} />
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} mode2={mode2} />}
        />
      </Routes>
    </Router> */}
    </>
  );
}

export default App; 
