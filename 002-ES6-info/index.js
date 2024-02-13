// ES6 (ECMAScript 2015) ile birlikte, JavaScript diline modül desteği eklenmiştir. Bu, geliştiricilere kodlarını modüller halinde organize etme ve yeniden kullanılabilirliklerini artırma imkanı sunar. ES6 modülleri, import ve export anahtar kelimelerini kullanarak farklı dosyalar arasında kod paylaşımını sağlar. Bu modüller, JavaScript projelerinin daha düzenli, bakımı daha kolay ve genellikle daha ölçeklenebilir olmasını sağlar.

// Bir önceki konumuzda (001-node.js) bir slugify paketini npm ile dosyamıza eklemiştik. Ancak dikkat edilmesi gereken nokta 55. satırda var slugify = require('slugify'); ifadesidir. require() ifadesi node.js de dosyaları içe aktarmak için yaygın olarak kullanılır. "import" ise modülleri içe aktarmak için modern JavaScript'te (ES6 ve sonrası) sunulan daha yeni bir özelliktir. ECMAScript standardının bir parçası olsa da, Node.js'de kullanımı özel yapılandırma gerektirir. Genellikle .mjs dosya uzantısını kullanmanız veya package.json dosyasında "type": package.json içinde "module" olarak ayarlamanız gerekir. Ayrıca, Node.js modülleri için desteği hala gelişmektedir ve özellikle ESM sözdizimi ile kullanılmak üzere tasarlanmamış üçüncü taraf modüller kullanıldığında uyumluluk sorunları olabilir.

// Özetle, require() hala yaygın olarak kullanılmakta ve Node.js'de tam olarak desteklenmektedir, import ise daha modern bir sözdizimi sağlar ancak ek yapılandırma gerektirir ve belirli modüllerle uyumluluk sorunları olabilir. Bu nedenle, require() veya import kullanıp kullanmayacağınız özel proje gereksinimlerinize ve değerlendirmelerinize bağlıdır.


// Named Export and Default Export Imports
import message, {person1, one, person2, two} from "./my-module.js";

console.log(person1);
console.log(person2);
console.log(one);
console.log(two);
message();

// Farkettiğiniz üzere default export "{}" dışında import edilir.
// Import edilirken verilen "message" parametresi export edilen fonksiyon ile aynı ismi taşımak zorunda değildir. (Zaten tek bir default export var)

// Bir modülden dışa aktarılacak yalnızca bir değer olduğunda veya içe aktarırken dışa aktarılan değere farklı bir ad vermek istediğinizde varsayılan dışa aktarmayı kullanın.
// Bir modülden dışa aktarılacak birden fazla değeriniz olduğunda ve bunları orijinal adlarıyla içe aktarmak istediğinizde adlandırılmış dışa aktarmayı kullanın.
// Sonuç olarak, varsayılan dışa aktarma ile adlandırılmış dışa aktarma arasındaki seçim, özel kullanım durumunuza ve uygulamanızın yapısına bağlıdır.