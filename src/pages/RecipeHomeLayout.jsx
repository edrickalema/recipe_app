import React from "react";
import { Outlet } from "react-router-dom";

function RecipeHomeLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RecipeHomeLayout;
