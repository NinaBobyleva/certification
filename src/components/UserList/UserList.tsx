import * as S from "./userList.styled";

type UserListProp = {
    login: string;
    url: string;
    id: string;
}

export function UserList({login, url, id}: UserListProp) {
    // console.log("login", login);
    return(
        <S.UserBox>
            <S.Img src={url} alt="avatar" />
            <S.UserLogin>{login}</S.UserLogin>
        </S.UserBox>
    );
}