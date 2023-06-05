function NavBar(props) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8 text-blue-400 leading-tight">
          Join the BlueBabble Community
        </h1>
        <div className="space-x-4">
          <button
            className="text-white bg-blue-400 py-3 px-6 rounded-full text-xl"
            onClick={props.SetLoggedInCoin(true)}
          >
            Go To BlueBabble
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
