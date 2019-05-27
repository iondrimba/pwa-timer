import React from 'react';

interface IRouteProps {
  path: string, route: string, component: any, navigate:any
}

const Route = (props: IRouteProps) : JSX.Element => {
  return (
    <>
    { props.path === props.route ? <props.component navigate={props.navigate} />: null }
    </>
  );
}

export default Route;
