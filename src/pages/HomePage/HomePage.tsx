import { useEffect, useState } from "react";
// import { Button } from "../../components/Button/Button.tsx";
import { Search } from "../../components/Search/Search.tsx";
import { UserList } from "../../components/UserList/UserList.tsx";
import * as S from "./homePage.styled.ts";
import { getUserInfo } from "../../api/userInfo.ts";
import { UserType } from "../../type.ts";

export function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [users, setUsers] = useState<UserType[]>([]);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("user", users);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const getDataUser = async () => {
      setIsLoading(true);
      const res = await getUserInfo(userName, perPage, currentPage);
      setCount(res.total_count);
      setUsers(res.items);
      setIsLoading(false);
    };

    if (userName) {
      getDataUser();
    }
  }, [userName]);

  return (
    <>
      <S.Container>
        <S.SearchBox>
          <S.Title>Поиск пользователей на Git Hub</S.Title>
          <Search setUserName={setUserName} />
          <S.SubTitle>Всего найдено: {count}</S.SubTitle>
          {isLoading ? (
            "Данные загружаются..."
          ) : (
            <>
              {users.map((el) => (
                <UserList
                  key={el.id}
                  login={el.login}
                  url={el.avatar_url}
                  id={el.id}
                />
              ))}
            </>
          )}

          {/* <Button /> */}
        </S.SearchBox>
      </S.Container>
    </>
  );
}
