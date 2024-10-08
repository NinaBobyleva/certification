import { Dispatch, SetStateAction } from "react";
import * as S from "./sorting.styled";

type SortingProp = {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
};

export function Sorting({ sort, setSort }: SortingProp) {
  const toggleSort = () => {
    setSort(
      sort === "По возрастанию"
        ? (sort = "По убыванию")
        : (sort = "По возрастанию")
    );
  };

  return (
    <S.SortingBox>
      <S.SortingForm>
        <S.FormInput onClick={toggleSort}>{sort}</S.FormInput>
      </S.SortingForm>
    </S.SortingBox>
  );
}
