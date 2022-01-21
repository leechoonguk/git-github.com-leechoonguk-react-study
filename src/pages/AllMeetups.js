import React from "react";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [meetups, setMeetup] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setMeetup(data);
      });
  }, []);

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups}></MeetupList>
    </div>
  );
};

export default AllMeetups;
