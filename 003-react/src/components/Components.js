import React from 'react';

function Components() {
    const surName = "Polat"
    const isLoggedIn = false;
    let txt = "";
    if(!isLoggedIn) {
        txt = "Lütfen giriş yapiniz!";
    }
    else {
        txt = `3.kez Hoşgeldiniz Sayin ${surName}`
    }
    return (
        <>
            <h1>
                {isLoggedIn && `Hoşgeldiniz... Sayin ${surName}`}
                {!isLoggedIn && `Daha fazlasi için giriş yapiniz!`}
            </h1>
                {/* Veya daha doğrusu: */}
            <h1>
                {isLoggedIn ? `Tekrar Hoşgeldiniz... Sayin ${surName}` : `Misafir olarak gezmeye devam ediyorsunuz!`}
            </h1>
            <h1>
                {txt}
            </h1>
        </>
    )
}

export class Main extends React.Component {
    render() {
        return <h2>I'm article.</h2>
    }
}

export default Components;