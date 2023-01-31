import styled from "styled-components";

export const DateTimeTitle = styled.h3`
  color: #000;
  font-size: 1.5em;
  margin: 1% 0%;
  padding: 0;
`;

export const SpanTitle = styled.span`
  color: #757575;
  font-size: 1em;
  font-weight: 600;
`;

export const SpanCount = styled(SpanTitle)`
  position: absolute;
  letter-spacing: 0.5px;
  right: 8%;
  top: 25%;
`;

export const TaskName = styled(DateTimeTitle)`
  font-size: 1.2em;
  font-weight: 400;
  display: inline-block;
  margin: 2% 1%;
`;

export const TaskTime = styled(SpanCount)`
  font-weight: 500;
  top: 50%;
`;
