import React, { useState } from 'react';

function State() {
    const [name, setName] = useState("Guest!");

    const [friends, setFriends] = useState([]);
    const myFriends = ["Ali", "Kel", "Özlem", "Onur"]
    const [index, setIndex] = useState(0);
    const [address, setAddress] = useState({title: "Merkez/Çanakkale", zip: 17100});
    const [count, setCount] = useState(0);
    const increment = () => {
        return setCount(count + 1);
    }
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
        return;
    }
    const [inpName, setInpName] = useState("");
    const [inpSurname, setInpSurname] = useState("");
    const [form, setForm] = useState({name: "", surname: ""});
    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <>
        <h1>Hello {name}</h1>
        <button onClick={() => {setName("Samet!")}} >Log In</button>


        <h1>My Friends</h1>
        <ul>
        {
            friends.map((friend, key) => {
                return <li key={key}>{friend}</li>;
            })
        }
        </ul>
        <button onClick={() => {
            setIndex(index < myFriends.length - 1 ? index + 1 : index);
            setFriends(friends.includes("Onur") ? [...friends] : [...friends, myFriends[index]]);
        }}>Add New Friend!
        </button>

        <button onClick={() => {
            setIndex(index > 0 ? index - 1 : index);
            friends.splice(index, 1);
            setFriends([...friends]);
        }}>Discard a Friend!
        </button>


        <h1>My Address</h1>
        <h2>
            {
                Object.values(address).map((value, key) => {
                    return <span key={key}>{value} </span>
                })
            }
        </h2>
        <button onClick={() => {
            setAddress({...address, street: "Esenler Mh", v: "Cetin Emec Cad"})
            }}>Display full address</button>


        <h1>Counter : {count}</h1>
        <button onClick={decrement}>Decrease</button>
        <button onClick={increment}>Increase</button>
        <br/><br/>


        <div>
            <h1>Form Management with State</h1>
            <label>Name: </label>
            <input type='text' value={inpName} onChange={(event) => {
                return setInpName(event.target.value)
            }}></input>
            &nbsp;&nbsp;
            <label>Surname: </label>
            <input type='text' value={inpSurname} onChange={(event) => {
                return setInpSurname(event.target.value);
            }}></input>
            <br/><br/>
            {`Name : ${inpName}`} 
            <br/>
            {`Surname : ${inpSurname}`}
        </div>

        <div>
            <h1>Easy One! Also Form Management</h1>
            <label>Name: </label>
            <input type='text' name='name' value={form.name} onChange={changeForm}></input>
            &nbsp;&nbsp;
            <label>Surname: </label>
            <input type='text' name='surname' value={form.surname} onChange={changeForm}></input>
            <br/><br/>
            {`Name : ${form.name}`} 
            <br/>
            {`Surname : ${form.surname}`}
        </div>
        </>
    )
}

export default State;