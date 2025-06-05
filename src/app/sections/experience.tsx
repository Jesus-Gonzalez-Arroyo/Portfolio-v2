export function Experiencie() {
    return (
        <div id="experiencie" className="mt-30">
            <div>
                <h2 className="text-3xl text-center mt-10">Experiencia</h2>
                <p className="text-center mt-3 max-w-[50%] m-auto">Como desarrollador he podido contribuir en muchos proyectos personales asi mismo empresariales, tales como landing pages, Apps webs y moviles.</p>
                <div className="w-[70%] m-auto flex items-center justify-center mt-10 gap-10">
                    <div className="w-0.5 h-100 bg-blue-600 relative text-white">
                        <div className="w-0.5 h-6 w-15 rounded-md bg-blue-600 text-center absolute top-22 left-[-30px]"><p>2025</p></div>

                        <div className="w-0.5 h-6 w-15 rounded-md bg-blue-600 text-center absolute top-72 left-[-30px]"><p>2022</p></div>

                        <div className="w-0.5 h-6 w-6 rounded-full bg-blue-600 text-center absolute top-100 left-[-11px]"></div>
                    </div>
                    <div className="m-auto mt-5 w-[90%]">
                        <div className="shadow-md rounded-md p-5 bg-white mb-5 w-full">
                            <h3 className="text-xl font-bold">Desarrollador Fullstack</h3>
                            <p>WIGILABS</p>
                            <p>2023 - ACTUALIDAD</p>
                            <ul className="list-disc pl-5">
                                <li>Desarrollo de aplicaciones web utilizando React y Node.js.</li>
                                <li>Implementación de bases de datos SQL y NoSQL.</li>
                                <li>Colaboración en equipo ágil para la entrega de proyectos.</li>
                            </ul>
                        </div>
                        <div className="shadow-md rounded-md p-5 bg-white mb-5 w-full relative">
                            <h3 className="text-xl font-bold">Analista de Sistemas</h3>
                            <p>FREELANCE</p>
                            <p>2022 - ACTUALIDAD</p>
                            <ul className="list-disc pl-5">
                                <li>Análisis y diseño de sistemas para mejorar procesos internos.</li>
                                <li>Documentación técnica y capacitación a usuarios finales.</li>
                                <li>Implementación de soluciones tecnológicas personalizadas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}