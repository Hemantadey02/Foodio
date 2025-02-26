import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Routes from "./Routes";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;