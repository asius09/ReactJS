import React, { useContext } from "react";
import UserContext from "../context/userContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <>{!user ? <div>Please Login</div> : <div> Welcome {user.username}</div>}</>
  );
};

export default Profile;
