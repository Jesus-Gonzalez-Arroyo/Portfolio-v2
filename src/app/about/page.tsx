import Layout from '../layouts/layout'
import { Dates } from '../sections/dates'
import Timeline from '../components/timeline'

export default function AboutMe() {
    return (
        <Layout>
            <div className='flex mt-[8%] items-center justify-center px-4'>
                <div className='max-w-5xl w-full text-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                        Sobre mí
                    </h1>
                    <div className='mb-12'>
                        <p className='text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
                            Con <span className='text-blue-400 font-semibold'>3 años de experiencia</span> y un buen historial de proyectos y colaboraciones, estoy dispuesto y preparado para afrontar cualquier reto.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='my-16 md:my-20'>
                <Dates />
            </div>
            
            <div className='max-w-6xl mx-auto px-4 md:px-8 mb-20'>
                <div className='flex items-center gap-3 mb-8'>
                    <span className='w-2 h-10 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full'></span>
                    <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Experiencia</h2>
                </div>
                <div>
                    <Timeline isStudio={false} />
                </div>
            </div>
            
            <div className='max-w-6xl mx-auto px-4 md:px-8 mb-20'>
                <div className='flex items-center gap-3 mb-8'>
                    <span className='w-2 h-10 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full'></span>
                    <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Estudios</h2>
                </div>
                <div>
                    <Timeline isStudio={true} />
                </div>
            </div>
        </Layout>
    )
}