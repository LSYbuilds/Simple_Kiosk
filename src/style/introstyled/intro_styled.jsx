import styled from "@emotion/styled";

export const IntroWrap = styled.div`
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    height: 100vh;
    padding-top: 50px;
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
          height: 100%;
        }
      }
    }
    .select_section {
      padding: 50px 200px;
      display: flex;
      flex-direction: column;
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
          a {
            display: flex;
            width: 100%;
            height: 100%;
            gap: 16px;
            color: #191919;
            font-weight: bold;
            padding: 20px;

            &:hover {
              background-color: #ffc156;
            }
            .faction_icon {
              width: 20%;
              height: 100%;
              align-content: center;
              svg {
                width: 80%;
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
              align-content: center;
              button {
                border: none;
                border-radius: 100%;
                background-color: #f3f3f3;
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
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      .modal_inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 40vw;
        background-color: #ececec;
        border-radius: 10px;
        padding: 20px;
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
          /* .mamber {
            width: 50%;
            height: 100px;
            align-content: center;
            text-align: center;
            background-color: #fca717;
            border-radius: 30px;
            font-size: 1.5em;
          } */
        }
      }
    }
  }
`;
