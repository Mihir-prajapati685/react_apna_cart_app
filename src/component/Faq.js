import React, { useState } from 'react'
import { item } from '../data/item.jsx'
export default function Faq() {
    let [currentId, setcurrentId] = useState(item[0].id);
    let Fitems = item.map((itemdata, i) => {
        
        // let itemdetail = {
        //     itemdata,currentId,setcurrentId
        // }
        return (
            <Faqitems itemdata={itemdata} currentId={currentId} setcurrentId={ setcurrentId} key={i} />
        )
        
    })
  return (
      <div>
         {Fitems}
         
    </div>
  )
}



function Faqitems({ itemdata,currentId,setcurrentId }) {
    return (
        <div>
        <h1>Faq Question</h1>
        <div className='Faqouter'>
              <h2 onClick={()=>setcurrentId(itemdata.id)}>
                  {itemdata.question}
              </h2>
                <p className={currentId === itemdata.id?'activeans':''}>
                {itemdata.answer}
              </p>
            </div>
            </div>
    )
}
