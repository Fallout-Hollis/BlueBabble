import { Fragment, useState } from "react";

import MainPage from "./Components/MainPage";
import WelcomePage from "./Components/WelcomePage";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  return (
    <Fragment>
      {LoggedIn ? (
        <MainPage user={userData} loggedIn={setLoggedIn} />
      ) : (
        <WelcomePage loggedIn={setLoggedIn} userdata={setUserData} />
      )}
    </Fragment>
  );
}

export default App;
