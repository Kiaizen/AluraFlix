import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";
import Botao from "../Botao";

const Header = styled.header`
    height: 125px;
    background-color:rgba(38, 38, 38, 1);
    width: 100%;
    border-bottom:4px solid rgba(151, 71, 255, 1);
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 51px;
    box-sizing: border-box;
    box-shadow: 0 5px 29px rgba(34, 113, 209, 0.7);
    
    img{
        height:40px
    }

    ul{
        display: flex;
        gap: 25px;
    }
    @media (max-width:768px){
      display:none;
    }
`

const Cabecalho = () => {
    const location = useLocation();
    const rotaAtual = location.pathname;
  return (
    <Header>
      <img src={logo} alt="Logo AluraFlix" />
      <nav>
        <ul>
          <li>
            <Link to={'/'}>
                <Botao selected={rotaAtual === '/'} >HOME</Botao>
            </Link>
          </li>
          <li>
            <Link to={'NovoVideo'}>
                <Botao selected={rotaAtual === '/NovoVideo'}>NOVO VíDEO</Botao>
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default Cabecalho;
