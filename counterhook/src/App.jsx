import { useEffect, useState } from "react";

function App() {
  let counter1 = 5;
  let [counter, setCounter] = useState(counter1);

  const incr = () => {
    if (counter >= 20) setCounter(disable);
    setCounter(counter + 1);
  };
  const decr = () => {
    if (counter <= 0) setCounter(disable);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Why we need hook in react</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={incr}>increase value</button>
      <button onClick={decr}>decrease value</button>
    </>
  );
}

export default App;
