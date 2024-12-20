import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";


export const ScrollManager = (props)=>{
    const {section,onSectionChange} = props;
    const {state,dispatch} = useContext(AppContext)

    const data = useScroll()
    const lastScroll = useRef(0)
    const isAnimating = useRef(false)

    data.fill.classList.add("top-0")
    data.fill.classList.add("absolute")

    
    
    

    useEffect(()=>{
        console.log(data.el.clientHeight);
        gsap.to(data.el,{
            duration:0.5,
            scrollTo: section * ((data.el.clientHeight + data.el.clientHeight/2)),
            onStart: ()=>{
                isAnimating.current = true
            },
            onComplete: ()=>{
                isAnimating.current = false
            },
            
        })
        
        
    },[section])
    

    
    
    
    
    useFrame(()=>{
        if(isAnimating.current){
            lastScroll.current = data.scroll.current
            return;
        }
        const curSection = Math.floor(data.scroll.current * data.pages)
        

        
        if(data.scroll.current > lastScroll.current && curSection === 0){
            onSectionChange(1)
            dispatch({type:'APP',payload:1})
        }
        if(data.scroll.current > lastScroll.current + 0.0045 && curSection === 1){
            onSectionChange(2)
            dispatch({type:'APP',payload:2})
        }
        if(data.scroll.current < lastScroll.current  && data.scroll.current < 1.2 / (data.pages - 1)){
            onSectionChange(0)
            dispatch({type:'APP',payload:0})
        }
        if(data.scroll.current < lastScroll.current  && data.scroll.current > 1/(data.pages) ){
            onSectionChange(1)
            dispatch({type:'APP',payload:1})
        }
        
        
        
        lastScroll.current = data.scroll.current
    })
    return null
}