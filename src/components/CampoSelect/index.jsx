import styled from "styled-components"

const StyledDiv = styled.div`
display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
    margin:0 60px 0 0;
    label{
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': '#fff'};
    }
    select{
        background-color:transparent;
        border:3px solid ;
        border-color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': 'rgba(38, 38, 38, 1)'};
        border-radius:10px;
        width:470px;
        height:62px;
        padding:10px;
        box-sizing:border-box;
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': 'rgba(165, 165, 165, 1)'};
        font-family:'SourceSans';
    }
    option{
      color: rgba(165, 165, 165, 1);
      font-family:'SourceSans';
    }
`

const CampoSelect = ({onChange, value, name, erros}) => {
    return(
        <StyledDiv $erros={erros}>
            <label htmlFor="select">Categoria</label>
            <select name={name} onChange={onChange} id="select" value={value} >
                <option value=''>{erros || 'Selecione uma categoria'}</option>
                <option value='FRONTEND'>FRONTEND</option>
                <option value='BACKEND'>BACKEND</option>
                <option value='MOBILE'>MOBILE</option>
            </select>
        </StyledDiv>
    )
}

export default CampoSelect