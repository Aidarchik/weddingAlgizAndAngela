import { useEffect, useState } from "react";
import "./App.css";
import Invite from "./components/invite/invite";
import DearGuests from "./components/dear-guests/dear-guests";
import ContentBackground from "./components/content-background";
// import Tmp from './components/tmp'

function App() {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => setDomReady((prev) => !prev), 3000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="App">
      <ContentBackground />
      {/* <Invite domReady={domReady} />
      <div className={`${!domReady && "hidden"}`}>
        <DearGuests />
      </div> */}
    </div>
  );
}

export default App;
