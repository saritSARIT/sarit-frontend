import React from "react";
import { logout } from "../servise/Http";

function LogoutComponent() {
  const handleLogout = async () => {
     const token = localStorage.getItem("token");
     if (!token) return;
    await logout(token);
    localStorage.removeItem("token");
  };

  return <button onClick={handleLogout}>🚪 התנתק</button>;
}

export default LogoutComponent;