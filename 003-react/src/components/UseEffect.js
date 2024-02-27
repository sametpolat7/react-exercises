import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        return console.log("Any states updated!");
    });

    // Mount (Montaj) Edilme ... DOM'a yerleştirilmesi anlamına gelir. Montaj, bileşenin örneğinin oluşturulduğu ve DOM'a yerleştirildiği ilk aşamadır. Bileşen DOM'a başarılı bir şekilde yerleştirildiğinde, bileşenin monte edildiği söylenir.
    useEffect(() => {
        console.log("Component mount is complete with successfuly!");

        return () => {
            console.log("Component unmount!");
        }
    }, []);

    const [name, setName] = useState("Guest");

    useEffect(() => {
        return console.log("State of name updated!");
    }, [name])

    // Unmount (Demonte) Edilme ...

    return (
        <>
        <div>
            <h1>{number}</h1>
            <button onClick={() => {
                return setNumber(number + 1)
            }}>Increment</button>
        </div>

        <div>
            <h1>Hello, {name}</h1>
            <button onClick={() => {
                return setName("Samet");
            }}>Login</button>
        </div>
        <br/>
        </>
    )
}

export default UseEffect;