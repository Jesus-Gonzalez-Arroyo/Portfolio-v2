import Layout from '../layouts/layout'
import { CardProject } from '../../app/components/cardProject'
import CreditCard from '../../../public/creditCard.png'
/* import Crud from '../../../public/crud.png' */
import JuniorLading from '../../../public/juniorLading.png'
import Farmazul from '../../../public/farmazul.png'
import Casazul from '../../../public/casazul.png'

export default function Projects() {
    return (
        <Layout>
            <div className='flex mt-[10%] items-center justify-center mb-15'>
                <div className='w-[80%] m-auto text-left'>
                    <p className='text-7xl mb-3'>Proyectos</p>
                    <div className='mb-10'>
                        <p className='text-xl'>Cada proyecto ha sido una oportunidad para mejorar como profesional y asi mismo mejorar la calidad del codigo que escribo.</p>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <div className="flex flex-wrap gap-5 m-auto w-[90%] md:w-[80%]">
                    <div className="w-[100%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='Farmazul' image={Farmazul} alt='Farmazul' id={'1'} />
                    </div>
                    <div className="w-[100%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='Casazul' image={Casazul} alt='Casazul' id={'2'} />
                    </div>
                    <div className="w-[100%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='JuniorDev' image={JuniorLading} alt='LandingPage junior dev' id={'3'} />
                    </div>
                    <div className="w-[100%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='CreditCard' image={CreditCard} alt='CreditCardComponent' id={'4'} />
                    </div>
                    {/* <div className="w-[45%] m-auto min-w-[400px]">
                            <CardProject title='CRUD Angular' image={Crud} alt='Crud con angular' id={'5'} />
                        </div> */}
                </div>
            </div>
        </Layout>
    )
}