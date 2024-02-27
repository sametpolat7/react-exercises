// Hook'lar, state ve yaşam döngüsü yöntemleri gibi React özelliklerine "bağlanmamızı" sağlar. Hook'ları react'ten içe aktarmalısınız. State genellikle izlenmesi gereken uygulama verilerini veya özelliklerini ifade eder.

// Kurallar 
// Hook'lar yalnızca React fonksiyon bileşenlerinin içinde çağrılabilir.
// Hook'lar yalnızca bir bileşenin en üst seviyesinde çağrılabilir.
// Hook'lar koşullu (if) olamaz.

// === HOOKS ===

// == useState == 
// React useState Hook, bir fonksiyon bileşenindeki durumu izlememizi sağlar. Durum genellikle bir uygulamada izlenmesi gereken veri veya özellikleri ifade eder.

// UseState Hook'u kullanmak için öncelikle onu bileşenimize aktarmamız gerekir.
// import { useState } from 'react';

// Fonksiyon bileşenimizde useState'i çağırarak durumumuzu başlatıyoruz. useState bir başlangıç durumu kabul eder ve iki değer döndürür:
// Geçerli (First) durum.
// Durumu güncelleyen bir fonksiyon.

// useState Hook dizeleri, sayıları, booleanları, dizileri, nesneleri ve bunların herhangi bir kombinasyonunu takip etmek için kullanılabilir! Tek tek değerleri izlemek için birden fazla durum Kancası oluşturabiliriz. Veya yalnızca bir durumu kullanabilir ve bunun yerine bir nesne ekleyebiliriz!

/*
function Car() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
      </>
    )
  }
*/

// Durum güncellendiğinde, tüm durumun üzerine yazılır. Ya sadece arabamızın rengini güncellemek istiyorsak? Sadece setCar({color: "blue"}) çağrısı yapsaydık, bu durum marka, model ve yılı durumumuzdan kaldıracaktı. Bize yardımcı olması için JavaScript yayma operatörünü kullanabiliriz.

/*
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}
*/

// == useEffect == 
// useEffect hook bileşenlerinizde yan etkiler gerçekleştirmenizi sağlar. Bazı yan etki örnekleri şunlardır: veri getirme, DOM'u doğrudan güncelleme ve zamanlayıcılar. useEffect iki bağımsız değişken kabul eder. İkinci bağımsız değişken isteğe bağlıdır. useEffect(<function>, <dependency>)

// İlk parametre, gerçekleştirmek istediğiniz yan etkinin kodunu içeren fonksiyondur. Bu fonksiyon, bileşen ekrana işlendikten sonra çalıştırılacaktır.
// İkinci parametre isteğe bağlı bir bağımlılık dizisidir. Sağlanırsa, useEffect yalnızca bağımlılık dizisindeki değerler son render işleminden bu yana değiştiyse efekti çalıştırır. Herhangi bir bağımlılık dizisi sağlanmazsa, efekt her render işleminden sonra çalışır.

// useEffect her render işleminde çalışır. Yani sayı değiştiğinde bir render gerçekleşir ve bu da başka bir efekti tetikler. Tabi yan etkilerin ne zaman ortaya çıkacağını kontrol etmenin birkaç yolu vardır. Her zaman bir dizi kabul eden ikinci parametreyi dahil etmeliyiz. İsteğe bağlı olarak bağımlılıkları bu dizide useEffect'e aktarabiliriz.
