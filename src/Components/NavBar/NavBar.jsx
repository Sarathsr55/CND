import React, { useEffect, useState, useContext } from 'react'
import { Link, scroller } from 'react-scroll'
import './NavBar.css'
// import { mouseContext } from '../../App'
import { IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'
import { AppContext } from '../../App'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)
const NavBar = () => {
    

    
    // const { state, dispatch } = useContext(mouseContext)
    const {state,dispatch} = useContext(AppContext)

    const [scrollPosition, setScrollPosition] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [isMobileDisplay, setIsMobileDisplay] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const [navPadding,setNavPadding] = useState('0 64px 0 64px')
    const [section,setSection] = useState(0)
    const [classNames,setClassNames] = useState([]) 
    const [lastSection,setLastSection] = useState(section)

    
    // useEffect(()=>{
    //     dispatch({type:'APP',payload:section})
    //     let tests = document.querySelectorAll('.options')
    //     console.log(tests);
        
    //     tests.forEach((test,idx)=>{
    //         test.addEventListener('click',()=>{
    //             if(classNames.length > 0){

    //                 let counter = 0
        
    //                let loop = setInterval(()=>{
    //                     classNames[0].scrollIntoView({
    //                         behavior : "smooth",
    //                     },false)
    //                     counter++
    //                     if(counter>=7){
    //                         clearInterval(loop)
    //                     }
        
    //                },80)
    //             }
    //         })
    //     })
        
    // },[section])

    console.log(classNames);
    

    const onSectionChangeToOne = ()=>{
        setSection(0)
        setClassNames(document.getElementsByClassName('secc1'))
    }
    const onSectionChangeToTwo = ()=>{
        setSection(1)
        setClassNames(document.getElementsByClassName('secc2'))
    }
    const onSectionChangeToThree = ()=>{
        setSection(2)
        setClassNames(document.getElementsByClassName('secc3'))
    }

    useEffect(() => {
        if (screenWidth < 776) {
            setIsMobileDisplay(true)
        }
        else {
            setIsMobileDisplay(false)
        }
    }, [screenWidth])

    // const handleScroll = () => {
    //     const position = window.scrollY
    //     setScrollPosition(position)

    // }

    const windowWidth = ()=>{
        console.log(window.innerWidth);
        setScreenWidth(window.innerWidth)
       }
    
       useEffect(()=>{
        window.addEventListener("resize",windowWidth)
       })

    
       



    return (
        <div className='navbar_container' >
            <div style={{ display: 'flex', padding: screenWidth < 776 ? '0 24px 0 24px': '0 64px 0 64px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div>
                    <h3 style={{ color: 'whitesmoke', fontFamily: 'Ubuntu', fontSize: 30, fontWeight: 'bold' }}>
                        Cloud Nexus Dev
                    </h3>
                </div>

                {/* {
                    isMobileDisplay ?
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <div onClick={() => setIsOpened(!isOpened)} >
                                {
                                    isOpened?
                                        <div style={{color:'white'}} >
                                            <IonIcon icon={close} color={'white'} style={{height:28,width:28}} />
                                        </div>
                                    :
                                    <div>
                                        <div style={{ background: 'white', height: 2, width: 18, margin: '3px 0 3px 0' }} />
                                        <div style={{ background: 'white', height: 2, width: 18, margin: '3px 0 3px 0' }} />
                                        <div style={{ background: 'white', height: 2, width: 18, margin: '3px 0 3px 0' }} />
                                    </div>
                                }
                            </div>
                            {
                                isOpened ?
                                    <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 60,right:15, padding: '10px 20px 10px 20px', background: 'transparent', boxShadow: '0.5px 0.5px 3px #915eff', borderRadius: '16px' }} >
                                        <div className='options' onClick={()=>onSectionChangeToOne()}>Home</div>
                                        <div className='options' onClick={()=>onSectionChangeToTwo()} >Skills</div>
                                        <div className='options' onClick={()=>onSectionChangeToThree()}>Projects</div>
                                        <div className='options'>Contact</div>
                                    </div>
                                    :
                                    <div>

                                    </div>
                            }
                        </div>
                        :
                        <div className='option_container' style={{}} >
                            <div className='options' onClick={()=>onSectionChangeToOne()}>Home</div>
                            <div className='options' onClick={()=>onSectionChangeToTwo()} >Skills</div>
                            <div className='options' onClick={()=>onSectionChangeToThree()}>Projects</div>
                            <div className='options'>Contact</div>

                        </div>
                } */}
            </div>

        </div>
    )
}

export default NavBar