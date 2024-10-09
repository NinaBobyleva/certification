import { useEffect, useState } from "react";
import { Search } from "../../components/Search/Search.tsx";
import { UserList } from "../../components/UserList/UserList.tsx";
import * as S from "./homePage.styled.ts";
import { getUsers } from "../../api/userInfo.ts";
import { UserType } from "../../type.ts";
import { Filter } from "../../components/Filter/Filter.tsx";
import { Sorting } from "../../components/Sorting/Sorting.tsx";
import { getErrorText } from "../../utils/getErrorText.ts";

export function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState("");
  const [perPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("По возрастанию");
  const [login, setLogin] = useState<string>("");

  useEffect(() => {
    const getDataUser = async () => {
      setIsLoading(true);
      setError("");
      getUsers(login, perPage, currentPage, sort)
        .then((res) => {
          setCount(res.total_count);
          setUsers(res.items);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error) {
            getErrorText({ errorName: error.message, setError: setError });
          }
            
        });
    };

    if (login) {
      getDataUser();
    }
  }, [login, currentPage, sort]);

  return (
    <S.Container>
      <S.SearchBlock>
        <S.SearchTitle>Пользователи Git Hub</S.SearchTitle>
        <Search setLogin={setLogin} />
      </S.SearchBlock>
      {error ? (
        <S.Error>{error}</S.Error>
      ) : (
        <>
          <S.UserBlock>
            {count ? (
              <S.SortBlock>
                <S.SortBoxText>Всего найдено: {count}</S.SortBoxText>
                <S.SortBox>
                  <S.SortBoxText>Сoртировать по: </S.SortBoxText>
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
                gitUrl={el.html_url}
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
        </>
      )}
    </S.Container>
  );
}
