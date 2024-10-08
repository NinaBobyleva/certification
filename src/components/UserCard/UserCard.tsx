import { useEffect, useState } from "react";
import { getUser } from "../../api/userInfo";
import * as S from "./userCard.styled";
import { UserCardType } from "../../type";

export function UserCard({ login }: { login: string }) {
  const [user, setUser] = useState<UserCardType | null>(null);

  useEffect(() => {
    const getDataUser = async () => {
      const res = await getUser(login);
      setUser(res);
    };

    getDataUser();
  }, []);

  let createDate = "";

  if (user) {
    const date = new Date(user!.created_at);
    createDate = date.toLocaleDateString("ru-RU");
  }

  return (
    <S.UserCardBox>
      <S.UserCardText>Создан: {createDate}</S.UserCardText>
      <S.UserCardText>Подписчики: {user?.followers}</S.UserCardText>
      <S.UserCardText>Подписан: {user?.following}</S.UserCardText>
      <S.UserCardText>Кол-во репозиториев: {user?.public_repos}</S.UserCardText>
    </S.UserCardBox>
  );
}
