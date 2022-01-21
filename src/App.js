import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <Routes>
        <Route path="/" element={<AllMeetups></AllMeetups>}/>
        <Route path="/new" element={<NewMeetups></NewMeetups>}/>
        <Route path="/favorites" element={<Favorites></Favorites>}/>
      </Routes>
    </div>
  );
}

export default App;
