import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const [routeLoading, setRouteLoading] = useState(false);

  useEffect(() => {
    setRouteLoading(true);

    window.scrollTo({ top: 0, behavior: "instant" });

    const t = setTimeout(() => setRouteLoading(false), 600);

    return () => clearTimeout(t);
  }, [location]);

  return (
    <Routes>
      <Route element={<Layout routeLoading={routeLoading} />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
