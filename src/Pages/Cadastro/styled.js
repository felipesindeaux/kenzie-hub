import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .voltar {
    padding: 0px 16px;
    width: 80px;
    height: 26px;
    height: 25px;
    background-color: var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
    border: none;
    font-weight: 600;
    font-size: 10px;
  }

  @media (min-width: 410px) {
      img{
          width: 122px;
      }
  }
`;

export const Form = styled.form`
  width: 296px;
  height: 630px;
  padding: 34px 18px;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin-top: 20px;

  h1 {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .desc {
    margin: 15px 0px 20px 0px;
    font-weight: 600;
    font-size: 10px;
    color: var(--grey-1);
    text-decoration: none;
  }

  @media (min-width: 410px) {
    width: 369px;
    height: 750px;

    h1 {
      font-size: 18px;
    }

    .desc {
      margin: 20px 0px 26px 0px;
      font-size: 12px;
    }
  }
`;
