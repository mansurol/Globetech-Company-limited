import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage'
import Services from './Components/Services/Services';
const App = () => {
  return (
    <div>
        <BrowserRouter>
      
     <Routes> 
     <Route path="/" element={ <LoginPage/>}/>


     <Route path="/home" element={<HomePage/>}/>
     <Route path="/login" element={ <LoginPage/>}/>
     <Route path="/services" element={ <Services/>}/>
   
     </Routes>
  

  </BrowserRouter>
    </div>
  );
};

export default App;
