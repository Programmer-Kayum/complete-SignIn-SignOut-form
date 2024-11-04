import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500">
            <img
              src={user?.photoURL}
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Name and Email */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.displayName}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* About/Bio Section */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">About</h3>
          <p className="text-gray-500 text-sm mt-2">
            {user?.bio || "This user hasn't added a bio yet."}
          </p>
        </div>

        {/* User Details */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Location:</span>
            <span>{user?.location || "Not specified"}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">phoneNumber :</span>
            <span>{user?.phoneNumber || "N/A"}</span>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
