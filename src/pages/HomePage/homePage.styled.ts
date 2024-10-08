import styled from "styled-components";

export const Main = styled.div`
  max-width: 1440px;
`;

export const Container = styled.div`
  padding-left: calc(50% - 700px);
  padding-right: calc(50% - 700px);
`;

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 240px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  color: black;
`;

export const UserBlock = styled.div`
  padding-top: 60px;
`;

export const SortBlock = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const SortBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SortBoxText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #000;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #000;
`;

export const Error = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: red;
  text-align: center;
  padding-top: 70px;
`;
