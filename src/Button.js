import React, { useState } from "react";
function Button() {
  const [i, setI] = useState(0);
  return (
    <div>
      <input
        type="button"
        value={`Click me ${i} times`}
        onClick={() => {
          setI(i + 1);
        }}
      ></input>
      <h1>{`${i}`}</h1>
    </div>
  );
}

export default Button;
