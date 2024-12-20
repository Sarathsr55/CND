import * as THREE from 'three'
import { CameraControls, Environment, Lightformer, Text } from "@react-three/drei";
import { section } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { Character } from './Character'
import { Dev } from './Dev'
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { get } from "react-scroll/modules/mixins/scroller";
import { vec3 } from "three/examples/jsm/nodes/Nodes.js";

export const Experience = ({ section, avatarScale }) => {

    const actions = ["StandingIdle", "Waving", "StandToSit", "SittingIdle", "SitToType", "Typing", "TypeToSit", "SitToStand"]
    const [action, setAction] = useState(actions[0])
    const [lastSection, setLastSection] = useState(section)

    const ACTION = {
        NONE: 0,
        ROTATE: 1,
        TRUCK: 2,
        OFFSET: 4,
        DOLLY: 8,
        ZOOM: 16,
        TOUCH_ROTATE: 32,
        TOUCH_TRUCK: 64,
        TOUCH_OFFSET: 128,
        TOUCH_DOLLY: 256,
        TOUCH_ZOOM: 512,
        TOUCH_DOLLY_TRUCK: 1024,
        TOUCH_DOLLY_OFFSET: 2048,
        TOUCH_DOLLY_ROTATE: 4096,
        TOUCH_ZOOM_TRUCK: 8192,
        TOUCH_ZOOM_OFFSET: 16384,
        TOUCH_ZOOM_ROTATE: 32768
    }

    const cameraRef = useRef()
    const avatarRef = useRef()
    const groupRef = useRef()

    useEffect(() => {
        cameraRef.current.rotate(degToRad(-20), 0, true)

        setTimeout(() => {
            setAction(actions[1])
        }, 3000)
        {
            section === 0 &&
                setTimeout(() => {
                    setAction(actions[0])
                }, 11800)
        }
    }, [])

    useFrame((state, delta) => {
        if (section === 2) {
            groupRef.current.rotation.y += 0.009  
        }else{
            groupRef.current.rotation.y = 0
        }
        
    })
    


    useEffect(() => {
        if (section === 0) {
            setLastSection(0)
            setAction(actions[0])
        }
        if (section === 1 && lastSection === 0) {
            setLastSection(1)
            setTimeout(() => {
                setAction(actions[2])
            }, 2000)
            setTimeout(() => {
                setAction(actions[3])
            }, 3400)
        }
        if (section === 1 && lastSection === 2) {
            setAction(actions[3])
        }
        if (section === 2) {
            setLastSection(2)
            setAction(actions[4])
            setTimeout(() => {
                setAction(actions[5])
            }, 500)
            cameraRef.current.rotate(degToRad(-145), 0, true)
          
           

        }
        if (section === 1 && lastSection === 2) {
            setAction(actions[3])
            cameraRef.current.rotate(degToRad(145), 0, true)
           
        }
        if (section === 0 && (lastSection === 1 || lastSection === 2)) {
            setAction(actions[7])
            setTimeout(() => {
                setAction(actions[0])
            }, 1000)
        }
    }, [section])

    return (
        <>
            <CameraControls
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enablePan={false}
                mouseButtons={{ left: ACTION.ROTATE, wheel: ACTION.NONE }}
                touches={{ one: ACTION.TOUCH_ROTATE }}
                ref={cameraRef}
            />
            <ambientLight />
            <hemisphereLight />
            <directionalLight position={[-2, 8, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <mesh ref={groupRef} >
                <group position={[0, -1, 0]}>
                    <Character avatarScale={avatarScale} action={action} section={section} />
                </group>
                <group position={[1.19, -1, 0]}>
                    {
                        <group ref={avatarRef} scale={0.29} rotation={[degToRad(0), degToRad(140), degToRad(0)]} >
                            <Dev avatarScale={avatarScale} section={section} />
                        </group>
                    }
                </group>
                <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, -1, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial transparent opacity={0.2} />


                    <mesh position={[0, 0, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"blue"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[0, 1.5, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"red"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[0, -1.5, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"red"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[1.2, 0.8, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"blue"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[1.2, -0.8, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"blue"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[1.2, 2.2, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"red"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[1.2, -2.2, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"red"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[-1.2, 0.8, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"blue"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[-1.2, -0.8, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"blue"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[-1.2, 2.2, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"red"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh position={[-1.2, -2.2, 0]} scale={0.7} >
                        <ringGeometry args={[0.85, 1, 6, 1]} />
                        <meshStandardMaterial emissive={"red"} emissiveIntensity={5} toneMapped={false} />
                    </mesh>

                </mesh>
            </mesh>
            <EffectComposer>
                <Bloom mipmapBlur intensity={0.1} luminanceThreshold={1} />
            </EffectComposer>
            <Environment resolution={512}>
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />

                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />

                <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>
        </>
    )
}