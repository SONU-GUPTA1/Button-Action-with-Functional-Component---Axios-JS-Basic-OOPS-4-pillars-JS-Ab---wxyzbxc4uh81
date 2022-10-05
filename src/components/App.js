// import React, {Component, useState} from "react";
// import "./../styles/App.css";
// let name = " Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

// function App() {
//    const[data,setData] = useState(name);
//      const [isOn, setIsOn] = useState(false);
//       function change() {
//     setIsOn(!isOn);
//   }
//   return (
//     <div id="main">
//      <button id="click" onClick={change} >click</button>
//       {isOn && <p id="para">{data}</p>}
      
//     </div>
//   );
// }


// export default App;

import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    	this.state={display:false};
		this.handleClick = this.handleClick.bind(this)
	};
	
handleClick(){
 	this.setState({display:true}); 
}

render() {
	return(
    		<div id="main">
			{ /* Do not remove this main div!! */ }
			<button id='click' onClick={this.handleClick} >Click</button>
			{this.state.display===true?<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:''}
    		</div>
    	);
    }
}


export default App;

