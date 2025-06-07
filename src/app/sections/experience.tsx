export function Experiencie() {
    return (
        <div id="experiencie" className="mt-30 mb-[5%]">
            <div>
                <h2 className="text-3xl text-center mt-10">Experiencia</h2>
                <p className="text-center text-lg mt-3 max-w-[50%] m-auto">Como desarrollador he podido contribuir en muchos proyectos empresariales asi mismo personales, tales como landing pages, aplicaciones webs, moviles y de escritorio.</p>
                <div className="w-[70%] m-auto text-white flex items-center justify-center mt-10 gap-10">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-blue-500 rounded-md p-2 md:pl-4">
                                <h3 className="text-xl font-bold">Desarrollador Fullstack</h3>
                                <p>WIGILABS</p>
                                <p>2023 - ACTUALIDAD</p>
                                <ul className="list-disc pl-5">
                                    <li>Desarrollo de aplicaciones web utilizando React y Node.js.</li>
                                    <li>Implementación de bases de datos SQL y NoSQL.</li>
                                    <li>Colaboración en equipo ágil para la entrega de proyectos.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-blue-500"></div>
                            <div className="absolute w-15 h-6 rounded-full bg-blue-500 z-10 text-white text-center">2025</div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>
                        <div className="col-span-4 w-full h-full"></div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-blue-500"></div>
                            <div className="absolute w-15 h-6 rounded-full bg-blue-500 z-10 text-white text-center">2022</div>
                        </div>
                        <div className="col-span-4 w-full h-full ">
                            <div className="w-full h-full bg-blue-500 rounded-md p-2 md:pl-4">
                                <h3 className="text-xl font-bold">Desarrollador Fullstack</h3>
                                <p>FREELANCE</p>
                                <p>2022 - ACTUALIDAD</p>
                                <ul className="list-disc pl-5">
                                    <li>Análisis y diseño de sistemas para mejorar procesos internos.</li>
                                    <li>Documentación técnica y capacitación a usuarios finales.</li>
                                    <li>Implementación de soluciones tecnológicas personalizadas.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}