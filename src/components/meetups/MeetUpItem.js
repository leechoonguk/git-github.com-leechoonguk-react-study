import React, { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FacoritesContext from "../../store/favorites-context";

function MeetUpItem(props) {
  const facoritesCtx = useContext(FacoritesContext);
  function addFavorites() {
    facoritesCtx.addFavorite({
      id: props.id,
      title: props.title,
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            src={props.targetMeetup.image}
            alt={props.targetMeetup.title}
          ></img>
        </div>
        <div className={classes.content}>
          <h3>{props.targetMeetup.title}</h3>
          <address>{props.targetMeetup.address}</address>
          <p>{props.targetMeetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={addFavorites}>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
