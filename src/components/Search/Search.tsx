import * as S from "./search.styled";

export function Search({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <S.Input
      type="text"
      placeholder="Введите логин пользователя"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setLogin(e.target.value)
      }
    />
  );
}
