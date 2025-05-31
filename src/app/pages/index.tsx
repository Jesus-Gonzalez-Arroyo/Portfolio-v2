import { AboutMe, Experiencie, Skils, Projects, Contact } from "../sections/index";

export default function Init () {
    return (
        <div className="">
            <div className="h-screen">
                <AboutMe/>
            </div>
            <div id="experiencie">
                <Experiencie/>
            </div>
            <div id="projects">
                <Projects/>
            </div>
            <div id="skils">
                <Skils/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    )
}