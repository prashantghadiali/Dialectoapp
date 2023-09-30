import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { langConstext } from "./languageContext";
import { themeContext } from "./themeContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <themeContext.Provider value={{theme, setTheme}}>
      <langConstext.Provider value={{ language, setLanguage}}>
        <div className={`App ${theme}`}>
          <Navbar />
          <Home />
        </div>
      </langConstext.Provider>
    </themeContext.Provider>
  );
}
