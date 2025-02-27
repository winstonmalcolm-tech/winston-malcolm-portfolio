import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
            <div className='max-w-5xl mx-auto px-4'>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">AppJa</h3>
                        <p className='text-gray-400 mb-4'>
                            A web-based Android app store specifically for junior developers to host and showcase their applications. AppJa offers a streamlined interface that enables emerging developersto gain exposure and share their work with a wider audience. The platform is designed to support junior developers in their journey to enhance their skills and build their professional portfolios.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                        {["React", "Node.js", "Expressjs", "Paypal", "Tailwindcss", "MYSQL"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/winstonmalcolm-tech/appja-web-client" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                            </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">Just Post</h3>
                        <p className='text-gray-400 mb-4'>
                            This is a web-based photo sharing platform that offers a seamless and engaging user experience with features such as secure authentication, real-time commenting on images, and a clean, responsive user interface. Users can easily search for photo sharers, like, and follow others, all within a self-contained environment with no reliance on third party services. Designed with modern web technologies, this software ensures a dynamic and interactive space for sharing and discovering photos.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                        {["PHP", "Node.js", "Expressjs", "MariaDB", "HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/winstonmalcolm-tech/justpost" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">Church Cast</h3>
                        <p className='text-gray-400 mb-4'>
                            A android app made for the streaming of church services in realtime for members who may not be able to make it to church. Another target group is theology students, for them to browse and gain inspiration. It is a platform for individuals who wants to focus on their religion without the distractions of ads and other videos on Youtube and facebook. 
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                        {["Flutter", "Firebase", "Expressjs", "Nodejs", "Zegocloud", "Gemini AI API"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/winstonmalcolm-tech/church-for-us" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">Link Minimizer</h3>
                        <p className='text-gray-400 mb-4'>
                            A lightweight and intuitive mobile app for shortening URLs, designed with a clean and minimalistic user interface. The app features both light and dark modes for user comfort, and it conveniently stores previously shortened links, making it easy to manage and revisit them anytime. 
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                        {["Java", "XML", "Retrofit"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/winstonmalcolm-tech/church-for-us" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                            </a>

                            <a href="https://www.amazon.com/malx_programmer-Link-Minimizer/dp/B0CR8QP9KS/ref=sr_1_1?crid=RC1T4PCAFV4P&dib=eyJ2IjoiMSJ9.MC0VgJgrGMJ3gZ4hTFeGjhrpkHyk1XZ6T_xCEgkeFCn-YljK1ggySeINFblY1RGD-ODSm7WmDlQ7H5uRLThT1w.qXdesoJ7vmvKVOEMFc2rBy3LE3gybjJ0K-vVX5FbKV8&dib_tag=se&keywords=Link+Minimizer+app&qid=1740696833&sprefix=link+minimizer+a%2Caps%2C663&sr=8-1" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            Live →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects