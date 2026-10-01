import React, { use, useState } from "react";
import { OrderConfirmWrap } from "../../style/mainstyled/orderConfirm_styled";
import { Link, useNavigate } from "react-router-dom";
const OrderConfirm = ({ faction, finalOrder }) => {
  console.log("파이널오더", finalOrder);
  console.log("팩션데이터", faction);
  const navigate = useNavigate();
  // SalePrice: "할인없음";
  // address: "213";
  // booCount: 1;
  // booimg: "/bangboo/Butler.webp";
  // booname: "버틀러";
  // coreOption: "로스캘리퍼 펌웨어 2.0";
  // corePrice: 100000;
  // deliverymemo: "안전 배송 부탁드립니다.";
  // originPirce: 5876000;
  // serviceOption: "2년 무상 서비스";
  // servicePrice: 150000;
  // totalPrice: 6126000;
  // username: "123";
  const handleNewOrder = () => {
    navigate("/");
  };
  return (
    <OrderConfirmWrap>
      <div className="inner">
        <div className="order_title">주문이 완료되었습니다.</div>
        <div className="order_item_box">
          <div className="boo_img">
            <img src={finalOrder.booimg} alt="부이미지" />
          </div>
          <div className="order_info_box">
            <p className="boo_name">{finalOrder.booname}</p>
            <ul className="order_info_list">
              <li>
                <p>주문자명</p>
                <p>{finalOrder.username}</p>
              </li>
              <li>
                <p>배송주소</p>
                <p>{finalOrder.address}</p>
              </li>
              <li>
                <p>배송메모</p>
                <p>{finalOrder.deliverymemo}</p>
              </li>
              <li>
                <p>원가</p>
                <p>₩ {finalOrder.originPirce.toLocaleString()}</p>
              </li>
              <li>
                <p>할인</p>
                <p>₩ {finalOrder.SalePrice.toLocaleString()}</p>
              </li>
              <li>
                <p>주문 수량</p>
                <p>{finalOrder.booCount} 개</p>
              </li>
              <li>
                <p>서비스</p>
                <p>
                  <span>{finalOrder.serviceOption}</span>
                  <span>₩ {finalOrder.servicePrice.toLocaleString()}</span>
                </p>
              </li>
              <li>
                <p>코어</p>
                <p>
                  <span>{finalOrder.coreOption}</span>
                  <span>₩ {finalOrder.corePrice.toLocaleString()}</span>
                </p>
              </li>
              <li>
                <p>총 결제 가격</p>
                <p>₩ {finalOrder.totalPrice.toLocaleString()}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="new_order" onClick={() => handleNewOrder()}></div>
      </div>
    </OrderConfirmWrap>
  );
};

export default OrderConfirm;
