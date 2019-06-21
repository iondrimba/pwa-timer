import React from 'react';

interface IRouteProps {
  path: string,
  route: string,
  children: JSX.Element | JSX.Element[];
}

const Route = (props: IRouteProps) : JSX.Element => (
  <>
  { props.path === props.route? props.children : null }
  </>
)

export default Route;
