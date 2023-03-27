import { useState } from "react"
import { Form } from "../components/Form/form"
import { TrCards } from "../components/trCards"



export function List({lista,removeTrans}){

return(
  <>
{lista.length>0?( 

 <ul>
    
{lista.map((elemento)=>{
  return(<TrCards key={elemento.id} id={elemento.id} transName={elemento.transName} transValue={elemento.transValue} typeofTrans={elemento.typeofTrans} removeTrans={removeTrans}/>)
   
  
})}
</ul>
)
:(
   <p>Você ainda não possui nenhum lançamento</p>
)

}
</>
)

}








