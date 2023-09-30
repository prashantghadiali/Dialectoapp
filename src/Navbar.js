import { useContext } from "react";
import { langConstext } from "./languageContext";
import { themeContext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  let {theme, setTheme} = useContext(themeContext);
  let {language} = useContext(langConstext);
  function changeTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme('dark');
    }
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={changeTheme}>{theme === "light" ? "Dark" : "Light"} Theme</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
