/* import Image from "next/image" */
import {CardProject} from '../components/cardProject'

export function Projects() {
    return (
        <div>
            <h2 className="text-3xl text-center mt-10">Proyectos</h2>
            <p className="text-center text-lg mt-3 max-w-[50%] m-auto">Estos son algunos de los proyectos que he realizado como freelance, otros por temas de seguridad no pueden ser agregados a la lista.</p>
            <div className="mt-10">
                <div className="grid grid-cols-2 grid-rows-3 gap-4 w-[70%] max-w-[70%] m-auto">
                    <div className="col-span-2 bg-blue-500 p-5 rounded-md max-h-[400px]">
                        <div className="w-full">
                            <img className="w-full h-[150px] object-cover rounded-md" src={'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg'} alt="" />
                        </div>
                        <div className="flex gap-10 py-5 text-white">
                            <div>
                                <p className="text-2xl mb-3">Farmazul</p>
                                <p>Es un sistema de gestion de inventarios, ventas, gastos, reportes, etc.</p>
                                <p>Cuenta con validaciones de seguridad como roles, auntenticacion para el manejo de los datos.</p>
                            </div>
                            <div>
                                <p className="text-2xl mb-3">Tecnologias</p>
                                <div>
                                    <ul className="flex gap-10">
                                        <li className="w-20 rounded-md bg-blue-200 text-center">Python</li>
                                        <li className="w-20 rounded-md bg-blue-200 text-center">Flask</li>
                                        <li className="w-20 rounded-md bg-blue-200 text-center">Mongo DB</li>
                                        <li className="w-20 rounded-md bg-blue-200 text-center">React</li>
                                        <li className="w-20 rounded-md bg-blue-200 text-center">Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-start-2">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}, {name: 'Flask'}, {name: 'Boostrapt'}]} />
                    </div>
                    <div className="row-start-2 max-h-[400px]">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}]} />
                    </div>
                    <div className="row-start-3 bg-blue-200">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}]} />
                    </div>
                    <div className="row-start-3 bg-blue-100">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
