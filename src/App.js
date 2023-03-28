import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import HackathonForm from "./Components/HackathonForm";
import { Route, Switch } from "react-router-dom";
import ExpandCard from "./Components/ExpandCard";
function App() {
  return (
    <>
      {/* navbar stays constant through out the web app */}
      <Navbar />
      <Switch>
        {/* "upload submission" and "submissions" are entities of Main component */}
        <Route exact path="/">
          <Main />
        </Route>
        {/* hackathon form to submit an user submission */}
        <Route exact path="/submitHackathonIdea">
          <HackathonForm />
        </Route>
        {/* Expand Card is accessed when user clicks on any card to expand it and get details */}
        <Route exact path="/ideaDetails">
          <ExpandCard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
