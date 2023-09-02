import React from 'react'
import './AllComponent.css'
import Button from '../../../Component/Button/Button'

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-5">
            < img src='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about.png' alt='....' width={550} height={650} />
          </div>
          <div className="col-md-6 p-5">
            <div className='pading'>
            <h3 className='text-danger'>_____ ABOUT OUER GYM</h3>
            <h1 className='heading1 py-4'>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h1>
            <h5 className='py-5'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</h5>
            <Button label='BECAME A MEMBER' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
