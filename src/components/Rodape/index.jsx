import styled from "styled-components";
import logo from "../../assets/Logo.svg";

const StyledFooter = styled.footer`
    background-color:rgba(0, 0, 0, 0.9);
    border-top: 4px solid rgba(34, 113, 209, 1);
    box-shadow: 0 5px 29px rgba(34, 113, 209, 0.7);
    height:125px;
    display:flex;
    justify-content: center;
    align-items:center;
    
    img{
        height:40px
    }
`

const Rodape = () => {
    return(
        <StyledFooter>
            <img src={logo} alt="Logo AluraFlix" />
        </StyledFooter>
    )
}

export default Rodape