import { SelectContainer } from "./styled";

const Select = ({ label, register, name, errors, options, defaultValue }) => (
  <SelectContainer>
    <p>{label}</p>
    <select defaultValue={defaultValue} {...register(name)}>
      {options.map((currentOption, index) => (
        <option key={index} value={currentOption.value}>
          {currentOption.label}
        </option>
      ))}
    </select>
    {errors[name] && <span>{errors[name].message}</span>}
  </SelectContainer>
);

export default Select;
