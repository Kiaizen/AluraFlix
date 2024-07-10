import styled from "styled-components"

const StyledBtn = styled.button`
    background-color:transparent;
    border: 3px solid rgba(245, 245, 245, 1);
    border-radius: 15px;
    width:180.13px;
    height:54px;
    color:  #fff;
    font-family:'SourceSans';
    font-size:20px;
    &:hover{
        color:rgba(34, 113, 209, 1);
        background-color:rgba(0, 0, 0, 0.9);
        border: 3px solid rgba(34, 113, 209, 1);
        box-shadow: inset 0 0 12px 4px rgba(34, 113, 209, 1);
        cursor:pointer;
    }
`

const BotaoDialog = ({children}) => {
    return(
        <StyledBtn>{children}</StyledBtn>
    )
}

export default BotaoDialog