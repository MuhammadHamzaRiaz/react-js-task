import { Outlet } from "react-router-dom";
// components
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
