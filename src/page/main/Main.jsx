import React from "react";
import { MainWrap } from "../../style/mainstyled/main_styled";
import booData from "../../assets/data/bandbooData.json";

const Main = (faction) => {
  const boodataList = booData.bangbooList;
  console.log(faction);
  return (
    <MainWrap>
      <div className="inner">
        <section className="hero_section"></section>
        <section className="list_section"></section>
      </div>
    </MainWrap>
  );
};

export default Main;
