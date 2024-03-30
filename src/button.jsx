export function Button({ onClick, children }) {
  const handleOnClick = () => {
    onClick("hey clicked");
    console.log("hey clicked");
  };

  return <button onClick={handleOnClick}>{children}</button>;
}
