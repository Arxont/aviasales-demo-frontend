import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import DoubleRangeSlider from "./DoubleSlider";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/minimal-example.css";

const AccordionTitle = styled(AccordionItemTitle)`
  display: flex;
  justify-content: space-between;
`;

const AccordionContainer = styled(AccordionItem)`
  border-bottom-style: solid;
`;
const TransferWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransferCount = styled.p`
  display: flex;
  justify-content: space-between;
`;
const Transfers = () => (
  <TransferWrapper>
    <TransferCount>
      <span>
        <input type="checkbox" id="Notransfer" name="NoTransfer" />
        <label for="NoTransfer"> Без пересадок</label>
      </span>
      <span>7245P</span>
    </TransferCount>
    <TransferCount>
      <span>
        <input type="checkbox" id="1transfer" name="1Transfer" />
        <label for="1Transfer"> 1 пересадка</label>
      </span>
      <span>7245P</span>
    </TransferCount>
    <TransferCount>
      <span>
        <input type="checkbox" id="2transfer" name="2Transfer" />
        <label for="1Transfer"> 2 пересадки</label>
      </span>
      <span>7245P</span>
    </TransferCount>
    <TransferCount>
      <span>
        <input type="checkbox" id="3transfer" name="3Transfer" />
        <label for="1Transfer"> 3 пересадки</label>
      </span>
      <span>7245P</span>
    </TransferCount>
  </TransferWrapper>
);

const ClearCheckboxes = styled.button`
  background-color: grey;
  color: white;
  border-style: none;
  border-radius: 20px;
`;
const FilterCell = props => (
  <AccordionContainer>
    <AccordionTitle>
      <span>
        <button type="button">↓</button>
        {props.Title}
      </span>
      <ClearCheckboxes type="button">x</ClearCheckboxes>
    </AccordionTitle>
    <AccordionItemBody>{props.Body}</AccordionItemBody>
  </AccordionContainer>
);

function Filter() {
  return (
    <Accordion>
      <FilterCell Title="Пересадки" Body={<Transfers />} />
    </Accordion>
  );
}

export default Filter;
