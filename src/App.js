import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import FacultySchedule from './pages/FacultySchedule';

import Home from './pages/Home';
import FacultyLogin from './pages/FacultyLogin';
import StudentLogin from './pages/StudentLogin';
import StudentSignup from './pages/StudentSignup';
import FacultySignup from './pages/FacultySignup';
import Student from './pages/Student';
import StudentRequest from './pages/StudentRequest';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
          {/* <Route path="/signup" element={<Signup showalert={showalert}/>}/> */}
          <Route path="/" element={<Home />} />
         
          <Route path="/facultylogin" element={<FacultyLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="/faculty-signup" element={<FacultySignup />} />
          <Route path="/faculty" element={<FacultySchedule/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/studentrequest" element={<StudentRequest/>} />

         
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





