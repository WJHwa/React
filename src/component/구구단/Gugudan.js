import React, { useState } from "react";

function Gugudan(props) {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setSult] = useState("");
  const [trial, setTrial] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setSult(`정답 : ${value}`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      setTrial(trial + 1);
    } else {
      setSult("땡");
      setValue("");
    }
  };

  return (
    <>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
      <div>이만큼 맞춤 : {trial}</div>
    </>
  );
}

export default Gugudan;
