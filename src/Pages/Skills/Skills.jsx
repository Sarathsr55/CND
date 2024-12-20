import React, { useEffect, useState } from 'react'
import './Skills.css'
import mongodb from '../../assets/images/mongodb.png'
import express from '../../assets/images/express1.png'
import react from '../../assets/images/react.png'
import node from '../../assets/images/nodejs.png'
import javascript from '../../assets/images/javascript.png'
import reactnative from '../../assets/images/reactnative.png'
import aws from '../../assets/images/aws.png'
import python from '../../assets/images/python.png'
import threejs from '../../assets/images/threejs.png'
import adobexd from '../../assets/images/adobexd.png'
import photoshop from '../../assets/images/photoshop.png'
import git from '../../assets/images/GitIcon.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'

const Skills = () => {

  
  
  return (
    <div id='skills' className='Skills_container'>
      <div className="skills">
      <h1>I'm proficient in</h1>
      <div className="hex-row">

        <div className="top">
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>

            <div className='skill-content'>
              <img className='cardimage'  src={mongodb} alt="" />
              <p className='caption' >mongoDB</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' style={{height:45}} src={express} alt="" />
              <p className='caption' >Express</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' style={{height:45}} src={react} alt="" />
              <p className='caption' >React</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' style={{height:45}} src={node} alt="" />
              <p className='caption' >Node.js</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
        </div>

      </div>
      <div className="hex-row ">
        <div className="middle even ">
          <div className='hex '>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={reactnative} alt="" />
              <p className='caption' >React Native</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex '>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={javascript} alt="" />
              <p className='caption' >javaScript</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex '>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={aws} alt="" />
              <p className='caption' >aws</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex '>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={html} alt="" />
              <p className='caption' >html</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex '>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={css} alt="" />
              <p className='caption' >css</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
        </div>
      </div>
      <div className="hex-row">

        <div className="top">
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={python} alt="" />
              <p className='caption' >Python</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={threejs} alt="" />
              <p className='caption' >Three js</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={adobexd} alt="" />
              <p className='caption' >Adobe XD</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          <div className='hex'>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={photoshop} alt="" />
              <p className='caption' >Photoshop</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
        </div>

      </div>
      <div className="hex-row ">
        <div className="middle even ">
          <div className='hex '>
            <div className='top_por' />
            <div className='center_por'>
            <div className='skill-content'>
              <img className='cardimage' src={git} alt="" />
              <p className='caption' >git</p>
            </div>
            </div>
            <div className='bottom_por' />
          </div>
          
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills