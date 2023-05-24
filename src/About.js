import React from "react";
import '././second.css'
import { Link } from "react-router-dom";
  
const About = () => {

  const getMainDiv = (div) => {
    switch(div){
      default:
        return(
        <>
        <p id="click1">Choose a category from beside</p>
          <img src="./arrow.png" id="arrow" alt="arrow"></img>
          </>
          )
        case "about_me":
         return(
        <>
         <p id="click2">I'm Vlad,an 18 year old teenager from Romania who one year ago started learning code. I have a keen interest in using my skills in coding and web development to create professional and user-friendly websites for my clients. I am driven and dedicated to learn more and improve my abilities in order to provide the best service for my customers. </p>

         </>
         )
        case "knowledge":
         return(
         <>
         <p id="click3">I specialized myself into languages like HTML, CSS, a bit of PHP, JavaScript and some libraries of it, especially React, which helped me build this website.</p>
         <div id="cube">
         <img src="./js.png" id="js" alt="js"></img>
         <img src="./html.png" id="html" alt="html"></img>
         <img src="./css.png" id="css" alt="css"></img>
         </div>
         </>
         )
         case "what_i_can_bring_you":
          return(<><p id="click4">I can bring you a React JS website about whatever you want it. It can be about your bussines or even about you as an individual and can have how many pages you need. I am open for a lot of oportunities and if your request fits my abilities, I will love to colaborate with my customers.</p>
                   <img src="./react.png" alt="react1" id="react"></img>
          </>
          )
        case "website_delivery_time":
          return(<p id="click5">The delivery time of my websites may be different from case to case. For example, a one page website would take me around 15 days, a two pages website would take me around 20 and a three pages website, around 30 days. For more pages or in the case of complex animations or hard tasks to do needed, the time would be established by both sides.  </p>)
        case "prices":
          return(
          <><p id="click6">In terms of price, I established that: </p>
          <div id="bold">1 page website:300$</div><div id="bold">2 pages website: 470$</div><div id="bold">3 pages website 695$</div>
          <p id="click6"> For more than 3 pages the price can vary depending on the complexity of the project. As well depending on the complexity, the prices for 1, 2 or 3 pages website can be lower or higher than the fixed ones.</p>
          <img src="./coin.png" alt="coin" id="coin"></img>
          </>
          )

    }
  }

  const [menu, setMenu] = React.useState("default")
  return (
    <div id='second'>
      <nav id='navigation'>
                <div id='logo-home'> <a href='/'><img src='./Lunculescu Vlad1.png' id='logo' alt='logo'></img></a></div>
                <div id="space"></div>
                       <div id='pages'> 
                       <Link to ="/" id='link2'>Home</Link>
                       <Link to ="/contact" id='link1'>Contact</Link>
                        </div>
                </nav>
                <div id="bg">
                <div id="items">
                <ul>
                  <li id="six" ><button id="button" onClick = {()=>{
                    setMenu("about_me")
                  }}>About me</button></li>
                  <li id="five"><button id="button" onClick = {()=>{
                    setMenu("knowledge")
                  }}>Knowledge</button></li>
                  <li id="four"><button id="button" onClick = {()=>{
                    setMenu("what_i_can_bring_you")
                  }}>What I can bring you</button></li>
                  <li id="three"><button id="button" onClick = {()=>{
                    setMenu("website_delivery_time")
                  }}>Website delivery time</button></li>
                  <li id="two"><button id="button" onClick = {()=>{
                    setMenu("prices")
                  }}>Prices</button></li>
                  <li id="one"><a href="/contact">Contact</a></li>
                </ul>

                </div>
                <div id="plogo">
                <img src="./Lunculescu Vlad.png" id="logo1" alt="logo"></img>
                </div>
                <div id="info">
                  {getMainDiv(menu)}
                </div>
                </div>
            </div>
  );
};
  
export default About;
