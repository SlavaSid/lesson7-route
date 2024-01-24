
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { InfoUser } from "./components/InfoUser";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";




function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<InfoUser />} />
            <Route path="contact" element={<Contact />} />  
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;

