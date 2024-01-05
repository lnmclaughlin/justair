import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../slices/userSlice";

function UserProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
  };

  return (
    <div className="welcome-container">
      <h2 className="user">User Profile</h2>
      <p>Welcome,{currentUser}!</p>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserProfile;
