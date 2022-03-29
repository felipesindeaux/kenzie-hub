import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 410px) {
    img {
      width: 144px;
    }
  }
`;

export const Form = styled.form`
  width: 296px;
  height: 415px;
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

  .cadastro {
    margin: 27px 0px 17px 0px;
    font-weight: 600;
    font-size: 10px;
    color: var(--grey-1);
    text-decoration: none;
  }

  @media (min-width: 410px) {
    width: 369px;
    height: 502px;

    h1 {
      font-size: 18px;
    }

    .cadastro {
      margin: 34px 0px 22px 0px;
      font-size: 12px;
    }
  }
`;
