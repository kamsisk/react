import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../src/Dashboard/Dashboard";
import Todo from "../src/Todo/Todo";






function App() {

  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
