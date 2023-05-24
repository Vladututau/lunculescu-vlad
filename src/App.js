import React from 'react';
import { Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home"
import './first.css';

function Routing(){
    return (
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
      </div>
                
);
};

export default Routing;

