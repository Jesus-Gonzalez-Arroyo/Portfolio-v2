import Image from "next/image"
import Icon from '../../../public/Gif Programer.gif'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { LuDownload } from "react-icons/lu";
import { CgMail } from "react-icons/cg";

export function AboutMe() {
    return (
        <div className="">
            <div className="flex bg-blue-500 text-white items-center justify-between py-4 fixed w-full z-5">
                <div className="ml-15">
                    <p>Jesus Gonzalez</p>
                </div>
                <div className="flex items-center gap-20 mr-15">
                    <a href="#experiencie">Experiencia</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#skils">Skils</a>
                    <a href="#contact">Contacto</a>
                </div>
            </div>
            <div className="flex w-full h-screen items-center justify-center">
                <div>
                    <div className="flex gap-30 max-w-[80%] m-auto mt-10">
                        <div className="mb-10">
                            <p className="text-lg color-white">Soy Jesus</p>
                            <p className="text-5xl my-3">Analista y desarrollador de software</p>
                            <p className="text-lg">Cuento con más de 3 años de experiencia en la creación de aplicaciones fullstack, robustas, escalables e interactivas.</p>
                            <div>
                                <div className="flex items-center justify-between mt-5">
                                    <div>
                                        <button className="flex items-center gap-3 bg-blue-500 rounded-md px-8 py-3 text-white">
                                            Descargar CV
                                            <LuDownload size={20} />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <FaLinkedinIn size={28} />
                                        <FaGithub size={28} />
                                        <CgMail size={28} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                width={400}
                                height={400}
                                src={Icon}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
