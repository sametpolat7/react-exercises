// Node.js Nedir?
// Node.js, JavaScript kodunu bir web tarayıcısının dışında çalıştıran açık kaynaklı, platformlar arası bir JavaScript çalışma zamanı ortamıdır. Geliştiricilerin sunucu tarafı ve ağ uygulamaları yazmak için JavaScript kullanmalarına olanak tanır. Node.js, Google Chrome web tarayıcısına güç veren motorla aynı olan V8 JavaScript motoru üzerine inşa edilmiştir.

// Node.js bir programlama dili değil, JavaScript kodunu çalıştırmak için kullanılan bir çalışma zamanı ortamıdır. JavaScript, sunucu tarafı ve ağ uygulamaları oluşturmak için Node.js ile birlikte kullanılan programlama dilidir.

// Node.js: JavaScript kodunu bir web tarayıcısının dışında yürütmek için bir çalışma zamanı ortamı.
// JavaScript: Sunucu tarafı ve istemci tarafı uygulamaları oluşturmak için Node.js ile kullanılan programlama dili.

// Özetle, Node.js kendi başına bir programlama dili olmasa da, JavaScript kodunu sunucularda çalıştırmak için bir platform sağlayarak geliştiricilerin JavaScript kullanarak çok çeşitli uygulamalar oluşturmasına olanak tanır.

// NPM (Node Paket Yöneticisi): Node.js, dünyadaki en büyük açık kaynak kütüphaneleri ekosistemlerinden biri olan npm adlı yerleşik bir paket yöneticisi ile birlikte gelir. npm, geliştiricilerin yeniden kullanılabilir JavaScript kodunu kolayca yüklemelerine, yönetmelerine ve paylaşmalarına olanak tanır.

// Peki Node.js paketi nasıl oluşturulur?

// Terminale yazılan npm init komutu ile bir node.js paketi oluşturabilir. Oluşan paket json formatında terminali hangi dizinde başlatıysanız oraya eklenir.
// Dosya şu şekilde olacaktır;
/*
    {
    "name": "learn-node-packages",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Samet Polat",
    "license": "ISC"
    }
 */
  
// Göründüğü üzere dosyanın kaynağı index.js yani bu dosyadır. Ben bu dosyaya bir log komutu yazarsam;
console.log("Hello World!");

// Ve bunu terminalden çalıştırmak için "node index.js" komutunu kullanırsam "Hello World!" çıktısını terminalde görüntülerim.
// Veya daha kısa "node index" de kullanabilirim.
// Veya "package.json" dosyamda "script" propertysine bir "start" propertysi ekleyerek start keywordunu "node index.js" e bağlayabilirim. Bu durumda terminale "npm start" yazmam yeterli olacaktır.

// "scripts": {
//     "start": "node index.js"
//   },


// Bunların dışında ben bu pakete dışardan herhangi bir modül ekleyebilirim. (Paketi dışarı bağımlı hale getiririm.)
// Bir Node.js paketine bağımlılıklar eklemek mantıklı bir şekilde yapılırsa faydalı olabilir, ancak artıları ve eksileri tartmak ve olası dezavantajları en aza indirmek için en iyi uygulamaları takip etmek önemlidir.

// Şimdilik deneme amaçlı bir modül ekleyelim.
// npm install slugify (install yerine i kullanılabilir)

// Burada package.json dosyamıza yeni bir property eklendi. 
// "dependencies": {
//     "slugify": "^1.6.6"
//   }

// Şimdi bu "bağımlılığı" kullanalım:
import slugify from 'slugify';

const url = slugify("balkanlardan gelen soguk hava dalgasi ülkemizi etkileyecek!", "=");
console.log(url);

// Dosyamda yer alan node_modules klasörü indirmiş olduğumuzlar modüllerin toplandığı klasördür. Ve bu klasörü kaybetmek (silmek) geri dönüşü olmayan bir durum değildir. "npm i" komutu ile klasör tekrar yerini alacaktır. Deneyelim: