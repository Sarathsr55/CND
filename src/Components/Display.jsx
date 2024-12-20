import React, { useState, useContext, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Waving from '../assets/wavingHand.svg'

import { motion } from "framer-motion"
import './Style.css'



const Display = () => {




  const [top, setTop] = useState(250)
  const [left, setLeft] = useState('12%')
  const [right, setRight] = useState(200)
  const [height, setHeight] = useState(77)
  const [width, setWidth] = useState(350)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [marginLeft, setMarginLeft] = useState(0)
  const [marginRight, setMarginRight] = useState(0)

  const [text] = useTypewriter({
    words: ["I'm a MERN Stack Web Developer", "I Develop Mobile Applications ", 'I can Develop 3D Animation Websites'],
    loop: {}
  })



  return (
    <div className='secc1'>
      {/* <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: (window.innerWidth * 25) / 100,
        zIndex: 50
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100vh',
        width: (window.innerWidth * 25) / 100,
        zIndex: 50
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: window.innerHeight < 500 ? (window.innerHeight * 10) / 100 : (window.innerHeight * 25) / 100,
        zIndex: 50
      }} /> */}
      <div className={window.innerWidth < 800 ? 'center' : ''} style={{
        position: 'absolute',
        top: top,
        zIndex: 100,
        width: width,
        height: height,
        left: left,
        right: right,
        transition: '2s ease'
      }}>

        <div className='ccc' style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
            <div style={{
              height: 15,
              width: 15,
              background: '#915eff',
              borderRadius: '50%'
            }}
            />

            <div style={{
              height: 150,
              width: 2,
              background: 'linear-gradient(310deg, rgba(145,94,255,0.01) 0%, rgba(145,94,255,1) 100%)'
            }}
            />

          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', width: 150, justifyContent: 'space-around' }}>
                <h1 style={{ color: 'white', marginBottom: 0, fontFamily: 'Ubuntu', fontSize: 45 }} >Hai </h1>
                <img className='waving-hand' height={60} width={60} src={Waving} />
              </div>
              <h6 style={{ color: 'white', width: 350, margin: 0, fontFamily: 'Ubuntu', fontSize: 35,paddingLeft:5 }}>I'm <span style={{ color: '#915eff' }} >Sarath</span></h6>
            </div>
            <h3 style={{ color: 'white', marginTop: 5,marginLeft:5, fontFamily: 'Comfortaa', width: 300 }} > {text} <Cursor /></h3>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Display