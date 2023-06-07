import { Fragment, useState } from "react";

import MainPage from "./Components/MainPage";
import WelcomePage from "./Components/WelcomePage";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <Fragment>
      {LoggedIn ? <MainPage /> : <WelcomePage loggedIn={setLoggedIn} />}
    </Fragment>
  );
}

export default App;
