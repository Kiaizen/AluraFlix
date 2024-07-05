import styled from "styled-components"
import Tag from "../Tag"

const SectionStyled = styled.section`
    height: 650px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing:border-box;
    border: 2px solid rgba(107, 209, 255, 1);
    border-top:none;
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
`

const Banner = () => {
    return(
        <SectionStyled>
            <DivTag>
                <Tag color={'rgba(107, 209, 255, 1)'} width={'296px'} fs={'48px'}>FRONT END</Tag>
                <h2>SEO com React</h2>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </DivTag>
            <DivStyled>Video</DivStyled>
        </SectionStyled>
    )
}

export default Banner