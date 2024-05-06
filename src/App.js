import "./App.css";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timetable from "./Pages/Timetable";
import Student from "./Pages/Student";
import Attendance from "./Pages/Attendance";
import Notice from "./Pages/Notice";
import Profile from "./Pages/Profile";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/SignIn" element={<SignIn />}/>
        <Route exact path="/Timetable" element={<Timetable />}/>
        <Route exact path="/Student" element={<Student/>}></Route>
        <Route exact path="/Student/Attendance" element={<Attendance/>}></Route>
        <Route exact path="/Student/Notice" element={<Notice />}/>
        <Route exact path="/Student/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;
