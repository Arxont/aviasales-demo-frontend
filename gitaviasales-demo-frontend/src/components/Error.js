import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  text-align: center;
`;

const ErrorNumber = styled.h1`
  font-size: 500%;
`;
const ErrorText = styled.p`
  font-size: 500%;
  font-weight: bold;
`;
export default function Error() {
  return (
    <ErrorWrapper>
      <ErrorNumber>404</ErrorNumber>
      <ErrorText>Page not found</ErrorText>
    </ErrorWrapper>
  );
}
