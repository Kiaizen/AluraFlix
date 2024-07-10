import styled from "styled-components";
import Campo from "../../components/Campo";
import CampoSelect from "../../components/CampoSelect";
import CampoTextArea from "../../components/CampoTextArea";
import BotaoForm from "../../components/BotaoForm";
import { useVideoContext } from "../../context";

const StyledSection = styled.section`
  color: rgba(255, 255, 255, 1);
  font-family: "Roboto-Bold";
  h1 {
    font-family: "Roboto";
    font-size: 60px;
    color: rgba(245, 245, 245, 1);
  }
  p {
    font-family: "Roboto-Regular";
    font-size: 20px;
  }
  form {
    margin: 60px 134px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 60px;
    column-gap: 20px;
    font-family: "SourceSans";
    h3 {
      width: 100%;
      font-size: 36px;
      border-top: 3px solid rgba(38, 38, 38, 1);
      border-bottom: 3px solid rgba(38, 38, 38, 1);
      height: 90px;
      align-content: center;
    }
  }
`;
const Titulo = styled.div`
  text-align: center;
  margin: 70px auto 48px auto;
`;

const NovoVideoForm = () => {
  const { inputs, errors, aoMudar, aoLimpar, aoSalvar } = useVideoContext();

  const aoSubmit = (e) => {
    e.preventDefault();
    aoSalvar()
  };

  return (
    <StyledSection>
      <Titulo>
        <h1>NOVO VÍDEO</h1>
        <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
      </Titulo>
      <form>
        <h3>Criar Card</h3>
        <Campo
          label="Título"
          name="titulo"
          type="text"
          placeholder="Digite seu título"
          width="470px"
          onChange={aoMudar}
          value={inputs.titulo}
          erros={errors.titulo}
        />
        <CampoSelect
          onChange={aoMudar}
          name="select"
          value={inputs.select}
          erros={errors.select}
        />
        <Campo
          label="Imagem"
          name="imagem"
          type="url"
          placeholder="Digite o link da imagem"
          width="39lvw"
          onChange={aoMudar}
          value={inputs.imagem}
          erros={errors.imagem}
        />
        <Campo
          label="Vídeo"
          name="video"
          type="url"
          placeholder="Digite o link do vídeo"
          width="38lvw"
          onChange={aoMudar}
          value={inputs.video}
          erros={errors.video}
        />
        <CampoTextArea
          onChange={aoMudar}
          name="descri"
          value={inputs.descri}
          erros={errors.descri}
        />
        <BotaoForm onClick={aoSubmit}>Salvar</BotaoForm>
        <BotaoForm onClick={aoLimpar}>Limpar</BotaoForm>
      </form>
    </StyledSection>
  );
};

export default NovoVideoForm;
