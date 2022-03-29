import { useHistory, Redirect, useParams } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import Card from "../../components/Card";
import ModalComp from "../../components/Modal";
import Logo from "../../assets/logo.svg";
import {
  Container,
  Header,
  InfoContainer,
  HorizontalLine,
  Painel,
  PlusButtonContainer,
  HeaderPainel,
  Tecnologias,
} from "./styled";

const Dashboard = ({ auth, handleAuth }) => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [modulo, setModulo] = useState("");
  const [id, setId] = useState("");
  const [techs, setTechs] = useState([]);
  const [openModalTech, setOpenModalTech] = useState(false);
  const [openModalCadastro, setOpenModalCadastro] = useState(false);
  const [idTargetTech, setIdTargetTech] = useState("");
  const [nameTargetTech, setNameTargetTech] = useState("");
  const [moduloTargetTech, setModuloTargetTech] = useState("");

  const handleOpenModalCadastro = (value) => setOpenModalCadastro(value);
  const handleOpenModalTech = (value) => setOpenModalTech(value);
  const handleTechs = (value) => setTechs(value);
  const handleIdTargetTech = (value) => setIdTargetTech(value);
  const handleNameTargetTech = (value) => setNameTargetTech(value);
  const handleModuloTargetTech = (value) => {
    setModuloTargetTech(value);
  };

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    if (token) {
      const { sub } = jwt_decode(token);

      api.get(`/users/${sub}`).then((response) => {
        setId(sub);
        setName(response.data.name);
        setModulo(response.data.course_module);
        setTechs(response.data.techs);
      });
    }
  }, []);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container>
        <Header>
          <img src={Logo} alt="logo" />
          <button
            onClick={() => {
              localStorage.clear();
              handleAuth(false);
              toast.success("Deslogado com sucesso");
              history.push("/");
            }}
          >
            Sair
          </button>
        </Header>
        <HorizontalLine />
        <InfoContainer>
          <h1>Olá, {name}</h1>
          <p>{modulo}</p>
        </InfoContainer>
        <HorizontalLine />
        <Painel>
          <HeaderPainel>
            <h1>Tecnologias</h1>
            <PlusButtonContainer onClick={() => setOpenModalCadastro(true)}>
              <FiPlus />
            </PlusButtonContainer>
          </HeaderPainel>
          <Tecnologias>
            {techs.map((tech) => (
              <Card
                key={tech.id}
                title={tech.title}
                status={tech.status}
                handleOpenModalTech={handleOpenModalTech}
                id={tech.id}
                handleIdTargetTech={handleIdTargetTech}
                handleNameTargetTech={handleNameTargetTech}
                handleModuloTargetTech={handleModuloTargetTech}
              ></Card>
            ))}
          </Tecnologias>
        </Painel>
        {openModalTech && (
          <ModalComp
            openModal={openModalTech}
            handleOpenModal={handleOpenModalTech}
            handleTechs={handleTechs}
            idTargetTech={idTargetTech}
            idUser={id}
            nameTargetTech={nameTargetTech}
            moduloTargetTech={moduloTargetTech}
          ></ModalComp>
        )}

        {openModalCadastro && (
          <ModalComp
            openModal={openModalCadastro}
            handleOpenModal={handleOpenModalCadastro}
            handleTechs={handleTechs}
            idUser={id}
            modalCadastro
          ></ModalComp>
        )}
      </Container>
    </motion.div>
  );
};

export default Dashboard;
