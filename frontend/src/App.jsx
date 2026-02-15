import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import Protected_route from "./components/Protected_route";
import Login from "./components/Login";
import Mobile_overview from "./pages/Mobile_overview";
import Make_Salesman from "./components/Make_Salesman";
import Admin_Protect from "./components/Admin_Protect";
import View_all_customers from "./components/View_all_customers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={
            <Protected_route>
              <Store />
            </Protected_route>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected_route>
              <Profile />
            </Protected_route>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/overview/:id"
          element={
            <Protected_route>
              <Mobile_overview />
            </Protected_route>
          }
        />
        <Route
          path="/salesman_create"
          element={
            <Admin_Protect>
              <Make_Salesman />
            </Admin_Protect>
          }
        />
        <Route
          path="/view_all_customers"
          element={
            <Admin_Protect>
              <View_all_customers />
            </Admin_Protect>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
