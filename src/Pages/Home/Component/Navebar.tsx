import React from 'react';
import './AllComponent.css'
import {Link} from  'react-router-dom';
import Button from '../../../Component/Button/Button';

function Navebar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark MainNave">
  <div className="container-fluid">
    <img src='data:image/png;base64,UklGRn4EAABXRUJQVlA4WAoAAAAQAAAArAAALgAAQUxQSJwCAAABkEVtmyE538bOIrZt27Zt27aNjm17ENu2nYpt87+o6mptTXQTEROQzuVyud0uWa9L7PW4JD1el2QMqLwQ2T6Rb5X4D1ai/2oOMvk0AONLIAozWg25GGPsRiQuCmOMreQOMunzXKopx24z/tL6mn6CgP57rzP+2o5uER3GSD4TQHwl+JPRRihEfFXOn4hoL8dI+g2Akl9IdgkX7x7JXghQy0qrQtwj+eIAlpL8WLW8C2tRBjI4FcBLAxeLOG9mJt3wEiEz8YLOmTJlyhSoQ+XNmJlJnB4oJeiWLVOJx9xaICzxy3JlyrOHe1nIeYMgqyMWVIJQZ4EZgyBZSeAPwMO5AH9BJQBduDeKeRXaLi4TOjklsaOouHISOWumXYbt3bt37zC5anv37t27UTVPQthEX0aslKtElN93WvSASLOkoiCGVBRBzeBklL8wvB0WTiG652foDROOA5BfcHSapmkTOiTl8JNjszRN03rnCRZ0NVsUJKIchnQXAgj8xen+6sud4fS9YdUS8hnRKCuwWIqoGIAmcjSyqP0SOwmziG5YEmnZL6n5ANDno9TtQvZLZOjJWWF3e5QiovxGFhYSpuKA2GXrN2rUqPUjbg+HyEVrN2rUqMlBjoKBQZC1LvQroklGBsHUWdxegW5tFWEJ0T1baCZUUlJ5EvtI4T9YElfjA+VGapqm5VAWVlqSifhEcm+IiBpJFFZNTYcVU02kz/aYZqAxgGqCQqqB29Aof93QOm2C/BOcNLA4pn+MGYqqb0iyEuIKJF0ArnGSbx2Q2GkB3y3AVQNtAMw0sN4BiZyGrVaU+iF1JjyA+I+l3qZSUAsrkH3tY9GXS4MjgY8z7dZ3wY+7cxPDWQr+D6awb1XIt8p21obnz8qeOx9HaVZQOCC8AQAA0AkAnQEqrQAvAD5tMpZJJCKiISH4CdCADYlADwb7M4wBtgM+A6xb0AP1u60QiLUUTCH9XCseoltNHRuTkUVj+27BeZ2nAyszUNAmmHkwAL/8wxOTT9cAAP5xOY//+bA6K5rdyv//4E7/Anf4E7/wI+bia17L0zYEqiQc9XFrJg4BjR95EYlrzC1P8r+XMQylf2ckuQJGnJAlqdylmOPsXkp/+aadIonHSc9Dcc8DuiLYE4zUxMHXOY886asoz//9Vxf/+oObdy35oOzg2fNCRcV/zRF+YlxBv/miL8xJgddOruVTyZUrTibV/82fXrhXiP//tmbFi8EP4sIApgHCszve5Wzw4WUxbvfldIMPjiYO2ArH6tvXPuKCn9PRhdbDulOMPBs+hMPSRSnXCVYcY1mqZf2d91LKeyy63/t3WZ4SU/z4lFt+MqpFeJbQVLgl2i1f+xEcOf7ti0snIw7G+p7av6VsafjWL2lJzkgb/ndsH3bLYFWa2s4Hk9YjSwz+Yhl3Z3Sgw50eC5ACYP/PMnrxa8qa9mrS4qJtvmjwPxVs/TFcOTsSAHtq9yLyfpQYPySEBge//sPAAAAA' alt="" />
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav margin WordSpacing">
        <li className="nav-item"> 
         <Link className="nav-link text" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link text' to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link text' to='/services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link text' to='/shedule'>Shedule</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link text' to='/gallery'>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link text' to='/blog'>Blog</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link text' to='/contact'>Contact</Link>
        </li>
          </ul>

    </div>
    <div>
        <Button  label='BECAME A MEMBER' />
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navebar
