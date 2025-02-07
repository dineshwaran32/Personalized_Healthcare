import React from "react";

const Profile = ({ user, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="profile-container">
      <h1>Welcome, {user?.name || "User"}!</h1>
      
      {user?.profileImage ? (
        <img src={user.profileImage} alt="Profile" className="profile-image" />
      ) : (
        <p>No profile image available</p>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
