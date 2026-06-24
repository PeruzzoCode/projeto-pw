import './Contador.css'
import {useState} from "react";

function Contador(){

const[contador,setContador] = useState(0)

return(
<>

    <div className="Contador">
    <h1>{contador}</h1>

    <button onClick={() => setContador(contador + 1)}>Adicionar</button>
    <button onClick={() => setContador(contador - 1)}>Remover</button>
    </div>
    
</>
)

}
export default Contador