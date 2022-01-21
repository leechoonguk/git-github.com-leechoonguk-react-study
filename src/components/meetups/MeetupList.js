import React from 'react';
import MeetUpItem from './MeetUpItem';
import classes from './MeetupList.module.css'

function MeetupList(props) {
  return <ul className={classes.list}>
    {props.meetups.map((meetup)=>{
      return <MeetUpItem key={meetup.id} targetMeetup={meetup}></MeetUpItem>
    })}
  </ul>
}

export default MeetupList;
