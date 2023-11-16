import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passowrd, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtsuvwxyz";
    if (numAllowed) str+= "0123456789";
    if (charAllowed) str+= "!@#$%&*-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); //add that char from str in pass. till that length
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  //use ref
  const passowrdRef = useRef(null);

  //copy feature
  const copyToClipboard = useCallback(() => {
    passowrdRef.current?.select();
    passowrdRef.current.setSelectionRange(0, 21);
    window.navigator.clipboard.writeText(passowrd);
  }, [passowrd]);

  //using useEffect - this is used for handling the side effect like data rendering and data fetching
  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-amber-800">
      <h1 className="text-white text-center my-4 font-bold text-2xl">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={passowrd}
          className="ouline-none w-full py-2 px-4"
          placeholder="Password"
          readOnly
          ref={passowrdRef}
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-800 text-white px-4 py-1 shrink-0 hover:bg-blue-600 cursor-pointer"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-3">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={8}
            max={21}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={ () => setNumAllowed( (prev) => !prev)}
              />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {setCharAllowed( (prev) => !prev)}} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
