import React from "react";
import { Outlet } from "react-router-dom";
import MiniDrawer from "../../UI/Sidebar/SideBarDrawer";

export default function MainLayout() {
  return (
    <MiniDrawer>
      <Outlet />
    </MiniDrawer>
  );
}
