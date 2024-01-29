import { useEffect, useState } from "react";
import "./App.css";
import Invite from "./components/invite/invite";
// import DearGuests from "./components/dear-guests/dear-guests";
import {
  // ContentWrapperLeft,
  ContentWrapperRight,
} from "./components/content-wrapper/content-wrapper";
import DearGuests from "./components/dear-guests/dear-guests";
import Date from "./components/date/wedding-date";
import Connector from "./components/connector";
import WeddingLocation from "./components/location/location";
// import Tmp from './components/tmp'

function App() {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => setDomReady((prev) => !prev), 2000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="App">
      <Invite domReady={domReady} />
      <div className={`${!domReady && "hidden"}`}>
        <ContentWrapperRight>
          <DearGuests />
        </ContentWrapperRight>
        <Date />
        <Connector />
        <WeddingLocation />
      </div>
    </div>
  );
}

export default App;
