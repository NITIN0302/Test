import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);

  if (user != '') {
    return <div> Welcome {user.username}</div>;
  } else {
    return <div>Please Login</div>;
  }
}

export default Profile;
