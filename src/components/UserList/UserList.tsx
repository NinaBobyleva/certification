import { useState } from "react";
import * as S from "./userList.styled";
import { SkeletonBrick, SkeletonText } from "@consta/uikit/Skeleton";
import { UserCard } from "../UserCard/UserCard";

type UserListProp = {
  login: string;
  url: string;
  gitUrl: string;
  isLoading: boolean;
};

export function UserList({ login, url, gitUrl, isLoading }: UserListProp) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleUser = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.UserList>
      <S.UserListBox>
        <S.UserListBoxLogin onClick={toggleUser}>
          {isLoading ? (
            <SkeletonBrick height={200} width={200} />
          ) : (
            <S.UserListImg src={url} alt="avatar" />
          )}
          {isLoading ? (
            <SkeletonText rows={1} fontSize="2xl" lineHeight="l" />
          ) : (
            <S.UserListLogin>{login}</S.UserListLogin>
          )}
        </S.UserListBoxLogin>
        <S.UserListBoxLink>
          <S.UserLink to={gitUrl}>Ссылка на Git Hub</S.UserLink>
        </S.UserListBoxLink>
      </S.UserListBox>
      {isOpen ? <UserCard login={login} /> : null}
    </S.UserList>
  );
}
