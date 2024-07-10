import styled from "styled-components";

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
    label{
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': '#fff'};
    }
    input{
        background-color:transparent;
        border:${(props) => (props.$erros? '3px solid rgba(229, 57, 53, 1)' : '3px solid rgba(38, 38, 38, 1)')};
        border-radius:10px;
        width:${props=>props.$width};
        height:62px;
        padding:10px;
        box-sizing:border-box;
        color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': '#fff'};
    }
    ::placeholder{
      color:${(props)=>props.$erros? 'rgba(229, 57, 53, 1)': 'rgba(165, 165, 165, 1)'};
      font-family:'SourceSans';
    }
`

const Campo = ({name, label, type, placeholder, width, onChange,value, erros}) => {
    
    return(
        <StyledDiv $width={width} $erros={erros}>
                <label htmlFor={label}>{label}</label>
                <input type={type} name={name} placeholder={erros || placeholder} id={label} onChange={onChange} value={value}  required/>
        </StyledDiv>
    )
}

export default Campo