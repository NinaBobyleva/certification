import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 400px;
`;
export const NotFoundTitle = styled.h1`
  font-weight: 700;
  font-size: 160px;
  color: #000;
`;
export const NotFoundText = styled.p`
  font-weight: 600;
  font-size: 60px;
  color: #000;
`;
export const NotFoundLink = styled(Link)`
  font-weight: 400;
  font-size: 18px;
  color: #000;
  padding-top: 10px;
`;
