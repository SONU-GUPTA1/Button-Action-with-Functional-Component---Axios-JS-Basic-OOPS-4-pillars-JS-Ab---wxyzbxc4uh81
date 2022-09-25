// import React, {Component, useState} from "react";
// import "./../styles/App.css";
// let name = " Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

// function App() {
//    const[data,setData] = useState(" ")
//   const change = ()=>{
//     setData(name)
//   }
//   return (
//     <div id="main">
//      <button id="click" onClick={change} >click</button>
//       <p id="para" >{data}</p>
      
//     </div>
//   );
// }


// export default App;

import React, {Component, useState} from "react";
import "./../styles/App.css";
let name = " Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

function App() {
  return (
    <div id="main">
      <Component value={name}/>
      
    </div>
  );
}


export default App;
