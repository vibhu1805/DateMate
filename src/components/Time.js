import React,{useState} from'react'
import add from "../images/add.png"
import edit from "../images/edit.png"
import {useNavigate} from "react-router-dom";
import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'
function Time(){
        
    const navigate=useNavigate();
    const handleClick=(e)=>{
        navigate('../Student');
    }
    return (
        
        <div className="container-lg ">
            <div className="title mt-5">Upload Timetable</div>
            
            <div className='mt-5 me '>Monday
            
            <BsFillPencilFill className='me1'  />
            <button className="bt1 ">
           <img src={add} alt='...'></img>
           </button>
            </div>
            <div className="table-wrapper">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th className="expand">Subject</th>
                        <th>Teacher</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className='label label-live'>Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className="label label-draft">Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className="label label-error">Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className='actions'>
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>

                </tbody>
            </table>


            <div className='mt-5 me '>Tuesday
            <BsFillPencilFill className='me1' />
           <img src={add} alt='...' className=''></img>
            </div>
            <div className="table-wrapper">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th className="expand">Subject</th>
                        <th>Teacher</th>
                       <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className='label label-live'>Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className="label label-draft">Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className="label label-error">Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className='actions'>
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>

                </tbody>
            </table>

            </div>
            <div className='mt-5 me '>Wednesday
            <BsFillPencilFill className='ma' />
           <img src={add} alt='...' className=''></img>
            </div>
            <div className="table-wrapper">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th className="expand">Subject</th>
                        <th>Teacher</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className='label label-live'>Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className="label label-draft">Mr.Lalit Mishra</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>08:00 to 10:00</td>
                        <td>Math</td>
                        <td>
                            <span className="label label-error">Mr.Lalit Mishra</span>
                        </td>
                      <td>
                            <span className='actions'>
                                <BsFillTrashFill className="delete-btn"/>
                                <BsFillPencilFill/>
                            </span>
    </td>*/
                        </tr>
                        
                    

                </tbody>
            </table>
            <button type="button" className='bt3' onClick={handleClick}>Continue</button>
            </div>
            </div>
        </div>
        
        
    )
}
export default Time;
