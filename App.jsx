import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favseries="amazon";


const favS=()=>{
    if(favseries=='netflix')
        {
        return <Netflix/>
        }
        else
        {
        return <Amazon/>
    }
};

const App=()=>{
    <>
        <favS/>
    </>
};

    export default App;

