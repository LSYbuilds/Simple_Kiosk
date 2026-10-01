import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  OrderWrap,
  DeliveryInner,
  SiteBuyInner,
  EmptyInner,
  ConfirmWrap,
} from "../../style/mainstyled/order_styled";
import Icon from "../../components/SvgComponents";
import { number } from "motion";

const Order = ({ buybooData, setBuybooData, finalOrder, setFinalOrder }) => {
  const boodata = buybooData;
  // 부데이터 전부
  const [orderBooData, setOrderBooData] = useState(boodata);
  // 원가
  const [originPriceData] = useState(boodata.price);
  // 할인가
  const [salePriceData] = useState(boodata.salePrice);
  // 할인총합
  const [slaeTotalPrice, setSlaeTotalPrice] = useState(boodata.salePrice);
  // 일반총합
  const [totalPrice, setTotalPrice] = useState(boodata.price);
  // 구분-----------------
  const [optionOneCss, setOptionOneCss] = useState(false);
  const [optionTwoCss, setOptionTwoCss] = useState(false);
  // 유저이름
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");
  // 서비스 옵션
  const [service, setService] = useState(null);
  // 코어옵션
  const [core, setCore] = useState(null);
  // 부 갯수
  const [countNum, setCountNum] = useState(1);
  const [detailInfo, setDetailInfo] = useState(false);
  // 최종주문데이터 모달
  const [confirmModal, setConfirmModal] = useState(false);
  const navigate = useNavigate();
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };

  const deliveryOption = [
    {
      id: "1",
      service: [
        {
          id: 1,
          title: "기본 보증 1년",
          price: 0,
        },
        {
          id: 2,
          title: "2년 무상 서비스",
          price: 150000,
        },
        {
          id: 3,
          title: "3년 무상 서비스",
          price: 250000,
        },
      ],
      core: [
        {
          id: 1,
          title: "로스캘리퍼 펌웨어 1.0",
          price: 50000,
        },
        {
          id: 2,
          title: "로스캘리퍼 펌웨어 2.0",
          price: 100000,
        },
        {
          id: 3,
          title: "로스캘리퍼 펌웨어 3.0",
          price: 150000,
        },
      ],
    },
  ];
  // console.log(service);
  // console.log(core);
  // console.log("일반총합", totalPrice);
  // console.log("할인총합", slaeTotalPrice);
  const handleConfirm = () => {};
  const [detailOpen, setDetailOpen] = useState(false);

  const handlePlus = () => {
    setCountNum((prev) => {
      const nextCount = prev + 1;

      if (originPriceData !== salePriceData) {
        // 할인 있음
        const newSalePrice = slaeTotalPrice + salePriceData;
        setOrderBooData((item) => ({
          ...item,
          salePrice: newSalePrice,
        }));
        setSlaeTotalPrice(newSalePrice);
      } else {
        // 할인 없음
        const newPrice = totalPrice + originPriceData;
        setOrderBooData((item) => ({
          ...item,
          price: item.price + newPrice,
          salePrice: item.salePrice + newPrice,
        }));
        setTotalPrice(newPrice);
      }

      return nextCount;
    });
  };
  const handleMinus = () => {
    if (countNum <= 1) {
      alert("1개 이상 수량을 설정해야합니다");
      return;
    }
    setCountNum((prev) => prev - 1);
    if (originPriceData !== salePriceData) {
      // 할인 있음
      if (slaeTotalPrice <= salePriceData) {
        alert("세일된 값보다 내려갈 순 없습니다");
        return;
      }
      const newSalePrice = slaeTotalPrice - salePriceData;

      setSlaeTotalPrice(newSalePrice);
    } else {
      // 할인 없음
      const newPrice = totalPrice - originPriceData;

      setTotalPrice(newPrice);
    }
  };

  // 서비스옵션제외
  const handleCancelService = (price) => {
    let optionPrice;
    if (orderBooData.price !== orderBooData.salePrice) {
      optionPrice = slaeTotalPrice - price;
      setSlaeTotalPrice(optionPrice);
    } else {
      optionPrice = totalPrice - price;
      setTotalPrice(optionPrice);
    }
  };

  // 코어옵션제외
  const handleCancelCore = (price) => {
    let optionPrice;
    if (orderBooData.price !== orderBooData.salePrice) {
      optionPrice = slaeTotalPrice - price;
      setSlaeTotalPrice(optionPrice);
    } else {
      optionPrice = totalPrice - price;
      setTotalPrice(optionPrice);
    }
  };

  const handleServiceOption = (iitem) => {
    setService(iitem);
    let defaultPrice;
    console.log("서비스 옵션", iitem);

    if (orderBooData.price !== orderBooData.salePrice) {
      if (service) {
        defaultPrice = slaeTotalPrice - service.price + iitem.price;
      } else {
        defaultPrice = slaeTotalPrice + iitem.price;
      }
      setSlaeTotalPrice(defaultPrice);
    } else {
      // 할인이 아닐때
      if (service) {
        defaultPrice = totalPrice - service.price + iitem.price;
      } else {
        defaultPrice = totalPrice + iitem.price;
      }
      setTotalPrice(defaultPrice);
    }
  };
  const handleCoreOption = (iitem) => {
    setCore(iitem);

    let defaultPrice;

    if (orderBooData.price !== orderBooData.salePrice) {
      // 할인 상품
      if (core) {
        defaultPrice = slaeTotalPrice - core.price + iitem.price;
      } else {
        defaultPrice = slaeTotalPrice + iitem.price;
      }

      setSlaeTotalPrice(defaultPrice);
    } else {
      // 일반 상품
      if (core) {
        defaultPrice = totalPrice - core.price + iitem.price;
      } else {
        defaultPrice = totalPrice + iitem.price;
      }

      setTotalPrice(defaultPrice);
    }
  };
  const finalConfirm = () => {
    if (!userName) {
      alert("고객이름을 입력해주세요");
    } else if (!address) {
      alert("배송주소를 입력해주세요");
    } else if (!service) {
      alert("서비스 옵션을 선택해주세요");
    } else if (!core) {
      alert("코어옵션을 선택해주세요");
    } else {
      const data = {
        username: userName ? userName : "",
        address: address ? address : "",
        deliverymemo: memo ? memo : "안전 배송 부탁드립니다.",
        booname: buybooData.name,
        booimg: buybooData.src,
        originPirce: originPriceData,
        SalePrice:
          originPriceData !== salePriceData ? salePriceData : "할인없음",
        coreOption: core ? core.title : "",
        corePrice: core ? core.price : "",
        serviceOption: service ? service.title : "",
        servicePrice: service ? service.price : "",
        booCount: countNum,
        totalPrice:
          originPriceData === salePriceData ? totalPrice : slaeTotalPrice,
      };
      console.log("최종데이터", data);
      setFinalOrder(data);
      setConfirmModal(true);
    }
  };

  const handleFinalConfirmBtn = () => {
    navigate("/orderconfirm");
  };
  return (
    <OrderWrap>
      {confirmModal && (
        <ConfirmWrap>
          <div className="modal_inner">
            <div
              className="cancel_btn_box"
              onClick={() => setConfirmModal(false)}
            ></div>
            <p className="modal_title">결제 최종확인</p>
            <p className="modal_sub_title">입력하신 최종주문내역입니다.</p>
            <ul className="final_data_list">
              <li>
                <span>사용자 이름</span>
                <span>{finalOrder.username}</span>
              </li>
              <li>
                <span>사용자 주소</span>
                <span>{finalOrder.address}</span>
              </li>
              <li>
                <span>배송 메모</span>
                <span>{finalOrder.deliverymemo}</span>
              </li>
              <li>
                <span>제품 명</span>
                <span>{finalOrder.booname}</span>
              </li>
              <li>
                <span>원가</span>
                <span>₩ {finalOrder.originPirce.toLocaleString()}</span>
              </li>
              <li>
                <span>할인가</span>
                <span>₩ {finalOrder.SalePrice.toLocaleString()}</span>
              </li>
              <li>
                <span>서비스 옵션</span>
                <p>
                  <span>{finalOrder.serviceOption}</span>
                  <span>₩ {finalOrder.servicePrice.toLocaleString()}</span>
                </p>
              </li>
              <li>
                <span>코어옵션</span>
                <p>
                  <span>{finalOrder.coreOption}</span>
                  <span>₩ {finalOrder.corePrice.toLocaleString()}</span>
                </p>
              </li>
              <li>
                <span>주문수량</span>
                <span>{finalOrder.booCount}개</span>
              </li>
            </ul>
            <div className="final_price">
              <span>최종결산금액</span>
              <span>₩ {finalOrder.totalPrice.toLocaleString()}</span>
            </div>
            <div className="modal_confirm">
              <button onClick={() => handleFinalConfirmBtn()}>확인</button>
              <button onClick={() => setConfirmModal(false)}>취소</button>
            </div>
          </div>
        </ConfirmWrap>
      )}
      <div className="inner">
        <div className="page_title">주문/결제</div>
        {buybooData.buyClass === "delivery" ? (
          <DeliveryInner>
            <div className="inner_title">배송주문</div>
            <div className="flex_row">
              <div className="booData_box">
                <div className="data_title">상품상세</div>
                <div className="boo_basic_info">
                  <div className="boo_img">
                    <div
                      className={`boo_img_box ${orderBooData.rarity === 5 ? "gold" : "pup"}`}
                    >
                      <img src={publicPath(orderBooData.src)} alt="" />
                    </div>
                    <div className="boo_img_text">
                      <p className="img_boo_enb_name">{orderBooData.id}</p>
                      <p className="img_boo_ko_name">{orderBooData.name}</p>
                      <div className="img_boo_rarity">
                        {orderBooData.rarity === 5 ? (
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
                    </div>
                  </div>
                  <div className="boo_datail">
                    <div className="boo_title">
                      <p className="boo_eng_name">{orderBooData.id}</p>
                      <p className="boo_ko_name">{orderBooData.name}</p>
                    </div>
                    <div className="boo_price_box">
                      {orderBooData.salePrice &&
                      originPriceData !== salePriceData ? (
                        <div className="mamber_price">
                          <p className="origin_price">
                            ₩ {totalPrice.toLocaleString()}
                          </p>

                          <p className="sale_price">
                            ₩ {slaeTotalPrice.toLocaleString()}
                          </p>
                        </div>
                      ) : (
                        <div className="mamber_price">
                          <p className="non_origin_price">
                            ₩ {totalPrice.toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="boo_qoute">{orderBooData.description}</div>
                    <div className="boo_count_box">
                      <div className="boo_count">
                        <span className="plus" onClick={() => handleMinus()}>
                          -
                        </span>
                        <span>{countNum}</span>
                        <span className="minus" onClick={() => handlePlus()}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boo_detail_info_box">
                  <button className="detail_btn">상세설명</button>
                  <div className="boo_datial_text">
                    <div className="skills_box">
                      <div className="active_skills">
                        <div className="icon">
                          <Icon.sword />
                          <p>액티브</p>
                        </div>
                        <div className="skills_info">
                          {orderBooData.skills.active}
                        </div>
                      </div>
                      <div className="passive_skills">
                        <div className="icon">
                          <Icon.shield />
                          <p>패시브</p>
                        </div>

                        <div className="skills_info">
                          {orderBooData.skills.passive}
                        </div>
                      </div>
                    </div>
                    <div className="stats_box">
                      <div className="title">스텟</div>

                      <ul className="stats_list">
                        <li>
                          <div>
                            <Icon.attack />
                            <p>공격력</p>
                            <p>{orderBooData.stats.attack}</p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <Icon.support />
                            <p>지원</p>
                            <p>{orderBooData.stats.support}</p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <Icon.speed />
                            <p>속도</p>
                            <p>{orderBooData.stats.speed}</p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <Icon.defense />
                            <p>방어</p>
                            <p>{orderBooData.stats.defense}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="user_info_option">
                  <div className="user_info">
                    <p>이름을 입력해주세요</p>
                    <input
                      type="text"
                      placeholder="이름을 입력해주세요"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <p>배송받으실 주소를 입력해주세요</p>
                    <input
                      type="text"
                      placeholder="배송주소 입력"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <p>배송메모를 입력해주세요</p>
                    <input
                      type="text"
                      placeholder="배송주소 입력"
                      onChange={(e) => setMemo(e.target.value)}
                    />
                  </div>
                  <div className="option_list">
                    {deliveryOption.map((item) => (
                      <div className="option_box" key={item.id}>
                        <p className="option_title">옵션을 선택해주세요</p>
                        <p className="sub_title">보증기간</p>
                        <div className="select_option">
                          {item.service.map((iitem, idx) => (
                            <div
                              className={`option_item ${optionOneCss === idx ? "active" : ""}`}
                              key={iitem.id}
                              onClick={() => {
                                setOptionOneCss(idx);
                                handleServiceOption(iitem);
                              }}
                            >
                              <span>{iitem.title}</span>
                              <span>₩ {iitem.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                        <p className="sub_title">펌웨어</p>
                        <div className="select_option">
                          {item.core.map((iitem, idx) => (
                            <div
                              className={`option_item ${optionTwoCss === idx ? "activee" : ""}`}
                              key={iitem.id}
                              onClick={() => {
                                setOptionTwoCss(idx);
                                handleCoreOption(iitem);
                              }}
                            >
                              <span>{iitem.title}</span>
                              <span>₩ {iitem.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order_price">
                <div className="price_title">결제상세</div>
                <div className="price_list">
                  <div className="origin_price">
                    <span>원가</span>
                    <span>₩ {originPriceData.toLocaleString()}</span>
                  </div>
                  {orderBooData.salePrice &&
                  orderBooData.salePrice !== orderBooData.price ? (
                    <div className="sale_price">
                      <span>할인가</span>
                      <span>₩ {slaeTotalPrice.toLocaleString()}</span>
                    </div>
                  ) : (
                    ""
                  )}
                  {service ? (
                    <div className="service_price">
                      <p>{service.title}</p>
                      <p>
                        <span>₩ {service.price}</span>
                        <span
                          className="cancel_btn"
                          onClick={() => {
                            (setService(null),
                              handleCancelService(service.price));
                          }}
                        >
                          X
                        </span>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {core ? (
                    <div className="core_price">
                      <p>{core.title}</p>
                      <p>
                        <span>₩ {core.price}</span>
                        <span
                          className="cancel_btn"
                          onClick={() => {
                            (setCore(null), handleCancelCore(core.price));
                          }}
                        >
                          X
                        </span>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {orderBooData.price !== orderBooData.salePrice ? (
                    <div className="total_price">
                      <span>총합</span>
                      <span>₩ {slaeTotalPrice.toLocaleString()}</span>
                    </div>
                  ) : (
                    <div className="total_price">
                      <span>총합</span>
                      <span>₩ {totalPrice.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                <button
                  className="final_confirm"
                  onClick={() => finalConfirm()}
                >
                  결제
                </button>
              </div>
            </div>
          </DeliveryInner>
        ) : buybooData.buyClass === "site" ? (
          <SiteBuyInner>현장</SiteBuyInner>
        ) : (
          <EmptyInner>비어있음</EmptyInner>
        )}
      </div>
    </OrderWrap>
  );
};

export default Order;
