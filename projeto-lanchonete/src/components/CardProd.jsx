import './CardProd.css'

function CardProd ({nome, preco}){

    return  (
<>
        <div className="produto">
            <h3>{nome}</h3>
        </div>

        <div className="preco">
            <p>{preco}</p>
        </div>

</>
    )
}
export default CardProd