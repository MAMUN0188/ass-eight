import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Statics from "../Pages/Statics";
import Dashboard from "../Pages/Dashboard";
import Gadgets from "../Components/Gadgets";
import Details from "../Components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home,
        loader: ()=> fetch('../categories.json'),
        children: [
          {
            path:'/gadget/:categoryName',
            Component:Gadgets,
            loader: ()=> fetch('../gadget.json')
          },
          {
            path:'/',
            Component:Gadgets,
            loader: ()=> fetch('../gadget.json')
          }
        ]
      },
      {
        path: '/statics',
        Component: Statics,
      },
      {
        path: '/dashboard',
        Component: Dashboard,
      },
      {
        path: '/details/:id',
        Component:Details,
        loader: ()=>fetch('../gadget.json')
      }
      
    ]
  },
  
]);

export default router;