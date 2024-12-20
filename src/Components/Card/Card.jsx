import React, { useEffect, useState } from 'react'
import './Card.css'
import { div } from 'framer-motion/client'
import Seperator from '../Seperator'

const Card = ({ icon, title, details, height, width, borderColour, cardHeight, cardWidth }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [cardOpen, setCardOpen] = useState(false)

  const windowWidth = () => {
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", windowWidth)
  })
  return (
    <div className="card" onClick={() => setCardOpen(!cardOpen)} style={{ border: borderColour ? `2px solid ${borderColour}` : '2px solid #915eff', height: cardHeight ? cardHeight : '200px', width: cardWidth ? cardWidth : '200px', boxShadow: borderColour ? `1px 2px 15px ${borderColour}` : '1px 2px 15px #915eff' }}>
      {screenWidth < 500 ?
        <div>
          {
            cardOpen ?
              <div style={{display:'flex',flexDirection:'column'}}>   
                <span style={{ fontSize: '16px' }} >{title}</span>
                <Seperator height={5} />
                <span style={{ fontSize: '12px' }}>{details}</span>
              </div>
              :
              <div style={{display:'flex',flexDirection:'column'}}>
                <img style={{ height: height, width: width, objectFit:'contain'}} src={icon} alt="" />
                <span style={{ fontSize: '16px' }} >{title}</span>
              </div>
          }
        </div>
        :
        <div style={{display:'flex',flexDirection:'column'}}>
          <img style={{ height: height, width: width , objectFit:'contain'}} src={icon} alt="" />
          <span style={{ fontSize: '16px' }} >{title}</span>
          <Seperator height={2} />
          <span style={{ fontSize: '12px' }}>{details}</span>
        </div>
      }
    </div>
  )
}

export default Card