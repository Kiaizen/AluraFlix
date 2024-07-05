import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./paginas/Inicio"
import NovoVideo from "./paginas/NovoVideo"
import PaginaBase from "./paginas/PaginaBase"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>} >
                <Route index element={<Inicio/>} />
                <Route path="NovoVideo" element={<NovoVideo/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes