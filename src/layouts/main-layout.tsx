import Header from "@/components/header";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div data-theme="light" className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
