import { useRef, useState } from "react";
import axios from 'axios';
const Contact=()=>{
    const [contactNumber,setContactno]=useState('');
    const [descriptionContact,setdes]=useState('');
    const [bio,setb]=useState('');
    const contactno=useRef();
    const description=useRef();
    const Bio=useRef();


    const submitAction=async (e)=>{
        e.preventDefault();
          setContactno(contactno.current.value);
          setdes(description.current.value);
          setb(Bio.current.value);
          
          const data={contactNumber,descriptionContact,bio}
          
          await axios.post('http://localhost:8080/contact',data).then(
            console.log("success")
          )

    }
    return <div classNameName="contactform" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>
    <div className="form-container">
    <form method="Post" className="form" >
      <div className="form-group">
        <label htmlFor="contact no.">Contact number</label>
        <input required name="text"  type="text" ref={contactno}/>
      </div>
      <div className="form-group">
        <label htmlFor="textarea">How Can We Help You?</label>
        <textarea required cols="50" rows="10" name="tmjj"  ref={description} >          </textarea>
      </div>
      <div className="form-group">
        <label htmlFor="textarea">Your Bio</label>
        <textarea required cols="50" rows="10"  name="texta" ref={Bio}>          </textarea>
      </div>

      <button type="submit" onClick={submitAction} className="form-submit-btn">Submit</button>
    </form>
  </div>
  </div>
}
export default Contact;