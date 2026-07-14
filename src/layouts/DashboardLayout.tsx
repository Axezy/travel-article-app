import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-10">
        <Outlet />
      </main>

    </div>
  );
}