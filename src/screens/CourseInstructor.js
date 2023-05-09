import React, { useEffect, useState } from "react";

function CourseInstructor() {
  const [preferrence, setPreferrence] = useState({
    course_name: '',
    preferred_slots: ['', '', '', '', '']
  });
  const [instructors, setInstructors] = useState([])



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending the JSON object preferrence to backend using POST
    const response = await fetch('http://localhost:8080/demo', {
      method:'POST',
      body:JSON.stringify(preferrence),
      headers:{
        'Content-Type':'application/json'
      }

    })

    // getting data back from backend and on console
    const data = await response.json()
    console.log(data)

    // Setting the values in input field to null when submit is clicked
    setPreferrence({
      course_name: '',
      preferred_slots: ['', '', '', '', '']
    })

  };


  const handleOnChange = (event, index) => {

    const newTimeslots = [...preferrence.preferred_slots];
    newTimeslots[index] = event.target.value;

    setPreferrence({
      ...preferrence,
      preferred_slots: newTimeslots
    });


  }

  const getInstructors = async ()=>{
    const response = await fetch('http://localhost:8080/demo', {
      method:'GET',


    })
    const data = await response.json()
    setInstructors(data)
  }

  useEffect(()=>{
    getInstructors();
  }, [])



  return (

  <div className="container1">
    <div className="main1">

     <form onSubmit={handleSubmit}>
     <h1>Course Instructor</h1>
      <p>Course Name</p>
        <input
          type="text"
          placeholder="Course Name"
          value={preferrence.course_name}
          onChange={(event) => setPreferrence({ ...preferrence, course_name: event.target.value })}
        />
      {preferrence.preferred_slots.map((timeslot, index) => (
        <div key={index}>

            <p>Timeslot {index+1}</p>
            <input
              type="text"
              placeholder="eg 11:30 - 1:00"
              value={timeslot}
              onChange={(event) => handleOnChange(event, index)}
            />

        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
  );
}

export default CourseInstructor;
