import Image from "next/image"
import Dev from '../../../public/image_developer.png'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { LuDownload } from "react-icons/lu";
import { CgMail } from "react-icons/cg";

export function AboutMe() {
    return (
        <div>
            <div className="flex w-full h-screen items-center justify-center">
                <div>
                    <div className="flex items-center gap-30 max-w-[80%] m-auto">
                        <div className="mb-20">
                            <p className="text-3xl color-white">Hola, soy Jesus</p>
                            <p className="text-5xl my-3 2xl:text-7xl">Desarrollador Frontend & Backend</p>
                            <p className="text-lg">Cuento con 3 años de experiencia en la creación de aplicaciones fullstack robustas, escalables e interactivas.</p>
                            <div>
                                <div className="flex flex-wrap gap-10 min-w-[300px] items-center justify-between mt-5 lg:flex-nowrap">
                                    <div>
                                        <button className="flex items-center gap-3 bg-blue-500 rounded-md px-8 py-3 text-white">
                                            Descargar CV
                                            <LuDownload size={20} />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-8 mr-15">
                                        <FaLinkedinIn size={28} />
                                        <FaGithub size={28} />
                                        <CgMail size={28} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <Image
                                width={400}
                                height={400}
                                src={Dev}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
