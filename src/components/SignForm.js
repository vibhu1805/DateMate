import React ,{useState}from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
function SignForm(){
    const [action,setAction]=useState("Login");
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [rollno,setRollno]=useState()
    const [password,setPassword]=useState();
    

    
    const navigate=useNavigate()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
    
        axios.post('http://localhost:4000/api/v1/user/register',{name,email,password,role:"student", rollno:88888888, section: "662b5ee21ae1444454d78943"})
    
        .then(result => {console.log(result)
            navigate('/Timetable')
        })
        .catch(err=>(console.log(err)))


    return (
        <div className="container1">
            <form onSubmit={handleSubmit}>
            <div className='header'>
                <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
                </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className="heading">Name:<div className='.input input '>
                    <input placeholder="" type="text" name="name" id="name" className="form-control"
                    onChange={(e)=> setName(e.target.value)}/>
                    </div></div>  }
                    
                    
                    <div className='heading'>E-Mail:
                <div className="input">
                <img src="" alt=""/>
                <input type ="email" placeholder="" id="email" name="email" className="form-control"
                onChange={(e)=> setEmail(e.target.value)}/>
                
                </div>
                </div>
                {action==="Login"?<div></div>:<div className="heading">Class:<div className='.input input'>
                    <input placeholder="" type="text" name="class" id="class" className="form-control"
                    />
                    </div></div>  }
                    {action==="Login"?<div></div>:<div className="heading">Enrollment Number<div className='.input input'>
                    <input placeholder="" type="text" name="enroll" id="enroll" className="form-control" onChange={(e)=> setRollno(e.target.value)}
                    />
                    </div></div>  }
                
                <div className='heading'>Password:
                <div className="input">
                <img src="" alt=""/>
                <input type="text" id="password" name="password" className='form-control'
                onChange={(e)=> setPassword(e.target.value)}/> 
                </div>
                </div>

                
                <button type="submit" className="btn f1 w-100 rounded">Register</button>
                
                

            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password?<span>Click Here!</span></div>}
            
            </form>
        </div>
        
        
        

    )
}
}
export default SignForm;