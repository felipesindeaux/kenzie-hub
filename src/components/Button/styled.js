import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.greySchema ? "#868E96" : "#FF577F")};
  color: var(--grey-0);
  width: 100%;
  height: 38px;
  padding: 0px 22px;
  border: 1px solid ${(props) => (props.greySchema ? "#868E96" : "#FF577F")};
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => (props.greySchema ? "#343B41" : "#FF427F")};
    border: 1px solid ${(props) => (props.greySchema ? "#343B41" : "#FF427F")};
  }

  &:disabled {
    background-color: var(--color-primary-negative);
    border: 1px solid var(--color-primary-negative);
    cursor: not-allowed;
  }

  @media (min-width: 410px) {
    height: 48px;
  }
`;
