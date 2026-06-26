import './Contador.css'
import {useState} from "react";

function Contador(){

const[contador,setContador] = useState(0)

return(
<>

    <div className="Contador">
    <h1>X-Burguer</h1>
    <p>Preço: R$ 25</p>
    <p>Quantidade: {contador}</p>
    <p>Preço total: R$ {contador * 25}</p>
    <button onClick={() => setContador(contador + 1)}>Adicionar</button>
    <button onClick={() => { if (contador > 0){setContador(contador - 1);}}}>Remover</button>
    <button onClick={() => setContador(0)}>Zerar</button>
    
    </div>
    
</>
)

}
export default Contador