// JS Spread Operator
// Ardışık üç nokta "..." ile gösterilen yayma operatörü, JavaScript ES6'da (ECMAScript 2015) tanıtılan bir özelliktir. Yinelenebilir nesneleri birden çok öğeye genişletmek için kullanılır. Yayma operatörü çeşitli bağlamlarda kullanılabilir:

// 1. Expanding Element of an Array
const myArr = [1, 2, 3];
const myArr1 = [...myArr, 4, 5, 6];
console.log(myArr1);

// 2. Concatening Arrays or Objects
// 2.1 For Arrays
const myArr2 = ["a", "b", "c"];
const myArr3 = ["d", "e", "f"];
const myArr4 = [...myArr2, ...myArr3];
console.log(myArr4);

// 2.2 For Objects
const myObj = {
    model: "Type-R",
    year: 2022,
    color: "white"
};
const myObj1 = {
    vehicle: "2.0",
    package: "Full",
    color: "red"
};
const myObj2 = {...myObj, ...myObj1};
console.log(myObj2);

// Eşleşmeyen propertylerin yeni nesneye eklendiğini ancak eşleşen propertylerin "güncellendiğini" gör.

// 3. Passing elements of Array as arguments a function
const myArr5 = [1, 2, 3, 4, 5];
console.log(Math.max(...myArr5));

// İşte aradaki fark;
console.log(myArr5);
console.log(...myArr5);

// 4. Copying array or objects (Shallow Copy)
const myArr6 = [1, 2, 3, 4, 5, 6];
const myArr6Copy = [...myArr6];
console.log(myArr6Copy);

const myObj3 = {
    firstName: "Samet",
    secondName: "Polat",
    nation: "Turkey"
};
const myObj3Copy = {...myObj3};
console.log(myObj3Copy);

// Other Copies Type
// 4.1 Shallow Copy: Üst yapıyı kopyalar ancak iç içe geçmiş nesneleri/dizileri kopyalamaz.

// 4.2 Deep Copy: İç içe geçmiş tüm nesneler ve diziler dahil olmak üzere orijinal yapının tam bir kopyasını özyinelemeli olarak oluşturur. Bu, kopyalanan yapıda yapılan değişikliklerin orijinal yapıyı "etkilememesini" ve bunun tersinin de geçerli olmasını sağlar.

// 4.3 Copying by References: Bazı kopyalama yöntemleri yalnızca referansları nesnelere veya dizilere kopyalar, yani kopyalanan yapıdaki değişiklikler orijinal yapıyı etkiler ve bunun tersi de geçerlidir. Bu, JavaScript'teki nesneler ve diziler için atamalarda (=) tipiktir. Yani;
// JavaScript'te bir nesneyi veya diziyi bir değişkene atadığınızda, aslında tüm yapının yeni bir kopyasını oluşturmaz, o nesneye veya diziye bir referans kopyalarsınız. Bu, kopyalanan yapıyı değiştirirseniz, orijinal yapının da etkileneceği ve bunun tersinin de geçerli olacağı anlamına gelir. Bir örnek görelim: 
const myArr7 = [1, 2, 3];
const myArr7Copy = myArr7;
myArr7Copy.push(4);

console.log(myArr7); // Expect [1, 2, 3, 4]
console.log(myArr7Copy); // Expect [1, 2, 3, 4]

// 4.4 Copying by Value: Bazı programlama dillerinde, sayılar ve dizeler gibi ilkel türler değere göre kopyalanır, yani tamamen yeni bir kopya oluşturulur. Kopyalanan değerde yapılan değişiklikler orijinal değeri etkilemez. Ancak JavaScript'te ilkel türler her zaman değere göre kopyalanır.Yani;
//JavaScript'te sayılar, dizeler, booleanlar, null ve undefined gibi ilkel türler yeni bir değişkene atandığında değer olarak kopyalanır. Bu, değerin yeni bir kopyasının oluşturulduğu ve kopyalanan değerde yapılan değişikliklerin orijinal değeri etkilemediği anlamına gelir.
let x = 10;
let xCopy = x;
xCopy = 20;

console.log(x); // 10
console.log(xCopy); // 20

// Not: Ancak, nesneler ve diziler gibi ilkel olmayan türler için atamanın, tüm yapının yeni bir kopyasını oluşturmak yerine orijinal nesneye veya diziye bir referans kopyalayarak çalıştığına dikkat etmek önemlidir. Sonuç olarak, önceki örneklerde gösterildiği gibi, kopyalanan yapıda yapılan değişiklikler orijinal yapıyı etkileyecek ve bunun tersi de geçerli olacaktır. Bu davranış da yukarıda bahsettiğimiz üzere "referansla kopyalama" olarak adlandırılır.


// 5. Using with rest parameters
function sum(...numbers) {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    })
    return console.log(sum);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);

// what is difference between rest parameters and spread operators?
// Rest Parameters (...): Rest parametreleri, fonksiyon tanımlarında belirsiz sayıda argümanı bir "dizi" olarak göstermek için kullanılır. Kalan parametreleri tek bir dizi parametresinde toplamanızı sağlarlar. Geri kalan parametreler, parametre adından önce gelen bir üç nokta (...) ile gösterilir.

// Spread Operators (...): Üç nokta (...) ile de gösterilen yayma operatörü, bir yinelenebilir dosyayı (dizi gibi) tek tek öğelere genişletmek için kullanılır. Genellikle dizi değişmezlerinde, işlev çağrılarında ve daha birçok yerde öğeleri açmak için kullanılır.