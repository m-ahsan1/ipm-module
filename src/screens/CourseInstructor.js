import React, { useState } from "react";

function CourseInstructor() {
  const [preferrence, setPreferrence] = useState({});

  // const [course, setCourse] = useState("");
  // const [timeslots, setTimeslots] = useState(["", "", "", "", ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo', {
      method:'POST',
      body:JSON.stringify(preferrence),
      headers:{
        'Content-Type':'application/json'
      }

    })
    const data = await response.json()
    console.log(data)
    // Do something with the form data
  };

  // const handleCourseChange = (e) => {
  //   setCourse({
  //     ...e.target.value
  //   });
  // };

  // const handleTimeslotChange = (e, index) => {
  //   const newTimeslots = [...timeslots];
  //   newTimeslots[index] = e.target.value;
  //   setTimeslots(newTimeslots);
  // };

  const handleOnChange = (e) => {
    setPreferrence({
      ...preferrence,
      [e.target.name] : e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course:
        <input type="text" name="course_name" onChange={handleOnChange} />
      </label>
      <br />
      <label>
        Timeslot 1:
        <input
          type="text"
          name="preferred_slots"

          onChange={handleOnChange}
        />
      </label>
      {/* <br /> */}
      {/* <label>
        Timeslot 2:
        <input
          type="text"
          value={timeslots[1]}
          onChange={(e) => handleTimeslotChange(e, 1)}
        />
      </label>
      <br />
      <label>
        Timeslot 3:
        <input
          type="text"
          value={timeslots[2]}
          onChange={(e) => handleTimeslotChange(e, 2)}
        />
      </label>
      <br />
      <label>
        Timeslot 4:
        <input
          type="text"
          value={timeslots[3]}
          onChange={(e) => handleTimeslotChange(e, 3)}
        />
      </label>
      <br />
      <label>
        Timeslot 5:
        <input
          type="text"
          value={timeslots[4]}
          onChange={(e) => handleTimeslotChange(e, 4)}
        />
      </label> */}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CourseInstructor;
