import React, { useState } from "react";

const App=()=>{

    const purple='#8e44ad';

    const state=useState();
    const[bg,setbg]=useState(purple);
    const[name,setName]=useState('click me');

    const bgChange=()=>
    {
        let color='yellow';
            setbg(color);
            setName('ouch!!')

    };
    return(
        <>
            <div style={{backgroundColor:bg}}>
                <button onClick={bgChange}>{name}</button>
            </div>
        </>
    );
};
export default App;