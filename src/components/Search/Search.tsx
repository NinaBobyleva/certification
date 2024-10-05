import * as S from "./search.styled";

export function Search({setUserName}: {setUserName: React.Dispatch<React.SetStateAction<string>>}) {

    return(
        <S.Input type="text" placeholder="Введите логин пользователя" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
    );
}