
import './App.css'
import {useEffect, useMemo, useState} from "react";




const inputHandle=(inputValue)=>{
    let data;
    for (let i = 0; i <10000; i++) {
        data=i;
    }
    console.log('inputHandle running')
    return inputValue;
}

function App() {
    const [imageUrl,setImageUrl]=useState()
    const [name,setName]=useState()
    const [imageData,setImageData]=useState()

    console.log('render')

 /*   const imageData=useMemo(()=> inputHandle(imageUrl),[imageUrl]);*/
    // let imageData=''
   useEffect(()=>{
       setImageData(   inputHandle(imageUrl))
   },[imageUrl]);

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
