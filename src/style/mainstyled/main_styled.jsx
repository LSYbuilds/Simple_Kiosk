import styled from "@emotion/styled";

export const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    background-color: #ececec;
    .hero_section {
      width: 100%;
      height: 180px;
      background-color: greenyellow;
    }
    .list_section {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      padding: 16px;
      .category {
        display: flex;
        gap: 16px;
        height: 50px;
        li {
          flex: 0 0 15%;
          height: 100%;
          border-radius: 15px;
          text-align: center;
          align-content: center;
          background-color: #ebebeb;
          border: 2px solid #dadada;
          overflow: hidden;
          font-size: 1.3em;
          cursor: pointer;
          p {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            gap: 16px;
            justify-content: center;
            align-items: center;
            align-content: center;
            svg {
              position: absolute;
              right: 20px;
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
          border-radius: 15px;
          border: 2px solid #dadada;
          overflow: hidden;
          cursor: pointer;
          .gold {
            background: #865b11;
            background: linear-gradient(
              207deg,
              rgba(134, 91, 17, 0.31) 0%,
              rgba(255, 236, 122, 0.4) 50%,
              rgba(242, 155, 58, 0.32) 100%
            );
          }
          .pup {
            background: #3f6efb;
            background: radial-gradient(
              circle,
              rgba(63, 110, 251, 0.42) 0%,
              rgba(216, 70, 252, 0.33) 100%
            );
          }
          .boo_img {
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            position: relative;
            width: 100%;
            height: 300px;
            overflow: hidden;
            img {
              transition-duration: 0.3s;
              height: 95%;
            }
            .eng_name {
              position: absolute;
              top: 20px;
              left: 20px;
              text-align: left;
              font-size: 1.2em;
              opacity: 0.5;
              font-weight: 700;
            }
          }
          .boo_desc {
            display: flex;
            flex-direction: column;
            background-color: #636363;
            color: #fff;
            padding-bottom: 16px;
            .star_box {
              display: flex;
              justify-content: center;
              gap: 4px;
              padding-top: 16px;
              svg {
                width: 16px;
                height: 16px;
                path {
                  fill: gold;
                }
              }
            }
            .boo_name {
              text-align: center;
              font-size: 2em;
              font-weight: 700;
            }
            .boo_price {
              text-align: center;
              font-size: 1.5em;
            }
          }
          &:hover {
            .boo_img {
              img {
                height: 100%;
              }
            }
            .gold {
              background: linear-gradient(
                135deg,
                rgba(255, 215, 80, 0.95) 0%,
                rgba(255, 239, 160, 0.9) 35%,
                rgba(218, 165, 32, 0.95) 70%,
                rgba(184, 134, 11, 1) 100%
              );
            }
            .pup {
              background: linear-gradient(
                135deg,
                rgba(190, 140, 255, 1) 0%,
                rgba(235, 210, 255, 0.95) 25%,
                rgba(155, 89, 255, 1) 50%,
                rgba(111, 45, 190, 1) 75%,
                rgba(75, 25, 140, 1) 100%
              );
            }
          }
        }
      }
    }
    .selected_item {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 50%;
      height: 100%;
      background-color: red;
    }
  }
`;
