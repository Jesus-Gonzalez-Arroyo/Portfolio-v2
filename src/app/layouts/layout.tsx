import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from 'next/link'
import {Skils} from '../sections/skils'

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='gradient-body'>
            <header>
                <div className="flex text-white items-center justify-between pt-8 w-full z-5">
                    <div className="ml-15">
                        <p className="">Jesus Gonzalez</p>
                    </div>
                    <div className="flex items-center gap-20 mr-[10%]">
                        <Link href="/">Inicio</Link>
                        <Link href="/about">Sobre mi</Link>
                        <Link href="/projects">Proyectos</Link>
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
                            Contactame a traves de los canales disponibles.
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
                            <li>Desarrollo Web, Movil y Mantenimiento</li>
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