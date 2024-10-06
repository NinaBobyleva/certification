import { createPages } from "../../utils/createPages";
import { Button } from "../Button/Button";
import * as S from "./filter.styled";

type FilterBlockProp = {
  count: number;
  pagesCount: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export function Filter({
  perPage,
  currentPage,
  count,
  setCurrentPage,
}: FilterBlockProp) {
  let pages: number[] = [];

  const pagesCount = Math.ceil(count / perPage);
  // console.log("pagesCount", pagesCount);

  createPages({ pages, pagesCount, currentPage });

  return (
    <S.FilterBox>
      {currentPage > 1 ? (
        <Button
          title="Предыдущая"
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        />
      ) : null}
      <S.FilterList>
        {pages.map((page) => (
          <S.FilterPageList
            $highlighted={currentPage === page}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </S.FilterPageList>
        ))}
      </S.FilterList>
      <Button
        title="Следующая"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      />
    </S.FilterBox>
  );
}
