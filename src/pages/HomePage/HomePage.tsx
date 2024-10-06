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
  const [users, setUsers] = useState<UserType[]>([]);
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('По возрастанию');
  console.log("sort", sort);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const getDataUser = async () => {
      setIsLoading(true);
      const res = await getUserInfo(userName, perPage, currentPage, sort);
      setCount(res.total_count);
      setUsers(res.items);
      setIsLoading(false);
    };

    if (userName) {
      getDataUser();
    }

    if (userName === "") {
      setUsers([]);
    }
  }, [userName, currentPage, sort]);

  return (
    <S.Container>
      <S.SearchBlock>
        <S.Title>Поиск пользователей на Git Hub</S.Title>
        <Search setUserName={setUserName} />
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
          pagesCount={count}
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          count={count}
        />
      ) : null}
    </S.Container>
  );
}
