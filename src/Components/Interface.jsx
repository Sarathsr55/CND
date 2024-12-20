import { Html, useScroll } from "@react-three/drei"
import AboutSection from "../Sections/AboutSection"
import HomeSection from "../Sections/HomeSection"
import ProjectsSection from "../Sections/ProjectsSection"
import { useThree } from "@react-three/fiber"


export const Interface = (props)=>{

    const {section} = props
    const scrollData = useScroll()

    console.log(section);
    
    
    return <>
       <HomeSection/>
        <AboutSection/>
        <ProjectsSection/>
    </>
}