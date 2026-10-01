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
  @media (max-width: 1024px) {
  }
  @media (max-width: 737px) {
    .logo_box {
      display: flex;
      justify-content: flex-start;
      padding: 0px;
      width: fit-content;
      height: 100%;
      overflow: hidden;
      .logo {
        display: flex;
        width: 100%;
        height: 100%;
        a {
          width: 100%;
          height: 100%;
          img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: contain;
          }
        }
      }
    }
  }
`;
