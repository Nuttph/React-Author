import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home/Home";
import Author from "./components/Author/Author";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Setting from "./components/Author/Setting";
import CreateAuthor from "./components/Author/CreateAuthor";

function App() {

  return (
    <div>
     <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/library" element={<Author/>} />
        <Route path="/library/setting" element={<Setting/>} />
        <Route path="/new-article" element={<CreateAuthor/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
