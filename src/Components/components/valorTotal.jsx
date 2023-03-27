export function ValorTotal({totalValue}){
    return (
        <>
        <div>
        <div className="vtNum">
        <h3 className="vtTex">Valor total</h3>
        <p className="vtValor">R${totalValue}</p>
        </div>
        <div>
        <p className="vW">O valor se refere ao saldo</p>
        </div>
        </div>
        </>
    )
}