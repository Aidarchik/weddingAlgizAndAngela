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
import con_3 from "./assets/connector_3.jpg";
import con_4 from "./assets/connector_4.jpg";
import con_5 from "./assets/connector_5.jpg";
import con_6 from "./assets/connector_6.jpg";
import Footer from "./components/footer/footer";

function App() {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => setDomReady((prev) => !prev), 2000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="App wrapper text_color">
      <Invite domReady={domReady} />
      <div className={`${!domReady && "hidden"}`}>
        <DearGuests />
        {/* <Connector image={con_1} /> */}
        <Date />
        <Connector image={con_3} />
        <DressCode />
        <Connector image={con_2} />
        <PlanDay />
        <Connector image={con_4} />
        <WeddingLocation />
        <Connector image={con_5} />
        <Details />
        <Connector image={con_6} />
        <GuestForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
