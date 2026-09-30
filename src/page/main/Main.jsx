import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainWrap, SelectedItem } from "../../style/mainstyled/main_styled";
import booData from "../../assets/data/bandbooData.json";
import Icon from "../../components/SvgComponents";
import { AnimatePresence, motion, time } from "motion/react";
import { SaleBooSwiper } from "../../style/mainstyled/swiper_styed";
import { Swiper, SwiperSlide } from "swiper/react";

const Main = ({ faction, setBuybooData }) => {
  const [thisBoo, setThisBoo] = useState(null);
  const [sideView, setSideView] = useState(false);
  const [sort, setSort] = useState(null);
  const [allbooData, setAllbooData] = useState(booData.bangbooList);
  const [saleboo, setSaleboo] = useState([]);

  const navigate = useNavigate();
  // const saleData = booData.bangbooList.map((item) => ({
  //   ...item,
  //   salePrice:
  //     faction.facname === "프록시" ? Math.floor(item.price * 0.8) : item.price,
  // }));
  const factionSaleFunc = () => {
    let saleData;
    let saleboo;
    if (faction.facename === "proxy") {
      // proxy → 전체 20% 할인
      saleData = booData.bangbooList.map((item) => ({
        ...item,
        salePrice: Math.floor(item.price * 0.8),
      }));
    } else {
      // private → 해당 항목 30% 할인
      // public → 해당 항목 50% 할인
      saleData = booData.bangbooList.map((item) => ({
        ...item,
        salePrice:
          item.saleFaction === faction.facename
            ? faction.facename === "private"
              ? Math.floor(item.price * 0.7)
              : faction.facename === "public"
                ? Math.floor(item.price * 0.5)
                : item.price
            : item.price,
      }));
    }
    return saleData;
  };

  // 할인중인 항목만 출력
  const salebooList = (saleData) => {
    let saleboo = saleData.filter(
      (item) => item.salePrice && item.salePrice < item.price,
    );
    return saleboo;
  };

  // 전체 불러오기
  const allDataCall = () => {
    setAllbooData(factionSaleFunc());
  };

  // 원소 필터
  const sortDataFilter = (sortName) => {
    const reset = factionSaleFunc();
    const filerted = reset.filter((item) => item.element === sortName);
    setAllbooData(filerted);
  };
  // 랭크필터
  const sortDataRankFilter = (sortRank) => {
    const reset = factionSaleFunc();
    const filerted = reset.filter((item) => item.rarity === sortRank);
    setAllbooData(filerted);
  };
  // 높은가격순
  const sortDataPriceHigh = () => {
    const reset = factionSaleFunc();
    const filerted = [...reset].sort((a, b) => b.price - a.price);
    setAllbooData(filerted);
  };
  // 낮은가격순
  const sortDataPriceLow = () => {
    const reset = factionSaleFunc();
    const filerted = [...reset].sort((a, b) => a.price - b.price);
    setAllbooData(filerted);
  };

  // 배송구매
  const handledelivery = () => {
    const deliveryData = {
      ...thisBoo,
      buyClass: "delivery",
    };
    setBuybooData(deliveryData);
    navigate("/order");
  };
  // 현장구매
  const handleSite = () => {
    const siteBuy = {
      ...thisBoo,
      buyClass: "site",
    };
    setBuybooData(siteBuy);
    navigate("/order");
  };

  // 펙션별 세일 이펙트
  useEffect(() => {
    const saleData = factionSaleFunc();
    const salefilter = salebooList(saleData);
    console.log("현재 faction:", faction);
    console.log("할인 데이터:", saleData);
    console.log("세일하는 부만", salefilter);
    setAllbooData(saleData);
    setSaleboo(salefilter);
  }, [faction]);

  console.log("펙션", faction);
  console.log(thisBoo);
  console.log(sort);

  // 사이드바 고정하는것
  useEffect(() => {
    document.body.style.overflow = sideView ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideView]);
  return (
    <MainWrap>
      <div className="inner">
        <section className="hero_section">
          <div className="event_banner">
            <p>로스캘리퍼 방부넷에 회원가입하여 할인혜택을 누려보세요</p>
          </div>
        </section>
        <section className="list_section">
          <ul className="category">
            <li onClick={() => allDataCall()}>
              <p className="title">전체</p>
            </li>
            <li onClick={() => setSort(sort === "element" ? null : "element")}>
              <p className="title">
                원소별 <Icon.sort />
              </p>
              <AnimatePresence>
                {sort === "element" && (
                  <motion.ul className="sort_list">
                    <li onClick={() => sortDataFilter("물리")}>물리</li>
                    <li onClick={() => sortDataFilter("불")}>불</li>
                    <li onClick={() => sortDataFilter("전기")}>전기</li>
                    <li onClick={() => sortDataFilter("얼음")}>얼음</li>
                    <li onClick={() => sortDataFilter("에테르")}>에테르</li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li onClick={() => setSort(sort === "rank" ? null : "rank")}>
              <p className="title">
                랭크순 <Icon.sort />
              </p>
              <AnimatePresence>
                {sort === "rank" && (
                  <ul className="sort_list">
                    <li onClick={() => sortDataRankFilter(5)}>5성</li>
                    <li onClick={() => sortDataRankFilter(4)}>4성</li>
                  </ul>
                )}
              </AnimatePresence>
            </li>
            <li onClick={() => setSort(sort === "price" ? null : "price")}>
              <p className="title">
                가격순 <Icon.sort />
              </p>
              <AnimatePresence>
                {sort === "price" && (
                  <ul className="sort_list">
                    <li onClick={() => sortDataPriceHigh()}>높은순</li>
                    <li onClick={() => sortDataPriceLow()}>낮은순</li>
                  </ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
          {saleboo.length === 0 ? (
            <div className="sale_list_box">
              <p className="sale_title">현재 할인중인 BANGBOO</p>
              <div>로스캘리퍼 방부넷에 회원가입하여 할인혜택을 누려보세요</div>
            </div>
          ) : (
            <div className="sale_list_box">
              <p className="sale_title">현재 할인중인 BANGBOO</p>
              <SaleBooSwiper slidesPerView={8} spaceBetween={8}>
                {saleboo.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={`boo_img ${item.rarity === 5 ? "gold" : "pup"}`}
                    onClick={() => {
                      setThisBoo(item);
                      setSideView((props) => !props);
                    }}
                  >
                    <div className="sale_boo_img">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="sale_boo_name">{item.name}</div>
                  </SwiperSlide>
                ))}
              </SaleBooSwiper>
            </div>
          )}
          <ul className="list_grid">
            {allbooData.map((item) => (
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
                  {item.salePrice ? (
                    item.price !== item.salePrice ? (
                      <div className="price_box">
                        <p className="origin_price">
                          ₩ {item.price.toLocaleString()}
                        </p>
                        <p className="sale_price">
                          ₩ {item.salePrice.toLocaleString()}
                        </p>
                      </div>
                    ) : (
                      <div className="price_box">
                        <p className="price">₩ {item.price.toLocaleString()}</p>
                      </div>
                    )
                  ) : (
                    <div className="price_box">
                      <p className="price">₩ {item.price.toLocaleString()}</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <AnimatePresence>
          {sideView && (
            <SelectedItem className="selected_item">
              {/* 배경 */}
              <motion.div
                className="selected_bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSideView(false)}
              />

              {/* 오른쪽 패널 */}
              <motion.div
                className="selected_item_info"
                initial={{ x: "200%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "200%", opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="basicInfo_box">
                  <div className="boo_img_box">
                    <img src={thisBoo.src} alt="" />
                  </div>

                  <div className="boo_info_box">
                    <div className="boo_name_box">
                      <p className="boo_name">{thisBoo.name}</p>
                    </div>

                    <div className="desetext">
                      <p>{thisBoo.quote}</p>
                      <p>{thisBoo.shortDesc}</p>
                    </div>

                    <div className="rank">
                      {thisBoo.rarity === 5 ? (
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
                    </div>
                    {thisBoo.salePrice ? (
                      <div className="price">
                        <p className="origin_price">
                          W {thisBoo.price.toLocaleString()}
                        </p>
                        <p>W {thisBoo.salePrice.toLocaleString()}</p>
                      </div>
                    ) : (
                      <div className="price">
                        <p>W {thisBoo.price.toLocaleString()}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="detail_box">
                  <div className="detail_Info">
                    <p>상세</p>
                    <p>{thisBoo.description}</p>

                    <p>성격</p>
                    <p>{thisBoo.personality}</p>
                  </div>

                  <div className="skills_box">
                    <div className="active_skills">
                      <div className="icon">
                        <Icon.sword />
                        <p>액티브</p>
                      </div>

                      <div className="skills_info">{thisBoo.skills.active}</div>
                    </div>

                    <div className="passive_skills">
                      <div className="icon">
                        <Icon.shield />
                        <p>패시브</p>
                      </div>

                      <div className="skills_info">
                        {thisBoo.skills.passive}
                      </div>
                    </div>
                  </div>

                  <div className="stats_box">
                    <div className="title">스텟</div>

                    <ul className="stats_list">
                      <li>
                        <Icon.attack />
                        {thisBoo.stats.attack}
                      </li>

                      <li>
                        <Icon.support />
                        {thisBoo.stats.support}
                      </li>

                      <li>
                        <Icon.speed />
                        {thisBoo.stats.speed}
                      </li>

                      <li>
                        <Icon.defense />
                        {thisBoo.stats.defense}
                      </li>
                    </ul>
                  </div>

                  <div className="buy_buttons">
                    <button onClick={() => handleSite()}>현장구매</button>
                    <button onClick={() => handledelivery()}>배송구매</button>
                  </div>
                </div>
              </motion.div>
            </SelectedItem>
          )}
        </AnimatePresence>
      </div>
    </MainWrap>
  );
};

export default Main;
