import React from 'react'
const Contact = () => {
    return (
        <div id="contact">
            <div className="block pt-12 mt-12 mb-10">
                <div className="block font-bold text-center font-mono text-lg ">Contact Me!</div>
                <div className="border-4 rounded-lg block w-12 mt-8 m-auto border-blue-500 "></div>
            </div>
            <div className="text-xl text-center flex justify-center flex-col mt-20 pb-20">
                <span className="my-5">
                    <a href="billy.bpm03@gmail.com" className="relative no-underline">Email</a>
                </span>
                <span className="my-5">
                    <a href="https://www.linkedin.com/in/ahargunyllib" className="relative no-underline">Linkedin</a>
                </span>
                <span className="my-5">
                    <a href="https://www.github.com/ahargunyllib" className="relative no-underline">GitHub</a>
                </span>
            </div>
        </div>
    )
}

export default Contact