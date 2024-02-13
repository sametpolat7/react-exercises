// Fonksiyonlar veya değişkenler içeren modüller herhangi bir harici dosyada saklanabilir.

// İki tür dışa aktarma vardır: Named Exports ve Default Exports.

// Named Exports

export const person1 = {
    name: "Samet",
    surName: "Polat",
    age: 25
};

export const one = 1;

// Ya da 

const person2 = {
    name: "Özlem",
    surName: "Özcan",
    age: 25
};

const two = 2;

export {person2, two};


// Default Exports
const message = () => {
    console.log(`Hello ${person1.name} and ${person2.name}. Welcome!`);
}

export default message;

// Not: Bir dosyada yalnızca bir varsayılan dışa aktarma olabilir.