import { createBrowserRouter } from "react-router-dom";
import GuestRoute from "./auth/GuestRoute";
import ProtectedRoute from "./auth/ProtectedRoute";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Shop from "./views/Shop";
import Signup from "./views/Signup";
import TrackOrder from "./views/TrackOrder";
import Account from "./views/users/Account";
import AccountDetails from "./views/users/AccountDetails";
import Addresses from "./views/users/Addresses";
import Orders from "./views/users/Orders";
import Wishlist from "./views/users/Wishlist";
import BillingAddress from "./views/users/BillingAddress";
import ShippingAddress from "./views/users/ShippingAddress";
import SingleProduct from "./views/SIngleProduct";

// Centralized route configuration with metadata
export const ROUTE_CONFIG = {
  HOME: {
    path: "/",
    element: <Home />,
    name: "Home",
    isProtected: false,
  },
  LOGIN: {
    path: "/login",
    element: <Login />,
    name: "Login",
    isGuestOnly: true,
  },

  REGISTER: {
    path: "/register",
    element: <Signup />,
    name: "Register",
    isGuestOnly: true,
  },

  SHOP: {
    path: "/shop",
    element: <Shop />,
    name: "shop",
  },

  SINGLEPRODUCT: {
    path: `/shop/:slug`,
    element: <SingleProduct />,
    name: "singleproduct",
  },

  CONTACT: {
    path: "/contact",
    element: <Contact />,
    name: "Contct",
  },

  TRACKORDER: {
    path: "/track-order",
    element: <TrackOrder />,
    name: "trackorder",
  },

  // Users route
  ACCOUNT: {
    path: "/account",
    element: <Account />,
    name: "Account",
    isProtected: true,
  },
  ACCOUNT_DETAILS: {
    path: "/account/account-details",
    element: <AccountDetails />,
    name: "Account Details",
    isProtected: true,
  },
  ORDERS: {
    path: "/account/orders",
    element: <Orders />,
    name: "Orders",
    isProtected: true,
  },
  ADDRESSES: {
    path: "/account/addresses",
    element: <Addresses />,
    name: "Addresses",
    isProtected: true,
  },
  BILLINGADDRESS: {
    path: "/account/edit-billing-address",
    element: <BillingAddress />,
    name: "Billing",
    isProtected: true,
  },
  SHIPPINGADDRESS: {
    path: "/account/edit-shipping-address",
    element: <ShippingAddress />,
    name: "Shipping",
    isProtected: true,
  },
  WISHLIST: {
    path: "/account/wishlist",
    element: <Wishlist />,
    name: "WISHLIST",
    isProtected: true,
  },
  NOT_FOUND: {
    path: "*",
    element: <NotFound />,
    name: "Not Found",
    isProtected: false,
  },
};

// Helper functions for route access
export const getRoutePath = (routeName) => {
  const route = Object.values(ROUTE_CONFIG).find((r) => r.name === routeName);
  return route ? route.path : "/";
};

export const getRouteElement = (routeName) => {
  const route = Object.values(ROUTE_CONFIG).find((r) => r.name === routeName);
  return route ? route.element : <NotFound />;
};

// Create the router
const router = createBrowserRouter(
  Object.values(ROUTE_CONFIG).map(
    ({ path, element, isProtected, isGuestOnly, roles = [] }) => ({
      path,
      element: isProtected ? (
        <ProtectedRoute roles={roles}>{element}</ProtectedRoute>
      ) : isGuestOnly ? (
        <GuestRoute>{element}</GuestRoute>
      ) : (
        element
      ),
    })
  )
);

export default router;

// Path constants for direct usage
export const PATHS = Object.fromEntries(
  Object.entries(ROUTE_CONFIG).map(([key, value]) => [key, value.path])
);
