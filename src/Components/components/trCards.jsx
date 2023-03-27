

export function TrCards({transName,transValue,typeofTrans,removeTrans,id}){
return(        
        <>
         <li>
        <div className="allCard">
        <div className="nameValue">
        <h3 className="transName">{transName}</h3>
        <p className="typeofTrans">{typeofTrans}</p>
        </div>
        <div className="typeButton">
        <p className="transValue">R${transValue}</p>
        <button className="delete" onClick={()=>removeTrans(id)} type="submit">Excluir</button>
        </div>
        </div>
        </li>
        </>
        )}
