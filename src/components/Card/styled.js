import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  background-color: var(--grey-4);
  border-radius: 4px;
  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 14px;
    color: var(--grey-0);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
  }

  &:hover {
    background-color: var(--grey-2);

    p {
      color: var(--grey-0);
    }
  }
`;
