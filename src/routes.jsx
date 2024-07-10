import { BrowserRouter, Route, Routes } from "react-router-dom"
import NovoVideo from "./paginas/NovoVideo"
import PaginaBase from "./paginas/PaginaBase"
import Home from "./paginas/Home"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>} >
                <Route index element={<Home/>} />
                <Route path="NovoVideo" element={<NovoVideo/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes