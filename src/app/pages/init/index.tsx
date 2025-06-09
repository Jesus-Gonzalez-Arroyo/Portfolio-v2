import {AboutMe, Dates, Projects, Skils} from '../../sections/index'

export default function Init() {
    return (
        <div>
            <div className='h-[100vh] xl:h-[80vh]'>
                <AboutMe/> 
            </div>
            <div className='sm:mb-[10%] xl:my-[0%] xl:mb-[5%]'>
                <Dates/>
            </div>
            <div className='mb-40'>
                <Projects/>
            </div>
            <div className='pb-40'>
                <Skils/>
            </div>
        </div>
    )
}
