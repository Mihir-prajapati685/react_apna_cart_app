import React, { useState } from 'react'
import './menu.css';
export default function Menu() {
    let [menu, setmenu] = useState(false);
  return (
      <div>
          <button onClick={() => setmenu(!menu)}>{menu?<span>&times;</span>:<span>&#9776;</span>}</button>
          <div className={`menu ${menu? 'active':'' } ` }>
              <ul className='ul_tag'>
                  <li>home</li>
                  <li>about us</li>
                  <li>contact</li>
              </ul>
          </div>    
    </div>
  )
}
