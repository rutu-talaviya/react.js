import React, { useState } from "react";


const App=()=>{


const state=useState();
const[count,setCount]=useState(0);

const chCount=()=>{
 
    setCount(count+1);

};


return(
    <>
        <h1>{count}</h1>
        <button onClick={chCount}>Click Me</button>
    </>
);
};

export default App;