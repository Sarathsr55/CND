import { useEffect, useState } from "react"
import { Section } from "../Components/Section"
import Skills from '../Pages/Skills/Skills'


const SkillSection = () => {
  const [screenWidth,setScreenWidth] = useState(window.innerWidth)
  const [screenHeight,setScreenHeight] = useState(window.innerHeight)


  const windowWidth = ()=>{
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
   }



   useEffect(()=>{
    window.addEventListener("resize",windowWidth)
   })
  return (
    <Section >
        <div id='section-2' className={(screenHeight/screenWidth) <2 && screenWidth < 900 ? "skill-section transY secc2" :"skill-section secc2"} >

        <Skills/>
        </div>
    </Section>
  )
}

export default SkillSection