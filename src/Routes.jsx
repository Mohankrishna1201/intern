import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Design = React.lazy(() => import("pages/Design"));
const SaasLandingPages = React.lazy(() => import("pages/SaasLandingPages"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/saaslandingpages" element={<SaasLandingPages />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
