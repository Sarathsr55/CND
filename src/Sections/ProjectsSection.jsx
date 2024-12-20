import { Section } from '../Components/Section'
import Card from '../Components/Card/Card'
import './Project.css'
import conversation from '../assets/images/conversation.png'
import onlineShopping from '../assets/images/onlineShopping.png'
import Business from '../assets/images/portfolio.png'
import Portfolio from '../assets/images/online-resume.png'
import { useEffect, useState } from 'react'

const ProjectsSection = () => {
  const [screenWidth,setScreenWidth] = useState(window.innerWidth)

  const windowWidth = ()=>{
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth)
   }

   useEffect(()=>{
    window.addEventListener("resize",windowWidth)
   })
  return ( 
    <Section  >
      <div className="main-section secc3" id='section-3'>
        <div className="pro-left-section">
          <Card icon={conversation} height={screenWidth < 776 ? 100 : 100} title={'Chat Application'} details={'React.js, Node.js, Express, MongoDB, Socket.io'} cardHeight={screenWidth< 400 ? 120 : screenWidth < 776 ? 180 : 250} cardWidth={screenWidth<400 ? 120 :150} borderColour={'green'}/>
          <Card icon={Portfolio} height={screenWidth < 776 ? 80 : 100} title={'Portfolio'} details={'React.js, Three.js, Netlify'}  cardHeight={screenWidth< 400 ? 120 :screenWidth < 776 ? 180 : 250} cardWidth={screenWidth<400 ? 120 :150} borderColour={'blue'}/>
        </div>
        <div className="pro-right-section">
          <Card icon={onlineShopping} height={screenWidth < 776 ? 80 : 100}  title={'eCommerce Store'} details={'React.js, Node.js, Express, MongoDB, AWS'} cardHeight={screenWidth< 400 ? 120 :screenWidth < 776 ? 180 : 250} cardWidth={screenWidth<400 ? 120 :150} borderColour={'blue'}/>
          <Card icon={Business} height={screenWidth < 776 ? 80 : 100} title={'Business Websites'} details={'React.js, Node.js, Express & MongoDB'}  cardHeight={screenWidth< 400 ? 120 :screenWidth < 776 ? 180 : 250} cardWidth={screenWidth<400 ? 120 :150} borderColour={'red'}/>
        </div>
      </div>
    </Section>
  )
}

export default ProjectsSection