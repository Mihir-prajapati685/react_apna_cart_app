import React, { useState } from 'react';

export default function Password() {
    let [pass, setpass] = useState(false);

    return (
      
      <div>
            <input type={pass? 'text' : 'password'}></input>
            <button onClick={()=>setpass(!pass)}>{pass?'hide':'show'}</button>
    </div>
  )
}
