import React, { useState } from "react";

const Butondisable = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => setcount(count + 1)}
        className="bg-red-500 px-2 disabled:bg-gray-600  "
        disabled={count >= 2}
      >
        increment
      </button>
      <button onClick={() => setcount(0)}>reset</button>
    </div>
  );
};

export default Butondisable;
