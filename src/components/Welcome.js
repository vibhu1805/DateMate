import React from 'react';

const Welcome=()=>{
    return (
        <div className='container-lg '>
            <div className='mt-5 pt-3 me'><span className="txt2">Welcome Back, </span>
            <span className="txt3">Vibhuti</span>
            
        </div>
        <div className="text-light display-4 mt-5 ms-3 ">Upcoming Lecture:</div>
        
        <div className="card mt-5"  >
        <div className='content'>
            <ul >
            <li >9Am-10Am,April 24,2024</li>
           <li> Engineering Mechanics</li>
          <li>  Mr Lalit Batra</li>
            </ul>
        </div>
        
      </div>
      <div className="text-light display-4 mt-5 ms-3 ">Today's Attendance:</div>
        
        <div className="card mt-5"  >
        <div className='content'>
            <ul >
            <li >Applied Physics-PRESENT</li>
           <li> Mechanics-PRESENT</li>
          <li>  OOPS-ABSENT</li>
            </ul>
        </div>
        
      </div>
      </div>
        

    )
}
export default Welcome;