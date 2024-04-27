import { useState } from "react";
import classes from "./Login.module.css";

const fetchData = async (email, password) => {
  const res = await fetch(
    "https://expensetracker-cfa62-default-rtdb.firebaseio.com/UserData.json"
  );
  if (!res.ok) {
    alert("Error");
  }
  const jsonData = await res.json();
  Object.entries(jsonData).forEach(([key, value]) => {
    if (value.Email === email && value.Password === password) {
      console.log("Match");
      return alert("Logged IN");
    }
  });
};

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin =async (e) => {
    e.preventDefault();
    const dbData = fetchData();

    // dbData.map((i) => {
    //   if (i.Email === email && i.Password === password) {
    //     alert("Logged In");
    //   }
    // });
    // alert("Invalid")
    await fetchData(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.div}>
        <h2 className={classes.heading}>LOGIN</h2>
        <form className={classes.inputWrapper} onSubmit={checkLogin}>
          <label className={classes.label2}>Email</label>
          <input
            className={classes.input}
            type="email"
            name="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label className={classes.label3}>Password</label>
          <input
            className={classes.input}
            type="password"
            name="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" className={classes.btn}>
            Login
          </button>

          <span>
            New user? <a href="Signup">Signup</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
