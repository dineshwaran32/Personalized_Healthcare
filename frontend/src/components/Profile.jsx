import React, { useState, useEffect, useRef } from "react";
import { LogOut, User } from "lucide-react";

const Profile = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Profile Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <User className="w-6 h-6" />
      </button>

      {/* Sliding Profile Panel */}
      <div
        ref={profileRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-full md:w-2/5 z-50`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800">{user?.name}</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
          </div>

          {/* Profile Content */}
          <div className="flex-grow flex flex-col items-center justify-center">
            <p className="text-gray-600 text-center">Welcome to your profile</p>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="mt-auto w-full flex items-center justify-center bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
