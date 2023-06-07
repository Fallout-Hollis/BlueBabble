import React, { useState } from "react";
import PostModal from "./PostModal";

const NavBar = ({ onPostSubmit, posts, setPosts }) => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handlePostClick = () => {
    setShowPostModal(true);
  };

  const handlePostSubmit = () => {
    onPostSubmit(postContent);
    setShowPostModal(false);
    setPostContent("");
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 px-4 py-2 flex items-center justify-between fixed top-0 left-0 w-full">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">BlueBabble</h1>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handlePostClick}
      >
        Add Post
      </button>

      {showPostModal && (
        <PostModal onClose={() => setShowPostModal(false)}>
          <form onSubmit={handlePostSubmit} className="p-4 bg-white">
            <textarea
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Write your post here..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              required
            ></textarea>
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded ml-2"
                onClick={() => setShowPostModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </PostModal>
      )}
    </header>
  );
};

export default NavBar;
