import { green } from "@mui/material/colors";
import { color } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import "./facultyschedule.css";

const StudentRequest = () => {
  const facultyslotjson = localStorage.getItem("faculty-slots");
  const facultyslot = JSON.parse(facultyslotjson);
  // console.log(facultyslot[0]);
// 
  // console.log(facultyslot[0].name);
  const [slotid, setSlotId] = useState(null);
  const [available, setAvailable] = useState(null);
  const [user, setUser] = useState([]);

    // const slots = response.json();
  const refsucess = useRef(null);
  const handlebook =async (e) => {
    e.preventDefault();
       document.getElementById(slotid).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #E76360`
       document.getElementById(slotid).innerText = "Occupied"
       updateslot(slotid);
    console.log(facultyslot[0].email, user.email, slotid, user.name, facultyslot[0].name)
    alert("Congragulation your appointment have sucessfully booked")
       ref.current.click()
    const response = await fetch(`https://hackelite1.herokuapp.com/auth/sendmail`, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fltemail: facultyslot[0].email,
        stdemail: user.email,
        time: slotid,
        stdname:user.name,
        fltname:facultyslot[0].name,
        
      }),
    });


    
    //   console.log("free")
      
  };
  const updateslot = async (slotid) => {
    const response = await fetch(`https://hackelite1.herokuapp.com/auth/updateslot`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        faculty: facultyslot[0].name,
        slotid: slotid,
        available: false,
      }),
    });
    const slots = response.json();
    // console.log(json)

    // console.log(slots);

    // setNotes(notes)
  };
  const getnotes = async () => {
    const handle_change_slot = (event) => {
      setSlotId(event.target.id);
    };

    const response = await fetch(`https://hackelite1.herokuapp.com/auth/getstudent`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("student-token"),
      },
    });
    const json = await response.json();

    setUser(json);
  };
  useEffect(() => {
    getnotes();
    if (facultyslot[0].mon1) {
      document.getElementById(
        "mon1"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("mon1").innerText = "Free";
    }
    if (facultyslot[0].mon2) {
      document.getElementById(
        "mon2"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("mon2").innerText = "Free";
    }
    if (facultyslot[0].mon3) {
      document.getElementById(
        "mon3"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("mon3").innerText = "Free";
    }
    if (facultyslot[0].mon4) {
      document.getElementById(
        "mon4"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("mon4").innerText = "Free";
    }
    if (facultyslot[0].mon5) {
      document.getElementById(
        "mon5"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("mon5").innerText = "Free";
    }
    if (facultyslot[0].mon6) {
      document.getElementById(
        "mon6"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("mon6").innerText = "Free";
    }
    if (facultyslot[0].mon7) {
      document.getElementById(
        "mon7"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("mon7").innerText = "Free";
    }
    if (facultyslot[0].tu1) {
      document.getElementById(
        "tu1"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("tu1").innerText = "Free";
    }
    if (facultyslot[0].tu2) {
      document.getElementById(
        "tu2"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("tu2").innerText = "Free";
    }
    if (facultyslot[0].tu3) {
      document.getElementById(
        "tu3"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("tu3").innerText = "Free";
    }
    if (facultyslot[0].tu4) {
      document.getElementById(
        "tu4"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("tu4").innerText = "Free";
    }
    if (facultyslot[0].tu5) {
      document.getElementById(
        "tu5"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("tu5").innerText = "Free";
    }
    if (facultyslot[0].tu6) {
      document.getElementById(
        "tu6"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("tu6").innerText = "Free";
    }
    if (facultyslot[0].tu7) {
      document.getElementById(
        "tu7"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("tu7").innerText = "Free";
    }
    if (facultyslot[0].wed1) {
      document.getElementById(
        "wed1"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("wed1").innerText = "Free";
    }
    if (facultyslot[0].wed2) {
      document.getElementById(
        "wed2"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("wed2").innerText = "Free";
    }
    if (facultyslot[0].wed3) {
      document.getElementById(
        "wed3"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("wed3").innerText = "Free";
    }
    if (facultyslot[0].wed4) {
      document.getElementById(
        "wed4"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("wed4").innerText = "Free";
    }
    if (facultyslot[0].wed5) {
      document.getElementById(
        "wed5"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("wed5").innerText = "Free";
    }
    if (facultyslot[0].wed6) {
      document.getElementById(
        "wed6"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("wed6").innerText = "Free";
    }
    if (facultyslot[0].wed7) {
      document.getElementById(
        "wed7"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("wed7").innerText = "Free";
    }
    if (facultyslot[0].thu1) {
      document.getElementById(
        "thu1"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("thu1").innerText = "Free";
    }
    if (facultyslot[0].thu2) {
      document.getElementById(
        "thu2"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("thu2").innerText = "Free";
    }
    if (facultyslot[0].thu3) {
      document.getElementById(
        "thu3"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("thu3").innerText = "Free";
    }
    if (facultyslot[0].thu4) {
      document.getElementById(
        "thu4"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("thu4").innerText = "Free";
    }
    if (facultyslot[0].thu5) {
      document.getElementById(
        "thu5"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("thu5").innerText = "Free";
    }
    if (facultyslot[0].thu6) {
      document.getElementById(
        "thu6"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("thu6").innerText = "Free";
    }
    if (facultyslot[0].thu7) {
      document.getElementById(
        "thu7"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("thu7").innerText = "Free";
    }
    if (facultyslot[0].fri1) {
      document.getElementById(
        "fri1"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("fri1").innerText = "Free";
    }
    if (facultyslot[0].fri2) {
      document.getElementById(
        "fri2"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("fri2").innerText = "Free";
    }
    if (facultyslot[0].fri3) {
      document.getElementById(
        "fri3"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("fri3").innerText = "Free";
    }
    if (facultyslot[0].fri4) {
      document.getElementById(
        "fri4"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("fri4").innerText = "Free";
    }
    if (facultyslot[0].fri5) {
      document.getElementById(
        "fri5"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("fri5").innerText = "Free";
    }
    if (facultyslot[0].fri6) {
      document.getElementById(
        "fri6"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("fri6").innerText = "Free";
    }
    if (facultyslot[0].fri7) {
      document.getElementById(
        "fri7"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("fri7").innerText = "Free";
    }
    if (facultyslot[0].sat1) {
      document.getElementById(
        "sat1"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("sat1").innerText = "Free";
    }
    if (facultyslot[0].sat2) {
      document.getElementById(
        "sat2"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("sat2").innerText = "Free";
    }
    if (facultyslot[0].sat3) {
      document.getElementById(
        "sat3"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("sat3").innerText = "Free";
    }
    if (facultyslot[0].sat4) {
      document.getElementById(
        "sat4"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("sat4").innerText = "Free";
    }
    if (facultyslot[0].sat5) {
      document.getElementById(
        "sat5"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("sat5").innerText = "Free";
    }
    if (facultyslot[0].sat6) {
      document.getElementById(
        "sat6"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("sat6").innerText = "Free";
    }
    if (facultyslot[0].sat7) {
      document.getElementById(
        "sat7"
      ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #58C268`;
      document.getElementById("sat7").innerText = "Free";
    }
  }, []);

  // } else if (facultyslot[0].mon1 === false) {
  //   document.getElementById(
  //     "mon1"
  //   ).style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #E76360`
  //   document.getElementById("mon1").innerText = "Occupied";
  // }

  //
  const handle_change_slot = (event) => {
    setSlotId(event.target.id);
    console.log(event.target.innerHTML)
    if (event.target.innerHTML === "Occupied") {
     alert("this slot is already occupied")
    }
    else {
      
      ref.current.click();
    }
  };
  const ref = useRef(null);

  return (
    <div>
      <Navbar name={user.name} user={user} />

      
      
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form-come-centre">
                <button
                  type="button"
                  onClick={handlebook}
                  className="btn btn-primary faculty-form-buttons"
                >
                  Book Slot
                </button>

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
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="mon1"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="mon2"
            >
              Occupied
            </div>
            <div className="faculty-slot-break"></div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="mon3"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="mon4"
            >
              Occupied
            </div>
            <div className="faculty-slot-lunch"></div>

            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="mon5"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="mon6"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="mon7"
            >
              Occupied
            </div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">tue</div>
          <div className="faculty-all-slots">
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="tu1"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="tu2"
            >
              Occupied
            </div>
            <div className="faculty-slot-break"></div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="tu3"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="tu4"
            >
              Occupied
            </div>
            <div className="faculty-slot-lunch"></div>

            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="tu5"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="tu6"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="tu7"
            >
              Occupied
            </div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">wed</div>
          <div className="faculty-all-slots">
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="wed1"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="wed2"
            >
              Occupied
            </div>
            <div className="faculty-slot-break"></div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="wed3"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="wed4"
            >
              Occupied
            </div>
            <div className="faculty-slot-lunch"></div>

            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="wed5"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="wed6"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="wed7"
            >
              Occupied
            </div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">thur</div>
          <div className="faculty-all-slots">
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="thu1"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="thu2"
            >
              Occupied
            </div>
            <div className="faculty-slot-break"></div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="thu3"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="thu4"
            >
              Occupied
            </div>
            <div className="faculty-slot-lunch"></div>

            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="thu5"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="thu6"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="thu7"
            >
              Occupied
            </div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">fri</div>
          <div className="faculty-all-slots">
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="fri1"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="fri2"
            >
              Occupied
            </div>
            <div className="faculty-slot-break"></div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="fri3"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="fri4"
            >
              Occupied
            </div>
            <div className="faculty-slot-lunch"></div>

            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="fri5"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="fri6"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="fri7"
            >
              Occupied
            </div>
          </div>
        </div>
        <div className="faculty-days">
          <div className="faculty-name">sat</div>
          <div className="faculty-all-slots">
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="sat1"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="sat2"
            >
              Occupied
            </div>
            <div className="faculty-slot-break"></div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="sat3"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="sat4"
            >
              Occupied
            </div>
            <div className="faculty-slot-lunch"></div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="sat5"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="sat6"
            >
              Occupied
            </div>
            <div
              className="faculty-slot-std-page"
              onClick={handle_change_slot}
              id="sat7"
            >
              Occupied
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRequest;
