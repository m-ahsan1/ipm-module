import React, { useEffect, useState } from "react";


function CourseInstructor() {
  const [preferrence, setPreferrence] = useState({
    name:'',
    course_names: ['', '', '', '', ''],
    non_preferred_slots: ['', ''],
    unavailable_slots: ['', '']
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
      name:'',
      course_names: ['', '', '', '', ''],
      non_preferred_slots: ['', ''],
      unavailable_slots: ['', '']
    })

  };


  const handleCourseChange = (event, index) => {
    const newCourses = [...preferrence.course_names];
    newCourses[index] = event.target.value;
    setPreferrence({ ...preferrence, course_names: newCourses });
  };

  const handleNonPreferredChange = (event, index) => {
    const newTimeslots = [...preferrence.non_preferred_slots];
    newTimeslots[index] = event.target.value;
    setPreferrence({ ...preferrence, non_preferred_slots: newTimeslots });
  };

  const handleUnavailableChange = (event, index) => {
    const newUnTimeslots = [...preferrence.unavailable_slots];
    newUnTimeslots[index] = event.target.value;
    setPreferrence({ ...preferrence, unavailable_slots: newUnTimeslots });
  };




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
      <p>Name</p>
        <input
          type="text"
          placeholder="Full Name"
          value={preferrence.name}
          onChange={(event) => setPreferrence({ ...preferrence, name: event.target.value })}
        />

     {preferrence.course_names.map((course, index) => (
          <div key={index}>

              <p>Course {index+1}</p>
              <input
                type="text"
                placeholder="eg Software Engineering"
                value={course}
                onChange={(event) => handleCourseChange(event, index)}
              />

          </div>
        ))}

      {preferrence.non_preferred_slots.map((timeslot, index) => (
        <div key={index}>

            <p>Non Preferred Timeslot {index+1}</p>
            <input
              type="text"
              placeholder="eg 11:30 - 1:00"
              value={preferrence.non_preferred_slots[index]}
              onChange={(event) => handleNonPreferredChange(event, index)}
            />

        </div>
      ))}

      {preferrence.unavailable_slots.map((timeslot, index) => (
              <div key={index}>

                  <p>Un Available Timeslot {index+1}</p>
                  <input
                    type="text"
                    placeholder="eg 11:30 - 1:00"
                    value={timeslot}
                    onChange={(event) => handleUnavailableChange(event, index)}
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
