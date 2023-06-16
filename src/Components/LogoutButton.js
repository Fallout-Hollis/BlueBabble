import React from "react";

function LogoutButton({ loggedIn }) {
  const handleLogout = () => {
    loggedIn(false);
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white block w-full py-2 px-4 rounded mt-2"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
