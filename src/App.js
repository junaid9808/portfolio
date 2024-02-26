import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Project } from "./component/Project";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/navbar/Navbar";
import AddTodos from "./components/addTodo";
import TaskList from "./components/lsitTodo";

function App() {
  return (
    <>
      <div className="">
        <AddTodos />
        <TaskList />
      </div>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
