/* import Image from "next/image" */
import {CardProject} from '../components/cardProject'
import CreditCard from '../../../public/creditCard.png'
import Crud from '../../../public/crud.png'
import JuniorLading from '../../../public/juniorLading.png'
import Farmazul from '../../../public/farmazul.png'
import Casazul from '../../../public/casazul.png'

export function Projects() {
    return (
        <div>
            <div className='mb-20'>
                <h2 className="text-3xl text-center">Proyectos</h2>
            </div>
            <div>
                <div className="flex flex-wrap gap-5 w-[80%] max-w-[80%] m-auto">
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='Farmazul' image={Farmazul} alt='Farmazul' />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='Casazul' image={Casazul} alt='Casazul' />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='JuniorDev' image={JuniorLading} alt='LandingPage junior dev' />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='CreditCard' image={CreditCard} alt='CreditCardComponent' />
                    </div>
                    <div className="w-[45%] m-auto min-w-[400px]">
                        <CardProject title='CRUD Angular' image={Crud} alt='Crud con angular' />
                    </div>
                </div>
            </div>
        </div>
    )
}
