import styled from "styled-components";

interface StyledProps {
  $highlighted: boolean
}

export const FilterBox = styled.div`
  padding-top: 70px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const FilterList = styled.ul`
  display: flex;
  gap: 2px;
`;

export const FilterPageList = styled.li<StyledProps>`
  width: 50px;
  height: 30px;
  border: 1px solid ${props => props.$highlighted ? 'lightgrey' : '#FAFAFA'};
  border-radius: 30px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  background-color: ${props => props.$highlighted ? 'lightgrey' : '#FAFAFA'};
`;
