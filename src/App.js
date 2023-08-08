import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Aboutus from "./Compnents/Aboutus";
import Home from "./Compnents/home";
import Constact from "./Compnents/constact";
import Error from "./Compnents/Error";
import Project from "./Compnents/Project";
import { ListProject } from "./ListProject";
import { Counter } from "./Compnents/Counter";
import Todolist from "./Compnents/todolist";
function App() {
  const licolor = { color: "white" };
  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "10px",
            float: "right",
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "20px",
          }}>
          <li>
            <Link to="/" style={licolor}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="/contact" style={licolor}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/count" style={licolor}>
              COUNTER
            </Link>
          </li>
          <li>
            <Link to="/todo" style={licolor}>
              To-DO
            </Link>
          </li>
          <li>
            <Link to="/about" style={licolor}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/projects" style={licolor}>
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Constact />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ListProject />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
