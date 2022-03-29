import { InputContainer } from "./styled";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const Input = ({
  label,
  placeholder,
  type = "text",
  register,
  name,
  errors,
  isDisabled = false,
}) => {
  const [showPass, setShowPass] = useState(type === "password" ? true : false);

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <InputContainer>
      <p>{label}</p>
      <input
        disabled={isDisabled}
        {...register(name)}
        placeholder={placeholder}
        type={!showPass ? "text" : "password"}
      ></input>
      {errors[name] && <span>{errors[name].message}</span>}
      {type === "password" && (
        <i onClick={toggleShowPass}>
          <FaEye/>
        </i>
      )}
    </InputContainer>
  );
};

export default Input;
