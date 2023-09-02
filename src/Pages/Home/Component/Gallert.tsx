import React from 'react'
import './AllComponent.css'
import Button from '../../../Component/Button/Button'

function Gallert() {
  return (
    <>
             <div className="setting">
          <h3 className="text-danger">_____ OUR SERVICE FOR YOU</h3>
        </div>
        <div className="displaywalisetting py-5">
          <div>
            <h1 className="heading1 p">
              PUSH YOUR LIMITS FORWAD <br /> WE OFFER TO YOU
            </h1>
          </div>
          <div className="my-5">
            <Button label="MORE SERVICES" />
          </div>
        </div>
        <div className="container">
            <div className="row p-5">
                <div className="col-md-4 okay">
                    <img src='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png' className='rounded' height={500} width={400} alt='' />
                </div>
                <div className="col-md-4 okay">
                    <img src='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team2.png' className='rounded' height={500} width={400} alt='' />
                </div><div className="col-md-4 okay">
                    <img src='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team3.png' className='rounded' height={500} width={400} alt='' />
                </div>
            </div>
        </div>
 
    </>
  )
}

export default Gallert
