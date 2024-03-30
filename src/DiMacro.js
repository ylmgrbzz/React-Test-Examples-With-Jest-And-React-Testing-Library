import React from "react";
import { di } from "react-magnetic-di";
import Listing from "./listing";

const DiMacro = () => {
  di(Listing);
  return (
    <div>
      <Listing />
      <h1>App</h1>
    </div>
  );
};

export default DiMacro;
