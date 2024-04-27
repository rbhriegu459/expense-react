import { useState } from "react";
import classes from "./Home.module.css";

function Home() {
  const [showCompleteForm, setShowCompleteForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [URL, setURL] = useState("");

  return (
    <div className={classes.mainDiv}>
      Welcome to Expense Tracker
      <h3>
        Your Profile is incomplete{" "}
        <button onClick={() => setShowCompleteForm(true)}>Complete Now</button>
      </h3>
      {showCompleteForm === true && (
        <div className={classes.formDiv}>
          <div>
            <h2>Contact Details</h2>
            <button onClick={() => setShowCompleteForm(false)} className={classes.cancel}>Cancel</button>
          </div>
          <form className={classes.detailsForm}>
            <label className={classes.label}>Full Name</label>
            <input
              type="text"
              className={classes.input}
              name="Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />

            <label className={classes.label2}>Public Profile URL</label>
            <input
              className={classes.input}
              type="url"
              name="URL"
              value={URL}
              onChange={(e) => {
                setURL(e.target.value);
              }}
            />

            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;
