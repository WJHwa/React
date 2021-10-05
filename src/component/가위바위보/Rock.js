import React, { useState, useRef, useEffect, memo } from "react";
import background1 from "./rock1.png";
import background2 from "./rock2.png";
import background3 from "./rock3.png";

const rspCoords = {
  가위: "1",
  바위: "2",
  보: "3",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

const Rock = memo(() => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  const background = () => {
    if (imgCoord === "1") {
      return background1;
    } else if (imgCoord === "2") {
      return background2;
    } else {
      return background3;
    }
  };

  useEffect(() => {
    //componentDidMount , componentDidUpdate 역할
    interval.current = setInterval(changeHand, 100);
    return () => {
      //componentWillUmmount 자리
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onclickBtn = (c) => () => {
    clearInterval(interval.current);
    const myscore = scores[c];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myscore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다.");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다.");
      setScore((p) => p + 1);
    } else {
      setResult("졌습니다.");
      setScore((p) => p - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };

  return (
    <>
      <div
        id="rock"
        style={{
          backgroundImage: `url(${background()})`,
          height: 380,
          width: 380,
        }}
      ></div>

      <div>
        <button
          style={{ padding: 10 }}
          id="rock"
          onClick={onclickBtn("바위")}
          className="btn"
        >
          바위
        </button>
        <button
          style={{ padding: 10 }}
          id="scissor"
          onClick={onclickBtn("가위")}
          className="btn"
        >
          가위
        </button>
        <button
          style={{ padding: 10 }}
          id="paper"
          onClick={onclickBtn("보")}
          className="btn"
        >
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 스코어 : {score}점</div>
    </>
  );
});

export default Rock;
