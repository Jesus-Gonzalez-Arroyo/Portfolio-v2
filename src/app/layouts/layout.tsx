'use client'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMenu, MdCancel } from "react-icons/md";
import Link from 'next/link'
import { Skils } from '../sections/skils'
import { useState } from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const [menu, setMenu] = useState(false)

    function setMenuActive() {
        setMenu(prev => !prev);
    }

    return (
        <div className='gradient-body min-h-screen flex flex-col'>
            <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
                <div className="flex text-white items-center justify-between py-4 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
                    <div className="group">
                        <Link href="/">
                            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300">
                                Jesus Gonzalez
                            </p>
                        </Link>
                    </div>
                    <nav className="hidden xl:block">
                        <div className='flex items-center gap-8'>
                            <Link href="/" className="relative px-4 py-2 text-gray-200 hover:text-white transition-colors duration-300 group">
                                Inicio
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="/about" className="relative px-4 py-2 text-gray-200 hover:text-white transition-colors duration-300 group">
                                Sobre mi
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="/projects" className="relative px-4 py-2 text-gray-200 hover:text-white transition-colors duration-300 group">
                                Proyectos
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>
                    </nav>
                    <button 
                        onClick={setMenuActive}
                        className='xl:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300'
                        aria-label="Toggle menu"
                    >
                        <MdMenu className='w-7 h-7' />
                    </button>
                </div>

                <div className={`${menu ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed inset-0 bg-black/80 backdrop-blur-sm xl:hidden transition-all duration-300 z-40`} onClick={setMenuActive}>
                    <div 
                        className={`${menu ? 'translate-x-0' : 'translate-x-full'} absolute right-0 top-0 h-full w-72 bg-gradient-to-br from-blue-900/95 to-purple-900/95 backdrop-blur-lg shadow-2xl transition-transform duration-300`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='p-6'>
                            <div className='flex justify-between items-center mb-8'>
                                <p className="text-lg font-semibold text-white">Menú</p>
                                <button 
                                    onClick={setMenuActive}
                                    className='p-2 rounded-lg hover:bg-white/10 transition-colors duration-300'
                                    aria-label="Close menu"
                                >
                                    <MdCancel className='w-6 h-6 text-white' />
                                </button>
                            </div>
                            <nav className='flex flex-col gap-2'>
                                <Link 
                                    className='block px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:translate-x-2' 
                                    href="/"
                                    onClick={setMenuActive}
                                >
                                    Inicio
                                </Link>
                                <Link 
                                    className='block px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:translate-x-2' 
                                    href="/about"
                                    onClick={setMenuActive}
                                >
                                    Sobre mi
                                </Link>
                                <Link 
                                    className='block px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:translate-x-2' 
                                    href="/projects"
                                    onClick={setMenuActive}
                                >
                                    Proyectos
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                {children}
                <div className='pb-20 w-[95%] m-auto'>
                    <Skils />
                </div>
            </main>
            <footer className="bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e] text-white mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-16 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Jesus Gonzalez.
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Desarrollador apasionado por crear experiencias web excepcionales. Siempre dispuesto a dar lo mejor de mí.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <a href="https://github.com/Jesus-Gonzalez-Arroyo" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/jesusdavidgonzalez/" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded"></span>
                                Contáctame
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                                    <FaMapMarkerAlt className="text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                                    <span className="group-hover:text-white transition-colors">Cartagena de Indias, Colombia</span>
                                </li>
                                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                                    <FaEnvelope className="text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                                    <a href="mailto:jesusdavidgonzales1102@gmail.com" className="group-hover:text-white transition-colors break-all">
                                        jesusdavidgonzales1102@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                                    <BsFillTelephoneFill className="text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                                    <a href="tel:+573043925018" className="group-hover:text-white transition-colors">
                                        +57 304 392 5018
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded"></span>
                                Servicios
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    <span className="group-hover:text-white transition-colors">Desarrollo Web y Mantenimiento</span>
                                </li>
                                <li className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    <span className="group-hover:text-white transition-colors">Desarrollo de Software</span>
                                </li>
                                <li className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    <span className="group-hover:text-white transition-colors">Desarrollo Frontend</span>
                                </li>
                                <li className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    <span className="group-hover:text-white transition-colors">Desarrollo Backend</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>
                            © 2025 <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">Jesus Gonzalez</a>. Todos los derechos reservados.
                        </p>
                        <p className="flex items-center gap-2">
                            Construido con <span className="text-pink-500 animate-pulse text-lg">❤️</span> y dedicación
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}