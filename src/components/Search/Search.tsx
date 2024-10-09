import * as S from "./search.styled";
import { debounce } from "lodash";

export function Search({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<string>>;
}) {
  const debounceSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }, 1000);

  return (
    <S.Input
      type="search"
      placeholder="Введите логин пользователя"
      onChange={debounceSearch}
    />
  );
}
