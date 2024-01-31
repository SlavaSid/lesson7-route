import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AboutHeader, AboutName } from "../context/AboutContext";



export const About = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <div className={`${theme}`}>
        <h1>{AboutHeader.header}</h1>
        <span>{AboutHeader.text}</span>
        <h2>The team</h2>
        <div>
          {AboutName.map((name, index) => (
            <div key={index}>
              <h3>{name.name}</h3>
              <p>{name.post}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };