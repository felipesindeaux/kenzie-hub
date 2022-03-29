import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Container, Header, Form } from "./styled";
import { useEffect } from "react";
import * as yup from "yup";
import api from "../../services/api";
import Input from "../../components/Input";
import Logo from "../../assets/logo.svg";
import Select from "../../components/Select";
import Button from "../../components/Button";

const Cadastro = ({ auth, handleAuth }) => {
  useEffect(() => {
    if (auth) {
      localStorage.clear();
      handleAuth(false);
    }
  }, []);

  const history = useHistory();

  const Schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^.{6,}$/, "Mínimo de 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
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
    delete data.passwordConfirm;

    const newUser = {
      ...data,
      bio: "Lorem ipsum dolor emet",
      contact: "Lorem ipsum dolor emet",
    };

    api
      .post("/users", newUser)
      .then((_) => {
        toast.success("Conta criada com sucesso");
        history.push("/");
      })
      .catch((_) => {
        toast.error("Ops! Algo deu errado");
        e.target.reset();
      });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container>
        <Header>
          <img src={Logo} alt="logo" />
          <button className="voltar" onClick={() => history.goBack()}>
            Voltar
          </button>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie sua conta</h1>
          <span className="desc">Rapido e grátis, vamos nessa</span>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            register={register}
            errors={errors}
            name="name"
          />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            register={register}
            errors={errors}
            name="email"
          />
          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            register={register}
            errors={errors}
            name="password"
            type="password"
          />
          <Input
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            register={register}
            errors={errors}
            name="passwordConfirm"
            type="password"
          />
          <Select
            label="Selecionar módulo"
            register={register}
            errors={errors}
            name="course_module"
            options={[
              {
                label: "Primeiro módulo",
                value: "Primeiro módulo (Introdução ao Frontend)",
              },
              {
                label: "Segundo módulo",
                value: "Segundo módulo (Frontend Avançado)",
              },
              {
                label: "Terceiro módulo",
                value: "Terceiro módulo (Introdução ao Backend)",
              },
              {
                label: "Quarto módulo",
                value: "Quarto módulo (Backend Avançado)",
              },
            ]}
          />
          <Button isValid={isValid} isDirty={isDirty}>
            Cadastrar
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Cadastro;
