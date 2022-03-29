import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  position: relative;

  p {
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 18px;
  }

  span {
    font-size: 11px;
    color: var(--negative);
    position: absolute;
    left: 2px;
    top: 70px;
  }

  span::after {
    content: "*";
  }

  input {
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

  i {
    position: absolute;
    top: 68px;
    left: 230px;
    cursor: pointer;

    svg {
      color: var(--grey-1);
      position: relative;
      top: -27px;
      left: 0px;

      &:hover{
        color: var(--grey-0);
      }
    }
  }

  @media (min-width: 410px) {
    margin-bottom: 26px;

    i {
      top: 75px;
      left: 300px;
    }

    span {
      top: 85px;
    }

    p {
      font-size: 12px;
    }

    input {
      height: 48px;
    }
  }
`;
