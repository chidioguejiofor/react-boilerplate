import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export function convertRoutesToComponents(
  routes: PageType[],
  redirectTo?: string
) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      {redirectTo && <Redirect to={redirectTo} />}
    </Switch>
  );
}
