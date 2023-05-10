import React from 'react'
import { useState } from 'react';




function LabInstructor() {


  const [preferrence, setPreferrence] = useState({
    name: '',
    lab_names: ['', '', '', '', ''],
    preferred_slots: ['', ''],
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
      name: '',
      lab_names: ['', '', '', '', ''],
      preferred_slots: ['', ''],
      grade:'',
      cgpa:'',
      university:'',
      industry_experience:''
    })

  };


  const handleOnLabChange = (event, index) => {

    const newLab = [...preferrence.lab_names];
    newLab[index] = event.target.value;

    setPreferrence({
      ...preferrence,
      lab_names: newLab,

    });


  }

  const handleOnSlotChange = (event, index) => {

    const newTimeslots = [...preferrence.preferred_slots];
    newTimeslots[index] = event.target.value;

    setPreferrence({
      ...preferrence,
      preferred_slots: newTimeslots,

    });


  }



  return (
    <div className="container1">


     <form onSubmit={handleSubmit}>
     <h1>Lab Instructor</h1>
      <p>Name</p>
        <input
          type="text"
          placeholder="Full Name"
          value={preferrence.name}
          onChange={(event) => setPreferrence({ ...preferrence, name: event.target.value })}
        />

      {preferrence.lab_names.map((lab, index) => (
        <div key={index}>

            <p>Preferred Lab {index+1}</p>

            <input
              type="text"
              placeholder="eg Operating Systems Lab"
              value={lab}
              onChange={(event) => handleOnLabChange(event, index)}
            />

        </div>


      ))}
      {preferrence.preferred_slots.map((timeslot, index) => (
        <div key={index}>

            <p>Preferred Timeslot {index+1}</p>

            <input
              type="text"
              placeholder="eg 11:30 - 1:00"
              value={timeslot}
              onChange={(event) => handleOnSlotChange(event, index)}
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
  )
}

export default LabInstructor
