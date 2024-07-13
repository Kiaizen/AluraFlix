import styled from "styled-components";
import Tag from "../Tag";
import { useVideoContext } from "../../context";

const SectionStyled = styled.section`
  height: 650px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border: 2px solid rgba(107, 209, 255, 1);
  border-top: none;
  color: rgba(245, 245, 245, 1);
  background-color: rgba(0, 18, 51, 0.56);
  position: relative;
  h1 {
    padding: 10px 0;
  }
  h2 {
    font-family: "Roboto-Regular";
    font-size: 46px;
    margin: 9px 0;
  }
  p {
    font-family: "Roboto-Light";
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width:768px){
    display:none;
  }
`;

const DivTag = styled.div`
  max-width: 665.84px;
  height: auto;
  text-align: left;
  margin: 0 20px;
  z-index: 1;
  @media (max-width:1280px){
    max-width:400px;

  }
`;

const DivStyled = styled.div`
  max-width: 646px;
  width:646px;
  height: 333.58px;
  border: 4px solid ${props => props.$color};
  box-shadow: inset 0 0 17px 8px ${props => props.$color};
  margin: 0 20px;
  z-index: 1;
`;

const DivVideo = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
`;

const Banner = () => {
  const { selectedVideo } = useVideoContext();
  const videoSrc = selectedVideo
    ? selectedVideo.video
    : "https://www.youtube.com/embed/c8mVlakBESE?si=jfI_LcPnp3DS2mre";
  const videoTitle = selectedVideo ? selectedVideo.titulo : "SEO com React";
  const videoDescription = selectedVideo
    ? selectedVideo.descri
    : 'Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!';
  const videoCategory = selectedVideo ? selectedVideo.select : "FRONT END";

const tagColor = (category) =>{
    switch (category) {
      case "FRONT END": 
      return 'rgba(107, 209, 255, 1)'; 

      case "BACK END": 
      return 'rgba(0, 200, 111, 1)'; 

      case "MOBILE": 
      return 'rgba(255, 186, 5, 1)'; 

      default:
        break;
    }
  }

  return (
    <SectionStyled>
      <DivVideo>
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </DivVideo>
      <DivTag>
        <Tag color={tagColor(videoCategory)} width="296px" fs="48px">
          {videoCategory}
        </Tag>
        <h2>{videoTitle}</h2>
        <p>{videoDescription}</p>
      </DivTag>
      <DivStyled $color={tagColor(videoCategory)}>
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </DivStyled>
    </SectionStyled>
  );
};

export default Banner;
