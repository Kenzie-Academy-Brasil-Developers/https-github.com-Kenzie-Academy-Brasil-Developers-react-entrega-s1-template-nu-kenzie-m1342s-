import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header} from './Components/components/Header/header'
import { Form } from "./Components/components/Form/form"
import { ResFinan } from './Components/components/resFinan'
import './index.css'
import { ValorTotal } from './Components/components/valorTotal'
import { DefTempl } from './Templates/templatesDef'
import { TrCards } from './Components/components/trCards'
import {v4 as uuidv4} from "uuid"
import { List } from "./Components/list/list"




function App() {
  const [listTransactions,setlistTransactions]=useState({
    transName:"",
    transValue:"",
    typeofTrans:"",
    id:"",
})
   
  
  const [lista,setlista]=useState([])

  const totalValue=lista.reduce((previousValue,trans)=>{
   let total=0
    if (trans.typeofTrans==="entrada") {
      total=previousValue+Number(trans.transValue)
    }
    else{trans.typeofTrans==="despesa"
    total=previousValue-Number(trans.transValue)
    }
   
    return total
  },0
)

 function removeTrans(transId){
   const del=lista.filter((trans)=>trans.id !==transId)
   console.log(del)
   setlista(del)

 }
 
  return (
   
    <>
  
     <DefTempl>
  <div className='secoes'>
     <main>
      <div className='formVT'>
      <section className='form'>
       <Form addTrans={lista} addTransSet={setlista}/>
       
      </section>
      <section className='valorTot'>
        <ValorTotal totalValue={totalValue}/>
      </section>
      </div>
      <section className='resumoFinanceiro'>
      
       <ResFinan/>
       
       <List lista={lista} removeTrans={removeTrans} />
        
       
      
      </section>
      </main>
      
      </div>
      </DefTempl>

     </>
  )
}

export default App
