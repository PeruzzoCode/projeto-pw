  
CSS

.Contador{
    color: black;
    border: 1px solid black;
    border-radius: 20px;
    width: 150px;
    margin: auto;
    box-shadow: 0 2px 8px rgb(0,0,0,0.20);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.Contador h1{
    font-size: 30px;
}

.mais {
    background-color: green;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
  }

  .menos {
    background-color: red;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
  }

  .mais:hover {
    background-color: darkgreen;
  }
  
  .menos:hover {
    background-color: darkred;
  }


JSX 

import './Contador.css'
import {useState} from "react";

function Contador(){

const[contador,setContador] = useState(0)

return(
<>
    
    <div className="Contador">
    
    <button className = "menos" onClick={() => { if (contador > 0){setContador(contador - 1);}}}>-</button>
    <h1>{contador}</h1>
    <button className = "mais"onClick={() => setContador(contador + 1)}>+</button>
    

    </div>

</>
)

}
export default Contador
