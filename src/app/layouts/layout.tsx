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
        <div className='gradient-body'>
            <header>
                <div className="flex text-white items-center justify-between pt-8 w-full z-5">
                    <div className="ml-10 lg:ml-15">
                        <p className="">Jesus Gonzalez</p>
                    </div>
                    <div className="hidden w-[30%] xl:block">
                        <div className='flex items-center gap-20 mr-[10%]'>
                            <Link href="/">Inicio</Link>
                            <Link href="/about">Sobre mi</Link>
                            <Link href="/projects">Proyectos</Link>
                        </div>
                    </div>
                    <div className='mr-10 xl:hidden'>
                        <MdMenu onClick={setMenuActive} className='w-[28px] h-[28px]' />
                    </div>
                </div>
                <div className={`${menu ? 'block' : 'hidden'} bg-blue-500 absolute w-[210px] h-[150px] rounded top-0 right-0 p-5 mt-9 mr-10 xl:hidden`}>
                    <Link className='block mb-5' href="/">Inicio</Link>
                    <Link className='block mb-5' href="/about">Sobre mi</Link>
                    <Link className='block mb-5' href="/projects">Proyectos</Link>

                    <div className='absolute top-0 right-0 mr-2 mt-2'>
                        <MdCancel onClick={setMenuActive} className='w-[20px] h-[20px]' />
                    </div>
                </div>
            </header>
            <main>
                {children}
                <div className='pb-40'>
                    <Skils />
                </div>
            </main>
            <footer className="bg-[#0d0d1c] text-white px-6 py-10 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
                    <div>
                        <h2 className="text-2xl font-semibold">Jesus Gonzalez.</h2>
                        <p className="text-gray-400 mt-4">
                            Siempre dispuesto a dar lo mejor de mi.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contáctame</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" />
                                Cartagena de indias, Colombia
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                jesusdavidgonzales1102@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <BsFillTelephoneFill className="text-blue-500" />
                                +57 3043925018
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Servicios</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Desarrollo Web y Mantenimiento</li>
                            <li>Desarrollo de Software</li>
                            <li>Desarrollo Frontend</li>
                            <li>Desarrollo Backend</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2025 <a href="#" className="text-blue-500">Jesus Gonzalez</a>. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Construido con <span className="text-pink-500">❤️</span></p>
                </div>
            </footer>
        </div>
    )
}