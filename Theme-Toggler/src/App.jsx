import { useState, useContext, useEffect } from "react";
import { ThemeProvider } from "./context/theme.js";
import ThemeBtn from "./component/themebtn.jsx";
import Card from "./component/Card.jsx";
import "./App.css";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  function darkTheme() {
    setThemeMode("dark");
  }
  function lightTheme() {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
