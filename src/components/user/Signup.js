import { useState } from "react";
import classes from "./Signup.module.css";
import {  useNavigate } from "react-router-dom";

function Signup() {

  const [user, setUser] = useState(
    {
      Name: '', Email:'', Password:'', ConfirmPassword:''
    }
  );

  const navigate = useNavigate();
  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const getData = async (e) => {
    e.preventDefault();
    const {Name, Email, Password, ConfirmPassword} = user;
    if(Password !== ConfirmPassword){
      return alert("Password Doesn't Match");
    }
    const options = {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        Name,Email, Password, ConfirmPassword
      })
}
    const res = await fetch('https://expensetracker-cfa62-default-rtdb.firebaseio.com/UserData.json', options)
    if(res){
      alert("User added");
      navigate('/login');
    } else{
      alert("Error");
    }
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.div}>
        <h2 className={classes.heading}>SIGNUP</h2>
        <form className={classes.inputWrapper} method="POST">
          <label className={classes.label}>Name</label>
          <input className={classes.input} type="text" name="Name" value={user.Name} onChange={data}/>

          <label className={classes.label2}>Email</label>
          <input className={classes.input} type="email" name="Email" value={user.Email} onChange={data}/>

          <label className={classes.label3}>Password</label>
          <input className={classes.input} type="password" name="Password" value={user.Password} onChange={data}/>

          <label className={classes.label4}>Confirm Password</label>
          <input className={classes.input} type="password" name="ConfirmPassword" value={user.ConfirmPassword} onChange={data}/>

          <button className={classes.btn} onClick={getData}>Signup</button>

          <span>
            Already a user?<a href="login">Login</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
