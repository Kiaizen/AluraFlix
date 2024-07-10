import Campo from "../Campo"
import CampoSelect from "../CampoSelect"
import CampoTextArea from "../CampoTextArea"
import BotaoDialog from "../BotaoDialog"
import styled from "styled-components";

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
`;
const BtnDiv = styled.section`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    width:573px;
`

const Form = () => {
    return(
        <StyledForm method="dialog">
          <h1>EDITAR CARD:</h1>
          <Campo
            label="Título"
            name='titulo'
            type="text"
            placeholder="Digite seu título"
            width="573px"
          />
          <CampoSelect />
          <Campo
            label="Imagem"
            name='imagem'
            type="text"
            placeholder="Digite o link da imagem"
            width="573px"
          />
          <Campo
            label="Vídeo"
            name='video'
            type="text"
            placeholder="Digite o link do vídeo"
            width="573px"
          />
          <CampoTextArea />
          <BtnDiv>
          <BotaoDialog>Salvar</BotaoDialog>
          <BotaoDialog>Limpar</BotaoDialog>
          </BtnDiv>
        </StyledForm>
    )
}

export default Form