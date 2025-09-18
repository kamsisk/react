import "../Menu/Menu.css";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Todo from "../Todo/Todo";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: Dashboard,
  },
  {
    path: "todo",
    element: Todo,
  },
]);

function Menu(value) {
  return (
    <>

      <div className="menu-container">
        <ul className="menu-list">

         {router.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
          <li><link src="">Dashboard</link></li>
          <li>Todo</li>
          <li>Colour</li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
