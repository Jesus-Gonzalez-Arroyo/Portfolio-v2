/* import Image from "next/image" */
import {CardProject} from '../components/cardProject'

export function Projects() {
    return (
        <div>
            <div className='mb-20'>
                <h2 className="text-3xl text-center">Proyectos</h2>
            </div>
            <div>
                <div className="flex flex-wrap gap-5 w-[80%] max-w-[80%] m-auto">
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}, {name: 'Flask'}, {name: 'Boostrapt'}]} />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}, {name: 'Flask'}, {name: 'Boostrapt'}]} />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}]} />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}]} />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='Prueba' description='Description prueba' stack={[{name: 'Python'}]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
