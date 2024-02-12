import React, { Component } from 'react';
import  { useEffect, useState } from 'react';

export default class FormDataComponent extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeInsta = this.onChangeInsta.bind(this);
        this.onChangeCrush = this.onChangeCrush.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            instaid: '',
            message:'',
            crush:'',
            
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    
    onChangeInsta(e) {
        this.setState({ instaid: e.target.value })
    }
    onChangeCrush(e) {
        this.setState({ crush: e.target.value })
    }
    onChangeMessage(e) {
        this.setState({ message: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()
        this.userData = JSON.parse(localStorage.getItem('user'));
       
        this.setState({
            name: '',
            instaid: '',
            crush:'',
            message:'',
            
        })
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                instaid: this.userData.instaid,
                crush: this.userData.crush,
                message: this.userData.message,
                
            })
        } 
         else {
            this.setState({
                name: '',
                instaid: '',
                crush:'',
                message:'',
                
            })
        }
       
    }

    
componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    
onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }
    

    
    
    render() {
        return (
            
            <div className='  w-100 h-100 p-0 overflow-hidden'>
      <div className="imgcontainer">
               <div className="position-relative text-center x-3">
            <h1 className=" text-center "> Find Your True Love</h1>
        </div>
        <div className="parent ">
           <form onSubmit={this.onSubmit} className="child1">
            <div className="form-group">
  <label>Name
   <input type="text" placeholder="username" className="input form-control" value={this.state.name} onChange={this.onChangeName}  />
   </label>
   </div>

            
        < div className="child form-group">
   <label>
       I am a
       <select className="input" >
           <option value="1" >Male </option >
           <option value="2 ">Female</option>
       </select>
   </label>
   </div>
   




    <div  className="child form-group">
   <label>
       Looking for
       <select className="input" >
           <option value="1">Female</option>
           <option value="2">Male</option>
       </select>
   </label>
</div>
        < div className="child form-group">
   <label>
       Branch
       <select className="input">
           <option value="1" >CSE</option >
           <option value="2 ">CST</option>
           <option value="2 ">IT</option>
           <option value="2 ">AI</option>
           <option value="2 ">ECE</option>
           <option value="2 ">EEE</option>
           <option value="2 ">ITE</option>
           <option value="2 ">ME</option>
           <option value="2 ">MAE</option>
           <option value="2 ">CE</option>


       </select>
   </label>
   </div>
        < div className="child form-group">
   <label>
       Year
       <select className="input">
        <option value="1" >1st</option >
           <option value="2 ">2nd</option>
           <option value="2 ">3rd</option>
           <option value="2 ">4th</option>

       </select>
   </label>
</div>
<div className="child form-group">
  <label>insta-id
   <input type="text" placeholder="username" className="input form-control" value={this.state.instaid} onChange={this.onChangeInsta}/>
   </label>
</div>
       
<div className="child form-group">
  <label>Crush Name
   <input type="text" placeholder="username" className="input form-control" value={this.state.crush} onChange={this.onChangeCrush}/>
   </label>
</div>
 < div className="child form-group">
   <label>
       Crush Year
       <select className="input">
           <option value="1" >1st</option >
           <option value="2 ">2nd</option>
           <option value="3 ">3rd</option>
           <option value="4 ">4th</option>
           


       </select>
   </label>
</div>

        < div className="child form-group">
   <label>
       Are you willing to go on dates?
       <select className="input">
           <option value="1" >Yes</option >
           <option value="2 ">No</option>
           


       </select>
   </label>
</div>
<div className="child form-group">
  <label> Message for your crush
   <input type="text" placeholder="username" className="input form-control" value={this.state.message} onChange={this.onChangeMessage}/>
   </label>
</div>

      <button type="submit" className="btn-1" >
            Find Your Partner
        </button>
    </form>
    </div>


</div>
</div>







        )
    }
}