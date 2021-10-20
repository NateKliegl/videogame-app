import React, { useContext, useMemo } from "react";
import { Redirect, Route } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";

export default function ProtectedRoute({ children, path, armor }) {
  const { user } = useContext(HeroContext);

  const redirectTo = useMemo(() => (armor ? "/login" : "/search"), [armor]);

  if ((user.username && armor) || (!user.username && !armor)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return (
      <Route to={path}>
        <Redirect to={redirectTo}></Redirect>
      </Route>
    );
  }
}
