import { StyledCard } from "./styled";

const Card = ({
  title,
  status,
  handleOpenModalTech,
  id,
  handleIdTargetTech,
  handleNameTargetTech,
  handleModuloTargetTech
}) => (
  <StyledCard
    id={id}
    onClick={(evt) => {
      handleOpenModalTech(true);
      handleIdTargetTech(evt.target.id);
      handleNameTargetTech(title);
      handleModuloTargetTech(status)
    }}
  >
    <h2>{title}</h2>
    <p>{status}</p>
  </StyledCard>
);

export default Card;
