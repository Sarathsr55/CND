import React from 'react'
import './Contact.css'
import images from '../../images'

const Contact = () => {
  return (
    <div className='contact_container'>
         <div className="content_container">
         </div>
            <div className="image_container">
            <img className='contact_image' src={images.PHONE} alt="" />
            <img className='contact_image' src={images.GMAIL} alt="" />
            <img className='contact_image' src={images.INSTA} alt="" />
            <img className='contact_image' src={images.FB} alt="" />
            <img className='contact_image' src={images.WHATSAPP} alt="" />
            </div>
         
    </div>
  )
}

export default Contact