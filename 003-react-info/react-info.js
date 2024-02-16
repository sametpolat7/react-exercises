// React Nedir?
// Bazen bir ön uç JavaScript çerçevesi olarak da adlandırılan React, Facebook tarafından oluşturulan bir JavaScript kütüphanesidir. React, kullanıcı arayüzü bileşenleri oluşturmak için kullanılan bir araçtır.

// Nasıl Çalışır?
// React bellekte SANAL bir DOM oluşturur. React, tarayıcının DOM'unu doğrudan manipüle etmek yerine, bellekte sanal bir DOM oluşturur ve tarayıcı DOM'unda değişiklik yapmadan önce gerekli tüm manipülasyonları burada gerçekleştirir.

// React sadece değiştirilmesi gerekenleri değiştirir! React, hangi değişikliklerin yapıldığını bulur ve yalnızca değiştirilmesi gerekenleri değiştirir.

// Real DOM <html></html> etiketleri arasında yer alan hiyerarşik elementler topluluğu (ağacı) iken, Virtual DOM bunun bir kopyasıdır. JavaScript nesnesi olarak tutulur. Ve render edileceği zaman iki DOM karşılaşarak "sadece" değişikliğin yapıldığı düğüm render edilir. Bu da gereksiz render işlemini engeller.


// Single-Page Applications Nedir?
// Tek sayfalı uygulama (SPA), bir sunucudan tamamen yeni sayfalar yüklemek yerine mevcut sayfayı dinamik olarak yeniden yazarak kullanıcıyla etkileşime giren bir web uygulaması veya web sitesidir. Daha basit bir ifadeyle, SPA'lar başlangıçta tek bir HTML sayfası yükler ve ardından kullanıcı uygulamayla etkileşime girdikçe, genellikle JavaScript aracılığıyla içeriği dinamik olarak günceller.

// Tek sayfalı uygulamaların temel özellikleri şunlardır:

// Dinamik içerik: SPA'lar, sayfanın tamamının yeniden yüklenmesini gerektirmeden içeriği dinamik olarak günceller. Bu, daha akıcı ve daha duyarlı bir kullanıcı deneyimi sağlar.

// İstemci taraflı işleme: İşleme sürecinin çoğu sunucu tarafı yerine istemci tarafında (kullanıcının web tarayıcısında) gerçekleşir. Bu, ilk sayfa yüklemelerinin daha hızlı olmasını sağlar ve sunucu üzerindeki yükü azaltır.

// Eşzamansız veri alma: SPA'lar genellikle AJAX (Eşzamansız JavaScript ve XML) veya tüm sayfayı yeniden yüklemeden sunucudan eşzamansız olarak veri almak için diğer teknikleri kullanır.

// Routing (Yönlendirme): SPA'lar genellikle sunucu gidiş gelişleri gerektirmeden uygulama içinde gezinmeyi yönetmek için istemci tarafı yönlendirme uygular. Bu, bir web tarayıcısı içinde daha uygulama benzeri bir deneyim sağlar.

// State Management (Durum yönetimi): SPA'lar durumlarını tarayıcı içinde tuttuklarından, karmaşık uygulama durumlarını yönetmek için genellikle istemci tarafı durum yönetimi kütüphanelerini (Redux veya Vuex gibi) kullanırlar.

// React, Angular ve Vue.js gibi popüler JavaScript çerçeveleri ve kütüphaneleri, karmaşık kullanıcı arayüzlerini yönetme ve dinamik içerik güncellemelerini işleme konusundaki güçlü yetenekleri nedeniyle tek sayfalı uygulamalar oluşturmak için yaygın olarak kullanılmaktadır.