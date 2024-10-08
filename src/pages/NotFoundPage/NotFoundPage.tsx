import { paths } from "../../path";
import * as S from "./notFoundPage.styled";

export function NotFoundPage() {
    return(
        <S.NotFound>
            <S.NotFoundTitle>404</S.NotFoundTitle>
            <S.NotFoundText>Not Found</S.NotFoundText>
            <S.NotFoundLink to={paths.HOME}>Вернитесь на главную страницу</S.NotFoundLink>
        </S.NotFound>
    );
}