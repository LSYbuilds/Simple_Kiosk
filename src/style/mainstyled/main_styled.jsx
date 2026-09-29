import styled from "@emotion/styled";
import { motion } from "motion/react";
export const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #1f1f1f;
  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1400px;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;

    background: #eef1f6;

    .hero_section {
      width: 100%;
      padding: 20px;
      background:
        radial-gradient(
          circle at 80% 20%,
          rgba(100, 120, 255, 0.18),
          transparent 35%
        ),
        linear-gradient(135deg, #252b3a, #171b27);

      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      .event_banner {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100%;
        height: 180px;

        padding: 20px;

        border-radius: 15px;
        overflow: hidden;

        background-image:
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.5) 30%,
            rgba(0, 0, 0, 0.15) 60%,
            rgba(0, 0, 0, 0) 100%
          ),
          url("/banner/banner1.webp");

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center right;

        p {
          width: 35%;
          margin: 0;

          color: #fff;
          font-size: 2em;
          font-weight: 700;
          line-height: 1.3;
        }
      }
    }

    .list_section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      padding: 20px;

      .category {
        display: flex;
        gap: 14px;
        height: 54px;

        li {
          position: relative;
          width: 20%;
          cursor: pointer;

          .title {
            position: relative;
            z-index: 900;

            width: 100%;
            height: 100%;

            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;

            font-size: 1.2em;
            font-weight: 700;
            color: #303746;

            border-radius: 14px;
            border: 1px solid #d5dae4;

            background: #f8f9fc;

            transition:
              background 0.2s ease,
              border-color 0.2s ease,
              color 0.2s ease,
              box-shadow 0.2s ease;

            svg {
              position: absolute;
              right: 18px;
            }

            &:hover {
              color: #4d5cff;
              border-color: #aeb8ff;
              background: #f2f4ff;
              box-shadow: 0 5px 15px rgba(70, 80, 180, 0.08);
            }
          }

          .sort_list {
            position: absolute;
            z-index: 800;

            top: 0;
            left: 0;

            padding-top: 54px;

            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 4px;

            overflow: hidden;

            border-radius: 14px;
            border: 1px solid #d5dae4;

            background: #f8f9fc;
            box-shadow: 0 15px 30px rgba(25, 30, 45, 0.12);

            li {
              width: 100%;
              height: 48px;

              text-align: center;
              align-content: center;

              font-size: 1.1em;
              font-weight: 600;
              color: #444b5c;

              transition:
                background 0.15s ease,
                color 0.15s ease;

              &:hover {
                color: #4d5cff;
                background: #eef1ff;
              }
            }
          }
        }
      }

      .list_grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        li {
          display: flex;
          flex-direction: column;
          flex: 0 0 20%;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid #d6dbe5;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(30, 35, 50, 0.06);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 28px rgba(30, 35, 50, 0.13);
          }

          .gold {
            background:
              radial-gradient(
                circle at 30% 20%,
                rgba(255, 248, 190, 0.9),
                transparent 40%
              ),
              linear-gradient(135deg, #b88727 0%, #f5d477 45%, #c9952e 100%);
          }

          .pup {
            background:
              radial-gradient(
                circle at 30% 20%,
                rgba(220, 210, 255, 0.9),
                transparent 40%
              ),
              linear-gradient(135deg, #7059d9, #9b7cff);
          }

          .boo_img {
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;

            width: 100%;
            height: 300px;

            overflow: hidden;

            img {
              transition:
                height 0.3s ease,
                transform 0.3s ease;

              height: 95%;
            }

            .eng_name {
              position: absolute;
              top: 18px;
              left: 18px;
              text-align: left;
              font-size: 1.1em;
              font-weight: 800;
              color: rgba(255, 255, 255, 0.75);
              letter-spacing: 0.04em;
            }
          }

          .boo_desc {
            display: flex;
            flex-direction: column;
            padding: 16px 16px 24px;
            background: linear-gradient(180deg, #272c3a 0%, #1f2431 100%);
            color: #fff;

            .star_box {
              display: flex;
              justify-content: center;
              gap: 4px;

              padding: 0 0 8px;

              svg {
                width: 16px;
                height: 16px;

                path {
                  fill: #ffd45a;
                }
              }
            }

            .boo_name {
              margin: 0;

              text-align: center;

              font-size: 1.8em;
              font-weight: 800;

              color: #fff;
            }

            .price_box {
              position: relative;
              margin: 4px 0 0;
              text-align: center;
              font-size: 1.25em;
              font-weight: 600;
              color: #bfc6d8;
              .origin_price {
                font-size: 0.8em;
                text-decoration: line-through;
              }
            }
          }

          &:hover {
            .boo_img {
              img {
                height: 100%;
              }
            }

            .gold {
              background:
                radial-gradient(circle at 30% 20%, #fff8ca, transparent 40%),
                linear-gradient(135deg, #d6a936, #ffe28a, #b98220);
            }

            .pup {
              background:
                radial-gradient(circle at 30% 20%, #eee8ff, transparent 40%),
                linear-gradient(135deg, #8269ed, #b39aff, #6546c7);
            }
          }
        }
      }
    }
  }
`;
/* =====================================================
   Selected Item
===================================================== */
export const SelectedItem = styled(motion.div)`
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100vh;

  z-index: 1000;

  .selected_bg {
    position: absolute;
    inset: 0;

    background: rgba(13, 16, 25, 0.72);

    backdrop-filter: blur(3px);

    cursor: pointer;
  }

  .selected_item_info {
    position: absolute;

    top: 0;
    right: max(0px, calc((100vw - 1400px) / 2));

    width: 620px;
    height: 100vh;

    box-sizing: border-box;

    padding: 44px 40px;

    overflow-x: hidden;
    overflow-y: auto;

    background: linear-gradient(180deg, #fafbfe 0%, #f3f5f9 100%);

    color: #202534;

    border-left: 1px solid rgba(255, 255, 255, 0.7);

    box-shadow: -20px 0 60px rgba(0, 0, 0, 0.22);

    &::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 4px;
      height: 100%;

      background: linear-gradient(180deg, #6172ff, #8b5cf6);
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c9ced9;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  /* =========================
     기본 정보
  ========================= */

  .basicInfo_box {
    display: flex;
    gap: 24px;

    padding-bottom: 30px;

    border-bottom: 1px solid #dde1e9;
  }

  .boo_img_box {
    flex: 0 0 210px;

    width: 210px;
    height: 210px;

    overflow: hidden;

    border-radius: 22px;

    background: #e9ecf3;

    box-shadow:
      inset 0 0 0 1px rgba(0, 0, 0, 0.04),
      0 10px 25px rgba(30, 35, 55, 0.08);

    img {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .boo_info_box {
    flex: 1;

    min-width: 0;

    display: flex;
    flex-direction: column;
  }

  .boo_name_box {
    margin-bottom: 14px;

    .boo_name {
      margin: 0;

      color: #1d2230;

      font-size: 30px;
      font-weight: 800;

      line-height: 1.3;

      word-break: keep-all;
    }
  }

  .desetext {
    display: flex;
    flex-direction: column;
    gap: 7px;

    color: #6d7484;

    font-size: 16px;
    font-weight: 500;

    line-height: 1.6;

    p {
      margin: 0;

      word-break: keep-all;
    }
  }

  .rank {
    margin-top: auto;

    padding-top: 18px;

    .star_box {
      display: flex;
      align-items: center;
      gap: 4px;

      padding: 6px 9px;

      width: fit-content;

      border-radius: 8px;

      background: #fff4cf;

      svg {
        width: 19px;
        height: 19px;

        path {
          fill: #f2b82b;
        }
      }
    }
  }

  .price {
    margin-top: 12px;

    p {
      margin: 0;
      color: #4d5cff;
      font-size: 25px;
      font-weight: 800;
    }
    .origin_price {
      font-size: 1.4em;
      text-decoration: line-through;
    }
  }

  /* =========================
     상세
  ========================= */

  .detail_box {
    padding-top: 30px;
  }

  .detail_Info {
    display: grid;

    grid-template-columns: 65px minmax(0, 1fr);

    gap: 16px 18px;

    padding: 20px;

    border-radius: 16px;

    background: #fff;

    border: 1px solid #e3e6ed;

    box-shadow: 0 5px 15px rgba(30, 35, 55, 0.04);

    p {
      margin: 0;

      word-break: keep-all;
    }

    p:nth-child(odd) {
      color: #8a91a0;

      font-size: 15px;
      font-weight: 800;
    }

    p:nth-child(even) {
      color: #303746;

      font-size: 16px;
      font-weight: 500;

      line-height: 1.65;
    }
  }

  /* =========================
     스킬
  ========================= */

  .skills_box {
    display: flex;
    flex-direction: column;

    gap: 12px;

    margin-top: 28px;
  }

  .active_skills,
  .passive_skills {
    display: flex;
    align-items: center;

    gap: 18px;

    min-height: 90px;

    padding: 16px 18px;

    box-sizing: border-box;

    border-radius: 16px;

    background: #fff;

    border: 1px solid #e1e5ed;

    box-shadow: 0 5px 15px rgba(30, 35, 55, 0.04);
  }

  .active_skills {
    border-left: 4px solid #6575ff;
  }

  .passive_skills {
    border-left: 4px solid #8c63e8;
  }

  .icon {
    flex: 0 0 58px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 6px;

    color: #353b4c;

    svg {
      width: 28px;
      height: 28px;
    }

    p {
      margin: 0;

      color: #70788a;

      font-size: 13px;
      font-weight: 800;
    }
  }

  .skills_info {
    flex: 1;

    min-width: 0;

    color: #3c4352;

    font-size: 16px;
    font-weight: 500;

    line-height: 1.6;

    word-break: keep-all;
  }

  /* =========================
     스텟
  ========================= */

  .stats_box {
    margin-top: 30px;

    .title {
      margin-bottom: 14px;

      color: #252b39;

      font-size: 21px;
      font-weight: 800;
    }
  }

  .stats_list {
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 10px;

    margin: 0;
    padding: 0;

    list-style: none;

    li {
      min-height: 58px;

      display: flex;
      align-items: center;

      gap: 12px;

      padding: 0 16px;

      box-sizing: border-box;

      border: 1px solid #e1e5ed;

      border-radius: 13px;

      background: #fff;

      color: #353b4a;

      font-size: 17px;
      font-weight: 700;

      box-shadow: 0 4px 12px rgba(30, 35, 55, 0.035);

      svg {
        flex: 0 0 auto;

        width: 23px;
        height: 23px;
      }
    }
  }

  /* =========================
     구매 버튼
  ========================= */

  .buy_buttons {
    display: flex;

    gap: 12px;

    margin-top: 30px;

    padding-bottom: 20px;

    button {
      flex: 1;

      height: 64px;

      border: 0;
      border-radius: 14px;

      font-size: 18px;
      font-weight: 800;

      cursor: pointer;

      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

      &:first-child {
        background: #e8ebf2;

        color: #303746;

        &:hover {
          background: #dde1ea;
        }
      }

      &:last-child {
        background: linear-gradient(135deg, #5969ff, #7458e8);

        color: #fff;

        box-shadow: 0 8px 18px rgba(91, 91, 220, 0.25);

        &:hover {
          background: linear-gradient(135deg, #4d5eff, #6749dc);

          box-shadow: 0 12px 24px rgba(91, 91, 220, 0.32);
        }
      }

      &:hover {
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  /* =========================
     Tablet
  ========================= */

  @media (max-width: 1024px) {
    .selected_item_info {
      width: 60vw;

      padding: 35px 30px;
    }

    .boo_img_box {
      flex-basis: 170px;

      width: 170px;
      height: 170px;
    }

    .boo_name_box .boo_name {
      font-size: 26px;
    }

    .desetext {
      font-size: 16px;
    }

    .detail_Info {
      font-size: 16px;
    }

    .skills_info {
      font-size: 16px;
    }
  }

  /* =========================
     Mobile
  ========================= */

  @media (max-width: 737px) {
    .selected_item_info {
      right: 0;

      width: 100%;

      padding: 25px 20px;
    }

    .basicInfo_box {
      gap: 18px;
    }

    .boo_img_box {
      flex-basis: 130px;

      width: 130px;
      height: 130px;
    }

    .boo_name_box .boo_name {
      font-size: 23px;
    }

    .desetext {
      font-size: 15px;
    }

    .price p {
      font-size: 21px;
    }

    .detail_Info {
      grid-template-columns: 55px minmax(0, 1fr);

      gap: 12px;

      padding: 16px;

      font-size: 15px;

      p:nth-child(odd),
      p:nth-child(even) {
        font-size: 15px;
      }
    }

    .skills_info {
      font-size: 15px;
    }

    .stats_list li {
      font-size: 16px;
    }

    .buy_buttons button {
      height: 58px;

      font-size: 17px;
    }
  }
`;
