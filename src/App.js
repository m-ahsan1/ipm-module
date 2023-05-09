import React from "react";
import './style.css'
import CourseInstructor from "./screens/CourseInstructor";
import LabInstructor from "./screens/LabInstructor";
import MainPage from "./screens/MainPage";
import { Route, Router,Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/course' element={<CourseInstructor />}/>
        <Route path='/lab' element={<LabInstructor />}/>


    </Routes>
  );
}

export default App;
