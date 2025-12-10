import React from 'react'
import "../pages/Home.css"

const ProjectCard=({img,projectTitle,projectDesc,tags})=>{
    return(
        <div className='ptcard'>
            <img src={img} alt={projectTitle}   />

            <h3>{projectTitle}</h3>
            <p> {projectDesc}</p>
            <div className="pt3tags">
                {tags.map((tags, index)=>(
              <h4 key={index} >{tags}</h4>
              ))}
            </div>
          </div>
    )
}

export default ProjectCard;