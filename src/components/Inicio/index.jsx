import Banner from "../Banner"
import Categorias from "../Categorias"

const Inicio = () => {
  return (
    <>
    <Banner/>
    <Categorias title='FRONT END' color='rgba(107, 209, 255, 1)'/>
    <Categorias title='BACK END' color='rgba(0, 200, 111, 1)'/>
    <Categorias title='MOBILE' color='rgba(255, 186, 5, 1)'/>
    </>
  )
}

export default Inicio