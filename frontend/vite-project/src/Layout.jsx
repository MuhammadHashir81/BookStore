import { Outlet, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
function Layout() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/signup' || location.pathname === '/login'  ;

  return (
    <div>
      {!hideNavbarAndFooter && <Navbar/>}
      <Outlet />
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default Layout;
