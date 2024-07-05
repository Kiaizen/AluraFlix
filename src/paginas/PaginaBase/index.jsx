import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import EstilosGlobais from "../../components/EstilosGlobais"
import Rodape from "../../components/Rodape"


const PaginaBase = () => {
    return(
        <main>
            <EstilosGlobais />
            <Cabecalho />
            <div>
                <Outlet />
            </div>
            <Rodape />
        </main>
    )
}

export default PaginaBase