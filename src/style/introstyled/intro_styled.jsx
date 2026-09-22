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
          overflow: hidden;
          a {
            display: block;
            width: 100%;
            height: 100%;
            align-content: center;
            color: #191919;
            font-size: 2.5em;
            font-weight: bold;
            background-color: #fca717;
            &:hover {
              background-color: #ffc156;
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
        gap: 16px;
        justify-content: center;
        width: 40vw;
        height: 40vh;
        background-color: #ececec;
        border-radius: 20px;
        p {
          text-align: center;
        }
        .title_text {
          display: flex;
          flex-direction: column;
          font-size: 1.3em;
        }
        .mamber_select {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          div {
            text-align: center;
          }
          .mamber {
            width: 50%;
            height: 100px;
            align-content: center;
            text-align: center;
            background-color: #fca717;
            border-radius: 30px;
            font-size: 1.5em;
          }
        }
      }
    }
  }
`;
