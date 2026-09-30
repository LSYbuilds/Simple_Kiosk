import styled from "@emotion/styled";

export const OrderWrap = styled.div`
  width: 100%;
  min-height: 100vh;

  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1400px;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #f5f5f7;
  }
`;
export const DeliveryInner = styled.section`
  width: 100%;
  padding: 60px 40px 100px;
  box-sizing: border-box;

  .inner_title {
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: 700;
    color: #222;
  }

  .flex_row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
    .booData_box {
      flex: 1;
      min-width: 0;
      padding: 32px;
      background: #fff;
      border-radius: 20px;
      box-sizing: border-box;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

      .data_title {
        margin-bottom: 24px;
        font-size: 20px;
        font-weight: 700;
        color: #222;
      }
      .boo_basic_info {
        display: flex;
        gap: 40px;
        padding-bottom: 32px;
        border-bottom: 1px solid #e8e8e8;

        .boo_img {
          flex: 0 0 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          overflow: hidden;
          background: linear-gradient(145deg, #ffffff, #f5f5f7);
          border: 1px solid #e2e2e5;
          border-radius: 18px;
          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          .boo_img_box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 200px;
            overflow: hidden;
            img {
              display: block;
              height: 125%;
              object-fit: contain;
              margin-bottom: 15px;
              filter: drop-shadow(0 10px 12px rgba(255, 255, 255, 0.12));
              transition: transform 0.25s ease;
            }
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
          .boo_img_text {
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            gap: 4px;
            align-items: center;
            align-content: center;
            width: 100%;
            height: 100px;
            background: linear-gradient(180deg, #272c3a 0%, #1f2431 100%);
            .img_boo_enb_name {
              font-size: 13px;
              font-weight: 500;
              color: #999;
            }
            .img_boo_ko_name {
              font-size: 20px;
              font-weight: 700;
              color: #ffffff;
            }

            .img_boo_rarity {
              font-size: 13px;
              font-weight: 600;
              color: #d69b2d;
              .star_box {
                display: flex;
                gap: 4px;
                justify-content: center;
                svg {
                  width: 24px;
                  height: 24px;
                  path {
                    fill: gold;
                  }
                }
              }
            }
          }
        }

        .boo_datail {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          .boo_title {
            .boo_eng_name {
              font-size: 14px;
              color: #999;
            }
            .boo_ko_name {
              font-size: 34px;
              font-weight: 700;
              color: #222;
            }
          }
          .boo_price_box {
            .mamber_price {
              .origin_price {
                font-size: 1.6em;
                text-decoration: line-through;
                color: #c2c2c2;
              }
              .sale_price {
                font-size: 1.8em;
                font-weight: 700;
              }
            }
          }
          .boo_qoute {
            border-radius: 12px;
            background: #f7f7f8;
            color: #666;
            font-size: 1em;
            line-height: 1.7;
          }
          .boo_count_box {
            height: 50px;
            .boo_count {
              display: flex;
              width: fit-content;
              height: 100%;
              background-color: #c4c4c4;
              border-radius: 8px;
              span {
                display: block;
                text-align: center;
                align-content: center;
                width: 50px;
                height: 100%;
              }
              .plus {
                cursor: pointer;
              }
              .minus {
                cursor: pointer;
              }
            }
          }
        }
      }

      // ----------------------------------------
      // 상세 설명
      // ----------------------------------------

      .boo_detail_info_box {
        padding: 32px 0;
        border-bottom: 1px solid #e8e8e8;

        .detail_btn {
          padding: 10px 18px;
          border: 0;
          border-radius: 8px;
          background: #222;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .boo_datial_text {
          margin-top: 30px;

          .boo_dese {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 35px;

            p {
              margin: 0;
              color: #555;
              font-size: 15px;
              line-height: 1.8;
            }
          }
        }

        // --------------------------------------
        // 스킬
        // --------------------------------------

        .skills_box {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 35px;

          .active_skills,
          .passive_skills {
            display: flex;
            gap: 20px;
            padding: 22px;
            border-radius: 14px;
            background: #f7f7f8;
          }

          .icon {
            flex: 0 0 55px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;

            svg {
              width: 32px;
              height: 32px;
            }

            p {
              margin: 0;
              font-size: 12px;
              font-weight: 600;
              color: #555;
            }
          }

          .skills_info {
            flex: 1;
            font-size: 14px;
            line-height: 1.7;
            color: #555;
          }
        }

        // --------------------------------------
        // 스텟
        // --------------------------------------

        .stats_box {
          padding-top: 5px;

          .title {
            margin-bottom: 18px;
            font-size: 18px;
            font-weight: 700;
            color: #222;
          }

          .stats_list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            padding: 0;
            margin: 0;
            list-style: none;

            li {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 70px;
              border-radius: 12px;
              background: #f7f7f8;

              svg {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
      }

      // ----------------------------------------
      // 사용자 정보 + 옵션
      // ----------------------------------------

      .user_info_option {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        padding: 35px 0;

        .user_info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          p {
            margin: 8px 0 0;
            font-size: 14px;
            font-weight: 600;
            color: #333;
          }
          input {
            width: 100%;
            height: 48px;
            padding: 0 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            outline: none;
            box-sizing: border-box;
            background: #fff;
            font-size: 14px;
            &:focus {
              border-color: #222;
            }
          }
        }
        .option_list {
          min-height: 250px;
          border-radius: 14px;
          background: #f7f7f8;
          box-sizing: border-box;
          p {
            margin: 8px 0 0;
            font-size: 14px;
            font-weight: 600;
            color: #333;
          }
          .select_option {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .option_item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 14px 16px;
              border: 1px solid #ddd;
              border-radius: 8px;
              background: #fff;
              cursor: pointer;

              span:last-child {
                font-weight: 600;
              }
            }
            .active {
              background-color: #cacaca;
            }
            .activee {
              background-color: #cacaca;
            }
          }
        }
      }
    }
  }
  .order_price {
    position: sticky;
    top: 30px;
    flex: 0 0 32%;
    padding: 30px 32px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;

    .price_title {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #222;
    }

    .price_list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      div {
        display: flex;
        justify-content: space-between;
        height: 35px;
        align-items: center;
      }
      p {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        .cancel_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          width: 30px;
          height: 100%;
          background-color: #dfdfdf;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }

  // ========================================
  // 태블릿
  // ========================================

  @media (max-width: 1000px) {
    padding: 40px 24px 80px;

    .flex_row {
      flex-direction: column;
    }

    .booData_box {
      width: 100%;

      .boo_basic_info {
        gap: 25px;

        .boo_img {
          flex-basis: 220px;
        }
      }
    }

    .order_price {
      position: static;
      width: 100%;
    }
  }

  // ========================================
  // 모바일
  // ========================================

  @media (max-width: 600px) {
    padding: 30px 16px 60px;

    .inner_title {
      margin-bottom: 20px;
      font-size: 26px;
    }

    .flex_row {
      gap: 20px;
    }

    .booData_box {
      padding: 20px;
      border-radius: 14px;

      .boo_basic_info {
        flex-direction: column;

        .boo_img {
          flex-basis: auto;
          min-height: 250px;

          img {
            width: 150px;
            height: 150px;
          }
        }

        .boo_datail {
          .boo_title {
            .boo_ko_name {
              font-size: 28px;
            }
          }

          .boo_price_box {
            .price {
              font-size: 24px;
            }
          }
        }
      }

      .boo_detail_info_box {
        .skills_box {
          grid-template-columns: 1fr;
        }

        .stats_box {
          .stats_list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }

      .user_info_option {
        grid-template-columns: 1fr;
        gap: 25px;
      }
    }

    .order_price {
      padding: 25px 20px;
      border-radius: 14px;
    }
  }
`;
export const SiteBuyInner = styled.section``;
export const EmptyInner = styled.section``;
