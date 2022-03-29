import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Form } from "./styled";
import { motion } from "framer-motion";
import * as yup from "yup";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.svg";
import { useEffect } from "react";

const Login = ({ handleAuth, auth }) => {
  useEffect(() => {
    if (auth) {
      localStorage.clear();
      handleAuth(false);
    }
  }, []);

  const history = useHistory();

  const Schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, reset },
  } = useForm({
    resolver: yupResolver(Schema),
    mode: "onChange",
  });

  const onSubmit = (data, e) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        handleAuth(true);
        toast.success("Logado com sucesso");
        history.push(`/dashboard`);
      })
      .catch((_) => {
        toast.error("Email ou senha inválidos!");
        e.target.reset();
      });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container>
        <img src={Logo} alt="logo"></img>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <Input
            errors={errors}
            register={register}
            name="email"
            label="Email"
            placeholder="Digite seu email"
          />
          <Input
            errors={errors}
            register={register}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
          />
          <Button isDirty={isDirty} isValid={isValid}>
            Entrar
          </Button>
          <span className="cadastro">Ainda não possui uma conta?</span>
          <Button
            onClick={() => history.push("/cadastro")}
            greySchema
            type={"button"}
            isDirty={true}
            isValid={true}
          >
            Cadastre-se
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Login;
