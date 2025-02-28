// layout
import DashboardLayout from "./layouts/DashboardLayout";
// pages
import Users from "./pages/Users";
import Products from "./pages/Products";
// router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
