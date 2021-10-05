import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Lotto from "../로또/Lotto";
import ResponCheck from "../리스폰체크/responCheck";
import NumberBaseball from "../숫자야구/numberbaseball";
import MineSearch from "../지뢰찾기/MineSearch";

function Route1({ props }) {
  console.log(props);
  // if (name === "number_baseball") {
  //   return <NumberBaseball />;
  // } else if (name === "Lotto") {
  //   return <Lotto />;
  // } else if (name === "ResponCheck") {
  //   return <ResponCheck />;
  // } else if (name === "Mine") {
  //   return <MineSearch />;
  // }
  return (
    <BrowserRouter>
      <Link to="/game/number_baseball">숫자야구</Link>
      &nbsp;
      <Link to="/game/Lotto">로또</Link>
      &nbsp;
      <Link to="/game/ResponCheck">리스폰체크</Link>
      &nbsp;
      <Link to="/game/Mine">지뢰찾기</Link>
      <div>
        <Route path="/game/:name" render={(props) => <Route1 {...props} />} />
      </div>
      <div></div>
    </BrowserRouter>
  );
}

export default Route1;
