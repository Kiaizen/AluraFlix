import styled from "styled-components"

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
    width: 100%;
    label{
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': '#fff'};
    }
    textarea{
        background-color:transparent;
        border:3px solid;
        border-color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': 'rgba(38, 38, 38, 1)'};
        border-radius:15px;
        width:573px;
        height:220px;
        padding:10px;
        box-sizing:border-box;
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': '#fff'};
        resize:none;
    }
    ::placeholder{
      color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': 'rgba(165, 165, 165, 1)'} ;
      font-family:'SourceSans'
    }
`

const CampoTextArea = ({name, onChange, value, erros}) => {
    return(
        <StyledDiv $erros={erros}>
            <label htmlFor="descri">Descrição</label>
            <textarea name={name} onChange={onChange} value={value} id="descri" placeholder={erros || "Sobre o que é esse vídeo?"}></textarea>
        </StyledDiv>
    )
}

export default CampoTextArea