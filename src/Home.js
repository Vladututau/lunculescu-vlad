import React from 'react';
import '././first.css';
import Particles from './n/Particles';
import { Link } from "react-router-dom";

  
const Home = () => {
 
  return (
    <>
      <>
            <Particles id="tsparticles"></Particles>

        <div id='site'>
                <nav id='navigation'>
                <div id='logo-home'> <a href='/'><img src='./Lunculescu Vlad.png' id='logo' alt='logo' ></img></a></div>
                    <div id='title'><h1 id='white'><div id='letter'>V</div><div id='letter'>l</div><div id='letter'>a</div><div id='letter'>d</div><div id='letter'>'</div><div id='letter'>s</div> <div id='color'><div id='letter'>W</div><div id='letter'>e</div><div id='letter'>b</div><div id='letter'>s</div><div id='letter'>i</div><div id='letter'>t</div><div id='letter'>e</div></div></h1></div>
                       <div id='pages'> 
                       <Link to ="./about" id='link'>About</Link>
                       <Link to ="./contact" id='link'>Contact</Link>
                        </div>
                        
                </nav>
                <div class='background'>
                   <p class='text'> Welcome to my website!</p>
                 </div>
                 <div><p class='descriere'>Hi everyone! I'm a 18 years old self taught front-end developer and this is my website. Want to know more <Link to="./About" class='dec'>about me</Link>?</p></div>
                </div>
              <img src='./me2.png' id='me' alt='video'></img>

            </>
    </>
  );
};
  
export default Home;