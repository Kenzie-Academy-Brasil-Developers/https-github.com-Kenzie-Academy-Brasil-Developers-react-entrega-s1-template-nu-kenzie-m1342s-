import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import { List } from "../../List/list"
export function Form({addTrans,addTransSet}) {
    
const options= [{
      slug:"Entrada",
      label:"entrada",
    },
    {
    slug:"Despesa",
    label:"despesa",
    }
    ]
  const [listTransactions,setlistTransactions]=useState({
        transName:"",
        transValue:"",
        typeofTrans:"",
        id:"",
    })

    function removeTrans(transId){
      const del= lista.filter(trans=>{
        trans.id !== transId
      })
  
    }
 
  function send(event) {
    event.preventDefault()
    listTransactions.id=uuidv4()
    addTransSet([...addTrans,listTransactions])
    console.log(listTransactions)
  
     }

    return(
        <>
        <form onSubmit={(event)=>{
              send(event)
        }}>
          <label className="label">Descrição</label>
          <input placeholder='Digite aqui sua descrição' name="Desc" className="input" type="text"  onChange={(event)=>setlistTransactions({...listTransactions,transName:event.target.value})}   />
          <p className="Ex">Ex: Compra de roupas</p>
          <label className="label">Valor(R$)</label>
          <input className="input" type="number" name="valorRS" onChange={(event)=>setlistTransactions({...listTransactions,transValue:event.target.value})} />
          <label className="label">Tipo de valor</label>
          <select value= {listTransactions.typeofTrans} onChange={(event)=>setlistTransactions({...listTransactions,typeofTrans:event.target.value})}  className="select" name="select"  >
          <option value=""></option>
          {options.map(option=>(<option key={option.slug}>{option.label}</option>
        ))}
          </select>
        <button className="buttonIns" type="submit">Inserir valor</button>
      </form>
        </>
    )
      }   

  
