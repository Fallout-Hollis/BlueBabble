import React, { useState } from "react";
import Modal from "./Modal";
import meme1 from "../Images/meme1.jpg";
import meme2 from "../Images/meme2.jpg";
import meme3 from "../Images/meme3.png";
import meme4 from "../Images/meme4.jpg";
import NavBar from "./NavBar.js";

function MainPage() {
  const fakePosts = [
    {
      id: 1,
      author: "John Vim",
      content:
        "Just learned a new coding technique today. Mind blown! #coding #webdevelopment",
    },
    {
      id: 2,
      author: "Fionna Smith",
      content:
        "The future of technology is here! Exciting times ahead. #technology #innovation",
    },
    {
      id: 3,
      author: "Alice Johnson",
      content:
        "Tried a new restaurant today and the food was absolutely amazing! Highly recommended. #foodie #foodlover",
    },
    {
      id: 4,
      author: "Michael Brown",
      content:
        "Finished reading an incredible novel last night. Couldn't put it down until the end! #bookworm #reading",
    },
    {
      id: 5,
      author: "Emily Davis",
      content:
        "Just booked my next adventure to an exotic location! Can't wait to explore and discover new cultures. #travel #wanderlust",
    },
    {
      id: 6,
      author: "David Wilson",
      content:
        "Another great workout session today. Pushing my limits and getting stronger every day! #fitness #healthylifestyle",
    },
    {
      id: 7,
      author: "Sophia Thompson",
      content:
        "Watched an incredible movie last night. The plot twists had me on the edge of my seat the whole time! #movielover #entertainment",
    },
    {
      id: 8,
      author: "Daniel Anderson",
      content:
        "Spent the day hiking in the mountains. The breathtaking views made it all worth it. #nature #outdoors",
    },
    {
      id: 9,
      author: "Olivia Martinez",
      content:
        "New fashion trend alert! Just bought the most stylish outfit for the upcoming season. #fashion #style",
    },
    {
      id: 10,
      author: "William Garcia",
      content:
        "Just reached a new high score in my favorite video game. Feeling like a champion! #gamer #gaming",
    },
    {
      id: 11,
      author: "Alexis Rodriguez",
      content:
        "Attended an amazing concert last night. The energy and music were out of this world! #music #livemusic",
    },
    {
      id: 12,
      author: "Emma Lewis",
      content:
        "Exciting announcement: A new groundbreaking technology is set to revolutionize the industry! #technews #innovation",
    },
    {
      id: 13,
      author: "Liam Walker",
      content:
        "Believe in yourself and never give up on your dreams. You have the power to achieve greatness! #inspiration #motivation",
    },
    {
      id: 14,
      author: "Ava Scott",
      content:
        "Just adopted the cutest puppy ever! Meet my new furry friend. #puppylove #pets",
    },
    {
      id: 15,
      author: "Mason Perez",
      content:
        "Had a productive day at work today. Accomplished all my tasks and feeling satisfied! #work #productivity",
    },
  ];

  const fakeTrendingPosts = [
    {
      id: 1,
      image: meme1,
    },
    {
      id: 2,
      image: meme2,
    },
    {
      id: 3,
      image: meme3,
    },
    {
      id: 4,
      image: meme4,
    },
  ];

  const [activeButton, setActiveButton] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState(fakePosts); // State to store posts

  const handlePostSubmit = (content) => {
    const newPost = {
      id: fakePosts.length + 1,
      author: "Name", // You can replace this with the actual author's name
      content: content,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-300 min-h-screen text-gray-800">
      <NavBar
        onPostSubmit={handlePostSubmit}
        posts={posts}
        setPosts={setPosts}
      />

      <main className="flex pt-12">
        {sidebarOpen && (
          <div className="w-1/4 p-4 bg-white border-r border-gray-200">
            <div>
              <h2 className="text-lg font-semibold mb-4 ">Sidebar</h2>
              <ul>
                <button
                  onClick={() => setActiveButton("User Info")}
                  className={`${
                    activeButton === "User Info"
                      ? "bg-blue-500 text-white"
                      : "bg-blue-200 text-blue-700"
                  } block w-full py-2 px-4 rounded mb-2`}
                >
                  User Info
                </button>
                <button
                  onClick={() => setActiveButton("Navigation")}
                  className={`${
                    activeButton === "Navigation"
                      ? "bg-blue-500 text-white"
                      : "bg-blue-200 text-blue-700"
                  } block w-full py-2 px-4 rounded`}
                >
                  Settings
                </button>
              </ul>
            </div>
          </div>
        )}

        <div className="flex-1 p-4 bg-gray-100">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">Feed</h2>
            <div>
              {fakePosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg p-4 mb-4"
                >
                  <p className="font-bold">{post.author}</p>
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/4 p-4 bg-gray-800 text-white border-l border-gray-200">
          <div>
            <h2 className="text-lg font-semibold mb-4">Trending Memes</h2>
            <ul className="flex flex-col items-center">
              {fakeTrendingPosts.map((post) => (
                <li key={post.id} className="flex items-center mb-2">
                  <img
                    src={post.image}
                    alt={`Trending meme ${post.id}`}
                    className="w-100 h-80 object-cover mr-2"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {!sidebarOpen && (
          <button
            className="fixed top-14 left-1 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full shadow-md z-10"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 px-4 py-2">
        <div>
          <p>&copy; 2023 BlueBabble. All rights reserved.</p>
        </div>
      </footer>

      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-1/4 h-full bg-white border-r border-gray-200">
          <button
            className="absolute top-0.5 right-2 text-white bg-blue-500 hover:bg-blue-600  px-4 py-2 rounded-full"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">
              Info & Settings
            </h2>
            <ul>
              <button
                onClick={() => setActiveButton("User Info")}
                className={`${
                  activeButton === "User Info"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-blue-700"
                } block w-full py-2 px-4 rounded mb-2`}
              >
                Account Info
              </button>
              <button
                onClick={() => setActiveButton("Navigation")}
                className={`${
                  activeButton === "Navigation"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-blue-700"
                } block w-full py-2 px-4 rounded`}
              >
                Settings
              </button>
            </ul>
          </div>
        </div>
      )}

      {activeButton && (
        <Modal onClose={() => setActiveButton(null)}>
          {activeButton === "User Info" && (
            <div className="w-80 p-4 bg-gray-800">
              <h3 className="text-blue-500 p-2 font-bold text-xl text-center">
                User Info
              </h3>
              <div className="bg-white rounded p-2">
                <p>Name: Timmy Phelps</p>
                <p>Birthday: 06/23/2000</p>
                <p>Favorite Color: Blue</p>
              </div>
            </div>
          )}
          {activeButton === "Navigation" && (
            <div className="w-80 p-4 bg-gray-800">
              <h3 className="text-blue-500 p-2 font-bold text-xl text-center">
                Settings
              </h3>
              <div className="bg-white rounded p-2">
                <p>Language: English</p>
                <p>Theme: Light</p>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default MainPage;
