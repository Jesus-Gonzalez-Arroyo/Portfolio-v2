import { AboutMe, Dates, Projects } from '../sections/index'
import Layout from '../layouts/layout'

export default function Init() {
    return (
        <div>
            <Layout>
                <div className='h-[100vh] 2xl:h-[80vh]'>
                    <AboutMe />
                </div>
                <div className='mb-[10%] xl:my-[0%] xl:mb-[5%]'>
                    <Dates />
                </div>
                <div className='mb-40'>
                    <Projects />
                </div>
            </Layout> 
        </div>
    )
}
