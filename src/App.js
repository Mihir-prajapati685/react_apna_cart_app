import React from 'react';
import './App.css';
// import Password from './component/Password.js';
// import Menu from './component/Menu.js';
// import Slogin from './component/Slogin.js';
import Faq from './component/Faq.js'

function App() {
  // let obj = {
  //   email: "mihir@123",
  //   password: "mihir123",
  //   age: 18,
  // }
  // let displayData = () => {
  //   alert("wlecone to the data");
  // }
  // let addNumber = (a,b) => {
  //   alert(a + b);
  // }
  // let [count, setcount] = useState(1);
  // let display = () => {
  //   setcount(count + 1);
  // }
  return ( 
    <div>
      {/* <Header obj={obj} />
      <div className='container'>
      {user.map((value,item) => {
        return (
          <ProductItem value={value} key={ item} />
        )
      })} */}
      {/* <button onClick={displayData}>display the data</button>
      <button onClick={()=>addNumber(20,30)}>addNumber</button> */}
     
      {/* <button onClick={display}>use </button> */}
      {/* {count} */}
      {/* <Password />
      <Menu/> */}
      {/* <Slogin/> */}
      <Faq/>
      </div>
    
  );
}
export default App;

// function ProductItem({value}) {
//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       {/* <div className="card-body">
//         <h5 className="card-title">{value.id }</h5>
//         <p className="card-text">{value.name }</p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//       </div> */}

//     </div>
//   );