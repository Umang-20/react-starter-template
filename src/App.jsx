import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";

import "./App.css";
import AuthLayout from "./layout/AuthLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";
import RoutesList from "./routes";

const App = () => {
  const { user } = useSelector((store) => store.auth);

  const renderRoutes = () => {
    const isLogin = !!user;
    const renderRoute = (Component, layout) => {
      if (Component) {
        switch (layout) {
          case "private":
            return isLogin ? (
              <PrivateLayout>
                <Component />
              </PrivateLayout>
            ) : (
              <Navigate to="/signin" />
            );
          case "auth":
            return isLogin ? (
              <Navigate to="/dashboard" />
            ) : (
              <AuthLayout>
                <Component />
              </AuthLayout>
            );
          case "public":
          default:
            return (
              <PublicLayout>
                <Component />
              </PublicLayout>
            );
        }
      }
      return null;
    };

    return RoutesList.map((route) => (
      <Route
        key={route.name}
        path={route.path}
        element={renderRoute(route.component, route.layout)}
      />
    ));
  };

  return (
    <div className="App">
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default App;
