import React from 'react'
import { useState } from 'react';




function LabInstructor() {


  const [preferrence, setPreferrence] = useState({
    lab_name: '',
    preferred_slots: ['', '', '', '', ''],
    grade:'',
    cgpa:'',
    university:'',
    industry_experience:''


  });
  const [instructors, setInstructors] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending the JSON object preferrence to backend using POST
    const response = await fetch('http://localhost:8080/lab', {
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
      lab_name: '',
      preferred_slots: ['', '', '', '', ''],
      grade:'',
      cgpa:'',
      university:'',
      industry_experience:''
    })

  };


  const handleOnChange = (event, index) => {

    const newTimeslots = [...preferrence.preferred_slots];
    newTimeslots[index] = event.target.value;

    setPreferrence({
      ...preferrence,
      preferred_slots: newTimeslots,

    });


  }


  return (
    <div className="container1">
    <div className="main1">

     <form onSubmit={handleSubmit}>
     <h1>Lab Instructor</h1>
      <p>Lab Name</p>
        <input
          type="text"
          placeholder="Lab Name"
          value={preferrence.lab_name}
          onChange={(event) => setPreferrence({ ...preferrence, lab_name: event.target.value })}
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
      <p>Grade</p>
        <input
          type="text"
          placeholder="Grade in the selected course"
          value={preferrence.grade}
          onChange={(event) => setPreferrence({ ...preferrence, grade: event.target.value })}
        />
        <p>CGPA</p>
        <input
          type="text"
          placeholder="eg : 3.76"
          value={preferrence.cgpa}
          onChange={(event) => setPreferrence({ ...preferrence, cgpa: event.target.value })}
        />
        <p>University</p>
        <input
          type="text"
          placeholder="University Name"
          value={preferrence.university}
          onChange={(event) => setPreferrence({ ...preferrence, university: event.target.value })}
        />
        <p>Experience</p>
        <input
          type="text"
          placeholder="Industry experience in years"
          value={preferrence.industry_experience}
          onChange={(event) => setPreferrence({ ...preferrence, industry_experience: event.target.value })}
        />
      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
  )
}

export default LabInstructor
