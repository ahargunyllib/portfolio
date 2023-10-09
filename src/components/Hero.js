import React from 'react'
import Typewriter from './Typewriter'

const Hero = () => {
    return (
        <div className="isolate px-6 py-32 text-center">
            <h1 className="text-4xl text-left font-bold tracking-tight text-blue-400 sm:text-6xl">
                <Typewriter text="Nugraha Billy Viandy" />
            </h1>
            <p className="text-left mt-6 text-lg leading-8">
                I'm an Undergraduate Computer Science Student at Brawijaya University. I'm interested in Backend Development, Mobile App Development, Game Development, Cybersecurity, Artificial Intelligence, and Competitive Programming.
            </p>
            <p className="text-left mt-6 text-lg leading-8">
                Check out my <a href="#projects" className="text-blue-600 font-bold">side-projects</a> below
            </p>
        </div>
    )
}

export default Hero