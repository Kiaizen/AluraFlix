import styled from "styled-components"
import Tag from "../Tag"
import { useVideoContext } from "../../context"

const SectionStyled = styled.section`
    height: 650px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing:border-box;
    border: 2px solid rgba(107, 209, 255, 1);
    border-top:none;
    color:rgba(245, 245, 245, 1);
    background:rgba(0, 18, 51, 0.56);
    h1{
        padding: 10px 0;
    }
    h2{
        font-family: 'Roboto-Regular';
        font-size:46px;
        margin: 9px 0;
    }
    p{
        font-family:'Roboto-Light';
        font-size:18px;
    }
`
const DivTag = styled.div`
    width:665.84px;
    height:305px;
    text-align:left;
    margin:0 20px;
`

const DivStyled = styled.div`
    min-width:646px;
    height:333.58px;
    border: 4px solid rgba(107, 209, 255, 1);
    box-shadow: inset 0 0 17px 8px rgba(107, 209, 255, 1);
    margin: 0 20px;
    background-image: ${(props)=>props.selectedVideo? `url(${props.selectedVideo.imagem})` : `url(/Banner.jfif)`};
    background-repeat:no-repeat;
    background-size:cover;
`

const Banner = () => {
    const {selectedVideo} = useVideoContext();
    return(
        <SectionStyled $video={selectedVideo}>
            { !selectedVideo ? (<>
                <DivTag>
                <Tag color={'rgba(107, 209, 255, 1)'} width={'296px'} fs={'48px'}>FRONT END</Tag>
                <h2>SEO com React</h2>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </DivTag>
            <DivStyled></DivStyled></>) : (<>
            <DivTag>
            <Tag color={'rgba(107, 209, 255, 1)'} width={'296px'} fs={'48px'}>{selectedVideo.select}</Tag>
            <h2>{selectedVideo.titulo}</h2>
            <p>{selectedVideo.descri}</p>
        </DivTag>
        <DivStyled>
        <iframe width="100%" height="100%" src={selectedVideo.video} title={selectedVideo.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </DivStyled></>)}
        </SectionStyled>
    )
}

export default Banner