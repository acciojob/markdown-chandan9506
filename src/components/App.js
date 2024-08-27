import React,{useState} from "react";



const App = () => {

    const [inputVal,setInputVal] = useState("");

    return (
        <div className="app" style={{display:"flex", justifyContent:"space-between"}}> 
            <div style={{width:"45%",height:"90vh", backgroundColor:"teal" ,color:"black"}}><textarea className="textArea" value={inputVal} onChange={(e)=> setInputVal(e.target.value)} placeholder="write something here" /></div>
            <div style={{ display:"flex",wordWrap: "breakWord",whiteSpace:"preWrap",overflowWrap:"breakWord",width:"450px",height:"90vh", backgroundColor:"skyblue" ,color:"black",  boxSizing: "borderBox",}}><h3>{inputVal}</h3></div>
        </div>
    );
};

export default App ;


