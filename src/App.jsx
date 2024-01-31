
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { InfoUser } from "./components/InfoUser";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import { About } from "./components/About";




function App() {
const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
 <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<InfoUser />} />
            <Route path="contact" element={<Contact />} /> 
            <Route path="about" element={<About />} /> 
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
     
  );
}

export default App;

