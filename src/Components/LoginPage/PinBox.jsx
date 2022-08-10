import React, { useRef, useState } from "react";
import PinItem from "./PinItem";

const PinBox = ({ length, perBox,otpLength}) => {
  const [value, setValue] = useState(new Array(length).fill(""));
  let inputRef = useRef([]);
  const handleBackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    value[index] = e.target.value;
    if(value.join("").length === length ){

        otpLength(true);
    }else{
        otpLength(false);
    }
  };
  const handleFocus = (e, index) => {
    let val = e.target.value;
    value[index] = val;
    setValue(value);
    if (index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    if(value.join("").length === length ){
        otpLength(true);
    }else{
        otpLength(false);
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    let data = e.clipboardData.getData("text").split("");
    console.log(data);
    if (data.length < 5) {
      data.forEach((item, index) => {
        console.log("count", index);
        inputRef.current[index].value = item;
        value[index] = item;
        inputRef.current[index].focus();
      });
      otpLength(false);
    } else {
      data.forEach((item, index) => {
        console.log("count", index);
        inputRef.current[index].value = item;
        value[index] = item;
        if (index < length - 1) {
          inputRef.current[index + 1].focus();
        }
      });
      otpLength(false);
    }
    console.log(inputRef.current);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div
        onPaste={handlePaste}
        style={{ display: "flex", justifyContent: "center"}}
      >
        {value.map((item, index) => {
          return (
            <PinItem complete={""}
              handleFocus={(e) => handleFocus(e, index)}
              handleBackSpace={(e) => handleBackspace(e, index)}
              key={index}
              ref={(element) => {
                inputRef.current[index] = element;
                // console.log(element, inputRef.current);
              }}
              max={perBox}
            />
          );
        })}
      </div>
    </div>
  );
};



export default PinBox;
