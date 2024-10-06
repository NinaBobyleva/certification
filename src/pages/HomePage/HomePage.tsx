import { useEffect, useState } from "react";
import { Search } from "../../components/Search/Search.tsx";
import { UserList } from "../../components/UserList/UserList.tsx";
import * as S from "./homePage.styled.ts";
import { getUserInfo } from "../../api/userInfo.ts";
import { UserType } from "../../type.ts";
import { Filter } from "../../components/Filter/Filter.tsx";
import { Sorting } from "../../components/Sorting/Sorting.tsx";

export function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  // console.log("count", count);
  const [users, setUsers] = useState<UserType[]>([]);
  console.log("users", users);
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("По возрастанию");
  // console.log("currentPage", currentPage);
  const [login, setLogin] = useState<string>("");

  useEffect(() => {
    const getDataUser = async () => {
      setIsLoading(true);
      const res = await getUserInfo(login, perPage, currentPage, sort);
      setCount(res.total_count);
      setUsers(res.items);
      setIsLoading(false);
    };

    if (login) {
      getDataUser();
    }
  }, [login, currentPage, sort]);

  return (
    <S.Container>
      <S.SearchBlock>
        <S.Title>Поиск пользователей на Git Hub</S.Title>
        <Search setLogin={setLogin} />
      </S.SearchBlock>
      <S.UserBlock>
        {count ? (
          <S.SortBlock>
            <S.SubTitle>Всего найдено: {count}</S.SubTitle>
            <S.SortBox>
              <span>Сoртировать по: </span>
              <Sorting sort={sort} setSort={setSort} />
            </S.SortBox>
          </S.SortBlock>
        ) : null}
        {users.map((el) => (
          <UserList
            isLoading={isLoading}
            key={el.id}
            login={el.login}
            url={el.avatar_url}
            id={el.id}
          />
        ))}
      </S.UserBlock>
      {count ? (
        <Filter
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          count={count}
        />
      ) : null}
    </S.Container>
  );
}
