import styled from "styled-components";

export const SelectContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;

  p {
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 18px;
  }

  span {
    font-size: 11px;
    color: var(--negative);
  }

  span::after {
    content: "*";
  }

  select {
    padding: 0px 13px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 3px;
    width: 100%;
    height: 38px;
    color: var(--grey-0);

    &:focus {
      border: 1px solid var(--grey-0);
    }
  }

  @media (min-width: 410px) {
    margin-bottom: 26px;

    p {
      font-size: 12px;
    }

    select {
      height: 48px;
    }
  }
`;
