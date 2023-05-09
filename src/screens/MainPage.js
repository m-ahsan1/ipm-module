import React from 'react';
import { Link } from 'react-router-dom'

function MainPage(props) {
  function handleClick(instructor) {
    console.log(`Selected ${instructor} instructor`);
  }

  return (
    <div>
      <h1>What are you ?</h1>
      <Link to="/course">
        <div className="instructor" onClick={() => handleClick('Course')}>
          Course Instructor
        </div>
      </Link>

      <Link to="/lab">
        <div className="instructor" onClick={() => handleClick('Lab')}>
          Lab Instructor
        </div>
      </Link>


    </div>
  );
}

export default MainPage;
