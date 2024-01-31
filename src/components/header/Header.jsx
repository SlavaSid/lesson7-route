import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";
export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = () => {
    setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
  };

  return (
    <nav>
      <NavLink to=".">Home</NavLink>
      <NavLink to="users">Users</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="about">About</NavLink>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleChange}
        className="imputCheckbox"
        id="checkbox"
      />
      <label for="checkbox"></label>
    </nav>
  );
};
