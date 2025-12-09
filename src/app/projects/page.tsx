import Layout from '../layouts/layout'
import { CardProject } from '../../app/components/cardProject'
import CreditCard from '../../../public/creditCard.png'
import JuniorLading from '../../../public/juniorLading.png'
import Farmazul from '../../../public/farmazul.png'
import Casazul from '../../../public/casazul.png'
import ApiCatsUsers from '../../../public/api-cats-1.png'
import POS_Restaurant from '../../../public/pos_restaurant.jpg'

export default function Projects() {
    return (
        <Layout>
            <div className='flex mt-[8%] items-center justify-center mb-16 px-4'>
                <div className='max-w-5xl w-full text-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                        Proyectos
                    </h1>
                    <div className='mb-10'>
                        <p className='text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
                            Cada proyecto ha sido una oportunidad para <span className='text-purple-400 font-semibold'>mejorar como profesional</span> y así mismo mejorar la calidad del código que escribo.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='mb-20 max-w-7xl mx-auto px-4 md:px-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    <div className="w-full">
                        <CardProject title='Farmazul' image={Farmazul} alt='Farmazul' id={'1'} />
                    </div>
                    <div className="w-full">
                        <CardProject title='Casazul' image={Casazul} alt='Casazul' id={'2'} />
                    </div>
                    <div className="w-full">
                        <CardProject title='JuniorDev' image={JuniorLading} alt='LandingPage junior dev' id={'3'} />
                    </div>
                    <div className="w-full">
                        <CardProject title='CreditCard' image={CreditCard} alt='CreditCardComponent' id={'4'} />
                    </div>
                    <div className="w-full">
                        <CardProject title='Api Cats Users' image={ApiCatsUsers} alt='Api Cats Users' id={'5'} />
                    </div>
                    <div className="w-full">
                        <CardProject title='App Restaurant' image={POS_Restaurant} alt='App Restaurant' id={'6'} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}