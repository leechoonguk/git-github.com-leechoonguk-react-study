import React from "react";
import classes from "./Layout.modul.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main>
          <main className={classes.main}>{props.children}</main>
      </main>
    </div>
  );
}

export default Layout;
