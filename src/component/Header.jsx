import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user.email);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-between navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-3xl">DashBoard</a>
      <div className="mr-20">
        <Link className="mr-5 text-1xl" to={"/"}>
          Home
        </Link>
        <Link className="mr-5 text-1xl" to={"/login"}>
          Log in{" "}
        </Link>
        <Link className="mr-5 text-1xl" to={"/register"}>
          Register
        </Link>
      </div>
      {user ? (
        <div>
          <span className="mr-3">{user.email}</span>
          <button onClick={handleLogout} className="btn bg-red-600  text-white">
            Sign Out{" "}
          </button>
        </div>
      ) : (
        <Link to={"/login"}>
          {" "}
          <button className="btn bg-green-600 text-white">Log in </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
