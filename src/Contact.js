import React, { useEffect } from "react";
import '././third.css';
import { Link } from "react-router-dom";
import * as THREE from 'three';

let scene;
let camera;
let renderer;



const Contact = () => {

  function main()
  {
      const canvas = document.querySelector('#c');
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 2;
      scene.add(camera);
      renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);



      const earthGeometry = new THREE.SphereGeometry(0.65, 32, 32)
      const earthMaterial = new THREE.MeshPhongMaterial({

          map : THREE.ImageUtils.loadTexture('earthmap.jpg'),
          bumpMap: THREE.ImageUtils.loadTexture('earthbump.jpg'),
          bumpScale : 0.6,

      });
      
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earthMesh);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);

      const pointerLight = new THREE.PointLight(0xffffff, 0.9);
      pointerLight.position.set(5,3,5);
      scene.add(pointerLight);

      const cloudGeometry = new THREE.SphereGeometry(0.66, 32, 32 );

      const cloudMaterial = new THREE.MeshPhongMaterial({
          map: THREE.ImageUtils.loadTexture('./earthCloud.png'),
          transparent: true
      });

      const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);

      scene.add(cloudMesh);

      const animate = () =>{
          requestAnimationFrame(animate);
          earthMesh.rotation.y -= 0.0015;
          cloudMesh.rotation.y += 0.0015;
          render();
      }
      const render =() => {
          renderer.render(scene, camera)
      }
      animate();
  }

  useEffect(()=>{
    main()
  },[])
  return (
    <div id="third">
        <nav id="nav">
        <div id='logo-home'> <a href='/'><img src='./Lunculescu Vlad.png' id='logo2' alt='logo' ></img></a></div>
        <div id="space"></div>
        <div id='page'> 
            <Link to ="/" id='link'>Home</Link>
            <Link to ="/about" id='link' className="space">About</Link>
            </div>
        </nav>
        <section>
                  <div class="star" id="star1"></div>
                  <div class="star" id="star2"></div>
                  <div class="star" id="star3"></div>
                  <div class="star" id="star4"></div>
                  <div class="star" id="star5"></div>
                  <div class="star" id="star6"></div>
                  <div class="star" id="star7"></div>
                  <div class="star" id="star8"></div>
        </section>
        <div id="half1">
          <div id="glass">
            <div id="contact">
            <h1 id="h1">Contact Me!</h1>
            <p id="whitep">If you want to use my services, send me an email:</p>
            <p id="whitep2"></p>
            <form action="http://localhost/react-portofolio/my-portofolio/PHP/sendEmail.php" method="POST" id="form">
              <input type="name" name="name" placeholder="Your Name" id="input" required></input>  
              <input type="email" name="email" id="input" placeholder="E-mail" required></input>
              <input type="subject" placeholder="Write a Subject" name="subject" id="input" required></input>
              <textarea name="message" id="textarea" cols="30" rows="10" placeholder="Your Message" required></textarea>
              <input type="submit" name="Send" value="Submit" id="btn"></input>
            </form>
            <p id="whitep1">You can also contact me on:</p>
            <a href="https://www.linkedin.com/in/vlad-lunculescu-7b38951a9/" target="_blank" rel="noopener noreferrer"><img src="./linkedin.png" alt="linkedin" id="linkedin"></img></a>
            <a href="https://www.fiverr.com/vladvladut14?up_rollout=true" target="_blank" rel="noopener noreferrer"><img src="./fiverr.png" alt="fiverr" id="fiverr"></img></a>
            <a href="https://www.instagram.com/vlad.lunculescu/" target="_blank" rel="noopener noreferrer"><img src="./instagram.png" alt="instagram" id="instagram"></img></a>
            </div>
          </div>
        </div>
        <div id='short'>
        <canvas id="c" ></canvas>
        </div>
        </div>
  );
};
  
export default Contact;
