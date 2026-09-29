import React, { useState } from "react";
import {
  OrderWrap,
  DeliveryInner,
  SiteBuyInner,
  EmptyInner,
} from "../../style/mainstyled/order_styled";
import Icon from "../../components/SvgComponents";

const Order = ({ buybooData, setBuybooData }) => {
  const orderboodata = buybooData;
  const [orderBooData, setOrderBooData] = useState(orderboodata);
  const [finalBuy, setFinalBuy] = useState(null);
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
  const handleConfirm = () => {};
  const [detailOpen, setDetailOpen] = useState(false);
  console.log("오더부데이터", orderboodata);
  return (
    <OrderWrap>
      <div className="inner">
        <div className="title">주문/결제</div>
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
                      <img src={orderBooData.src} alt="" />
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
                      orderBooData.salePrice !== orderBooData.price ? (
                        <div className="mamber_price">
                          <p className="origin_price">
                            ₩ {orderBooData.price.toLocaleString()}
                          </p>

                          <p className="sale_price">
                            ₩ {orderBooData.salePrice.toLocaleString()}
                          </p>
                        </div>
                      ) : (
                        <p className="price">
                          ₩ {orderBooData.price.toLocaleString()}
                        </p>
                      )}
                    </div>
                    <div className="boo_qoute">{orderBooData.description}</div>
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
                          <Icon.attack />
                        </li>

                        <li>
                          <Icon.support />
                        </li>

                        <li>
                          <Icon.speed />
                        </li>

                        <li>
                          <Icon.defense />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="user_info_option">
                  <div className="user_info">
                    <p>이름을 입력해주세요</p>
                    <input type="text" placeholder="이름을 입력해주세요" />
                    <p>배송받으실 주소를 입력해주세요</p>
                    <input type="text" placeholder="배송주소 입력" />
                    <p>배송메모를 입력해주세요</p>
                    <input type="text" placeholder="배송주소 입력" />
                  </div>
                  <div className="option_list">
                    {deliveryOption.map((item) => (
                      <div className="option_box" key={item.id}>
                        <p className="option_title">옵션을 선택해주세요</p>
                        <p className="sub_title">보증기간</p>
                        <div className="select_option">
                          {item.service.map((iitem) => (
                            <div className="option_item" key={iitem.id}>
                              <span>{iitem.title}</span>
                              <span>₩ {iitem.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                        <p className="sub_title">펌웨어</p>
                        <div className="select_option">
                          {item.core.map((iitem) => (
                            <div className="option_item" key={iitem.id}>
                              <span>{iitem.title}</span>
                              <span>₩ {iitem.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="confirm_btn">결제등록</button>
                </div>
              </div>
              <div className="order_price">
                <div className="price_title">결제상세</div>
                <div className="price_list">
                  <p className="origin_price">
                    <span>원가</span>
                    <span></span>
                  </p>
                  <p className="sale_price">
                    <span>할인가</span>
                    <span></span>
                  </p>
                  <p className="service_price">
                    <span></span>
                    <span></span>
                  </p>
                  <p className="core_price">
                    <span></span>
                    <span></span>
                  </p>
                </div>
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
