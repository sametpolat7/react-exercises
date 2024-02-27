import React, { useState } from "react";
// import Components, { Main } from "./components/Components";
// import Props from "./components/Props";
// import State from './components/State';
import UseEffect from "./components/UseEffect";

function App() {
    // const [data, setData] = useState("Baslangic Verisi");
    const [isVisible, setIsVisible] = useState(true);
    
    return(
        <>
        {/* <Components /> */}
        {/* <Main /> */}
        {/* <Props
        name = "Samet"UseEffect
        surName = "Polat" 
        age = {26} 
        isLoggedIn = {true} 
        friends = {[
            {id: 544512, name: "Ali"},
            {id: 874521, name: "Kel"},
            {id: 548451, name: "Onur"}
        ]} 
        address= {{title: "Canakkale/Merkez", zip: 57454}}
        removeAddress = {() => {document.getElementById('address').style.visibility = 'hidden';}}
        someData = {data}
        changeData = {() => {setData("Bitis Verisi")}}
        />  */}
        {/* <State /> */}
        { isVisible && <UseEffect /> }
        <button onClick={() => {setIsVisible(!isVisible)}}>Toggle Component of UseEffect</button>
        </>
    )
}

export default App;