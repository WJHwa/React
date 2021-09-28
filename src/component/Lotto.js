import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

function Lotto() {
  const LottoNumbers = useMemo(() => getWinNumbers(), []); //useMemo는 값을 기억한다.[]바뀌기 전까지
  const [Winballs, setWinballs] = useState([]);
  const [bonus, setbonus] = useState(null); // 보너스공
  const [Redo, setRedo] = useState(false);
  const [winNumbers, setWinNumbers] = useState(LottoNumbers); //당첨숫자
  const timeouts = useRef([]);

  useEffect(() => {
    console.log("useEffect");
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinballs((prev) => [...prev, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setbonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); //useEffect는 []가 바뀔때 실행한다. 빈배열이면
  //[]가 빈배열이면 componentDidMount와 동일..

  const onclickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinballs([]);
    setbonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]); //useCallback은 함수를 기억한다.[]가 바뀌기 전까지
  return (
    <>
      <div>당첨 숫자</div>
      <div>
        {Winballs.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {Redo && <button onClick={onclickRedo}>한번더!</button>}
    </>
  );
}

export default Lotto;
