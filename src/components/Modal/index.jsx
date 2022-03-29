import { Modal } from "@mui/material";
import { ModalHeader, Form, DivButtons, ExcluirButton } from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../../services/api";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

const ModalComp = ({
  openModal,
  modalCadastro = false,
  handleOpenModal,
  handleTechs,
  idTargetTech,
  idUser,
  nameTargetTech,
  moduloTargetTech
}) => {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const Schema = yup.object().shape({
    title: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(Schema),
    mode: "onChange",
  });

  const deleteTech = () => {
    api
      .delete(`users/techs/${idTargetTech}`, config)
      .then((_) => {
        handleOpenModal(false);
        toast.success("Tecnologia deletada");
        api
          .get(`/users/${idUser}`)
          .then((response) => handleTechs(response.data.techs));
      })
      .catch((_) => toast.error("Ops! Algo deu errado"));
  };

  const cadastroSubmit = (data) => {
    api
      .post("/users/techs", data, config)
      .then((_) => {
        handleOpenModal(false);
        toast.success("Tecnologia cadastrada");
        api
          .get(`/users/${idUser}`)
          .then((response) => handleTechs(response.data.techs));
      })
      .catch((_) => toast.error("Ops! Algo deu errado"));
  };

  const techSubmit = (data) => {
    delete data.title;
    api
      .put(`/users/techs/${idTargetTech}`, data, config)
      .then((_) => {
        handleOpenModal(false);
        toast.success("Tecnologia atualizada");
        api
          .get(`/users/${idUser}`)
          .then((response) => handleTechs(response.data.techs));
      })
      .catch((_) => toast.error("Ops! Algo deu errado"));
  };

  const onSubmit = (data) =>
    modalCadastro ? cadastroSubmit(data) : techSubmit(data);

  const dadosModal = modalCadastro
    ? {
        h1: "Cadastrar Tecnologia",
        inputLabel: "Nome",
        placeholder: "Digite aqui o nome",
        selectLabel: "Selecionar Status",
        buttonName: "Cadastrar Tecnologia",
        isDisabled: false,
      }
    : {
        h1: "Tecnologia Detalhes",
        inputLabel: "Nome do projeto",
        placeholder: nameTargetTech,
        selectLabel: "Status",
        buttonName: "Salvar alterações",
        isDisabled: true,
      };

  const closeModal = () => {
    handleOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        width: "296px",
        height: "310px",
        backgroundColor: "#212529",
        boxShadow: "0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25)",
        borderRadius: "3px",
        margin: "auto",
        "@media(min-width: 410px)": {
          width: "370px",
          height: "362px",
        },
      }}
    >
      <>
        <ModalHeader>
          <h1>{dadosModal.h1}</h1>
          <FiX cursor="pointer" onClick={closeModal} color="#868E96" />
        </ModalHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={dadosModal.inputLabel}
            placeholder={dadosModal.placeholder}
            register={register}
            errors={errors}
            name="title"
            isDisabled={dadosModal.isDisabled}
          />
          <Select
            label={dadosModal.selectLabel}
            register={register}
            errors={errors}
            name="status"
            defaultValue={moduloTargetTech}
            options={[
              {
                label: "Iniciante",
                value: "Iniciante",
              },
              {
                label: "Intermediário",
                value: "Intermediário",
              },
              {
                label: "Avançado",
                value: "Avançado",
              },
            ]}
          />
          <DivButtons modalCadastro={modalCadastro}>
            <Button
              isValid={isValid}
              isDirty={isDirty}
            >
              {dadosModal.buttonName}
            </Button>
            {!modalCadastro && (
              <ExcluirButton onClick={deleteTech} type="button">
                Excluir
              </ExcluirButton>
            )}
          </DivButtons>
        </Form>
      </>
    </Modal>
  );
};

export default ModalComp;
