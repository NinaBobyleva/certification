import * as S from "./button.styled.ts";

export function Button({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return <S.Button onClick={onClick}>{title}</S.Button>;
}
