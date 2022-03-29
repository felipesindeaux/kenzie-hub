import { StyledButton } from "./styled";

const Button = ({
  children,
  greySchema = false,
  onClick,
  type = "submit",
  isValid,
  isDirty,
}) => (
  <StyledButton
    disabled={!isDirty || !isValid}
    onClick={onClick}
    greySchema={greySchema}
    type={type}
  >
    {children}
  </StyledButton>
);

export default Button;
