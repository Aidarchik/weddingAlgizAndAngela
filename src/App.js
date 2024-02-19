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
import Connector from "./components/connector/connector";
import WeddingLocation from "./components/location/location";
import DressCode from "./components/dress-code/dress-code";
import GuestForm from "./components/guest-form/guest-form";
import Details from "./components/detail/detail";
import PlanDay from "./components/plan-day/plan-day";
//-----------------------------------------------------------------
//------------Картинки для компонента Connector--------------------
import con_1 from "./assets/connector_1.jpg";
import con_2 from "./assets/connector_2.jpg";

function App() {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => setDomReady((prev) => !prev), 3000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="App wrapper">
      <Invite domReady={domReady} />
      <div className={`${!domReady && "hidden"}`}>
        <ContentWrapperRight>
          <DearGuests />
        </ContentWrapperRight>
        <Connector image={con_1} />
        <Date />
        <Connector image={con_2} />
        <ContentWrapperLeft>
          <DressCode />
        </ContentWrapperLeft>
        <Connector image={con_1} />
        <PlanDay />
        <Connector image={con_2} />
        <WeddingLocation />
        <Connector image={con_1} />
        <ContentWrapperLeft>
          <Details />
        </ContentWrapperLeft>
        <Connector image={con_2} />
        <ContentWrapperRight>
          <GuestForm />
        </ContentWrapperRight>
      </div>
    </div>
  );
}

export default App;
