import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Insert";
import Repositories from "../pages/Repositories";
import Branches from "../pages/Branches";
import Commits from "../pages/Commits";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/commits" element={<Commits />} />
    </Routes>
  </Router>
);

export default AppRoutes;
