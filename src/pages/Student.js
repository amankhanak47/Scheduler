import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import "./student.css"

const Student = () => {
  const [user, setUser] = useState([])
  const [name, setName] = useState()
  const [faculty, setFaculty] = useState([])
  const navigate=useNavigate()
  const getnotes = async () => {
    //api calls
    const response = await fetch(`https://hackelite1.herokuapp.com/auth/getstudent`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('student-token')
      },
       
    });
    const json = await response.json();
   
    setUser(json);
    
  };
  useEffect(() => {
    getnotes()
  }, [])
// console.log(name)
  useEffect(() => {
    getfaculty()
  })
   const getfaculty = async () => {
    //api calls
     
    const response = await fetch(`https://hackelite1.herokuapp.com/auth/getfacultyinfo`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
           
        name: name
          }),
    });
    const json = await response.json();
   
    setFaculty(json);
    
  };


  
  if (faculty.length === 1) {
    navigate("/studentrequest");
    console.log(faculty)
   localStorage.setItem('faculty-slots',JSON.stringify(faculty))
    
  }
    return (
      <>
      <Navbar name={user.name} user={user} />
            <div className='student'>
                <div className='text'><h1>Enter the faculty Name:</h1></div>
                <div>
<input className='student-input' onChange={(e)=>setName(e.target.value)} type="text" />
         <button onClick={getfaculty} className='student-search-btn'>Search</button>
                </div>
          
            </div>
            </>
  )
}

export default Student

