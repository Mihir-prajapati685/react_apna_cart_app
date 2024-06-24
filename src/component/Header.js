import React from 'react'

function Header({obj}) {
    
  return (
      <div>
      <h1>Imformation:</h1><br></br>
      <h3>email is :{obj.email}</h3>
      <h3>age is :{obj.age}</h3>
      </div>
     
  )
}
export { Header };
