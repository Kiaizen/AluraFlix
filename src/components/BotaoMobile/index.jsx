import styled from "styled-components"

const StyledBtn = styled.button`
    color:${props=>props.$selected? 'rgba(34, 113, 209, 1)': '#fff'};
    font-size:20px;
    font-family:'SourceSans';
    max-width:207px;
    height:54px;
    padding:0 20px;
    border-radius:50px;
    align-items:center;
    justify-content: space-evenly;
    gap:20px;
    background-color:${props=>props.$selected? 'rgba(34, 113, 209, 0.24)': 'transparent'} ;
    border:${props=>props.$selected? '2px solid rgba(34, 113, 209, 1)': 'none'};
    white-space: nowrap;
    svg{
        font-size:40px;
    }
`

const BotaoMobile = ({children, selected}) => {
    return(
        <StyledBtn $selected={selected}>
            {children}
        </StyledBtn>
    )
}

export default BotaoMobile