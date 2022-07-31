import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import CoverPage from './Components/Cover/CoverPage';
import Homepage from './Components/Home/Homepages'
import Services from './Components/Services/Services';
const App = () => {
  return (
    <div>
        <BrowserRouter>
      
     <Routes> 
     <Route path="/" element={ <Homepage/>}/>


     <Route path="/home" element={<CoverPage/>}/>
     <Route path="/login" element={ <Homepage/>}/>
     <Route path="/services" element={ <Services/>}/>
   
     </Routes>
  

  </BrowserRouter>
    </div>
  );
};

export default App;
