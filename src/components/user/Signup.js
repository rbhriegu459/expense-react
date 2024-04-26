import classes from "./Signup.module.css";

function Signup() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.div}>
        <h2 className={classes.heading}>SIGNUP</h2>
        <form className={classes.inputWrapper}>
          <label className={classes.label}>First name</label>
          <input className={classes.input} type="text" />

          <label className={classes.label2}>Last name</label>
          <input className={classes.input} type="text" />

          <label className={classes.label3}>Password</label>
          <input className={classes.input} type="password" />

          <label className={classes.label4}>Email</label>
          <input className={classes.input} type="email" />

          <button className={classes.btn}>Signup</button>

          <span>
            Already a user?<a>Login</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
