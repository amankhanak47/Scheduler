import React, { useRef } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import "./navbar.css"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ name, user }) => {
   const refprofile = useRef(null);
  const handleuserinfo = (e) => {
    console.log(user);
    refprofile.current.click()
  }
const navigate=useNavigate()
  const handlelogout = (e) => {
    e.preventDefault();
    localStorage.setItem('faculty-token', "")
    localStorage.setItem('student-token', "")
    navigate('/')
    
  }
  return (
    <div className='navbar'>
      <p>Welcome {name}!</p>
      <div className='icons'>

        



          <Button onClick={handleuserinfo} ><PersonIcon className='nav-icon' fontSize='large' /></Button>
      </div>
      <button type="button" ref={refprofile} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel1">Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
              <form>
                <div className='details'><strong>NAME:</strong><div className='info'>{user.name}</div></div>
                <div className='details'><strong>BRANCH:</strong><div className='info'>{user.branch}</div></div>
                <div className='details'><strong>EMAIL:</strong><div className='info'>{user.email}</div></div>
                <button className='details-btn' onClick={handlelogout}>Logout</button>
</form>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
