import React from "react";
import Listing from "./listing";

function App({ ListingComponent = Listing }) {
  return (
    <div>
      <ListingComponent />
    </div>
  );
}

export default App;
