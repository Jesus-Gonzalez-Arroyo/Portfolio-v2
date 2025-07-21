import {CardProject} from '../components/cardProject'
import JuniorLading from '../../../public/juniorLading.png'
import Farmazul from '../../../public/farmazul.png'
import Casazul from '../../../public/casazul.png'
import ApiCatsUsers from '../../../public/api-cats-1.png'

export function Projects() {
    return (
        <div>
            <div className='mb-20'>
                <h2 className="text-3xl text-center">Proyectos</h2>
            </div>
            <div>
                <div className="flex flex-wrap m-auto gap-5 w-[95%] md:w-[80%] 2xl:max-w-[80%]">
                    <div className="w-[95%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='Farmazul' image={Farmazul} alt='Farmazul' id={'1'} />
                    </div>
                    <div className="w-[95%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='Casazul' image={Casazul} alt='Casazul' id={'2'} />
                    </div>
                    <div className="w-[95%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='JuniorDev' image={JuniorLading} alt='LandingPage junior dev' id={'3'} />
                    </div>
                     <div className="w-[100%] m-auto md:w-[100%] lg:w-[45%] xl:w-[47%]">
                        <CardProject title='Api Cats Users' image={ApiCatsUsers} alt='Api Cats Users' id={'5'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
