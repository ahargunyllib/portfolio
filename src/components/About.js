import React from 'react'

const Statement = ({statement, index}) => {
    return (
        <>
            <div className="mb-6 mx-5 sm:mx-9 leading-6">
                &gt; {statement.input}
                <div className="text-lime-400" dangerouslySetInnerHTML={{__html: statement.return}}/>
            </div>
        </>
    )
}

const Statements = ({aboutMe}) => {
    return (
        <>
            {aboutMe.map((statement, index) => {
                return <Statement statement={statement} key={index} />
            })}
        </>
    )
}

const About = ({aboutMe}) => {
    return (
        <>
            <div className="flex bg-slate-800 h-7 rounded-tl-lg rounded-tr-lg justify-start items-center">
                    <div className="ml-2 w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="ml-2 w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="ml-2 w-3 h-3 rounded-full bg-green-600"></div>
            </div>
            <div className="bg-slate-600 h-auto rounded-bl-lg rounded-br-lg pt-9 pb-8">
                    <Statements aboutMe={aboutMe} />
            </div>
        </>
    )
}

export default About