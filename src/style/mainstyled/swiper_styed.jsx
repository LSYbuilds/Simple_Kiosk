import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
import { keyframes } from "@emotion/react";

export const SaleBooSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 140px;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    color: #fff;
    width: auto;
    height: 100%;
    .swiper-slide {
      padding: 8px 0px;
      height: 125px;
      box-shadow:
        inset 0 0 0 1px rgba(0, 0, 0, 0.04),
        0 10px 25px rgba(30, 35, 55, 0.08);
      border-radius: 18px;
      overflow: hidden;
      cursor: pointer;
      .sale_boo_img {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 80%;
        align-items: center;
        align-content: center;
        img {
          height: 100%;
        }
      }
      .sale_boo_name {
        text-align: center;
        font-weight: 700;
        color: #000000;
      }
      &:hover {
        background-color: #d4d4d4;
      }
    }
  }
`;
