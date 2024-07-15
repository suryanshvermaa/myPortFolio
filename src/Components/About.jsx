import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from './Footer.jsx';

const About=()=>{
    const navigate=useNavigate();
    return  <>
    <div className="About">
                    <img src="../Images/introimg.PNG" className="imageAbout" alt="image"/>
                
      <div className="aboutMe">
        <h1 style={{fontSize:'45px',marginLeft:'10px'}}> <span className="aboutI">About Me</span><br />
        </h1>
        <p style={{marginLeft:'10px',marginBottom:'16px'}}>I am a first year student of <b>National Institute Of Technology <br /> Patna.</b>I am doing BTech from 
        Electrical Engineering. <br /> Currently, I'm a intermediate web devoloper.</p>
        <div className="button"style={{display:'flex',justifyContent:'start',margin:'14px'}}><button style={{background:' linear-gradient(to right,#b16cea,#ff5e69,#ff8a56,#ffa84b)',color:'white',padding:'20px',display:'flex',justifyContent:'center',alignItems:'center',height:'25px',borderRadius:'10px'}} className="contact" ><a href="https://drive.google.com/file/d/1hQkWJJX0cm36t9yyoBCOUDoPgEKnM64j/view?usp=drivesdk" style={{backgroundColor:'transparent'}}>Download CV</a></button></div>
      
        
        <a href="https://www.linkedin.com/in/suryansh-verma-54a88528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin className="followicons" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100089669727713&mibextid=ZbWKwL" target="_blank"><FaFacebook className="followicons"/></a>
                    <a  href="https://www.instagram.com/suryanshverma_1?utm_source=qr&igsh=MWE2ZDczZHg1c3Fxbg==" target="_blank"><FaInstagram className="followicons"/></a>
                    
        
    </div>  
</div>
<Footer/>
</>
}
export default About;