import React from "react";
import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const desceRef = useRef();


  function submitHandler(event){
    event.preventDefault();
    const meta = {
      email: titleRef.current.value,
      password: imageRef.current.value,
    }

    fetch("http://49.50.167.11:8080/account/create",
    {
      method: 'POST',
      body: JSON.stringify(meta),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {console.log(response)});
  }

  return (
    <div className={classes.item}>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id="title" ref={titleRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id="image" ref={imageRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={addressRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea required id="description" rows="5" ref={desceRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewMeetupForm;
