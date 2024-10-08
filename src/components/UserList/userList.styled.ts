import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserList = styled.div`
  margin-bottom: 20px;
`;

export const UserListBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserListBoxLogin = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 50px;
  align-items: center;
`;

export const UserListBoxLink = styled.div`
  width: 300px;
  :hover{
    color: grey;
  }
`;

export const UserLink = styled(Link)`
  font-weight: 600;
  font-size: 24px;
  color: #000;
`;

export const UserListImg = styled.img`
  width: 200px;
`;

export const UserListLogin = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #000;
`;
