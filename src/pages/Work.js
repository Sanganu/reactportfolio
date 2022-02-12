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
   
    return(<main>
        <h3 className="text-center">Fun Apps</h3>
        <article  className="container m-auto d-flex flex-wrap">
        {projectData.map((app,key) => (
        <ProjectCard details={app} key={key} />))}
        </article>
        </main>)
}

export default Work;