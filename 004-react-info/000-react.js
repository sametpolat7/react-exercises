// ==== REACT ====
// React, Facebook tarafından oluşturulan ve özellikle tek sayfalık uygulamalar için kullanıcı arayüzleri oluşturmak amacıyla kullanılan bir JavaScript kütüphanesidir. İşte özellikleri:

// 1. Component Tabanlı Mimari: React, component tabanlı bir mimari üzerinde çalışır. componentler, bir React uygulamasının yapı taşlarıdır. Yeniden kullanılabilir kullanıcı arayüzü öğelerini ve mantığı kapsülleyerek karmaşık kullanıcı arayüzlerinin yönetimini ve bakımını kolaylaştırırlar.

// 2. Sanal DOM: React'in en önemli özelliklerinden biri sanal bir DOM (Belge Nesne Modeli) kullanmasıdır. Sanal DOM, gerçek DOM'un hafif bir kopyasıdır. Bir bileşenin durumu değiştiğinde, React ilk olarak gerçek DOM yerine sanal DOM'u günceller.

// 3. Reconciliation (Uzlaşma): React, gerçek DOM'u verimli bir şekilde güncellemek için "uzlaşma" adı verilen bir süreç kullanır. Sanal DOM'u önceki sürümle (snapshot = anlık durum görüntüsü) karşılaştırır ve gerçek DOM'u güncellemenin en verimli yolunu hesaplar.

// 4. JSX (JavaScript XML): React, JavaScript için bir sözdizimi uzantısı olan JSX'i kullanır. JSX, geliştiricilerin JavaScript içinde HTML benzeri kod yazmasına olanak tanıyarak UI bileşenlerini ve yapılarını tanımlamayı kolaylaştırır.

// 5. Bildirimsel Sözdizimi: React, geliştiricilerin kullanıcı arayüzünün nasıl görünmesini istediklerini tanımladıkları ve React'in DOM'u bu tanıma uyacak şekilde güncellemeye özen gösterdiği bildirimsel bir programlama stilini teşvik eder. Bu, geliştiricilerin değişikliklere yanıt olarak DOM'u nasıl güncelleyeceklerini açıkça tanımlamaları gereken zorunlu programlamanın tersidir.

// 6. State Management: React bileşenleri, zaman içinde değişebilen verileri temsil eden state'e sahip olabilir. Bir bileşenin durumu değiştiğinde, React güncellenmiş durumu yansıtmak için bileşeni ve alt bileşenlerini otomatik olarak yeniden oluşturur.

// Lifecycle Methods: React bileşenleri, geliştiricilerin bir bileşenin yaşam döngüsünün çeşitli aşamalarına (örneğin DOM'a bağlandığında veya DOM'dan çıkarıldığında veya durumu veya prop'ları değiştiğinde) bağlanmasına olanak tanıyan yaşam döngüsü yöntemlerine sahiptir.

// Component Yeniden Kullanılabilirliği: React, bileşenlerin yeniden kullanılabilirliğini teşvik ederek geliştiricilerin karmaşık kullanıcı arayüzlerini daha küçük, yeniden kullanılabilir bileşenlerden oluşturmasına olanak tanır. Bu modüler yaklaşım, uygulamaların bakımını ve ölçeklendirilmesini kolaylaştırır.

// Genel olarak React, DOM'u yönetmek ve UI güncellemelerini işlemek için bildirimsel ve verimli bir yol sağlayarak etkileşimli kullanıcı arayüzleri oluşturma sürecini basitleştirir. Performansı, esnekliği ve sağlam ekosistemi nedeniyle geliştiriciler arasında yaygın bir popülerlik kazanmıştır.

// Single-Page Applications
// Tek sayfalı uygulama (SPA), bir sunucudan tamamen yeni sayfalar yüklemek yerine mevcut sayfayı dinamik olarak yeniden yazarak kullanıcıyla etkileşime giren bir web uygulaması veya web sitesidir.

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
