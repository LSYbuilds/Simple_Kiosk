import styled from "@emotion/styled";
export const IntroWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  .inner {
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    min-height: 100vh;
    padding: 50px 100px 60px;
    box-sizing: border-box;
    overflow: hidden; /* ========================= 배경 ========================= */
    background:
      radial-gradient(
        circle at 88% 22%,
        rgba(255, 255, 255, 0.42) 0,
        rgba(255, 255, 255, 0) 28%
      ),
      radial-gradient(
        circle at 10% 90%,
        rgba(255, 239, 148, 0.45) 0,
        rgba(255, 239, 148, 0) 25%
      ),
      #f4d66d; /* 배경 장식 */
    &::before {
      content: "";
      position: absolute;
      width: 360px;
      height: 360px;
      right: -130px;
      top: 170px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.14);
      pointer-events: none;
    }
    &::after {
      content: "";
      position: absolute;
      width: 180px;
      height: 180px;
      left: -100px;
      bottom: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
      pointer-events: none;
    } /* ========================= 로고 ========================= */
    .intro_section {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      max-width: 100%;
      height: 75px;
      .logo {
        height: 100%;
        img {
          display: block;
          height: 100%;
          width: auto;
          object-fit: contain;
        }
      }
    } /* ========================= 선택 영역 ========================= */
    .select_section {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      .head_text {
        margin-top: 58px;
        font-size: 1.8em;
        line-height: 1.45;
        font-weight: 700;
        letter-spacing: -0.04em;
        color: #111; /* 두 번째 문장을 조금 부드럽게 */
        white-space: pre-line;
      }
      .quote_btn_box {
        margin-top: 58px;
        display: flex;
        align-content: center;
        align-items: center;
        gap: 8px;
        width: 50%;
        height: 50px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 18px;
        box-shadow:
          0 5px 0 rgba(191, 163, 57, 0.18),
          0 12px 25px rgba(128, 102, 20, 0.1);
        cursor: pointer;
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease,
          border-color 0.2s ease;
        svg {
          height: 30px;
        }
        span {
          font-size: 1.2em;
          font-weight: 700;
        }
        &:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 193, 86, 0.8);
          box-shadow:
            0 7px 0 rgba(191, 163, 57, 0.2),
            0 18px 30px rgba(128, 102, 20, 0.15);
          a {
            .arrow_icon_box {
              button {
                background-color: #ffc445;
                transform: translateX(3px);
                svg {
                  color: #111;
                }
              }
            }
          }
        }
      }
      .faction_list {
        margin-top: 45px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
        .faction_name {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 18px;
          overflow: hidden;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow:
            0 5px 0 rgba(191, 163, 57, 0.18),
            0 12px 25px rgba(128, 102, 20, 0.1);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease; /* 카드 오른쪽 아래 노란 장식 */
          &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            width: 70px;
            height: 70px;
            background: #f7cf4d;
            clip-path: polygon(100% 0, 100% 100%, 0 100%);
            opacity: 0.8;
            pointer-events: none;
          }
          &:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 193, 86, 0.8);
            box-shadow:
              0 7px 0 rgba(191, 163, 57, 0.2),
              0 18px 30px rgba(128, 102, 20, 0.15);
            a {
              .arrow_icon_box {
                button {
                  background-color: #ffc445;
                  transform: translateX(3px);
                  svg {
                    color: #111;
                  }
                }
              }
            }
          }
          &:active {
            transform: translateY(1px);
          }
          a {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: 16px;
            padding: 20px;
            box-sizing: border-box;
            color: #111;
            font-weight: bold;
            text-decoration: none;
            .faction_icon {
              flex: 0 0 20%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative; /* 아이콘 뒤의 은은한 원 */
              &::before {
                content: "";
                position: absolute;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: #fff0b0;
                z-index: -1;
              }
              svg {
                width: 80%;
                max-width: 90px;
                height: auto;
              }
            }
            .faction_text {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 60%;
              height: 100%;
              text-align: left;
              .title {
                font-size: 2em;
                line-height: 1.2;
                letter-spacing: -0.04em;
              }
              .sub_title {
                margin-top: 8px;
                font-size: 1.05em;
                line-height: 1.5;
                font-weight: normal;
                color: #555;
                letter-spacing: -0.03em;
              }
            }
            .arrow_icon_box {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 52px;
                height: 52px;
                border: none;
                border-radius: 50%;
                background-color: #f4f4f2;
                cursor: pointer;
                transition:
                  background-color 0.2s ease,
                  transform 0.2s ease;
                svg {
                  width: 58%;
                  height: auto;
                }
              }
            }
          }
        }
      }
    } /* ========================= 회원 선택 모달 ========================= */
    .member_modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(35, 31, 15, 0.5);
      backdrop-filter: blur(4px);
      z-index: 100;
      .modal_inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 40vw;
        max-width: 600px;
        min-width: 400px;
        background: #fffdf7;
        border-radius: 20px;
        padding: 24px;
        box-sizing: border-box;
        box-shadow:
          0 20px 60px rgba(0, 0, 0, 0.2),
          0 5px 0 rgba(218, 190, 80, 0.25);
        .close_btn {
          display: flex;
          justify-content: flex-end;
          svg {
            cursor: pointer;
            transition: transform 0.2s ease;
            &:hover {
              transform: rotate(90deg);
            }
          }
        }
        .title_text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 10px;
          .select_faction {
            font-size: 2em;
            font-weight: 700;
            letter-spacing: -0.04em;
          }
          .notice {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 1.3em;
            line-height: 1.4;
            color: #555;
            svg {
              width: 1.5em;
              flex-shrink: 0;
            }
          }
          .input_box {
            margin-top: 10px;
            input {
              width: 100%;
              height: 54px;
              font-size: 1.2em;
              padding: 16px;
              border-radius: 12px;
              border: 2px solid #e4e0d2;
              background: #f8f7f2;
              box-sizing: border-box;
              outline: none;
              transition:
                border-color 0.2s ease,
                background-color 0.2s ease;
              &:focus {
                border-color: #ffc445;
                background: #fff;
              }
            }
          }
        }
        .mamber_select {
          margin-top: 20px;
          display: flex;
          gap: 16px;
          button {
            border: none;
            width: 100%;
            height: 100px;
            text-align: center;
            border-radius: 15px;
            background-color: #f5f3ed;
            border: 2px solid #e5e1d5;
            overflow: hidden;
            font-size: 1.3em;
            font-weight: 700;
            cursor: pointer;
            transition:
              background-color 0.2s ease,
              transform 0.2s ease,
              border-color 0.2s ease;
            &:hover {
              background-color: #ffc156;
              border-color: #ffc156;
              transform: translateY(-2px);
            }
            &:active {
              transform: translateY(1px);
            }
          }
        }
      }
    }
    .bangboo_info_modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(35, 31, 15, 0.5);
      backdrop-filter: blur(4px);
      z-index: 100;
      .bangboo_info_inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 80vw;
        max-width: 1200px;
        min-width: 400px;
        height: 800px;
        background: #fffdf7;
        border-radius: 20px;
        padding: 24px;
        box-sizing: border-box;
        box-shadow:
          0 20px 60px rgba(0, 0, 0, 0.2),
          0 5px 0 rgba(218, 190, 80, 0.25);
        .close_btn {
          display: flex;
          justify-content: flex-end;
          svg {
            cursor: pointer;
            transition: transform 0.2s ease;
            &:hover {
              transform: rotate(90deg);
            }
          }
        }
        .info_text_box {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .category {
            display: flex;
            gap: 8px;
            width: 100%;
            height: 50px;
            li {
              flex: 1;
              height: 100%;
              text-align: center;
              font-size: 1.125em;
              align-content: center;
              border-radius: 18px;
              overflow: hidden;
              box-sizing: border-box;
              background: rgba(231, 231, 231, 0.9);
              border: 1px solid rgba(255, 255, 255, 0.8);
              cursor: pointer;
              &:hover {
                background-color: #f4d66d;
              }
            }
          }
        }
        .info_show_box {
          margin-top: 32px;
          display: flex;
          justify-content: space-between;
          gap: 8px;
          border-radius: 16px;
          background: rgba(231, 231, 231, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.8);
          .boo_img {
            width: 50%;
            height: 100%;
            border-radius: 16px;
            overflow: hidden;
            box-shadow:
              0 20px 60px rgba(0, 0, 0, 0.2),
              0 5px 0 rgba(218, 190, 80, 0.25);
            img {
              border-radius: 16px;
            }
          }
          .boo_script {
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 50%;
            height: 100%;
            li {
              width: 100%;
              padding: 16px;
              font-size: 1.125em;
              line-height: 1.8em;
            }
          }
        }
      }
      /* .modal_inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 40vw;
        max-width: 600px;
        min-width: 400px;
        background: #fffdf7;
        border-radius: 20px;
        padding: 24px;
        box-sizing: border-box;
        box-shadow:
          0 20px 60px rgba(0, 0, 0, 0.2),
          0 5px 0 rgba(218, 190, 80, 0.25);
        .close_btn {
          display: flex;
          justify-content: flex-end;
          svg {
            cursor: pointer;
            transition: transform 0.2s ease;
            &:hover {
              transform: rotate(90deg);
            }
          }
        }
      } */
    }
  } /* ========================= 태블릿 ========================= */
  @media (max-width: 1000px) {
    .inner {
      padding: 35px 50px 50px;
      .intro_section {
        width: 70%;
        height: 140px;
      }
      .select_section {
        .head_text {
          margin-top: 45px;
          font-size: 1.7em;
        }
        .faction_list {
          margin-top: 35px;
          gap: 15px;
          .faction_name {
            height: 180px;
            a {
              padding: 15px;
              gap: 10px;
              .faction_icon {
                flex-basis: 20%;
                &::before {
                  width: 65px;
                  height: 65px;
                }
                svg {
                  width: 75%;
                }
              }
              .faction_text {
                width: 65%;
                .title {
                  font-size: 1.6em;
                }
                .sub_title {
                  font-size: 1em;
                }
              }
              .arrow_icon_box {
                button {
                  width: 44px;
                  height: 44px;
                }
              }
            }
          }
        }
      }
      .member_modal {
        .modal_inner {
          width: 60vw;
          min-width: 0;
          .title_text {
            .select_faction {
              font-size: 1.7em;
            }
          }
        }
      }
    }
  } /* ========================= 모바일 ========================= */
  @media (max-width: 737px) {
    .inner {
      padding: 20px 16px 40px;
      .intro_section {
        width: 80%;
        height: 110px;
        .logo {
          width: 100%;
          display: flex;
          justify-content: center;
          img {
            width: auto;
            max-width: 100%;
            height: 100%;
          }
        }
      }
      .select_section {
        padding: 25px 0;
        .head_text {
          margin-top: 30px;
          font-size: 1.5em;
          line-height: 1.5;
        }
        .faction_list {
          margin-top: 25px;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: none;
          gap: 12px;
          .faction_name {
            height: 120px;
            border-radius: 14px;
            &::after {
              width: 50px;
              height: 50px;
            }
            a {
              padding: 12px;
              gap: 10px;
              .faction_icon {
                flex: 0 0 22%;
                &::before {
                  width: 52px;
                  height: 52px;
                }
                svg {
                  width: 65px;
                  max-width: 100%;
                }
              }
              .faction_text {
                width: auto;
                flex: 1;
                .title {
                  font-size: 1.3em;
                }
                .sub_title {
                  margin-top: 4px;
                  font-size: 0.9em;
                }
              }
              .arrow_icon_box {
                flex: 0 0 40px;
                button {
                  width: 40px;
                  height: 40px;
                }
              }
            }
          }
        }
      }
      .member_modal {
        .modal_inner {
          width: calc(100% - 32px);
          min-width: 0;
          max-width: none;
          padding: 16px;
          border-radius: 16px;
          .title_text {
            padding: 8px;
            .select_faction {
              font-size: 1.5em;
            }
            .notice {
              font-size: 1em;
              line-height: 1.4;
            }
            .input_box {
              input {
                height: 48px;
                font-size: 1em;
              }
            }
          }
          .mamber_select {
            margin-top: 15px;
            gap: 10px;
            button {
              height: 70px;
              font-size: 1em;
              border-radius: 12px;
            }
          }
        }
      }
    }
  } /* ========================= 작은 모바일 ========================= */
  @media (max-width: 480px) {
    .inner {
      padding: 16px 12px 30px;
      .intro_section {
        width: 90%;
        height: 90px;
      }
      .select_section {
        padding: 20px 0;
        .head_text {
          margin-top: 25px;
          font-size: 1.3em;
        }
        .faction_list {
          margin-top: 20px;
          .faction_name {
            height: 100px;
            a {
              padding: 10px;
              .faction_icon {
                flex-basis: 20%;
                &::before {
                  width: 45px;
                  height: 45px;
                }
                svg {
                  width: 50px;
                }
              }
              .faction_text {
                .title {
                  font-size: 1.1em;
                }
                .sub_title {
                  font-size: 0.8em;
                }
              }
              .arrow_icon_box {
                flex-basis: 32px;
                button {
                  width: 32px;
                  height: 32px;
                }
              }
            }
          }
        }
      }
      .member_modal {
        .modal_inner {
          width: calc(100% - 24px);
          padding: 12px;
          .title_text {
            .select_faction {
              font-size: 1.3em;
            }
            .notice {
              font-size: 0.9em;
            }
          }
          .mamber_select {
            button {
              height: 60px;
              font-size: 0.9em;
            }
          }
        }
      }
    }
  }
`;
