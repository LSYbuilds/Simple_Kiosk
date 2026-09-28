import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  .inner {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    height: 100%;
    background-color: goldenrod;
    .logo_box {
      width: fit-content;
      width: 50%;
      height: 100%;
      .logo {
        display: flex;
        padding: 16px;
        height: 100%;
        a {
          display: block;
          height: 100%;
          img {
            height: 100%;
          }
        }
      }
    }
    .userInfo {
      align-content: center;
      font-size: 1.6em;
      padding-right: 20px;
      font-weight: 700;
    }
  }
`;
