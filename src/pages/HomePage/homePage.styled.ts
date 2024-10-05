import styled from "styled-components";

export const Main = styled.div`
    max-width: 1440px;
`;

export const Container = styled.div`
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
`;

export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 240px;
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 60px;
    color: black;
`;