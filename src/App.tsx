import { FC } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./layouts/DefaultLayout";
import NoMatch from "./pages/NoMatchPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

const App: FC = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
