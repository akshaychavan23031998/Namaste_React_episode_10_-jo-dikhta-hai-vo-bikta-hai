import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

//Lazy Loading or code spliting.
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  // console.log(<Body/>); ==>> this is nothing but the virtual DOM, which is in the form of JS Object.
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:
        <Suspense fallback={<h1>Loading...🔃🔃</h1>}>
          <Grocery/>
        </Suspense>
      },
      {
        path:"/res/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // this is how we render react component.
