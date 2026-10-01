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
    padding-top: 50px;
    box-sizing: border-box;
    background-color: #ececec;

    .intro_section {
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 60%;
      height: 200px;

      .logo {
        height: 100%;

        img {
          display: block;
          height: 100%;
          width: auto;
          object-fit: contain;
        }
      }
    }

    .select_section {
      padding: 50px 200px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;

      .head_text {
        text-align: center;
        font-size: 2em;
        font-weight: 700;
        color: #000;
      }

      .faction_list {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;

        .faction_name {
          width: 100%;
          height: 200px;
          text-align: center;
          border-radius: 15px;
          background-color: #ebebeb;
          border: 2px solid #dadada;
          overflow: hidden;
          box-sizing: border-box;

          a {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: 16px;
            color: #191919;
            font-weight: bold;
            padding: 20px;
            box-sizing: border-box;

            &:hover {
              background-color: #ffc156;
            }

            .faction_icon {
              flex: 0 0 20%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

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
              }

              .sub_title {
                font-size: 1.1em;
                font-weight: normal;
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
                border: none;
                border-radius: 100%;
                background-color: #f3f3f3;
                width: 50px;
                height: 50px;

                svg {
                  width: 60%;
                }
              }
            }
          }
        }
      }
    }

    .member_modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
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

        background-color: #ececec;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;

        .close_btn {
          display: flex;
          justify-content: flex-end;

          svg {
            cursor: pointer;
          }
        }

        .title_text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 10px;

          .select_faction {
            font-size: 2em;
          }

          .notice {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 1.3em;

            svg {
              width: 1.5em;
              flex-shrink: 0;
            }
          }

          .input_box {
            input {
              width: 100%;
              height: 50px;
              font-size: 1.2em;
              padding: 16px;
              border-radius: 100px;
              border: none;
              box-sizing: border-box;
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
            background-color: #ebebeb;
            border: 2px solid #dadada;
            overflow: hidden;
            font-size: 1.3em;
            cursor: pointer;

            &:hover {
              background-color: #ffc156;
            }
          }
        }
      }
    }
  }

  /* =========================
     태블릿
  ========================= */

  @media (max-width: 1000px) {
    .inner {
      padding-top: 35px;

      .intro_section {
        width: 70%;
        height: 170px;
      }

      .select_section {
        padding: 40px 50px;

        .faction_list {
          gap: 15px;

          .faction_name {
            height: 180px;

            a {
              padding: 15px;
              gap: 10px;

              .faction_icon {
                flex-basis: 20%;

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
                  width: 42px;
                  height: 42px;
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
  }

  /* =========================
     모바일
  ========================= */

  @media (max-width: 737px) {
    .inner {
      padding-top: 20px;

      .intro_section {
        width: 80%;
        height: 130px;

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
        padding: 30px 16px;

        .head_text {
          font-size: 1.5em;
        }

        .faction_list {
          margin-top: 25px;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: none;
          gap: 12px;

          .faction_name {
            height: 120px;
            border-radius: 12px;

            a {
              padding: 12px;
              gap: 10px;

              .faction_icon {
                flex: 0 0 22%;

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
          border-radius: 12px;

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
  }

  /* =========================
     작은 모바일
  ========================= */

  @media (max-width: 480px) {
    .inner {
      .intro_section {
        width: 90%;
        height: 110px;
      }

      .select_section {
        padding: 25px 12px;

        .head_text {
          font-size: 1.3em;
        }

        .faction_list {
          .faction_name {
            height: 100px;

            a {
              padding: 10px;

              .faction_icon {
                flex-basis: 20%;

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
