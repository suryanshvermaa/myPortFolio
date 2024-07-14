import styles from './Header.module.css';
import { Link } from "react-router-dom";
 import { useState } from 'react';
 import {useNavigate} from 'react-router-dom';
 import { IoIosMenu } from "react-icons/io";
 import { RxCross1 } from "react-icons/rx";
const Header=()=>{
    const redirect=useNavigate();
    const [midNav,setMidNav]=useState(false);
    let [active,setActive]=useState("Home");
    const onclickset=(val)=>{
        setActive(val);
        setMidNav(false);
    }
    const nevigatebt=()=>{
        onclickset('Contact');
           redirect('/Contact');
    }
   
    return  <>

              <div className="header">
        <div className="logo"><span className="sury">SURY</span>ANSH</div>
        <div className={`${midNav && 'midSm'} mid-head`}>
            <div className={`${active=='Home'?styles.active:null} midHeadNames ` } ><Link to="/" onClick={()=>onclickset("Home")}>Home</Link></div>
            <div className={`${active=='About'?styles.active:null} midHeadNames ` }><Link to="/About" onClick={()=>onclickset("About")}>About</Link></div>
            <div className={`${active=='Projects'?styles.active:null} midHeadNames ` }>            <Link to='/Projects'onClick={()=>onclickset("Projects")}>Projects</Link></div>
            <div className={`${active=='Skills'?styles.active:null} midHeadNames ` }><Link to="/Skills"onClick={()=>onclickset("Skills")}>Skills</Link></div>
            <div className={`${active=='Info'?styles.active:null} midHeadNames ` }><Link to="/Info"onClick={()=>onclickset("Info")}>Info</Link></div>
           
        </div>
        {
            !midNav?<IoIosMenu className='menuIcon' onClick={()=>setMidNav(true)}/>:<RxCross1 className='menuIcon' onClick={()=>setMidNav(false)}/>
        }
        
        <div className="button" ><button className="contact contactSm" onClick={nevigatebt}>Contact US</button></div>
    </div>
    
           </>

}
export default Header;