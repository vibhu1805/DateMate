import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class FormDataComponent extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            phone: ''
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    render() {
        return (
            
            <div className='  w-100 h-100 p-0 overflow-hidden'>
      <div className="imgcontainer">
               <div className="position-relative text-center x-3">
            <h1 className=" text-center "> Find Your True Love</h1>
        </div>
        <div className="parent ">
            
        < form onSubmit={this.onSubmit} className="child ">
   <label>
       I am a
       <select className="input">
           <option value="1">Male</option >
           <option value="2 ">Female</option>
       </select>
   </label>
   
</form>
<form onSubmit={this.onSubmit} className="child">
   <label>
       Looking for
       <select className="input">
           <option value="1">Female</option>
           <option value="2">Male</option>
       </select>
   </label>
</form>

</div>
<div className="parent">
        < form onSubmit={this.onSubmit} className="child">
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
</form>
<form onSubmit={this.onSubmit} className="child">
  <label>Name
   <input type="text" placeholder="username" className="input"  />
   </label>
</form>
<div className="parent">
        < form onSubmit={this.onSubmit}className="child">
   <label>
       Year
       <select className="input">
        <option value="1" >1st</option >
           <option value="2 ">2nd</option>
           <option value="2 ">3rd</option>
           <option value="2 ">4th</option>

       </select>
   </label>
</form>
<form onSubmit={this.onSubmit} className="child">
  <label>insta-id
   <input type="text" placeholder="username" className="input"/>
   </label>
</form >
<div className="parent">
        < form onSubmit={this.onSubmit} className="child">
   <label>
       Crush Year
       <select className="input">
           <option value="1" >1st</option >
           <option value="2 ">2nd</option>
           <option value="3 ">3rd</option>
           <option value="4 ">4th</option>
           


       </select>
   </label>
</form>
<form onSubmit={this.onSubmit} className="child">
  <label>Crush Name
   <input type="text" placeholder="username" className="input"/>
   </label>
</form>
<div className="parent">
        < form onSubmit={this.onSubmit} className="child">
   <label>
       Do you smoke or drink?
       <select className="input">
           <option value="1" >Yes</option >
           <option value="2 ">No</option>
           


       </select>
   </label>
</form>
<form onSubmit={this.onSubmit} className="child">
  <label>Date of Birth
   <input type="text" placeholder="username" className="input"/>
   </label>
</form>
<div className="parent">
        < form onSubmit={this.onSubmit} className="child">
   <label>
       Have you cheated before?
       <select className="input">
           <option value="1" >Yes</option >
           <option value="2 ">No</option>
       </select>
   </label>
</form>
<form onSubmit={this.onSubmit} className="child">
  <label>Are you shy?
   <input type="text" placeholder="username" className="input"/>
   </label>
</form>
<div className="parent">
        < form onSubmit={this.onSubmit} className="child">
   <label>
       Are you willing to go on dates?
       <select className="input">
           <option value="1" >Yes</option >
           <option value="2 ">No</option>
           


       </select>
   </label>
</form>
<form onSubmit={this.onSubmit} className="child">
  <label> Brief description of yourself?
   <input type="text" placeholder="username" className="input"/>
   </label>
</form>
<div className="parent">
    <div className="child1">
    <Link to="/">   <button type="button" className="btn-1" >
            Find Your Partner
        </button></Link>
    </div>
</div>


</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


        )
    }
}