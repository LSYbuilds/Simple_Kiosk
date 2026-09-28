import React, { useState } from "react";
import { MainWrap } from "../../style/mainstyled/main_styled";
import booData from "../../assets/data/bandbooData.json";
import Icon from "../../components/SvgComponents";

const Main = (faction) => {
  const boodataList = booData.bangbooList;
  const [thisBoo, setThisBoo] = useState(null);
  const [sideView, setSideView] = useState(false);
  console.log(faction);
  console.log(thisBoo);
  return (
    <MainWrap>
      <div className="inner">
        <section className="hero_section">일단 비워둬봐 배너들어간다</section>
        <section className="list_section">
          <ul className="category">
            <li>전체</li>
            <li>
              <p className="title">
                원소별 <Icon.sort />
              </p>
            </li>
            <li>
              <p className="title">
                랭크순 <Icon.sort />
              </p>
            </li>
            <li>
              <p className="title">
                가격순 <Icon.sort />
              </p>
            </li>
          </ul>
          <ul className="list_grid">
            {boodataList.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setThisBoo(item);
                  setSideView((props) => !props);
                }}
              >
                <div
                  className={`boo_img ${item.rarity === 5 ? "gold" : "pup"}`}
                >
                  <img src={item.src} alt="bangboo 이미지" />
                  <span className="eng_name">{item.id}</span>
                </div>
                <div className="boo_desc">
                  {item.rarity === 5 ? (
                    <div className="star_box">
                      <Icon.star />
                      <Icon.star />
                      <Icon.star />
                      <Icon.star />
                      <Icon.star />
                    </div>
                  ) : (
                    <div className="star_box">
                      <Icon.star />
                      <Icon.star />
                      <Icon.star />
                      <Icon.star />
                    </div>
                  )}
                  <p className="boo_name">{item.name}</p>
                  <p className="boo_price">₩ {item.price.toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        {sideView && <div className="selected_item"></div>}
      </div>
    </MainWrap>
  );
};

export default Main;
