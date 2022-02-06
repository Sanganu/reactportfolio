// import {useState,useEffect} from "react";
import React from "react";
import projectData from "./projects.json"
import ProjectCard from "../components/ProjectCard"
// import "./portfoliostyle.css";
const Work = () => {
    // const [projects,setProjects] = useState([])
 
    // useEffect(()=>{
    //     setProjects(projectData)      
    //     console.log(projectData)
    // },[])
   
    return(<main className="container m-auto d-flex flex-wrap">
        {projectData.map((app,key) => (
        <ProjectCard details={app} key={key} />))}
        </main>)
}

export default Work;