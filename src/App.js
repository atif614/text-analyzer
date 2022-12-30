import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500)
  }
  const toggleMode = () => {
    console.log("Hello");
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Dark Mode';
      showAlert('Dark mode has been enabled', 'Success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
      showAlert('Light mode has been enabled', 'Success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <TextForm heading="Enter the text to analyze below"  mode={mode}/> */}
        {/* <About/> */}
        <Switch>
          <Route exact path="/about">
            <About  mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;