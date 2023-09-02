import React from 'react'
import './AllComponent.css'
import Button from '../../../Component/Button/Button'

function services() {
  return (
    <>
     <div className="container">
        <div className="row p-5">
            <div className="col-md-6">
            <img src='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about2.png' alt='' />
            </div>
            <div className="col-md-6">
                <div className='padingWager'>
                    <h4 className='text-danger'>______CLIENT FEEDBACK</h4>
                    <h1 className='heading3 py-4'>WHAT OUR CLIENT THIK ABOUT OUR GYM</h1>
                    <h5 className='py-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi corrupti ex cupiditate eum illo aliquam aspernatur iure rerum sint nesciunt fugit, quam nulla repudiandae ut suscipit sed praesentium? Ipsa lore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla amet recusandae error aliquid eligendi adipisci animi expedita cum aspernatur debitis optio saepe incidunt nihil asperiores omnis fuga, culpa quisquam officia?
                    </h5>
                    <Button label='BECAME A SALLER' />
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default services
