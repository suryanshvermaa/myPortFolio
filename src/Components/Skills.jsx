const Skills=()=>{
    const SkillA=['HTML','CSS','JAVASCRIPT',"Typescript",'REACT-JS',"React-Native","Next-JS",'MongoDB',"ExpressJs","NodeJs",'JAVA','C-Language',"AWS","Docker","BullMQ","Kafka"];
    return  <div className="Skills">
                 <h1 style={{marginTop:'60px',fontSize:'50px'}}>Skills</h1>
                 {
                 SkillA.map((item)=>(<div style={{display:'flex',flexDirection:'row',alignItems:'center'}}><h3 style={{width:'120px'}}>{item}</h3>
                 <div className={item} style={{background:'linear-gradient(to right,#b16cea,#ff5e69,#ff8a56,#ffa84b)',borderRadius:'6px'}}></div></div>))
}
    </div> 
}          

export default Skills;