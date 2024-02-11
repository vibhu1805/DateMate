import React from 'react';
import CountdownTimer from './CountdownTimer';



export default function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className='  w-100 h-100 p-0  overflow-hidden'>
      <div className="position-relative text-center x-3">
            <h1 className=" text-center  mb-5"> Time Left for the List</h1>
        </div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays}   />
    </div>
    
  );
}
