import { createBrowserRouter, createRoutesFromChildren, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<h3>Cart....</h3>} />
      </Route>
    </>
  )
);

export default router;
