import React from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import projects from "../contents/projects"
import aboutMe from "../contents/about-me"

const IndexPage = () => {
	return (
		<div className="bg-slate-900">
			<div className=" font-mono max-w-4xl sm:px-20 px-10 m-auto text-white">
				<Navbar />
				<Hero />
				<About aboutMe={aboutMe}/>
				<Projects projects={projects}/>
				<Contact />
				<Footer />
			</div>
		</div>
	)
}

export default IndexPage

export const Head = () => <title>ahargunyllib's Portfolio</title>
