import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const ProfileAnimation = () => {
  const { user } = useContext(AuthContext);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (user) {
      setShowToast(true);
      // Automatically hide the toast after 3 seconds
      setTimeout(() => setShowToast(false), 4000);
    }
  }, [user]);

  return (
    showToast && (
      <div
        className={`fixed top-64 right-5 bg-white border border-gray-400 shadow-lg rounded-lg p-4 flex items-center space-x-4 transition-transform transform ${
          showToast ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } duration-500 ease-out`}
      >
        {/* User Photo */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
          <img
            src={user?.photoURL || "https://via.placeholder.com/100"}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Welcome Message */}
        <div>
          <p className="font-semibold text-gray-800">
            Welcome, {user?.displayName || "User"}!
          </p>
          <p className="text-gray-600 text-sm">{user?.email}</p>
        </div>
      </div>
    )
  );
};

export default ProfileAnimation;
