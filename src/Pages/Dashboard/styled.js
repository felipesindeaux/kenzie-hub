import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 410px) {
    max-width: 780px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 73px;
  padding: 0px 15px;

  button {
    padding: 0px 16px;
    width: 80px;
    width: 55px;
    height: 32px;
    background-color: var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
    border: none;
    font-weight: 600;
    font-size: 12px;
  }

  button:hover {
    background-color: var(--grey-2);
  }

  img {
    width: 105px;
  }

  @media (min-width: 410px) {
    img {
      width: 122px;
    }
  }
`;

export const InfoContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  padding: 15px;
  height: 120px;

  h1 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 400;
  }

  @media (min-width: 410px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HorizontalLine = styled.div`
  width: 100vw;
  height: 1px;
  background-color: var(--grey-3);
`;

export const Painel = styled.div`
  padding: 15px;
  margin-top: 11px;
  width: 100%;
`;

export const HeaderPainel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlusButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--grey-3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--grey-2);
  }
`;

export const Tecnologias = styled.div`
  margin-top: 22px;
  width: 100%;
  height: 515px;
  background-color: var(--grey-3);
  padding: 22px 8px;
  border-radius: 4px;
  overflow-y: auto;

  div + div {
    margin-top: 16px;
  }
`;
