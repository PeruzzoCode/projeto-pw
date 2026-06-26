import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionario from "./components/Funcionario";
import Contador from "./components/Contador";
import Calculadora from "./components/Calculadora";

function App(){
    return(
        <>
            <Header titulo="Lanchonete e Dog" 
            subtitulo="O melhor da região"/>
            
            <Login />

            <CardProd nome="X-Burger"
            preco="R$ 15,90"/>

            <CardProd nome="X-salada"
            preco="R$ 17,90"/>

            <CardProd  nome="Refrigerante"
            preco="R$ 6,00"
            />

            <Funcionario nome= "Pedro"
            cargo= "CEO"/>

            <Contador/>

            <Calculadora/>

            


        </>
    )
}
export default App