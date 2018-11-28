import React from "react";
import styled from "styled-components";
import "flexboxgrid2";

import apple from "./images/apple.png";
import android from "./images/android.png";
import wf from "./images/wf.png";
import vkLogo from "./images/vkLogo.png";
import fbLogo from "./images/fbLogo.png";
import twitLogo from "./images/twitLogo.png";
import instLogo from "./images/instLogo.png";
import vbLogo from "./images/viberLogo.png";
import appStore from "./images/appStore.png";
import playStore from "./images/playStore.png";
import winStore from "./images/winStore.png";

const FooterInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: grey;
  margin-bottom: 5%;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const StyledInfoLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
function FooterInfoList() {
  return (
    <FooterInfoWrapper>
      <StyledUl>
        <li>
          <h2>Страны</h2>
        </li>
        <li>Россия</li>
        <li>Тайланд</li>
        <li>Черногория</li>
        <li>Кипр</li>
        <li>Болгария</li>
        <li>Грузия</li>
        <li>
          <StyledInfoLink href="123.com">Все страны-></StyledInfoLink>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h2>Города</h2>
        </li>
        <li>Москва</li>
        <li>Санкт-Петербург</li>
        <li>Симферополь</li>
        <li>Адлер</li>
        <li>Екатеринбург</li>
        <li>Лондон</li>
        <li>
          <StyledInfoLink href="123.com">Все города-></StyledInfoLink>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h2>Авиакомпании</h2>
        </li>
        <li>Air Berlin</li>
        <li>Air France</li>
        <li>Ailitalia</li>
        <li>Air Baltic</li>
        <li>Emirates</li>
        <li>KLM</li>
        <li>
          <StyledInfoLink href="123.com">Все авиакомпании-></StyledInfoLink>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h2>Аэропорты</h2>
        </li>
        <li>Шереметьево</li>
        <li>Курумоч</li>
        <li>Домодедово</li>
        <li>Толмачево</li>
        <li>Владивосток</li>
        <li>Гамбург</li>
        <li>
          <StyledInfoLink href="123.com">Все аеропорты-></StyledInfoLink>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h2>Направления</h2>
        </li>
        <li>MOW-SIP</li>
        <li>MOW-AER</li>
        <li>MOW-TIV</li>
        <li>MOW-MRV</li>
        <li>LED-MOW</li>
        <li>MOW-BKK</li>
      </StyledUl>
      <StyledUl>
        <li>
          <h2>Сервисы</h2>
        </li>
        <li>Горящие авиабилеты</li>
        <li>Календарь низких цен</li>
        <li>Карта низких цен</li>
        <li>Спец предложения</li>
        <li>Таблица цен</li>
        <li>Блог</li>
        <li>Помощь</li>
      </StyledUl>
    </FooterInfoWrapper>
  );
}
const CompanyInfoFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const UsefulLinksWrapper = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const InfoWrapper = styled.div`
  width: 40%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const UsefulLinks = styled.a`
  text-decoration: none;
  color: black;
`;
const StoreDownloadLinks = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 60%;
  }
`;
const RightsInfo = styled.p`
  text-align: end;
  @media (max-width: 1000px) {
    text-align: start;
  }
`;
function CompanyInfoFooter() {
  return (
    <CompanyInfoFooterWrapper>
      <UsefulLinksWrapper>
        <div>
          <UsefulLinks href="123.com">О компании </UsefulLinks>
          <UsefulLinks href="123.com">Партнерская программа </UsefulLinks>
          <UsefulLinks href="123.com">Реклама </UsefulLinks>
          <UsefulLinks href="123.com">Вакансии </UsefulLinks>
          <UsefulLinks href="123.com">Помощь </UsefulLinks>
          <UsefulLinks href="123.com">Правила </UsefulLinks>
          <UsefulLinks href="123.com">White Label авиабилеты</UsefulLinks>
        </div>
        <div>
          <UsefulLinks href="123.com">
            <img src={vkLogo} alt="VK" /> Вконтакте{" "}
          </UsefulLinks>
          <UsefulLinks href="123.com">
            <img src={fbLogo} alt="FB" /> Фейсбук{" "}
          </UsefulLinks>
          <UsefulLinks href="123.com">
            <img src={instLogo} alt="INST" /> Инстаграм{" "}
          </UsefulLinks>
          <UsefulLinks href="123.com">
            <img src={twitLogo} alt="TWIT" /> Твиттер{" "}
          </UsefulLinks>
          <UsefulLinks href="123.com">
            <img src={vbLogo} alt="VIB" /> Вайбер{" "}
          </UsefulLinks>
        </div>
        <p>Поиск и бронирование отелей</p>
      </UsefulLinksWrapper>
      <InfoWrapper>
        <StoreDownloadLinks>
          <img src={appStore} alt="AppStore" />{" "}
          <img src={playStore} alt="PlayStore" />{" "}
          <img src={winStore} alt="WinStore" />{" "}
        </StoreDownloadLinks>
        <RightsInfo>© 2007-2018, Aviasales- дешевые авиабилеты</RightsInfo>
      </InfoWrapper>
    </CompanyInfoFooterWrapper>
  );
}

export default function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <FooterInfoList />
          <CompanyInfoFooter />
        </div>
      </div>
    </div>
  );
}
