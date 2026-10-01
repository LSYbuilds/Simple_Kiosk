import styled from "@emotion/styled";

export const OrderConfirmWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  .inner {
    width: 100%;
    max-width: 1400px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 70px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f7;
  }

  /* 주문 완료 제목 */
  .order_title {
    margin-bottom: 45px;

    font-size: 36px;
    font-weight: 800;
    line-height: 1.3;
    color: #111;

    text-align: center;
    &::before {
      content: "✓";
      display: flex;
      align-items: center;
      justify-content: center;

      width: 64px;
      height: 64px;

      margin: 0 auto 20px;

      border-radius: 50%;

      font-size: 30px;
      font-weight: 800;
      color: #fff;

      background: #111;
    }
  }

  /* 상품 영역 */
  .order_item_box {
    display: flex;

    width: 100%;

    padding: 35px;

    box-sizing: border-box;

    border-radius: 20px;

    background: #fff;

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  }

  /* 상품 이미지 */
  .boo_img {
    flex: 0 0 330px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 330px;

    overflow: hidden;

    border-radius: 16px;
    background: #f3f3f3;

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }

  /* 상품 정보 */
  .order_info_box {
    flex: 1;

    padding: 5px 0 5px 45px;

    box-sizing: border-box;
  }

  .boo_name {
    margin: 0 0 25px;

    font-size: 28px;
    font-weight: 800;
    line-height: 1.3;

    color: #111;
  }

  .order_info_list {
    margin: 0;
    padding: 0;

    list-style: none;

    border-top: 2px solid #111;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 50px;
      padding: 13px 5px;
      box-sizing: border-box;
      border-bottom: 1px solid #e8e8e8;

      p {
        display: flex;
        flex-direction: column;
        margin: 0;
        font-size: 16px;
        line-height: 1.5;

        &:first-child {
          flex-shrink: 0;

          font-weight: 600;
          color: #777;
        }

        &:last-child {
          max-width: 65%;

          text-align: right;

          font-weight: 500;
          color: #222;

          word-break: break-word;
        }
      }

      /* 총 결제 가격 */
      &:last-child {
        margin-top: 8px;

        padding: 20px 5px;

        border-top: 2px solid #111;
        border-bottom: 0;

        p {
          &:first-child {
            font-size: 17px;
            font-weight: 700;
            color: #111;
          }

          &:last-child {
            font-size: 25px;
            font-weight: 800;
            color: #111;
          }
        }
      }
    }
  }

  /* 새 주문 버튼 */
  .new_order {
    width: 100%;
    height: 60px;

    margin-top: 30px;

    border-radius: 14px;

    background: #111;

    cursor: pointer;

    transition: 0.2s ease;

    &::before {
      content: "새로운 주문하기";

      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }

    &:hover {
      background: #333;
    }

    &:active {
      transform: scale(0.99);
    }
  }

  /* 태블릿 */
  @media (max-width: 900px) {
    .inner {
      padding: 50px 25px;
    }

    .order_item_box {
      padding: 25px;
    }

    .boo_img {
      flex: 0 0 280px;
      height: 280px;
    }

    .order_info_box {
      padding-left: 30px;
    }

    .boo_name {
      font-size: 24px;
    }
  }

  /* 모바일 */
  @media (max-width: 700px) {
    .inner {
      padding: 40px 20px;
    }

    .order_title {
      margin-bottom: 30px;

      font-size: 28px;

      &::before {
        width: 54px;
        height: 54px;

        margin-bottom: 15px;

        font-size: 25px;
      }
    }

    .order_item_box {
      flex-direction: column;

      padding: 20px;

      border-radius: 16px;
    }

    .boo_img {
      flex: none;

      width: 100%;
      height: 280px;

      margin-bottom: 25px;
    }

    .order_info_box {
      padding: 0;
    }

    .boo_name {
      margin-bottom: 20px;

      font-size: 23px;
    }

    .order_info_list {
      li {
        min-height: 48px;
        padding: 12px 3px;
        p {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          &:last-child {
            max-width: 60%;
          }
        }

        &:last-child {
          p {
            &:first-child {
              font-size: 15px;
            }

            &:last-child {
              font-size: 21px;
            }
          }
        }
      }
    }

    .new_order {
      height: 56px;

      margin-top: 20px;

      &::before {
        font-size: 16px;
      }
    }
  }
`;
