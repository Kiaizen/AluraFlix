import { useRef } from "react";
import styled from "styled-components";
import Form from "../Form";
import { useVideoContext } from "../../context";

const StyledFigure = styled.figure`
  margin-bottom:20px;
`
const StyledImg = styled.img`
  width: 432px;
  height:260px;
  border: 4px solid ${(props) => props.$color};
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
  box-shadow: inset 0 0 17px 8px ${(props) => props.$color};
  @media (max-width:768px) {
    width:370px;
  }
`;

const StyledFigcaption = styled.figcaption`
  border: 4px solid ${(props) => props.$color};
  border-radius: 0 0 15px 15px;
  background-color: rgba(0, 0, 0, 0.9);
  height: 59px;
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 1);
  border: none;
  font-family: "Roboto";
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  img {
    height: 28px;
    width: 25px;
  }
`;
const StyledDiv = styled.div`
    display: flex;
    justify-content: end;
`
const StyledDialog = styled.dialog`
  background-color: rgba(3, 18, 47, 1);
  width: 70lvw;
  height: 90lvh;
  border: 5px solid rgba(107, 209, 255, 1);
  border-radius: 15px;
  &::backdrop{
    background:rgba(3, 18, 47, 0.76);
  }
  button {
    img {
      height: auto;
      width: auto;
    }
  }
  h1 {
    font-family: "Roboto";
    font-size: 60px;
    text-align: center;
    color: rgba(34, 113, 209, 1);
  }
  @media (max-width:768px){
    width:370px;
  }
`;
const DivStyled = styled.div`
  position:relative;
  &::before{
    content:"";
    position:absolute;
    inset:0px;
    z-index:1;
    box-shadow: inset 0 0 17px 8px ${props => props.$color};
    cursor:pointer;
  }
`;


const Card = ({ video, color }) => {
  const { selecionarVideo, editarVideoSelecionado, aoDeletar } = useVideoContext();
  const dialogRef = useRef();
  const editarVideo = () => {
    dialogRef.current?.showModal();
    editarVideoSelecionado(video);
  }
  const deletarVideo = ()=>{
    aoDeletar(video.id)
  }
  return (
    <StyledFigure>
      <DivStyled $color={color} onClick={()=>selecionarVideo(video)}>
      <StyledImg $color={color} src={video.imagem} alt={video.titulo} />
      </DivStyled>
      <StyledFigcaption $color={color}>
        <StyledButton onClick={deletarVideo}>
          <img src="/Lixeira.png" alt="Lixeira" />
          DELETAR
        </StyledButton>
        <StyledButton onClick={editarVideo}>
          <img src="/Lapiz.png" alt="Lapiz" />
          EDITAR
        </StyledButton>
      </StyledFigcaption>
      <StyledDialog ref={dialogRef}>
        <StyledDiv>
        <StyledButton onClick={()=> dialogRef.current?.close()}>
          <img src="/cross.png" alt="" />
        </StyledButton>
        </StyledDiv>
          <Form video={video}/>
      </StyledDialog>
    </StyledFigure>
  );
};

export default Card;
