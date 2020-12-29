import Spinner from "components/shared/loading/Spinner";
import React, { lazy, Suspense } from "react";

const UnprotectedPages = lazy(() => import("./UnprotectedPages"));
const ProtectedPages = lazy(() => import("./ProtectedPages"));

const Pages = () => {
  /**
   * Make this value true when loading the user data or checking if the user is logged in
   */

  const loadingUserData = false;

  if (loadingUserData) {
    return <Spinner info="Loading User data" />;
  }

  /**
   * This variable checks if the user is logged in
   */

  const userIsLoggedIn = false;

  if (userIsLoggedIn) {
    return <ProtectedPages />;
  }

  return (
    <Suspense fallback={<div>Loading pages</div>}>
      {userIsLoggedIn ? <ProtectedPages /> : <UnprotectedPages />}
    </Suspense>
  );
};

export default Pages;
