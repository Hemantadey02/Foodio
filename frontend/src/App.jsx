import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Routes from "./Routes";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "context/SearchContext";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <ScrollToTop />
          <Routes />
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;