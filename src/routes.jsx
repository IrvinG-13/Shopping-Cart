import ErrorPage from "./Pages/ErrorPage"
import Home from "./Components/Layout/Home"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Welcome from "./Pages/Welcome"
import Electronics from "./Pages/Electronics"
import { createBrowserRouter } from "react-router-dom";
import Jewelery from "./Pages/Jewelery"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Login from "./Pages/Login"
import Reset from "./Pages/Reset"
import Account from "./Pages/Account"

const routes = createBrowserRouter ([
    {
        path: "/",
        element : <Home/>,
        errorElement: <ErrorPage/>,
        children: [
            {
              index: true, 
              element: <Welcome />,
            },
      {
        path: "shop", 
        element: <Shop />,
        children:[
            {
              path: "men",
              element: <Men/>,
            },
            {
              path: "women",
              element: <Women/>
            },
            {
              path: "electronics",
              element: <Electronics/>
            },
            {
              path: "jewelery",
              element: <Jewelery/>
            },
        ],
      },
      {
        path: "cart", 
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login/>,
        children:[
          {
            path: "reset",
            element : <Reset/>
          },
          {
            path: "account",
            element: <Account/>
          },
        ],
      },
        ],
    }
])


export default routes