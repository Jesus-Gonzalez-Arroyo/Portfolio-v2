import { AboutMe, Experiencie, Skils, Projects, Contact } from "../sections/index";

export default function Init () {
    return (
        <div className="">
            <div className="h-[80vh]">
                <AboutMe/>
            </div>
            <div className="w-full max-w-[80%] m-auto flex items-center justify-between gap-10 mt-10 text-white">
                <div className="w-[20%] h-30 rounded bg-blue-500 shadow-md flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-4xl">3+</p>
                        <p>Años de experiencia</p>
                    </div>
                </div>
                <div className="w-[20%] h-30 rounded bg-blue-500 shadow-md flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-4xl">30+</p>
                        <p>Proyectos</p>
                    </div>
                </div>
                <div className="w-[20%] h-30 rounded bg-blue-500 shadow-md flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-4xl">5+</p>
                        <p>Clientes satisfechos</p>
                    </div>
                </div>
            </div>
            <div>
                <Experiencie/>
            </div>
            <div id="projects">
                <Projects/>
            </div>
            <div id="skils">
                <Skils/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    )
}