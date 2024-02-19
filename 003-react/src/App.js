// import Components, { Main } from "./components/Components";
import Props from "./components/Props";

function App() {
    return(
        <>
        {/* <Components /> */}
        {/* <Main /> */}
        <Props 
        name = "Samet" 
        surName = "Polat" 
        age = {29}
        isLoggedIn = {true} 
        friends = {[
            {
                id: 544512,
                name: "Ali"
            },
            {
                id: 874521,
                name: "Kel"
            },
            {
                id: 548451,
                name: "Onur"
            }
        ]}
        address= {
            {
                title: "Canakkale/Merkez",
                zip: 57454
            }
        }
        />
        </>
    )
}

export default App;