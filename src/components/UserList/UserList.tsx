import * as S from "./userList.styled";
import { SkeletonBrick, SkeletonText } from "@consta/uikit/Skeleton";

type UserListProp = {
  login: string;
  url: string;
  id: string;
  isLoading: boolean;
};

export function UserList({ login, url, id, isLoading }: UserListProp) {
  return (
    <S.UserListBox>
      <S.UserBox>
        {isLoading ? (
          <SkeletonBrick height={200} width={200} />
        ) : (
          <S.Img src={url} alt="avatar" />
        )}
        {isLoading ? (
          <SkeletonText rows={1} fontSize="2xl" lineHeight="l" />
        ) : (
          <S.UserLogin>{login}</S.UserLogin>
        )}
      </S.UserBox>
    </S.UserListBox>
  );
}
