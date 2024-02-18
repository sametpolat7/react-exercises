import { surName } from "../../App";

function Header() {
    const isLoggedIn = false;
    let txt = "";
    if(!isLoggedIn) {
        txt = "Lütfen giriş yapiniz."
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
        </>
    )
}

export default Header;