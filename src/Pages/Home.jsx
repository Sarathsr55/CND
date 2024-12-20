import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Avatar from '../models/Avatar'
import { Bounds, ContactShadows, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import * as THREE from 'three';
import Dev from '../models/Scene1'
import Floor from '../models/Floor'
import { Sarath } from '../models/Sarath'
import HomeSection from '../Sections/HomeSection'
import AboutSection from '../Sections/AboutSection'
import ProjectsSection from '../Sections/ProjectsSection'
import { ScrollManager } from '../Components/ScollManager'
import { Experience } from '../Components/Experience'
import SkillSection from '../Sections/SkillSection'
import { AppContext } from '../App'
import NavBar from '../Components/NavBar/NavBar'
import gsap from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)



const Home = () => {

    const [section,setSection] = useState(0)
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)

    const {state,dispatch} = useContext(AppContext)
    const adjustAvatarForScreenSize = () => {
        let screenScale = null
        let screenPosition = [30, 10, 50]
        let rotation = [0, 0, 0]

        if (screenWidth < 768) {
            screenScale = [0.8, 0.8, 0.8]
        } else {
            screenScale = [1, 1, 1]
        }


        return [screenScale, screenPosition, rotation]
    }

   const windowWidth = ()=>{
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth)
   }

   useEffect(()=>{
    window.addEventListener("resize",windowWidth)
   })

   useEffect(()=>{
    adjustAvatarForScreenSize()
   },[screenWidth])
    

    const [avatarScale, avatarPosition, avatarRotation] = adjustAvatarForScreenSize()

    console.log(state);
    

   

    

    return (
        <div >

            <NavBar html />
            <Canvas
                camera={{ position: [1, 1.5, 2.5], fov: 50 }}
                gl={{ preserveDrawingBuffer: true }}
                style={{ height: '100vh' }}
                shadows
            >
                <color attach="background" args={["black"]} />
                <fog attach="fog" args={['black', 10, 100]} />
                <Experience section={section} avatarScale={avatarScale} />
                <ScrollControls pages={3} damping={0.5} >
                    <ScrollManager section={section} onSectionChange={setSection}  /> 
                    <Scroll html  >
                        <HomeSection  section={section} />
                        <SkillSection  section={section} />
                        <ProjectsSection  section={section} />
                    </Scroll>
                </ScrollControls>

            </Canvas>
        </div>
    )
}

export default Home