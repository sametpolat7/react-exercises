// setTimeout(() => {
//     console.log("Hello, guest!");
// }, 3000);

// setInterval(() => {
//     console.log("Someone is trying to get your information...");
// }, 1000);

// const sayHi = (callback) => {
//     callback();
// }

// sayHi(() => {
//     console.log("Im a callback!");
// })

fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => {response.json()
    .then((data) => {
        console.log("User 1 fetching...", data);
    })
})

fetch("https://jsonplaceholder.typicode.com/users/3")
.then((response) => {
    response.json()
    .then((data) => {
        console.log("User 3 fetching...", data);
    })
})

fetch("https://jsonplaceholder.typicode.com/users/5")
.then((response) => {
    response.json()
    .then((data) => {
        console.log("User 5 fetching...", data);
    })
})

// Yukarıdaki kod bloğunu çalıştırdığımızda user bilgilerinin hangi sırayla geleceği veriyi çekme hızına bağlıdır. (Yani yazdığım sırayla gelmez).

// Bunu kontrol etmek için şöyle bir düzenleme yapabilirim.
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then((data) => {
    console.log("User 1 Fetching...", data);

    fetch("https://jsonplaceholder.typicode.com/users/3")
    .then((response) => response.json())
    .then((data) => {
        console.log("User 3 Fetching...", data);

        fetch("https://jsonplaceholder.typicode.com/users/5")
        .then((response) => response.json())
        .then((data) => console.log("User 5 Fetching...", data));
    })
})

// async and await
// async ve await, modern JavaScript'te asenkron kodu daha okunabilir hale getirmek için kullanılan yapıdır. async fonksiyonlar, asenkron bir işlem gerçekleştirecek olan ve bir promise döndüren fonksiyonlardır. await, bir promise'in gerçekleşmesini (resolve) bekleyen bir ifadeyi kullanır. Bu sayede, kod akışı daha düzenli ve okunabilir hale gelir.

async function getUsers() {
    try {
        const responseUser1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const dataUser1 = await responseUser1.json();
        console.log("User 1 : ", dataUser1);
    
        const responseUser3 = await fetch('https://jsonplaceholder.typicode.com/users/3');
        const dataUser3 = await responseUser3.json();
        console.log("User 3 : ", dataUser3);
    
        const responseUser5 = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const dataUser5 = await responseUser5.json();
        console.log("User 5 : ", dataUser5);
    }
    catch(error) {
        console.log("Something wrong...", error);
    }
}

getUsers();

// Promises
// JavaScript'te promise'ler, eşzamansız işlemleri yönetmek için kullanılan bir mekanizmadır. Eşzamansız işlemler, bir sunucudan veri alma, diskten dosya okuma veya HTTP isteği yapma gibi tamamlanması biraz zaman alan görevlerdir.

// Promise'lerden önce, eşzamansız işlemler genellikle callback fonksiyonları kullanılarak gerçekleştirilirdi. Callbacks işlevsel olmakla birlikte, derinlemesine iç içe geçmiş geri arama işlevlerinin okunmasının ve bakımının zorlaştığı geri arama cehennemine yol açabilirler.

const getPosts = (boolean) => {
    return new Promise( (resolve, reject) => {
        if(boolean === true) {
            const data = fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json());
            resolve(data);
        } else {
            const e = "Something wrong..";
            reject(e);
        }
    })
}

getPosts(true) // false ile değiştirip deneyebilirsin.
.then((data) => {
    console.log("Data fetching...", data);
})
.catch((e) => {
    console.log(e);
})

// Birden fazla veriyi "sıralı" çekmek istersem;
async function fetchData() {
    try {
      const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data1 = await response1.json();
      console.log(data1);

      const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
      const data2 = await response2.json();
      console.log(data2);

      const response3 = await fetch('https://jsonplaceholder.typicode.com/posts/3');
      const data3 = await response3.json();
      console.log(data3);
    } 
    catch (error) {
      console.error('Something wrong... :', error);
    }
  }

  fetchData();