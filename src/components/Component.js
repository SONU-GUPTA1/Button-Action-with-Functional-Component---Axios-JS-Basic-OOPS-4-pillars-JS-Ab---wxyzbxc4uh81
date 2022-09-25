
import {useState} from "react"

function Component(props) {
  const[data,setData] = useState(" ")
  const change = ()=>{
    setData(props.value)
  }
  return (
    <div>
      <button id="click" onClick={change}>
        click
      </button>
      <p id="para">{data}</p>
    </div>
  );
}
export default Component;
