import React, { useEffect, useRef, useState } from "react";
import "./style.css";
// make input box dynamic

const OTP = () => {
  ["", "", "", ""];
  const [inputVal, setInputVal] = useState(new Array(4).fill(""));
  const inputRef = useRef([]);
  console.log("🚀 ~ OTP ~ inputRef:", inputRef);
  console.log("🚀 ~ OTP ~ inputVal:", inputVal);

  function handleChange(e, i) {
    if (isNaN(e.target.value)) return;
    const newVal = e.target.value?.trim();
    setInputVal((prev) => {
      const char = newVal.slice(-1); // only set one number
      const copy = [...prev];
      copy[i] = char;
      return copy;
    });
    // as soon as i type any number it should focus on next input
    newVal && inputRef.current[i + 1]?.focus();
  }

  function handleBack(e, i) {
    if (!e.target.value && e.key === "Backspace") {
      console.log("hello", i);
      inputRef.current[i - 1]?.focus();
    }
  }
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);
  return (
    <div>
      <h1>Learn OTP</h1>
      {inputVal?.map((each, i) => {
        return (
          <input
            ref={(input) => {
              console.log("🚀 ~ {inputVal?.map ~ input:", input);
              inputRef.current[i] = input;
            }}
            className="width: 50px;"
            key={i}
            type="text"
            value={each}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e, i);
            }}
            onKeyDown={(e) => {
              handleBack(e, i);
            }}
          />
        );
      })}
    </div>
  );
};

export default OTP;
