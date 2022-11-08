import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ServicesDisplay from "../Layout/ServicesDisplay";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import ServicesAll from "../Pages/ServicesAll/ServicesAll";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/services',
        element: <ServicesDisplay/>,
        children: [
          {
            path: '/services',
            element: <ServicesAll/>
          }
        ]
      },
    ]
  }
])

export default router;