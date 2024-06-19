 import WebPict from "@/components/WebPict";
 import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

 export default function Web() {
      return (
        <div>
        <div className="parent-nav ">
            <div className="nav-menu" style={{margin: "0"}}>  
                <div className="nav-logo">
                    <a href="tugas.html">Aini</a> 
                 </div>
                 <div className="nav-menu-child-1 ">
                    <a href="tugas.html">Home</a>
                 </div>
                 <div className="nav-menu-child-2 ">
                    <a href="tugas.html">Contact List</a>
                 </div>
                 <div className="nav-menu-child-3">
                    <a href="tugas.html">Contact Me</a>
                 </div>
            </div>
         </div>

       
        
         <div className="flex mx-10 h-[95vh] ">
            
        
       
         <div className="flex-1 bg-pink-500 ml-12 mt-4 pl-4 pr-10 pt-4 pb-5 rounded-3xl ">  
            <img
            src="aku.jpeg"
            width={320}
            height={400}
            style={{borderRadius: "10%"}} />
         
          <strong>
            <h1>Aini</h1>
            <h2 style={{height: "30px"}}>Developer</h2>
          </strong>
           
          <p className="pb-2" >
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's standard dummy text ever
             since the 1500s.
         </p>

             <p style={{height: "30px"}}>Social Media</p>
            <a href="https://www.instagram.com/_ainisymbln?igsh=MW1a3BtMmd2cTExeA==">
            <FontAwesomeIcon icon={faInstagram} style={{width: "30px", height:"25px"}} />
            </a>
             <FontAwesomeIcon icon={faLinkedin} style={{width: "30px", height:"25px"}} />
             <FontAwesomeIcon icon={faFacebook}style={{width: "30px", height:"25px"}}  />
             <FontAwesomeIcon icon={faYoutube} style={{width: "30px", height:"25px"}} />
            </div>
                  
  
           <div className="flex-[2] mr-5 text-xl font-sans px-10 mt-5">
               <p>
                  <strong>My Latest Project</strong>
              </p>

              <img
                  src="p1.png"
                  style={{ borderRadius: "5%", width: "550px", height: "290px" }}
                  alt="Project 1" />
             
              <p>
                  <strong>Project 1</strong>
              </p>
              
              <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. 
              </p>
              </div>
             
              
             <div className="flex-1 overflow-y-scroll pt-16">
              <WebPict 
              title = "Project 2"
              img = "p2.png"/>
              <WebPict 
              title= "Project 3"
              img= "p3.webp"/>
              <WebPict
              title = "Project 4"
              img = "p4.png"/>
              <WebPict
              title = "Project 5"
              img = "p5.jpg"/>
              </div> 
             
             
              </div>
         
            </div> 
      );
  }