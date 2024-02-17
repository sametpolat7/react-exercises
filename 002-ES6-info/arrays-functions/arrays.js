// JS Arrays Functions
// Dizi, birden fazla değer tutabilen özel bir değişkendir.

// Array Methods

// Converting an Array to a String
const cars = ["Opel", "BMW", "Renault", "Mercedes"];
const stringCars = cars.toString();
console.log(stringCars);

// Also you can use "join()";
const stringCars2 = cars.join("-");
console.log(stringCars2);

// Add or Remove Element of Array
const carsPopping = cars.pop(); // Çıkarılan elementi döndürür.
console.log(carsPopping);

const carsPushing = cars.push("Volvo"); // Yeni "length" değerini döndürür.
console.log(carsPushing);

// Shifting Elements
const carsShifting = cars.shift(); // Baştaki elemanı çıkarır ve onu döndürür.
console.log(carsShifting);

const carsUnshifting = cars.unshift("Audi"); // Başa yeni eleman ekler ve yeni "length" değerini döndürür.
console.log(carsUnshifting);

// Splicing and Slicing Array
// Bir diziye yeni öğeler eklemek için splice() yöntemi kullanılabilir:

console.log(cars); // [ 'Audi', 'BMW', 'Renault', 'Volvo' ]
const carsSplicing = cars.splice(2, 0, "Skoda", "Fiat");
console.log(cars); // [ 'Audi', 'BMW', 'Skoda', 'Fiat', 'Renault', 'Volvo' ]
// splice() yöntemi, "orjinal" diziyi değiştirir.

// İlk parametre (2), yeni öğelerin eklenmesi gereken konumu tanımlar (eklenir).
// İkinci parametre (0) kaç öğenin kaldırılması gerektiğini tanımlar.

// Akıllı parametre ayarıyla, dizide "delik" bırakmadan öğeleri kaldırmak için splice() işlevini kullanabilirsiniz:
const removeBySplice = cars.splice(3, 2);
console.log(removeBySplice); // Silinen öğeleri içeren bir dizi döndürür.
console.log(cars); // [ 'Audi', 'BMW', 'Skoda', 'Volvo' ]

// ES2023, orijinal diziyi değiştirmeden bir diziyi birleştirmenin güvenli bir yolu olarak Array toSpliced() yöntemini ekledi. Yeni toSpliced() yöntemi ile eski splice() yöntemi arasındaki fark, eski yöntem "orijinal" diziyi değiştirirken yeni yöntemin orijinal diziyi değiştirmeden "yeni bir dizi" oluşturmasıdır.
const newCars = cars.toSpliced(2, 1);
console.log(cars);
console.log(newCars);

// Array Functions

// 1. find()
// find() yöntemi, bir test işlevini geçen ilk dizi öğesinin "değerini" döndürür.
const numbs = [10, 20, 30, 40, 50];
const greaterThan25 = numbs.find((value, index, arraysItself) => {
    return value > 25;
})
console.log(greaterThan25);

// 1.1 findIndex()
// findIndex() yöntemi, bir sınama işlevini geçen ilk dizi öğesinin "dizinini" döndürür.
const greaterThan25Index = numbs.findIndex((value) => {
    return value > 25;
})
console.log(greaterThan25Index);

// 2. forEach()
// Her dizi öğesi için bir fonksiyonu (callback) bir kez çağırır.
const displayNumbs = numbs.forEach((value, index) => {
    return console.log(`${index} : ${value}`);
})

// 3. map()
// map() yöntemi, her bir dizi elemanı üzerinde bir fonksyion gerçekleştirerek "yeni" bir dizi oluşturur. map() yöntemi, değerleri olmayan dizi öğeleri için işlevi çalıştırmaz.
const squareOfNumbs = numbs.map((value, index) => {
    return console.log(
        `${index} : ${value * value}`
    );
})

// 4. filter()
// filter() yöntemi, bir testi geçen dizi öğeleriyle "yeni" bir dizi oluşturur.
const filteredNumbs = numbs.filter((value) => {
    return value > 25;
})
console.log(filteredNumbs);

// 5. reduce()
// reduce() yöntemi, bir dizinin öğelerini tek bir değere indirgemek için kullanılır. Dizideki her öğe için bir kez çalıştırılır ve tek bir çıktı değeri elde eder.
const reduceToSingleValue = numbs.reduce((previousValue, currrentValue) => {
    return previousValue + currrentValue;
});
console.log(reduceToSingleValue);

// 6. every()
// every() yöntemi, tüm dizi değerlerinin bir testi geçip geçmediğini kontrol eder.
const everyNumbs = numbs.every((value, index) => {
    return value > 25;
})
console.log(everyNumbs);

// 7. some()
// some() yöntemi, bazı dizi değerlerinin bir testi geçip geçemediğini kontrol eder.
const someNumbs = numbs.some((value) => {
    return value > 25;
})
console.log(someNumbs);

// 8.with()
// ES2023, orijinal diziyi değiştirmeden bir dizideki öğeleri güncellemenin güvenli bir yolu olarak Array with() yöntemini ekledi.
const changeFourth = numbs.with(3, 60);
console.log(changeFourth);

// Yukarıdaki örneği splice() ile yapabilirsin. Ancak splice() orjinal diziyi "değiştirecektir"!