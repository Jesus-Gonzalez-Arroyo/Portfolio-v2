import Layout from '../layouts/layout'
import {Dates} from '../sections/dates'
import Timeline from '../components/timeline'

export default function AboutMe() {
    return (
        <Layout>
            <div className='flex mt-[10%] items-center justify-center'>
                <div className='w-[80%] m-auto text-left'>
                    <p className='text-7xl mb-3'>Sobre mi</p>
                    <div className='mb-10'>
                        <p className='text-xl'>Con 3 años de experiencia y un buen historial de proyectos y colaboraciones, estoy dispuesto y preparado para afrontar cualquier reto.</p>
                    </div>
                    <div className='sm:mb-[10%] xl:my-[0%] xl:mb-[5%]'>
                        <Dates />
                    </div>
                </div>
            </div>
            <div className='w-[80%] m-auto'>
                <p className='text-3xl'>Experiencia</p>
                <div>
                    <Timeline isStudio={false} />  
                </div>
            </div>
            <div className='w-[80%] m-auto'>
                <p className='text-3xl'>Estudios</p>
                <div>
                    <Timeline isStudio={true} />  
                </div>
            </div>
        </Layout>
    )
}