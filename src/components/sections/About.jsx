import React from 'react'
import RevealOnScroll from "../RevealOnScroll";

const About = () => {

    const frontendSkills = ["HTML", "CSS3", "Javascript", "React", "Tailwind", "Flutter", "XML"];
    const backendSkills = ["Nodejs", "MYSQL", "Firebase", "PHP", "Expressjs", "Rest API"];

  return (
    <section id='about' className='min-h-screen flex items-center justify-center relative py-20'>
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>

            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio rerum ex magnam consequuntur saepe esse in atque facilis distinctio, quam provident quasi libero ullam debitis consequatur eius. Sint, molestiae velit quas perspiciatis dicta harum autem repellat maxime qui repellendus totam, obcaecati unde illum pariatur! Totam error laborum obcaecati a. Dolores eum aspernatur sint illo commodi animi quod dolor, possimus delectus voluptate, sunt id velit!</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-xl p-6 hover:-translate-y-1 translate-all'>
                        <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {frontendSkills.map((skill, key) => {
                                return <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transition'>{skill}</span>
                            })}
                        </div>
                    </div>

                    <div className='rounded-xl p-6 hover:-translate-y-1 translate-all'>
                        <h3 className='text-xl font-bold mb-4'>Backend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {backendSkills.map((skill, key) => {
                                return <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transition'>{skill}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Education</h3>

                    <ul className='list-disc list-inside text-gray-300 space-y-2'>
                        <li>
                            <strong>BSc. Information Technology</strong> Northern Caribbean University (pursing)
                        </li>
                        <li>
                            Relevant Coursework: Web design and Implementation, Internet Authoring, Software Engineering, System analysis and design, Programming II, Databases, Mobile Application Development, IT Project Management, Data Structure and Algorithm
                        </li>
                    </ul>
                </div>

                <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Work experience</h3>

                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <h4 className='font-semibold mb-4'>Mobile Application Developer Apprentice at Universal Service Fund (2023-2024)</h4>
                            <p>Design and develop a mobile application, ensuring it has an intuitive and responsive user interface. Focus on delivering a smooth user experience and optimal performance across various devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About