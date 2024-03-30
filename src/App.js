import React from "react";
import Listing from "./listing";

function App({ ListingComponent = Listing }) {
  return (
    <div>
      <ListingComponent />
      <h1>App</h1>
    </div>
  );
}

export default App;
