import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const Generator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%&";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    Generator();
  }, [Generator]);

  const copytoClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#e0e0e0] p-4">
      <div
        className="
          w-11/12
          max-w-xl
          p-6
          bg-[#e0e0e0]
          rounded-3xl
          shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
        "
      >
        <div className="w-full flex flex-col gap-6">
          

          <h1 className="text-center text-4xl font-bold text-gray-700">
            Password Generator
          </h1>

          


          <div
            className="
              w-full
              flex
              items-center
              gap-3
              p-2
              bg-[#f1f0f0]
              rounded-2xl
              shadow-[inset_4px_4px_10px_#bcbcbc,inset_-4px_-4px_10px_#ffffff]
            "
          >
            <input
              ref={passRef}
              type="text"
              placeholder="Password"
              readOnly
              value={password}
              className="
                flex-1
                min-w-0
                bg-transparent
                border-none
                outline-none
                px-3
                py-2
                text-base
                text-gray-700
              "
            />

            <button
              onClick={copytoClipboard}
              className="
                shrink-0
                bg-[#e0e0e0]
                rounded-[50px]
                border-2
                border-[rgb(206,206,206)]
                text-[#4d4d4d]
                cursor-pointer
                text-base
                font-medium
                px-6
                py-2
                shadow-[inset_4px_4px_10px_#bcbcbc,inset_-4px_-4px_10px_#ffffff]
                transition-all
                duration-200
                ease-in-out
                hover:shadow-[inset_2px_2px_5px_#bcbcbc,inset_-2px_-2px_5px_#ffffff,2px_2px_5px_#bcbcbc,-2px_-2px_5px_#ffffff]
                focus:outline-none
                active:scale-95
              "
            >
              Copy
            </button>
          </div>

          


          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label htmlFor="length" className="text-gray-600 font-semibold">
                Password Length
              </label>

              <span
                className="
                  min-w-10
                  px-3
                  py-1
                  text-center
                  rounded-lg
                  bg-[#e8e8e8]
                  text-gray-700
                  font-bold
                  shadow-[3px_3px_5px_#c5c5c5,-3px_-3px_5px_#ffffff]
                "
              >
                {length}
              </span>
            </div>

            


            <div
              className="
    w-full
    h-12
    px-4
    flex
    items-center
    rounded-full
    bg-[#e8e8e8]
    shadow-[inset_5px_5px_10px_#c5c5c5,inset_-5px_-5px_10px_#ffffff]
  "
            >
              <input
                id="length"
                type="range"
                min={8}
                max={25}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                style={{
                  background: `linear-gradient(
        to right,
        rgb(82, 82, 82) 0%,
        rgb(82, 82, 82) ${((length - 8) / (25 - 8)) * 100}%,
        #d4d4d4 ${((length - 8) / (25 - 8)) * 100}%,
        #d4d4d4 100%
      )`,
                }}
                className="
      w-full
      h-[8px]
      appearance-none
      rounded-full
      cursor-pointer

      [&::-webkit-slider-runnable-track]:h-[8px]
      [&::-webkit-slider-runnable-track]:rounded-full
      [&::-webkit-slider-runnable-track]:bg-transparent

      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:w-[18px]
      [&::-webkit-slider-thumb]:h-[18px]
      [&::-webkit-slider-thumb]:rounded-full
      [&::-webkit-slider-thumb]:bg-[#e8e8e8]
      [&::-webkit-slider-thumb]:shadow-[3px_3px_5px_#c5c5c5,-3px_-3px_5px_#ffffff]
      [&::-webkit-slider-thumb]:-mt-[5px]
    "
              />
            </div>
          </div>

          


          <div className="flex flex-wrap gap-6">
            



            <label
              htmlFor="numinput"
              className="
                flex
                items-center
                gap-3
                cursor-pointer
                text-gray-600
                font-semibold
                select-none
              "
            >
              <input
                id="numinput"
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="peer absolute opacity-0 h-0 w-0"
              />
              <span
                className="
                  relative
                  h-[1.3em]
                  w-[1.3em]
                  shrink-0
                  rounded-full
                  bg-[#e8e8e8]
                  shadow-[3px_3px_5px_#c5c5c5,-3px_-3px_5px_#ffffff]
                  transition-all
                  duration-500

                  after:content-['']
                  after:absolute
                  after:opacity-0
                  after:left-[0.45em]
                  after:top-[0.25em]
                  after:w-[0.25em]
                  after:h-[0.5em]
                  after:border-solid
                  after:border-gray-500
                  after:border-r-[0.15em]
                  after:border-b-[0.15em]
                  after:rotate-45
                  after:transition-opacity
                  after:duration-200

                  peer-checked:shadow-[inset_3px_3px_5px_#c5c5c5,inset_-3px_-3px_5px_#ffffff]
                  peer-checked:after:opacity-100
                "
              />
              Number
            </label>

            


            
            <label
              htmlFor="charinput"
              className="
                flex
                items-center
                gap-3
                cursor-pointer
                text-gray-600
                font-semibold
                select-none
              "
            >
              <input
                id="charinput"
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="peer absolute opacity-0 h-0 w-0"
              />
              <span
                className="
                  relative
                  h-[1.3em]
                  w-[1.3em]
                  shrink-0
                  rounded-full
                  bg-[#e8e8e8]
                  shadow-[3px_3px_5px_#c5c5c5,-3px_-3px_5px_#ffffff]
                  transition-all
                  duration-500

                  after:content-['']
                  after:absolute
                  after:opacity-0
                  after:left-[0.45em]
                  after:top-[0.25em]
                  after:w-[0.25em]
                  after:h-[0.5em]
                  after:border-solid
                  after:border-gray-500
                  after:border-r-[0.15em]
                  after:border-b-[0.15em]
                  after:rotate-45
                  after:transition-opacity
                  after:duration-200

                  peer-checked:shadow-[inset_3px_3px_5px_#c5c5c5,inset_-3px_-3px_5px_#ffffff]
                  peer-checked:after:opacity-100
                "
              />
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
