import logo from './logo.svg';

import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/LoginPage/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Routes>
    <Route path="/appoinment" element={<Appoinment/>} />
    <Route path="/home"  element={<Home />} />
    <Route path="/login"  element={<Login/>} />
    <Route path="/"  element={<Home />} />
    

    </Routes>
    </BrowserRouter>
        

     
     

      
  
    </div>
  );
}

export default App;
