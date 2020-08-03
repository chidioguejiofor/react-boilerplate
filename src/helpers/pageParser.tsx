import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LANDING_PAGE } from "components/pages/paths";

export function convertRoutesToComponents(
  routes: PageType[],
  redirectTo = LANDING_PAGE
) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Redirect to={redirectTo} />
    </Switch>
  );
}
