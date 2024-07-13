import styled from "styled-components"

const StyledDiv = styled.div`
display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
    label{
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': '#fff'};
    }
    select{
        background-color:transparent;
        border:3px solid ;
        border-color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': 'rgba(38, 38, 38, 1)'};
        border-radius:10px;
        height:62px;
        width:38lvw;
        padding:10px;
        box-sizing:border-box;
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': 'rgba(165, 165, 165, 1)'};
        font-family:'SourceSans';
    }
    option{
      color: rgba(165, 165, 165, 1);
      font-family:'SourceSans';
    }
    @media (max-width:768px){
        width:350px;
    }
`

const CampoSelect = ({onChange, value, name, erros}) => {
    return(
        <StyledDiv $erros={erros}>
            <label htmlFor="select">Categoria</label>
            <select name={name} onChange={onChange} id="select" value={value} >
                <option value=''>{erros || 'Selecione uma categoria'}</option>
                <option value='FRONT END'>FRONT END</option>
                <option value='BACK END'>BACK END</option>
                <option value='MOBILE'>MOBILE</option>
            </select>
        </StyledDiv>
    )
}

export default CampoSelect