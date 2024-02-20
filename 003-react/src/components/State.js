import React, { useState } from 'react';

function State() {
    const [name, setName] = useState("Guest");

    const [friends, setFriends] = useState(["Ali", "Kel"]);
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
    return (
        <>
        <h1>Hoşgeldiniz {name}</h1>
        <button onClick={() => {setName("Samet!")}} >Log In</button>

        <h1>My Friends</h1>
        <ul>
        {
            friends.map((friend, index) => {
                return <li key={index}>{friend}</li>;
            })
        }
        </ul>
        <button onClick={() => {setFriends([...friends, "Onur"])}}>Add Friend</button>
        
        <h1>My Address</h1>
        <address>{address.title} -{address.zip}</address>
        <br></br>
        <button onClick={() => {setAddress({title: "Gökçeada/Çanakkale", zip: 17777})}}>Change address</button>
        
        <h1>Counter : {count}</h1>
        <button onClick={decrement}>Decrease</button>
        <button onClick={increment}>Increase</button>
        </>
    )
}

export default State;