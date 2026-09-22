import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderWrap } from "../../style/mainstyled/header_styled";

const Header = ({ faction }) => {
  const [username, setUsername] = useState(faction);
  console.log("데이터보여줘", username.facname);
  return (
    <HeaderWrap>
      <div className="inner">
        <div className="logo_box">
          <h1 className="logo">
            <Link to="#">
              <img src="/logo_b.png" alt="로고" />
            </Link>
          </h1>
          <div className="userInfo">
            <p>
              <span>{username.facname}</span>
            </p>
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
