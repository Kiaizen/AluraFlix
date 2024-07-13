import Campo from "../Campo"
import CampoSelect from "../CampoSelect"
import CampoTextArea from "../CampoTextArea"
import BotaoDialog from "../BotaoDialog"
import styled from "styled-components";
import { useVideoContext } from "../../context";

const StyledForm = styled.form`
  margin: 0 200px 80px;
  color:#fff;
  div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 20px 0;
    font-size:20px;
    input{
        border-color:rgba(34, 113, 209, 1);
        &:placeholder{
            font-size:20px;
        }
    }
    select{
        border-color:rgba(34, 113, 209, 1);
        width:573px;
    }
    textarea{
        border-color:rgba(34, 113, 209, 1);
    }
  }
  @media (max-width:1280px){
    margin:auto;
    max-width:600px;
    h1{
      text-align: start;
    }
  }
  @media (max-width:768px){
    max-width:350px;
    h1{
      font-size:32px;
      text-align:center;
      white-space:nowrap;
      width:100%;
      margin-bottom: 40px;
    }
    input{
      width:350px;
    }
    textarea{
      width:350px;
    }
  }
  @media (max-width:768px){
        div{
          select{
            width:350px;
          }
        }
    }
`;
const BtnDiv = styled.section`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    width:573px;
    @media (max-width:768px){
      flex-direction:column;
      align-items: center;
      width:auto;
      gap:20px;
    }
`

const Form = () => {
  const {form2, atualizarVideo} = useVideoContext();


  const aoSubmit = (e) => {
    e.preventDefault();
    atualizarVideo(form2);
  };
  const limpar = (e) =>{
    console.log('uée');
    e.preventDefault();
    form2.aoLimpar();
  }
    return(
        <StyledForm onSubmit={aoSubmit}>
          <h1>EDITAR CARD:</h1>
          <Campo
            label="Título"
            name='titulo'
            type="text"
            placeholder="Digite seu título"
            width="573px"
            value={form2.inputs.titulo}
            onChange={form2.aoMudar}
            erros={form2.errors.titulo}
          />
          <CampoSelect name="select" value={form2.inputs.select} onChange={form2.aoMudar} erros={form2.errors.select}/>
          <Campo
            label="Imagem"
            name='imagem'
            type="text"
            placeholder="Digite o link da imagem"
            width="573px"
            value={form2.inputs.imagem}
            onChange={form2.aoMudar}
            erros={form2.errors.imagem}
          />
          <Campo
            label="Vídeo"
            name='video'
            type="text"
            placeholder="Digite o link do vídeo"
            width="573px"
            value={form2.inputs.video}
            onChange={form2.aoMudar}
            erros={form2.errors.video}
          />
          <CampoTextArea name ="descri" value={form2.inputs.descri} onChange={form2.aoMudar} erros={form2.errors.descri}/>
          <BtnDiv>
          <BotaoDialog type="submit">Salvar</BotaoDialog>
          <BotaoDialog type="button" onClick={limpar}>Limpar</BotaoDialog>
          </BtnDiv>
        </StyledForm>
    )
}

export default Form