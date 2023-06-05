import { Fragment, useState } from "react";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";

function App() {
  const [loggedInCoin, setLoggedInCoin] = useState(false);

  return (
    <div>
      <Fragment>
        {loggedInCoin ? (
          <MainPage />
        ) : (
          <NavBar loggedInCoin={setLoggedInCoin} />
        )}
      </Fragment>
    </div>
  );
}

export default App;
