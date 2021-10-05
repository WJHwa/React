import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NumberBaseball from "../숫자야구/numberbaseball";
import Lotto from "../로또/Lotto";
import MineSearch from "../지뢰찾기/MineSearch";
import ResponCheck from "../리스폰체크/responCheck";
import Registerd from "../회원가입/registered";
import Gugudan from "../구구단/Gugudan";
import Rock from "../가위바위보/Rock";

//헤쉬라우터는 서버는 모르고 브라우저만 알고있음
function Games() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      &nbsp;
      <Link to="/number_baseball">숫자야구</Link>
      &nbsp;
      <Link to="/Lotto">로또추첨기</Link>
      &nbsp;
      <Link to="/MineSearch">지뢰찾기</Link>
      &nbsp;
      <Link to="/ResponCheck">리스폰체크</Link>
      &nbsp;
      <Link to="/register">회원가입</Link>
      &nbsp;
      <Link to="/Gugudan">구구단</Link>
      &nbsp;
      <Link to="/Rock">가위바위보</Link>
      <div>
        {/* <Route exact path="/" component={Games}></Route> */}
        <Route path="/number_baseball" component={NumberBaseball}></Route>
        <Route path="/Lotto" component={Lotto}></Route>
        <Route path="/MineSearch" component={MineSearch}></Route>
        <Route path="/ResponCheck" component={ResponCheck}></Route>
        <Route path="/registered" component={Registerd}></Route>
        <Route path="/Gugudan" component={Gugudan}></Route>
        <Route path="/Rock" component={Rock}></Route>
      </div>
    </BrowserRouter>
  );
}

export default Games;
