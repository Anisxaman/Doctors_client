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
import Register from './Pages/LoginPage/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className='App'>
  < AuthProvider>
      <BrowserRouter>
          <Routes>
                <Route path="/appoinment" element={<Appoinment/>} />
                <Route path="/home"  element={<Home />} />
                <Route path="/login"  element={<Login/>} />
                <Route path="/register"  element={<Register/>} />
                <Route path="/"  element={<Home />} />
          

          </Routes>
      </BrowserRouter>
  </AuthProvider>
        

     
     

      
  
    </div>
  );
}

export default App;
