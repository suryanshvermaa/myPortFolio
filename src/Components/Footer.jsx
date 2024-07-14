import styles from './footer.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer=()=>{
    return (
        <div className={styles.container}>
        <div className={styles.box} style={{marginTop:"22px"}}>
              <div className="logo" ><span className="sury">SURY</span>ANSH </div>
              <p style={{marginLeft:"70px",paddingLeft:"5px"}}>this is simple portfolio website</p>
             <div style={{marginLeft:"70px"}}>
             <a href="https://www.linkedin.com/in/suryansh-verma-54a88528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="followicons" /></a>
              <a href="https://www.facebook.com/profile.php?id=100089669727713&mibextid=ZbWKwL"><FaFacebook className="followicons"/></a>
              <a  href="https://www.instagram.com/suryanshverma_1?utm_source=qr&igsh=MWE2ZDczZHg1c3Fxbg=="><FaInstagram className="followicons"/></a>
             </div>
            
        </div>
        <div className={styles.box}>
              <h1 style={{borderLeft:'2px solid blue' ,paddingLeft:"8px"}}>Contact Us</h1>
              <p style={{lineHeight:"25px"}}>lakhimpur kheri ,UP 262701 ,India <br />Ph: <span style={{color:'blue'}}>+91 9580104753</span><br />Mail: <span style={{color:'blue'}}>suryanshv.ug23.ee@nitp.ac.in</span></p>
        </div>
        <div className={styles.box}>
        <h1 style={{borderLeft:'2px solid blue' ,paddingLeft:"8px"}}>Useful Links</h1>
       <div style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
       <a href="/Contact">contact</a>
        <a href="https://drive.google.com/file/d/1hQkWJJX0cm36t9yyoBCOUDoPgEKnM64j/view?usp=drivesdk">resume</a>
        <a href="https://www.linkedin.com/in/suryansh-verma-54a88528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedIn</a>
        <a href="https://www.instagram.com/suryanshverma_1?utm_source=qr&igsh=MWE2ZDczZHg1c3Fxbg==">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100089669727713&mibextid=ZbWKwL">Facebook</a>
       </div>

        </div>
        </div>
    )
}
export default Footer;