// JavaScript Destructing
// JavaScript'te desctructing, verileri arraylerden, objectlerden veya diğer yinelenebilir veri yapılarından farklı değişkenlere kolayca çıkarmanıza olanak tanıyan bir özelliktir. Objelerden birden fazla özelliği veya arraylerden öğeleri ayıklamak ve bunları değişkenlere atamak için kısa bir söz dizimi sağlar.

const person = {
    firstName: "Samet",
    secondName: "Polat",
    nation: "Turkey",
    age: 26
};

const { firstName, secondName, nation, age } = person;
console.log(firstName, secondName, nation, age);

// Nesneleri "destruct" ederken propertylerin const içinde bildirilme sırası önemli değildir. Ancak property namelerinin eşleşmesi önemlidir!

// Arraylerde ise sıra önemlidir.
const myMedals = [2008, 2011, 2012, 2013, 2024];
const [first, second,, ...res] = myMedals;

console.log(first, second, res);
console.log(typeof first);
console.log(typeof second);
console.log(typeof res);

// Atlanması gereken bir key için ekstra "virgül" koyduğuma dikkat et.

// Bir bakış açısı;
const myCar = {
    brand: "Renault",
    model: "Talisman",
    year: "2018",
    vehicle: {
        hp: 160,
        type: "Diesel",
        engine: 1.6
    },
    color: "black",
    km : 101523
};

const sellItem = ( {brand, model, year, km} ) => {
    return console.log(`Vehicle For Sale : ${brand} ${model} ${year}. At ${km}km. Price : 1.400.000 TRY.`)
}

sellItem(myCar);

// Şöyle bir kullanımda mümkündür.
const otherProperty = ( {vehicle : {hp, type, engine}, color} ) => {
    return console.log(`It has ${engine} ${type} engine. Also ${hp} horse power. And ${color}.`);
}

otherProperty(myCar);