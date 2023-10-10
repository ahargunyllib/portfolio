import React from 'react'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const ProjectSkill = ({skill, key}) => {
    // console.log('skill in ProjectSkill: ', skill)

    return (
        <span className="border-green-400 rounded-md border-2 p-2 mr-3 mb-3 ">{skill}</span>
    )
}

const ProjectSkills = ({skills}) => {
    // console.log('skills in ProjectSkills: ', skills)

    return (
        <div className="flex flex-wrap">
            {skills.map((skill, index) => {
                return <ProjectSkill skill={skill} key={index} />
            })}
        </div>
    )
}

const ProjectCard = ({project, key}) => {
    // console.log('project in ProjectCard: ', project)

    return (
        <div className="mb-16 mx-auto text-white bg-blue-950 shadow-lg shadow-transparent relative flex flex-col justify-end rounded-md w-full p-9 box-border">
            <p className="mt-0 mb-9 text-3xl font-bold ">{project.title}</p>
            <p className="mb-8">{project.description}</p>
            <ProjectSkills skills={project.skills} />
            <div className="flex justify-start items-center whitespace-nowrap no-underline flex-wrap leading-10 box-border font-semibold">
                <a href={project.links.preview} className="bg-blue-500 mr-5 mt-5 inline-block px-3 rounded-md decoration-current">Live Demo</a>
                <a href={project.links.github} className="mr-5 mt-5 inline-block">View Source</a>
            </div>
        </div>
    )
}


const Projects = ({projects}) => {
    // console.log('projects in Projects: ', projects)

    return (
        <div id="projects">
            <div className="pt-12 mt-12 mb-20">
                <div className="font-bold text-center font-mono text-lg ">Projects</div>
                <div className="border-4 rounded-lg w-12 mt-8 m-auto border-blue-500 "></div>
            </div>
            {projects.map((proj) => {
                return <ProjectCard project={proj} key={proj.title} />
            })}
        </div>
    )
}

export default Projects