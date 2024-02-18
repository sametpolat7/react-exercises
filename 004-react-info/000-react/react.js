// ==== REACT ====
// React, Facebook tarafından oluşturulan bir JavaScript kütüphanesidir. React, kullanıcı arayüzü bileşenleri ile "Single Page Application" oluşturmaya yarayan bir araçtır. React bellekte SANAL bir DOM oluşturur. React, tarayıcının DOM'unu doğrudan manipüle etmek yerine, bellekte sanal bir DOM oluşturur ve tarayıcı DOM'unda değişiklik yapmadan önce gerekli tüm manipülasyonları burada gerçekleştirir.

// React sadece değiştirilmesi gerekenleri değiştirir! React, hangi değişikliklerin yapıldığını bulur ve yalnızca değiştirilmesi gerekenleri değiştirir.

// Real DOM <html></html> etiketleri arasında yer alan hiyerarşik elementler topluluğu (ağacı) iken, Virtual DOM bunun bir kopyasıdır. JavaScript nesnesi olarak tutulur. Ve render edileceği zaman iki "sanal" DOM karşılaşarak "sadece" değişikliğin yapıldığı düğüm render edilir. Bu da gereksiz render işlemini engeller.

// Single-Page Applications
// Tek sayfalı uygulama (SPA), bir sunucudan tamamen yeni sayfalar yüklemek yerine mevcut sayfayı dinamik olarak yeniden yazarak kullanıcıyla etkileşime giren bir web uygulaması veya web sitesidir. Daha basit bir ifadeyle, SPA'lar başlangıçta tek bir HTML sayfası yükler ve ardından kullanıcı uygulamayla etkileşime girdikçe, genellikle JavaScript aracılığıyla içeriği dinamik olarak günceller.


// JSX
// JSX (JavaScript XML), React bileşenlerini yazmak için tercih edilen bir yoldur. JSX sözdizimi, geliştiricilerin HTML benzeri kodları doğrudan JavaScript dosyalarının içine yazmalarına olanak tanır (zorunlu değildir). Ancak JSX kendi başına geçerli bir JavaScript sözdizimi değildir. Compile edilmeden JavaScript koduna çevrilmesi gerekir. Bu işleme "transpilation" adı verilir. Transpilation, JSX kodunu tarayıcının anlayabileceği normal JavaScript koduna dönüştürme işlemidir. Bu genellikle JSX sözdizimini React.createElement() çağrılarına dönüştüren Babel gibi bir araç kullanılarak yapılır.

// JSX sözdizimi HTML'ye benzer ancak JavaScript ifadelerinin küme parantezleri {} içine gömülmesine izin verir.

const element = <h1>Hello World!</h1>;
// Bu JSX sözdizimi, tarayıcıda çalıştırılmadan önce Babel gibi araçlar tarafından normal JavaScript'e dönüştürülür. Yukarıdaki JSX kodu aşağıdaki gibi bir şeye dönüştürülür:

const elementActually = React.createElement('h1', null, 'Hello World!');

// Dolayısıyla, React'te JSX kodu yazdığınızda, bu aslında React öğelerini oluşturmanın daha kullanışlı ve okunabilir bir yoludur; bunlar daha sonra sanal DOM'u oluşturmak ve nihayetinde tarayıcının DOM'unu güncellemek için kullanılır. React'te sanal DOM, gerçek DOM'un hafif bir temsilidir. Bileşenleri ve özelliklerini tanımlayan düz JavaScript nesneleri olan React öğelerinden oluşan bir ağaç yapısıdır.

// React.createElement() kullanarak bir React öğesi oluşturduğunuzda, esasen ekranda işlemek istediğiniz şeyin bir temsilini oluşturmuş olursunuz. Bu eleman sanal DOM ağacına eklenir.

// Daha sonra, React'in kullanıcı arayüzünü güncellemesi gerektiğinde, React önceki sanal DOM ile güncellenmiş sanal DOM'u karşılaştırır, farkları hesaplar (diffing" or "reconciliation" işlemi olarak bilinir) ve ardından bu farkları gerçek DOM'a uygulayarak yalnızca kullanıcı arayüzünün değişen kısımlarını verimli bir şekilde günceller.

// index.js dosyasında iki ifade görmüşsünüzdür:
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// React: React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir. UI'ler oluşturmak için bildirimsel ve bileşen tabanlı bir yaklaşım sağlar. React ile, kendi durumlarını yöneten ve değişikliklere yanıt olarak UI'yi verimli bir şekilde güncelleyen yeniden kullanılabilir UI bileşenleri oluşturabilirsiniz.

// ReactDOM: ReactDOM, React ile çalışmak için DOM'a özgü yöntemler sağlayan bir pakettir. React bileşenlerinin DOM'a işlenmesinden ve tarayıcı ortamındaki olayların ele alınmasından sorumludur. ReactDOM, React'in tarayıcının DOM'u ile etkileşime girmesini sağlayarak etkileşimli web uygulamaları oluşturmanıza olanak tanır.

// Farklar
// Amaç: React, UI bileşenleri oluşturmak ve durumu yönetmek için temel kütüphanedir, ReactDOM ise bu bileşenleri DOM'a işlemek ve tarayıcı ortamıyla etkileşim kurmak için gerekli işlevselliği sağlar.

// Kullanım: React, ReactDOM ile web geliştirme, React Native ile mobil uygulama geliştirme veya Next.js gibi çerçevelerle sunucu tarafı oluşturma dahil olmak üzere çeşitli ortamlarda kullanılabilir. ReactDOM ise özellikle web geliştirme ve React bileşenlerinin tarayıcıda işlenmesi için tasarlanmıştır.


// Virtual DOM Nasıl Oluşur?
// Sanal DOM'un oluşturulması öncelikle ReactDOM tarafından değil, React paketi tarafından gerçekleştirilir.

// JSX kullanarak React bileşenleri yazdığınızda ve React.createElement() kullanarak React öğeleri oluşturduğunuzda, React paketi tarafından sağlanan işlevselliği kullanmış olursunuz. Bu bileşenler ve öğeler sonuçta sanal DOM ağacını oluşturur.

// ReactDOM, bu sanal DOM'u gerçek tarayıcı DOM'una dönüştürme zamanı geldiğinde devreye girer. ReactDOM, ReactDOM.render() gibi yöntemler sağlayarak React bileşenlerinizi ve öğelerinizi alır ve bunları tarayıcının DOM'una monte ederek uygulamanızı ekranda etkili bir şekilde oluşturur.

// Yani, özetlemek gerekirse:
// React paketi, React öğeleri ve bileşenleri dahil olmak üzere sanal DOM'un oluşturulmasından ve yönetilmesinden sorumludur.
// ReactDOM paketi, sanal DOM'un gerçek tarayıcı DOM'una işlenmesinden sorumludur ve React uygulamanızın tarayıcıda görüntülenmesini sağlar.