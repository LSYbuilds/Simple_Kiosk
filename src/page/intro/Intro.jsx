import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IntroWrap } from "../../style/introstyled/intro_styled";
import Icon from "../../components/SvgComponents";
const Intro = ({ setFaction }) => {
  const [member, setMember] = useState(false);
  const [select, setSelect] = useState("");
  const [factionNumber, setfactionNumber] = useState("");
  const [factionName, setFactionName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handlesubmit = () => {
    console.log(factionName, factionNumber);
    try {
      const factionData = {
        facname: factionName,
        facename: select,
        facnum: factionNumber,
      };
      console.log(factionData);
      setFaction(factionData);
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/main");
    }
  };
  return (
    <IntroWrap>
      <div className="inner">
        {member && (
          <div
            className="member_modal"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setMember(false);
              }
            }}
          >
            {select === "proxy" ? (
              <div className="modal_inner">
                <div className="close_btn">
                  <Icon.close
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        setMember(false);
                      }
                    }}
                  />
                </div>
                <div className="title_text">
                  <p className="select_faction">{factionName}</p>
                  <div className="notice">
                    <Icon.notice />
                    <p>로스캘리퍼 공식인증 프록시 고유번호를 입력해주세요</p>
                  </div>
                  <div className="input_box">
                    <input type="text" placeholder="고유번호" />
                  </div>
                </div>
                <div className="mamber_select">
                  <button
                    type="button"
                    className="non_member"
                    onClick={() => handlesubmit()}
                  >
                    확인
                  </button>
                </div>
              </div>
            ) : select === "public" ? (
              <div className="modal_inner">
                <div className="close_btn">
                  <Icon.close
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        setMember(false);
                      }
                    }}
                  />
                </div>
                <div className="title_text">
                  <p className="select_faction">{factionName}</p>
                  <div className="notice">
                    <Icon.notice />
                    <p>공무원 번호를 입력해주세요</p>
                  </div>
                  <div className="input_box">
                    <input type="text" placeholder="고유번호" />
                  </div>
                </div>

                <div className="mamber_select">
                  <button
                    type="button"
                    className="non_member"
                    onClick={() => handlesubmit()}
                  >
                    확인
                  </button>
                </div>
              </div>
            ) : select === "private" ? (
              <div className="modal_inner">
                <div className="close_btn">
                  <Icon.close
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        setMember(false);
                      }
                    }}
                  />
                </div>
                <div className="title_text">
                  <p className="select_faction">{factionName}</p>
                  <div className="notice">
                    <Icon.notice />
                    <p>사업자 등록번호를 입력해주세요</p>
                  </div>
                  <div className="input_box">
                    <input type="text" placeholder="고유번호" />
                  </div>
                </div>

                <div className="mamber_select">
                  <button
                    type="button"
                    className="non_member"
                    onClick={() => handlesubmit()}
                  >
                    확인
                  </button>
                </div>
              </div>
            ) : (
              select === "non" && (
                <div className="modal_inner">
                  <div className="close_btn">
                    <Icon.close
                      onClick={(e) => {
                        if (e.target === e.currentTarget) {
                          setMember(false);
                        }
                      }}
                    />
                  </div>
                  <div className="title_text">
                    <p className="select_faction">{factionName}</p>
                    <div className="notice">
                      <Icon.notice />
                      <p>
                        회원등록을 하시는 경우 할인 혜택을 받을 수 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="mamber_select">
                    <button type="button" className="member">
                      회원가입
                    </button>
                    <button
                      type="button"
                      className="non_member"
                      onClick={() => handlesubmit()}
                    >
                      비회원으로 계속
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
        <section className="intro_section">
          <h1 className="logo">
            <img src="/logo_b.png" alt="로고" />
          </h1>
        </section>
        <section className="select_section">
          <div className="head_text">회원유형을 선택해주세요</div>
          <div className="faction_list">
            <div className="faction_name">
              <Link
                to="#"
                onClick={() => {
                  setMember((props) => !props);
                  setSelect("non");
                  setFactionName("비회원");
                }}
              >
                <div className="faction_icon">
                  <Icon.user />
                </div>
                <div className="faction_text">
                  <p className="title">비회원</p>
                  <p className="sub_title">
                    회원가입 없이 간편하게 이용할 수 있습니다.
                  </p>
                </div>
                <div className="arrow_icon_box">
                  <button className="arrow_icon ">
                    <Icon.arrowRight />
                  </button>
                </div>
              </Link>
            </div>
            <div className="faction_name">
              <Link
                to="#"
                onClick={() => {
                  setMember((props) => !props);
                  setSelect("proxy");
                  setFactionName("프록시");
                }}
              >
                <div className="faction_icon">
                  <Icon.proxy />
                </div>
                <div className="faction_text">
                  <p className="title">프록시</p>
                  <p className="sub_title">
                    프록시 서비스를 이용할 수 있습니다.
                  </p>
                </div>
                <div className="arrow_icon_box">
                  <button className="arrow_icon ">
                    <Icon.arrowRight />
                  </button>
                </div>
              </Link>
            </div>
            <div className="faction_name">
              <Link
                to="#"
                onClick={() => {
                  setMember((props) => !props);
                  setSelect("public");
                  setFactionName("공무원");
                }}
              >
                <div className="faction_icon">
                  <Icon.public />
                </div>
                <div className="faction_text">
                  <p className="title">공무원</p>
                  <p className="sub_title">
                    공공기관 근로자 서비스를 이용할 수 있습니다.
                  </p>
                </div>
                <div className="arrow_icon_box">
                  <button className="arrow_icon ">
                    <Icon.arrowRight />
                  </button>
                </div>
              </Link>
            </div>
            <div className="faction_name">
              <Link
                to="#"
                onClick={() => {
                  setMember((props) => !props);
                  setSelect("private");
                  setFactionName("사기업");
                }}
              >
                <div className="faction_icon">
                  <Icon.private />
                </div>
                <div className="faction_text">
                  <p className="title">사업자</p>
                  <p className="sub_title">
                    사업자 전용 혜택을 이용할 수 있습니다.
                  </p>
                </div>
                <div className="arrow_icon_box">
                  <button className="arrow_icon ">
                    <Icon.arrowRight />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </IntroWrap>
  );
};

export default Intro;
