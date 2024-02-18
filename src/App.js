import { useEffect, useState } from "react";
import "./App.css";
import Invite from "./components/invite/invite";
// import DearGuests from "./components/dear-guests/dear-guests";
import {
  ContentWrapperLeft,
  // ContentWrapperLeft,
  ContentWrapperRight,
} from "./components/content-wrapper/content-wrapper";
import DearGuests from "./components/dear-guests/dear-guests";
import Date from "./components/date/wedding-date";
import Connector from "./components/connector";
import WeddingLocation from "./components/location/location";
import DressCode from "./components/dress-code/dress-code";
import GuestForm from "./components/guest-form/guest-form";
import Details from "./components/detail/detail";
import PlanDay from "./components/plan-day/plan-day";

function App() {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => setDomReady((prev) => !prev), 2000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="App wrapper">
      <Invite domReady={domReady} />
      <div className={`${!domReady && "hidden"}`}>
        <ContentWrapperRight>
          <DearGuests />
        </ContentWrapperRight>
        <Date />
        <Connector />
        <ContentWrapperLeft>
          <DressCode />
        </ContentWrapperLeft>
        <Connector />
        <ContentWrapperRight>
          <GuestForm />
        </ContentWrapperRight>
        <Connector />
        <PlanDay />
        <Connector />
        <WeddingLocation />
        <ContentWrapperLeft>
          <Details />
        </ContentWrapperLeft>
      </div>
    </div>
  );
}

export default App;
