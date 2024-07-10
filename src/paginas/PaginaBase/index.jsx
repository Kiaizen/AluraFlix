import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import EstilosGlobais from "../../components/EstilosGlobais"
import Rodape from "../../components/Rodape"
import { VideoProvider } from "../../context"


const PaginaBase = () => {
    return(
        <main>
            <VideoProvider>
            <EstilosGlobais />
            <Cabecalho />
            <div>
                <Outlet />
            </div>
            <Rodape />
            </VideoProvider>
        </main>
    )
}

export default PaginaBase