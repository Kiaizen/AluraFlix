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
    font-size:20px;
    h3 {
      width: 100%;
      font-size: 36px;
      border-top: 3px solid rgba(38, 38, 38, 1);
      border-bottom: 3px solid rgba(38, 38, 38, 1);
      height: 90px;
      align-content: center;
    }
  }
  @media(max-width:1280px){
    h1{
      font-size:40px;
    }
    p{
      font-size:15px;
    }
    form{
      max-width:90lvw;
      margin: 60px auto;
      input{
        max-width:470px;
      }
    }
  }
  @media (max-width:768px){
    form{
      max-width:330px;
      flex-direction:column;
      align-items: center;
      input{
        width:330px;
      }
      textarea{
        width:330px
      }
      select{
        width:330px;
      }
    }
  }
`;
const Titulo = styled.div`
  text-align: center;
  margin: 70px auto 48px auto;
  @media (max-width:768px) {
    padding:0 20px;
    h1{
      margin-bottom: 10px;
    }
  }
`;

const NovoVideoForm = () => {
  const { form1, aoSalvar } = useVideoContext();

  const aoSubmit = (e) => {
    e.preventDefault();
    aoSalvar(form1)
  };

  const limpar = (e)=>{
    e.preventDefault();
    form1.aoLimpar();
  }

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
          width="38lvw"
          onChange={form1.aoMudar}
          value={form1.inputs.titulo}
          erros={form1.errors.titulo}
        />
        <CampoSelect
          onChange={form1.aoMudar}
          name="select"
          value={form1.inputs.select}
          erros={form1.errors.select}
        />
        <Campo
          label="Imagem"
          name="imagem"
          type="url"
          placeholder="Digite o link da imagem"
          width="38lvw"
          onChange={form1.aoMudar}
          value={form1.inputs.imagem}
          erros={form1.errors.imagem}
        />
        <Campo
          label="Vídeo"
          name="video"
          type="url"
          placeholder="Digite o link do vídeo"
          width="38lvw"
          onChange={form1.aoMudar}
          value={form1.inputs.video}
          erros={form1.errors.video}
        />
        <CampoTextArea
          onChange={form1.aoMudar}
          name="descri"
          value={form1.inputs.descri}
          erros={form1.errors.descri}
        />
        <BotaoForm onClick={aoSubmit}>Salvar</BotaoForm>
        <BotaoForm onClick={limpar}>Limpar</BotaoForm>
      </form>
    </StyledSection>
  );
};

export default NovoVideoForm;
