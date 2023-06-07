import React, { useState } from "react";
import Modal from "./Modal";

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
      topic: "ReactJS",
    },
    {
      id: 2,
      topic: "Foodie",
    },
    {
      id: 3,
      topic: "Fitness ",
    },
    {
      id: 4,
      topic: "Artificial Intelligence",
    },
    {
      id: 5,
      topic: "Nature ",
    },
    {
      id: 6,
      topic: "Machine Learning",
    },
    {
      id: 7,
      topic: "Python",
    },
    {
      id: 8,
      topic: "UI/UX Design",
    },
    {
      id: 9,
      topic: "Mobile App Development",
    },
    {
      id: 10,
      topic: "Reading",
    },
    {
      id: 11,
      topic: "Cloud Computing",
    },
    {
      id: 12,
      topic: "Blockchain",
    },
    {
      id: 13,
      topic: "Data Analytics",
    },
    {
      id: 14,
      topic: "Internet of Things",
    },
    {
      id: 15,
      topic: "Big Data",
    },
    {
      id: 16,
      topic: "Front-end Development",
    },
    {
      id: 17,
      topic: "Back-end Development",
    },
    {
      id: 18,
      topic: "DevOps",
    },
    {
      id: 19,
      topic: "Agile Methodology",
    },
    {
      id: 20,
      topic: "UI/UX Research",
    },
  ];

  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="bg-blue-100 min-h-screen">
      <header className="bg-white border-b border-gray-300 px-4 py-2 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">BlueBabble</h1>
        </div>
        <div>{/* Add header buttons or user profile */}</div>
      </header>

      <main className="flex">
        <div className="w-1/4 p-4 bg-white border-r border-gray-300">
          <div>
            <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
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

        <div className="flex-1 p-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">Feed</h2>
            <div>
              {fakePosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-gray-300 p-4 mb-4"
                >
                  <p className="font-bold">{post.author}</p>
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/4 p-4 bg-white border-l border-gray-300">
          <div>
            <h2 className="text-lg font-semibold mb-4">Trending Hashtags</h2>
            <ul>
              {fakeTrendingPosts.map((post) => (
                <li key={post.id} className="flex items-center mb-2">
                  <span>{post.topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-300 px-4 py-2">
        <div>
          <p>&copy; 2023 BlueBabble. All rights reserved.</p>
        </div>
      </footer>

      {activeButton && (
        <Modal onClose={() => setActiveButton(null)}>
          {activeButton === "User Info" && (
            <div>
              <h3>User Info</h3>
              <p>Name: Timmy Phelps</p>
              <p>Birthday: 06/23/2000</p>
              <p>Favorite Color: Blue</p>
            </div>
          )}
          {activeButton === "Navigation" && (
            <div>
              <h3>Settings</h3>
              <p>Language: English</p>
              <p>Theme: Light</p>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default MainPage;
