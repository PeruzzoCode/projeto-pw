import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionario from "./components/Funcionario";
import Contador from "./components/Contador";
import Calculadora from "./components/Calculadora";

function App(){

    const lanches = [{id:1, nome: "X-salada", preco: "17.50"},
        {id:2,nome:"X-burguer", preco: "15.90"},
        {id:3, nome: "Refrigerante", preco: "6.00"}]

    return(
        <>
            <Header titulo="Lanchonete e Dog" 
            subtitulo="O melhor da região"/>
            
            <Login />

            <div className="lista_cards">
                {
                lanches.map(Lanche => (
                    <CardProd
                    key = {Lanche.id}
                    nome = {Lanche.nome}
                    preco = {Lanche.preco}
                    />
                ))}
                </div>
                
            <Funcionario nome= "Pedro"
            cargo= "CEO"/>

            <Contador/>

            <Calculadora/>

            


        </>
    )
}
export default App