import { Button } from "../../components/Button/Button.tsx";
import { Search } from "../../components/Search/Search.tsx";
import { UserList } from "../../components/UserList/UserList.tsx";
import * as S from "./homePage.styled.ts";

export function HomePage() {
  return (
    <>
      <S.Container>
        <S.SearchBox>
          <S.Title>Поиск пользователей на Git Hub</S.Title>
          <Search />
          <Button />
          <UserList />
        </S.SearchBox>
      </S.Container>
    </>
  );
}
