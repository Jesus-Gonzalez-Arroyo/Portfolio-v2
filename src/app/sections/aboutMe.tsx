import Image from "next/image"
import Dev from '../../../public/image_developer.png'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { LuDownload } from "react-icons/lu";
import { CgMail } from "react-icons/cg";

export function AboutMe() {
    return (
        <div className="mb-[5%]">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="flex w-full min-h-screen items-center justify-center px-4 py-20">
                <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 order-2 lg:order-1">
                            <div className="space-y-3">
                                <p className="text-2xl md:text-3xl text-gray-400 font-medium">
                                    Hola, soy <span className="text-blue-400 font-semibold">Jesus</span>
                                </p>
                                <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                                    <span className="">
                                        Desarrollador Frontend
                                    </span>
                                    <br />
                                    <span className="">
                                        & Backend
                                    </span>
                                </h1>
                            </div>
                            
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Cuento con <span className="text-blue-400 font-semibold">3 años de experiencia</span> en la creación de aplicaciones fullstack robustas, escalables e interactivas.
                            </p>

                            <div className="pt-6">
                                <div className="flex flex-wrap gap-6 items-center">
                                    <a download target="_blank" href="https://imagesportafliov2.s3.us-east-2.amazonaws.com/Cv+Jesus+Gonzalez.pdf">
                                        <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl px-8 py-4 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                            <div className="relative flex items-center gap-3">
                                                <span>Descargar CV</span>
                                                <LuDownload size={20} className="group-hover:translate-y-1 transition-transform" />
                                            </div>
                                        </button>
                                    </a>

                                    <div className="flex items-center gap-4">
                                        <a 
                                            target="_blank" 
                                            href="https://www.linkedin.com/in/jesusdavidgonzalez/"
                                            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                                        >
                                            <FaLinkedinIn size={22} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
                                        </a>
                                        <a 
                                            target="_blank" 
                                            href="https://github.com/Jesus-Gonzalez-Arroyo"
                                            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                                        >
                                            <FaGithub size={22} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
                                        </a>
                                        <a 
                                            href="mailto:jesusdavidgonzales1102@gmail.com?subject=Consulta%20desde%20mi%20portafolio&body=Hola%2C%20me%20gust%C3%B3%20tu%20portafolio%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre..." 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
                                        >
                                            <CgMail size={24} className="text-gray-300 group-hover:text-pink-400 transition-colors" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-95"></div>

                                <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:border-white/40 transition-all duration-500 hover:scale-105">
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <Image
                                            width={400}
                                            height={400}
                                            src={Dev}
                                            alt="Jesus Gonzalez - Desarrollador"
                                            className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
