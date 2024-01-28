import { useEffect, useState } from "react";
import "./App.css";
import { MidPage } from "./components/MidPage/MidPage";
import { TopPage } from "./components/TopPage/TopPage";
import SmallScreen from "./components/MobileVersion/SmallScreen";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      console.log(screenWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="app">
      {screenWidth >= 1516 ? (
        <>
          <TopPage />
          <MidPage />
        </>
      ) : (
        <SmallScreen />
      )}
    </div>
  );
}

export default App;
