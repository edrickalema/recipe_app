import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Landing, RecipeDetail, RecipeHomeLayout } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <RecipeHomeLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "recipes/:id", element: <RecipeDetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
