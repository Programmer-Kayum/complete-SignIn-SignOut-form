import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Get the navigate function
  const { logOut, user } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Sign-out successful.");
        // Sign-out successful.
        setTimeout(() => {
          navigate("/signIn"); // Use navigate to redirect
        }, 2000); // Optional delay for feedback
        return;
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`); // Handle errors
      });
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-around items-center py-4 pl-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/">
            K<span className="text-orange-500">R</span>
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`lg:flex lg:justify-end lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block mt-4 lg:mt-0 text-gray-200 hover:text-white ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block mt-4 lg:mt-0 text-gray-200 hover:text-white ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `block mt-4 lg:mt-0 text-gray-200 hover:text-white ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block mt-4 lg:mt-0 text-gray-200 hover:text-white ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block mt-4 lg:mt-0 text-gray-200 hover:text-white ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            Contact
          </NavLink>
          {!user && (
            <>
              <NavLink
                to="/signIn"
                className={({ isActive }) =>
                  `block mt-4 lg:mt-0 text-gray-200 hover:text-white ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                SignIn
              </NavLink>
              <NavLink
                to="/reg"
                className={({ isActive }) =>
                  `block mt-4 lg:mt-0 text-gray-200 hover:text-white ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                src={user?.photoURL || "https://via.placeholder.com/100"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              {user && (
                <Link to={"/profile"} className="justify-between">
                  Profile{" "}
                </Link>
              )}
            </li>
            <li>
              {!user && (
                <Link to={"/reg"}>
                  <span className="badge">New</span>
                </Link>
              )}
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        </div>
        <ToastContainer />
      </div>
    </nav>
  );
}

export default NavBar;
