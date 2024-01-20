import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  //create state for all changes
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const [inPass, setInPass] = useState("");

  //use useRef hook
  const passwordRef = useRef(null);

  //create password generator
  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (useChar) str += "!@#$%^&*(){}:><?/|-~`,.=_][";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setInPass(password);
  }, [length, numAllow, useChar, setInPass]);

  //passwordRef
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(inPass);
  }, [inPass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, useChar, passwordGenerator]);

  return (
    <>
      <h1 className="text-lg bg-blue-700 text-center text-white">
        hooks useEffect(), useRef() and useCallback()
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-3 py-2 text-orange-500 bg-gray-700  ">
        <h2 className="text-lg mb-3 text-center text-white ">
          Password Generator
        </h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={inPass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py1 shrink-0"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={80}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <lable>length: {length} </lable>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numAllow"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <lable>Numbers</lable>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useChar}
              id="charInput"
              onChange={() => {
                setUseChar((prev) => !prev);
              }}
            />
            <lable>Characters</lable>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
