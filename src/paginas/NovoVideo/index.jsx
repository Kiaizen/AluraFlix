import styled from "styled-components"


const StyledSection = styled.section`
    color: rgba(255, 255, 255, 1);
    font-family:'Roboto-Bold';

    div{
        text-align:center;
        margin:70px auto 47px auto;
    }
    h1{
        font-family:'Roboto';
        font-size:60px;
        color: rgba(245, 245, 245, 1);
    }
    p{
        font-family:'Roboto-Regular';
        font-size:20px;

    }
    form{
        margin: 0 auto;
        display:flex;
        flex-wrap:wrap;
        
        h3{
            width:100%;
        }
    }
`

const NovoVideo = () => {
    return(
        <StyledSection>
            <div>
                <h1>NOVO VÍDEO</h1>
                <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
            </div>
            <form >
                <h3>Criar Card</h3>
                <label htmlFor="">Título</label>
                <input type="text" />
                <label htmlFor="">Categoría</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <label htmlFor="Imagem"></label>
                <input type="text" />
                <label htmlFor="">Video</label>
                <input type="text" />
                <label htmlFor="">Descrição</label>
                <textarea name="" id=""></textarea>
                <button>Guardar</button>
                <button>Limpar</button>
            </form>
        </StyledSection>
    )
}

export default NovoVideo