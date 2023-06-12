import React, { useState } from "react";
import { Fragment } from "react";

function WelcomePage({ loggedIn, userdata }) {
  const [name, setName] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    userdata({ name, favoriteColor });
    loggedIn(true);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8 text-blue-400 leading-tight">
            Join the BlueBabble Community
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white px-4 py-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Favorite Color"
                className="bg-white px-4 py-2 rounded"
                value={favoriteColor}
                onChange={(e) => setFavoriteColor(e.target.value)}
                required
              />
              <button
                type="submit"
                className="text-white bg-blue-400 py-3 px-6 rounded-full text-xl"
              >
                Go To BlueBabble
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default WelcomePage;
