import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import About from "./About";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const Home=()=>{
    const redirect=useNavigate();
    const nevigatebt=()=>{
        redirect('/Contact');
 }
    return <>
    <div className="home">
                <div className="intro">
                    <h1 style={{fontSize:'45px'}}> Hi ! &#128075; <br />
                     I'm <span className="svName">Suryansh Verma</span> <br /> 
                     
                    </h1>
                    <hr />
                    <h4 style={{fontSize:'20px'}}>Web Devoloper</h4>
                    <p>I am a first year student of <b>National Institute Of Technology Patna.</b></p>
                    <div style={{display:'flex',justifyContent:'start'}}><button  style={{background:' linear-gradient(to right,#b16cea,#ff5e69,#ff8a56,#ffa84b)',color:'white',padding:'20px',display:'flex',justifyContent:'center',alignItems:'center',height:'25px',borderRadius:'10px'}} className="contact" onClick={nevigatebt}>Contact US</button></div>
                    <h3 style={{fontSize:'20px'}}>Follow Me</h3>
                    <a href="https://www.linkedin.com/in/suryansh-verma-54a88528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin className="followicons" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100089669727713&mibextid=ZbWKwL" target="_blank"><FaFacebook className="followicons"/></a>
                    <a  href="https://www.instagram.com/suryanshverma_1?utm_source=qr&igsh=MWE2ZDczZHg1c3Fxbg==" target="_blank"><FaInstagram className="followicons"/></a>
                    
                </div>
                <div className="introimg">
                     <div className="imgport"></div>
                </div>
                
                
          </div>
          <About></About>
         
          
          </>
}
export default Home;
