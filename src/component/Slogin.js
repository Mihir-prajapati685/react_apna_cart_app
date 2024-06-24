import React, { useState } from 'react'
import './Slogin.css';
export default function Slogin() {
    let [modalstatus, setmodalstatus] = useState(false);
  return (
      <div>
          <button className='en' onClick={()=>setmodalstatus(!modalstatus)}>en now</button>
          <div className={`modaloverlay ${modalstatus?'modalshow':''}`}>
              <div className={`modaldiv ${modalstatus?'showmodaldiv':''}`}>
                  <h3>enquire form <span className='spa' onClick={()=>setmodalstatus(!modalstatus)}>&times;</span></h3>
              </div>
              
          </div>
    </div>
  )
}
