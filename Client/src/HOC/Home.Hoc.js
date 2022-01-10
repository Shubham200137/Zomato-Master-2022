//Transforms component into another component
//Adding additional functionalities to the existing components.

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import HomeLayout from "../Layout/Home.layout";

const HomeLayoutHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <HomeLayout>
       <Component {...props} />
      </HomeLayout>
    )}
     />
    </>
  );
};

export default HomeLayoutHOC;
