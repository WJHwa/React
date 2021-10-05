import React, { useState, useRef } from "react";
import "../../App.css";

function ResponCheck() {
  const [State, setState] = useState("Waiting");
  const [Messege, setMessege] = useState("클릭해서 시작하세요.");
  const [Result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onclickScreen = () => {
    if (State === "Waiting") {
      timeout.current = setTimeout(() => {
        setState("now");
        setMessege("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState("ready");
      setMessege("초록색이 되면 클릭하세요");
    } else if (State === "ready") {
      clearTimeout(timeout.current);
      setState("Waiting");
      setMessege("너무 성급하셨군요. 초록색이 된 후에 클릭하세요");
    } else if (State === "now") {
      endTime.current = new Date();
      setState("Waiting");
      setMessege("클릭하여 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const Reset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return Result.length === 0 ? null : (
      <>
        <div>평균 시간: {Result.reduce((a, c) => a + c) / Result.length}ms</div>
        <button onClick={Reset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={State} onClick={onclickScreen}>
        {Messege}
      </div>
      {renderAverage()}
      {/* and 연산자는  {Result.length !== 0  && 
        <div>평균 시간: {Result.reduce((a, c) => a + c) / Result.length}ms</div>
      }*/}
    </>
  );
}

export default ResponCheck;
