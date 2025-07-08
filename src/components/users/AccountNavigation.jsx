import { PATHS, ROUTE_CONFIG } from "../../router";
import { useLocation } from "react-router-dom";
import LogoutLink from "../auth/LogoutLink";

export default function AccountNavigation(){

    // Helper function to check if path is active
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Navigation items configuration
    const navItems = [
        { path: PATHS.ACCOUNT, label: "Dashboard" },
        { path: PATHS.ORDERS, label: "Orders" },
        { path: PATHS.ADDRESSES, label: "Addresses" },
        { path: PATHS.ACCOUNT_DETAILS, label: "Account Details" },
        { path: PATHS.WISHLIST, label: "Wishlist" },
    ];

    return (
    <div className="col-lg-3">
      <ul className="account-nav">
        {navItems.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className={`menu-link menu-link_us-s ${
                isActive(item.path) ? "menu-link_active" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
        <LogoutLink></LogoutLink>
      </ul>
    </div>
  );
}