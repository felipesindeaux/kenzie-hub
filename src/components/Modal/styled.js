import styled from "styled-components";

export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: var(--grey-2);
  border-radius: 3px 3px 0px 0px;

  h1 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 12px;
  }

  @media (min-width: 410px) {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  padding: 17px;

  p {
    color: var(--grey-0);
  }

  @media (min-width: 410px) {
    padding: 22px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: ${(props) => (props.modalCadastro ? "100%" : "163px")};
  }

  button + button {
    width: 78px;
  }

  @media (min-width: 410px) {
    button {
      width: ${(props) => (props.modalCadastro ? "100%" : "204px")};
    }

    button + button {
      width: 78px;
    }
  }
`;

export const ExcluirButton = styled.button`
  background-color: var(--grey-1);
  border: none;
  border-radius: 4px;
  height: 38px;
  margin-left: 18px;
  font-size: 12px;
  color: var(--grey-0);

  @media (min-width: 410px) {
    height: 48px;
  }
`;
