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
        border: 3px solid rgba(34, 113, 209, 1);
        cursor:pointer;
    }
`

const BotaoForm = ({children, onClick}) => {

    return(
        <StyledBtn onClick={onClick}>{children}</StyledBtn>
    )
}

export default BotaoForm