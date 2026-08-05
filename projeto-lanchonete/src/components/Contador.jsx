import './Contador.css'
import './Contador.css' import {useState} from "react";

function Contador(){

const[contador,setContador] = useState(0)

return( <>

<div className="Contador">

<button className = "menos" onClick={() => { if (contador > 0){setContador(contador - 1);}}}>-</button>
<h1>{contador}</h1>
<button className = "mais"onClick={() => setContador(contador + 1)}>+</button>


</div>
    
</>
)

}
export default Contador
