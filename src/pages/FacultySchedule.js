import { green } from "@mui/material/colors";
import { color } from "@mui/system";
import React, {useEffect, useRef, useState} from "react";
import Navbar from "../Components/Navbar";
import "./facultyschedule.css";

const FacultySchedule = () => {
  const [slotid, setSlotId] = useState(null);
  const [available, setAvailable] = useState(true);
  // const [free, setFree] = useState( document.getElementsByClassName("free")[0].style.visiblity);
  // const [occu, setOccu] = useState( document.getElementsByClassName("occu")[0].style.visiblity);
  // const [available, setAvailable] = useState(Occupied);
const [user,setUser]=useState([])
  const getnotes = async () => {
    //api calls
    const response = await fetch(`https://hackelite1.herokuapp.com/auth/getfaculty`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('faculty-token')
      },
    });
    const json = await response.json();
   
    setUser(json);
    
  };
  useEffect(() => {
    getnotes()
  }, [])
  // console.log(user)


 const updateslot = async (slotid,available) => {
    //api calls
    const response = await fetch(`https://hackelite1.herokuapp.com/auth/updateslot/${user._id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('faculty-token'),
      },
      body: JSON.stringify({slotid,available}),
    });
    const slots = response.json();
    // console.log(json)
    
    
    console.log(slots)

    // setNotes(notes)
  };


 if (user.mon1) {
    document.getElementById(
      "mon1"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("mon1").innerText = "Free";
  }
   if (user.mon2) {
    document.getElementById(
      "mon2"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("mon2").innerText = "Free";
  }
     if (user.mon3) {
    document.getElementById(
      "mon3"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("mon3").innerText = "Free";
  }
     if (user.mon4) {
    document.getElementById(
      "mon4"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("mon4").innerText = "Free";
  }
     if (user.mon5) {
    document.getElementById(
      "mon5"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("mon5").innerText = "Free";
  }
     if (user.mon6) {
    document.getElementById(
      "mon6"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("mon6").innerText = "Free";
  }
     if (user.mon7) {
    document.getElementById(
      "mon7"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("mon7").innerText = "Free";
  }
    if (user.tu1) {
    document.getElementById(
      "tu1"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("tu1").innerText = "Free";
  }
   if (user.tu2) {
    document.getElementById(
      "tu2"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("tu2").innerText = "Free";
  }
     if (user.tu3) {
    document.getElementById(
      "tu3"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("tu3").innerText = "Free";
  }
     if (user.tu4) {
    document.getElementById(
      "tu4"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("tu4").innerText = "Free";
  }
     if (user.tu5) {
    document.getElementById(
      "tu5"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("tu5").innerText = "Free";
  }
     if (user.tu6) {
    document.getElementById(
      "tu6"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("tu6").innerText = "Free";
  }
     if (user.tu7) {
    document.getElementById(
      "tu7"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("tu7").innerText = "Free";
  }
    if (user.wed1) {
    document.getElementById(
      "wed1"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("wed1").innerText = "Free";
  }
   if (user.wed2) {
    document.getElementById(
      "wed2"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("wed2").innerText = "Free";
  }
     if (user.wed3) {
    document.getElementById(
      "wed3"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("wed3").innerText = "Free";
  }
     if (user.wed4) {
    document.getElementById(
      "wed4"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("wed4").innerText = "Free";
  }
     if (user.wed5) {
    document.getElementById(
      "wed5"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("wed5").innerText = "Free";
  }
     if (user.wed6) {
    document.getElementById(
      "wed6"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("wed6").innerText = "Free";
  }
     if (user.wed7) {
    document.getElementById(
      "wed7"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("wed7").innerText = "Free";
  }
    if (user.thu1) {
    document.getElementById(
      "thu1"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("thu1").innerText = "Free";
  }
   if (user.thu2) {
    document.getElementById(
      "thu2"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("thu2").innerText = "Free";
  }
     if (user.thu3) {
    document.getElementById(
      "thu3"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("thu3").innerText = "Free";
  }
     if (user.thu4) {
    document.getElementById(
      "thu4"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("thu4").innerText = "Free";
  }
     if (user.thu5) {
    document.getElementById(
      "thu5"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("thu5").innerText = "Free";
  }
     if (user.thu6) {
    document.getElementById(
      "thu6"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("thu6").innerText = "Free";
  }
     if (user.thu7) {
    document.getElementById(
      "thu7"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("thu7").innerText = "Free";
  }
    if (user.fri1) {
    document.getElementById(
      "fri1"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("fri1").innerText = "Free";
  }
   if (user.fri2) {
    document.getElementById(
      "fri2"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("fri2").innerText = "Free";
  }
     if (user.fri3) {
    document.getElementById(
      "fri3"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("fri3").innerText = "Free";
  }
     if (user.fri4) {
    document.getElementById(
      "fri4"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("fri4").innerText = "Free";
  }
     if (user.fri5) {
    document.getElementById(
      "fri5"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("fri5").innerText = "Free";
  }
     if (user.fri6) {
    document.getElementById(
      "fri6"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("fri6").innerText = "Free";
  }
     if (user.fri7) {
    document.getElementById(
      "fri7"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("fri7").innerText = "Free";
  }
    if (user.sat1) {
    document.getElementById(
      "sat1"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("sat1").innerText = "Free";
  }
   if (user.sat2) {
    document.getElementById(
      "sat2"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("sat2").innerText = "Free";
  }
     if (user.sat3) {
    document.getElementById(
      "sat3"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("sat3").innerText = "Free";
  }
     if (user.sat4) {
    document.getElementById(
      "sat4"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("sat4").innerText = "Free";
  }
     if (user.sat5) {
    document.getElementById(
      "sat5"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("sat5").innerText = "Free";
  }
     if (user.sat6) {
    document.getElementById(
      "sat6"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("sat6").innerText = "Free";
  }
     if (user.sat7) {
    document.getElementById(
      "sat7"
    ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
    document.getElementById("sat7").innerText = "Free";
  }
  
  





    const handle_change_slot = (event) => {
      setSlotId(event.target.id);
      // console.log(event.target.innerText)
      // if (event.target.innerText === "FREE") {

        // setAvailable(true)
        // console.log(available)
        // document.getElementsByClassName("free")[0].style.visiblity = "hidden"
          // setAvailable(false)
        
        // 
      // }
      // else if(event.target.innerText === "OCCUPIED") {
        // setAvailable(false)
        // console.log(available)
        // document.getElementsByClassName("occu")[0].style.visiblity = "hidden"
        // setAvailable(true)
      // }
      
      // console.log(slotid)
        ref.current.click();
  }
  // document.getElementsByClassName("occu")[0].style.visibility= "visible"
  //       document.getElementsByClassName("free")[0].style.visibility = "visible"

    const ref = useRef(null);
   

    const handlefree = (e) => {
      e.preventDefault();
      document.getElementById(slotid).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`
      document.getElementById(slotid).innerText = "Free"
      updateslot(slotid, true);
      //   console.log("free")
      ref.current.click()

      
      setAvailable(true)
    }
    const handleoccupied = (e) => {
        e.preventDefault();
      document.getElementById(slotid).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #E76360`
      document.getElementById(slotid).innerText = "Occupied"
      updateslot(slotid, false);
     
      ref.current.click()
    //  setAvailable(false)
    }


  return (
    <div>
      <Navbar name={user.name} user={user} />
         
      



<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Change Status</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
              <form>
                <button  type="button" onClick={handleoccupied} className="btn btn-primary faculty-form-buttons occu">Occupied</button><button type="button" onClick={handlefree} className="btn btn-primary free faculty-form-buttons">Free</button> 

                            
                               {/* <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={ note.etitle.length<3 ||note.edescription.length<5} onClick={handleclick} className="btn btn-primary">Update Note</button> */}
</form>
      </div>
      
    </div>
  </div>
</div>
      <div className="faculty-schedule">
        <div className="faculty-times">
          <div className="faculty-empty"></div>
          <div className="faculty-all-slots">
            <div className="time-slot">9:00AM-10:00AM</div>
            <div className="time-slot">10:00AM-11:00AM</div>
            <div className="faculty-slot-break"></div>
            <div className="time-slot">11:10AM-12:00AM</div>
            <div className="time-slot">12:00AM-1:00AM</div>
            <div className="faculty-slot-lunch"></div>
            <div className="time-slot">1:30AM-2:20AM</div>
            <div className="time-slot">2:20AM-3:10AM</div>
            <div className="time-slot">3:10AM-4:00AM</div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">mon</div>
          <div className="faculty-all-slots">
            <div className="faculty-slot" onClick={handle_change_slot} id="mon1">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="mon2">Occupied</div>
            <div className="faculty-slot-break"></div>
            <div className="faculty-slot" onClick={handle_change_slot} id="mon3">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="mon4">Occupied</div>
            <div className="faculty-slot-lunch"></div>

            <div className="faculty-slot" onClick={handle_change_slot} id="mon5">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="mon6">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="mon7">Occupied</div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">tue</div>
          <div className="faculty-all-slots">
            <div className="faculty-slot" onClick={handle_change_slot} id="tu1">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="tu2">Occupied</div>
            <div className="faculty-slot-break"></div>
            <div className="faculty-slot" onClick={handle_change_slot} id="tu3">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="tu4">Occupied</div>
            <div className="faculty-slot-lunch"></div>

            <div className="faculty-slot" onClick={handle_change_slot} id="tu5">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="tu6">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="tu7">Occupied</div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">wed</div>
          <div className="faculty-all-slots">
            <div className="faculty-slot" onClick={handle_change_slot} id="wed1">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="wed2">Occupied</div>
            <div className="faculty-slot-break"></div>
            <div className="faculty-slot" onClick={handle_change_slot} id="wed3">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="wed4">Occupied</div>
            <div className="faculty-slot-lunch"></div>

            <div className="faculty-slot" onClick={handle_change_slot} id="wed5">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="wed6">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="wed7">Occupied</div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">thur</div>
          <div className="faculty-all-slots">
            <div className="faculty-slot" onClick={handle_change_slot} id="thu1">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="thu2">Occupied</div>
            <div className="faculty-slot-break"></div>
            <div className="faculty-slot" onClick={handle_change_slot} id="thu3">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="thu4">Occupied</div>
            <div className="faculty-slot-lunch"></div>

            <div className="faculty-slot" onClick={handle_change_slot} id="thu5">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="thu6">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="thu7">Occupied</div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">fri</div>
          <div className="faculty-all-slots">
            <div className="faculty-slot" onClick={handle_change_slot} id="fri1">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="fri2">Occupied</div>
            <div className="faculty-slot-break"></div>
            <div className="faculty-slot" onClick={handle_change_slot} id="fri3">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="fri4">Occupied</div>
            <div className="faculty-slot-lunch"></div>

            <div className="faculty-slot" onClick={handle_change_slot} id="fri5">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="fri6">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="fri7">Occupied</div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">sat</div>
          <div className="faculty-all-slots">
            <div className="faculty-slot" onClick={handle_change_slot} id="sat1">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="sat2">Occupied</div>
            <div className="faculty-slot-break"></div>
            <div className="faculty-slot" onClick={handle_change_slot} id="sat3">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="sat4">Occupied</div>
            <div className="faculty-slot-lunch"></div>
            <div className="faculty-slot" onClick={handle_change_slot} id="sat5">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="sat6">Occupied</div>
            <div className="faculty-slot" onClick={handle_change_slot} id="sat7">Occupied</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultySchedule;
