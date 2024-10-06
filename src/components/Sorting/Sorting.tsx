import { Dispatch, SetStateAction } from "react";
import * as S from "./sorting.styled";

type SortingProp = {
    sort: string;
    setSort: Dispatch<SetStateAction<string>>;
}

export function Sorting({ sort, setSort }: SortingProp) {
    return(
        <S.SortingBox>
            <S.SortingForm>
                <S.FormSelect>
                    <S.FormOption value="По возрастанию" onClick={() => setSort("ascending")}>По возрастанию</S.FormOption>
                    <S.FormOption value="По убыванию" onClick={() => setSort("descending")}>По убыванию</S.FormOption>
                </S.FormSelect>
            </S.SortingForm>
        </S.SortingBox>
    );
}