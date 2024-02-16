// Sınıf bir fonksiyon türüdür, ancak onu başlatmak için fonksiyon anahtar kelimesini kullanmak yerine, "class" anahtar kelimesini kullanırız ve özellikler bir constructor() metodunun içine atanır.

class Car {
    constructor(brand) {
        this.carBrand = brand;
    }

    showBrands() {
        let text = `We have a ${this.carBrand}.`;
        return text;
    }
}

// const myCar = new Car("Ford");
// myCar.showBrands();

// Not: Nesne ilklendirildiğinde constructor() otomatik olarak çağrılır.

// Class Inheritance (Mirası)
// Bir sınıf kalıtımı oluşturmak için "extends" anahtar sözcüğünü kullanın. JavaScript'te, başka bir sınıfı genişleten bir sınıf oluşturduğunuzda (yani, sınıf kalıtımı), türetilen sınıfın (alt sınıf) kendi yapıcısı varsa, yapıcısında super() işlevini çağırması gerekir. Bunun nedeni, super() işlevinin ana sınıfın (üst sınıf) kurucusunu çağırmaktan sorumlu olmasıdır. Bu sayede alt sınıf, ana sınıfın methodlarına erişebilir:
class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.carModel = model;
    }

    showBrandsAndModels() {
        let text = this.showBrands() + ` Its model name ${this.carModel}.`;
        return text;
    }
}

const mySuperCar = new Model("Ford", "Mustang");
console.log(mySuperCar.showBrandsAndModels());

// super() yöntemi ana sınıfa atıfta bulunur. Alt sınıfın constructor() içinde super() yöntemini çağırarak, ana sınıfın constructor() yöntemini çağırır ve ana sınıfın özelliklerine ve yöntemlerine erişim elde ederiz.
