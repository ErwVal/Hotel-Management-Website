import React from "react";
import { Link } from "react-router-dom";

interface Props {
  firstName: string;
  setFirstName: (firstName: string) => void;
}

export const Nav: React.FunctionComponent<Props> = (props: Props) => {
  const logout = async () => {
    alert("LOGOUT TRIGGERED");
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setFirstName("");
    alert(props.firstName); // -> "u1FirstName"
  };

  let menu;

  if (props.firstName) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          Home
        </Link>
        <div>{menu}</div>
      </div>
    </nav>
  );
};

export default Nav;
