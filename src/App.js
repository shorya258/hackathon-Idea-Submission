import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import HackathonForm from "./Components/HackathonForm";
import { Route, Switch } from "react-router-dom";
import ExpandCard from "./Components/ExpandCard";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/submitHackathonIdea">
          <HackathonForm />
        </Route>
        <Route exact path="/ideaDetails">
          <ExpandCard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
