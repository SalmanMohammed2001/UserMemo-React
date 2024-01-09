
import './App.css'
import {useState} from "react";




const inputHandle=(inputValue)=>{
    let data;
    for (let i = 0; i <10000000 ; i++) {

        data=i;
    }
    return inputValue;
}

function App() {
    const [imageUrl,setImageUrl]=useState()
    const [name,setName]=useState()

    console.log('render')

    const imageData=inputHandle(imageUrl);

  return (
    <div>
        <input type="text"  value={imageUrl} placeholder={"enter image url"} onChange={(e)=>setImageUrl(e.target.value)}/>
        <input type="text" value={name}   placeholder={"enter name"} onChange={(e)=>setName(e.target.value)}/>
        <input type="text"   placeholder={"enter city "}/>
        <input type="text"  placeholder={"enter position "} />
        <button>Set Data</button>

        <p>{imageUrl}</p>
        <p>{name}</p>
        <p>{imageData}</p>
        <div></div>
    </div>
  )
}

export default App
