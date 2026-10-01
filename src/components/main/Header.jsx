import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap } from "../../style/mainstyled/header_styled";

const publicPath = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};
const Header = ({ faction }) => {
  return (
    <HeaderWrap>
      <div className="inner">
        <div className="logo_box">
          <h1 className="logo">
            <Link to="/">
              <img src={publicPath("/logo_b.png")} alt="로고" />
            </Link>
          </h1>
        </div>

        <div className="userInfo">
          <p>
            <span>{faction.facname}</span>
          </p>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
