import ProjectCard from "./ProjectCard.jsx";

const Projects=()=>{

    const projects=[
        {
            id:"1",
            name:"event management App",
            description:"This fullstack project for event Manage ment. Features contains comments, rating, register for event,CRUD of events",
            frontend:["React-Native"],
            backend:["ExpressJs","Node js","Mongo DB"],
            imgUrl:"https://s3.ap-south-1.amazonaws.com/testingsuryansh.bucket/images/imagec.jpg",
            gitUrl:"https://github.com/suryanshvermaa/eventManagementApp.git"
          },
          {
            id:"2",
            name:"Transcoding Service",
            description:"this service transcode mp4 video into 1080p,720p,480p and 360p sothat video can be watched according to network speed.",
            frontend:["Html","tailwind css","videoJs"],
            backend:["ExpressJs","Node js","Mongo DB","kafka","docker","linux shell scripting","aws ECR","aws ECS"],
            imgUrl:"https://s3.ap-south-1.amazonaws.com/testingsuryansh.bucket/images/imagee.jpg",
            gitUrl:"https://github.com/suryanshvermaa/transcodingService.git"
          },
          {
            id:"3",
            name:"My PortFolio",
            description:"Portfolio is based on react js and pure css. It is responsive for all devices.UI is very good",
            frontend:["ReactJs","CSS"],
            backend:["ExpressJs","Node js","Mongo DB"],
            imgUrl:"https://s3.ap-south-1.amazonaws.com/testingsuryansh.bucket/images/imagea.png",
            gitUrl:"https://github.com/suryanshvermaa/myPortFolio.git"
          },
          {
            id:"4",
            name:"Live Streaming Web App",
            description:"In this project everybody can live stream on this website. and users can watch livestreams",
            frontend:["HTML","tailwind Css","vanila javascript"],
            backend:["ExpressJs","Node js","Mongo DB","AWS"],
            imgUrl:"https://s3.ap-south-1.amazonaws.com/testingsuryansh.bucket/images/imageb.jpg",
            gitUrl:"Not available"
          },
          {
            id:"5",
            name:"Chat web app",
            description:"In this chat app. users can chat in realtime.It is based on messanger like apps",
            frontend:["ReactJs"],
            backend:["ExpressJs","Node js","Mongo DB"],
            imgUrl:"https://s3.ap-south-1.amazonaws.com/testingsuryansh.bucket/images/imaged.jpg",
            gitUrl:"https://github.com/suryanshvermaa/chat.git"
          }
    ]

    return (
        
        <div style={{paddingLeft:'40px',paddingRight:"40px"}}>
            <h1>Projects</h1>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px",justifyContent:"center"}}>
            {
                projects.map((project)=>(<ProjectCard key={project.id} project={project}/>))
            }
            </div>
        </div>
    )
}
export default Projects;