import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IntroWrap } from "../../style/introstyled/intro_styled";
import { number } from "motion";
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
            {select === "Proxy" ? (
              <div className="modal_inner">
                <div className="title_text">
                  <p className="title">프록시 일년번호를 입력해주세요</p>
                  <form className="typeing_form">
                    <div className="typing_box">
                      <input
                        type="text"
                        placeholder="일년번호 입력"
                        onChange={(e) => setfactionNumber(e.target.value)}
                      />
                    </div>
                    <div className="confirm">
                      <button type="button" onClick={() => handlesubmit()}>
                        확인
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : select === "public" ? (
              <div className="modal_inner">
                <div className="title_text">
                  <p className="title">공무원 번호 입력해주세요</p>
                  <div className="typing">
                    <input
                      type="text"
                      placeholder="공무원 번호"
                      onChange={(e) => setfactionNumber(e.target.value)}
                    />
                  </div>
                  <div className="confirm">
                    <button type="button" onClick={() => handlesubmit()}>
                      확인
                    </button>
                  </div>
                </div>
              </div>
            ) : select === "private" ? (
              <div className="modal_inner">
                <div className="title_text">
                  <p className="title">사업자 등록번호를 입력해주세요</p>
                  <div className="typing">
                    <input
                      type="text"
                      placeholder="사업자 등록번호"
                      onChange={(e) => setfactionNumber(e.target.value)}
                    />
                  </div>
                  <div className="confirm">
                    <button type="button" onClick={() => handlesubmit()}>
                      확인
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              select === "non" && (
                <div className="modal_inner">
                  <div className="title_text">
                    <p className="title">회원으로 등록하시겠습니까?</p>
                    <p className="sub_text">
                      회원으로 등록하실경우 추가 할인을 받을 수 있습니다.
                    </p>
                  </div>

                  <div className="mamber_select">
                    <div className="mamber">회원가입</div>
                    <div className="non_member">
                      <button type="button" onClick={() => handlesubmit()}>
                        비회원으로 계속
                      </button>
                    </div>
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
                비회원
              </Link>
            </div>
            <div className="faction_name">
              <Link
                to="#"
                onClick={() => {
                  setMember((props) => !props);
                  setSelect("Proxy");
                  setFactionName("프록시");
                }}
              >
                프록시
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
                공무원
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
                사기업
              </Link>
            </div>
          </div>
        </section>
      </div>
    </IntroWrap>
  );
};

export default Intro;
