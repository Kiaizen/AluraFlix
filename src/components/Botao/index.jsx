import styled from "styled-components"

const BotaoStyled = styled.button`
    width: 180.13px;
    height:54px;
    background-color: ${props=>props.$selected?'rgba(0, 0, 0, 0.9)'  : 'transparent'};
    border: 2px solid;
    border-color: ${props=>props.$selected? 'rgba(32,113,209,1)' : '#f5f5f5'};
    border-radius: 15px;
    color: ${props=>props.$selected? 'rgba(32,113,209,1)' : '#fff'};
    font-family: 'SourceSans', sans-serif;
    font-size:20px;
    font-weight: 900;
    box-shadow: inset 0 0 12px 4px ${props=>props.$selected? 'rgba(32,113,209,1)' : 'none'};
    cursor:pointer;
`

const Botao = ({children, selected = false}) => {
    return(
        <BotaoStyled $selected={selected}>
            {children}
        </BotaoStyled>
    )
}

export default Botao