import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import ProtectedRoutes from "./components/ProtectedRoutes";

const Grocery = lazy(() => import("./components/Grocery"));
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        element: <ProtectedRoutes />,
        children: [{ path: "/about", element: <About /> }],
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback="loading.....">
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRoutes} />);
// export default App;
