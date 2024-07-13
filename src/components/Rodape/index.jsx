import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import BotaoMobile from "../BotaoMobile";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FiPlusCircle } from "react-icons/fi";

const StyledFooter = styled.footer`
    background-color:rgba(0, 0, 0, 0.9);
    border-top: 4px solid rgba(34, 113, 209, 1);
    box-shadow: 0 5px 29px rgba(34, 113, 209, 0.7);
    height:125px;
    display:flex;
    justify-content: center;
    align-items:center;
    
    button{
        display:none;
    }
    @media (max-width:768px) {
        display:flex;
        justify-content: space-evenly;
        a{
            text-decoration:none;
        }
        button{
            display:flex;
        }
    }
`
const StyledImg = styled.img`
    height:40px;
    @media (max-width:768px){
        display:none;
    }
`

const Rodape = () => {
    const location = useLocation();
    const rotaAtual = location.pathname;
    const home = rotaAtual === "/" ? "HOME" : "";
    const novoVideo = rotaAtual === "/NovoVideo" ? "NOVO VÍDEO" : "";
    return(
        <StyledFooter>
            <StyledImg src={logo} alt="Logo AluraFlix" />
            <Link to={"/"}>
            <BotaoMobile selected={rotaAtual === "/"}><GoHome />{home}</BotaoMobile>
            </Link>
            <Link to={"NovoVideo"}>
            <BotaoMobile selected={rotaAtual === "/NovoVideo"}><FiPlusCircle />{novoVideo}</BotaoMobile>
            </Link>
        </StyledFooter>
    )
}

export default Rodape