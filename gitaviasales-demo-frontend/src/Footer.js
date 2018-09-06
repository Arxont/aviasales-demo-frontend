import React from "react";
import styled from "styled-components";
import apple from "./images/apple.png";
import android from "./images/android.png";
import wf from "./images/wf.png";

const MobileAdWrapper = styled.div`
  display: flex;
  background-color: blue;
  color: white;
  justify-content: space-evenly;
`;
const TestGround = styled.div`
  background-color: red;
  border-style: none;
  margin: none;
`;
const MobileAddPic = styled.img``;
const MobileAddLinkWrapper = styled.div`
  display: flex;
`;
function MobileAd(props) {
  return (
    <MobileAdWrapper>
      <TestGround>
        <MobileAddPic src="/backgroundImage.png" alt="MobilePhoneImg" />
      </TestGround>
      <div>
        <h1>Скачай мобильное приложение Aviasales.ru</h1>
        <p>
          <span>⭐⭐⭐⭐⭐</span> Более 103 000 оценок
        </p>
        <MobileAddLinkWrapper>
          <div>
            <a href="123.com">
              <img src={props.apple} alt="apple" />
              <span>Iphone или Ipod | </span>
            </a>
          </div>
          <div>
            <a href="123.com">
              <img src={props.android} alt="apple" />
              <span>Android | </span>
            </a>
          </div>
          <div>
            <a href="123.com">
              <img src={props.wf} alt="apple" />
              <span>Windows Phone</span>
            </a>
          </div>
        </MobileAddLinkWrapper>
      </div>
    </MobileAdWrapper>
  );
}

export default function Footer() {
  return <MobileAd apple={apple} android={android} wf={wf} />;
}
