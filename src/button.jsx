import React from "react";

function Button({ onClick, children }) {
  const handleOnClick = () => {
    onClick("hey clicked");
  };

  return <button onClick={handleOnClick}>{children}</button>;
}

export default Button;
