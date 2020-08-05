import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  logout?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  logout = false,
  component: Component,
  ...rest
}) => {
  const { signOut } = useAuth();

  if (logout) {
    signOut();
  }
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
