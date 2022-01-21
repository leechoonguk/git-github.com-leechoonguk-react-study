import React from 'react';
import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FacoritesContext from '../store/favorites-context';

function Favorites() {
  const facoritesCtx = useContext(FacoritesContext);
  return <section>
    <div>Favorites</div>
    <MeetupList meetups={facoritesCtx.favorites}></MeetupList>
  </section>;
}

export default Favorites;
