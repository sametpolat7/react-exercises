// Burada verilen bilgiler ../003-react/src/components/Component.js dosyasında işlenmiştir.

// Öncelikle iki dosya adının farklarına bakalım. Farkettiysen module olarak kullandığım dosya (Component.js)büyük harfle başlıyor. Bunun nedeni :

// src klasöründe oluşturacağımız ve sayfanın bileşenlerini içerecek olan components dosyasındaki her bir file ve içeriside ki fonksiyon büyük harfler başlar. Çünkü render edilirken JSX formatında, React baş harfi küçük olan elementleri HTML tag'i olarak algılar. Aslında App.js içinde import işleminde içeri aktarılan fonk. ismini büyük harfle başlayarak yazmak yeterli olsa da biz tüm component dosyaları ve fonksiyonlarını büyük harfle başlayarak yazacağız.

// 2. bir husus tüm componentlar bir fragment altında yazılmalıdır. Bu bir HTML tag'i de olabilir bir <> </> boş fragment da olabilir.

// JavaScriptte belli başlı kelimeler ayrılmıştır. Ve bu kelimeler ile tanımlamalar yapılamaz. JSX formatında yazarken buna dikkat etmelidir. Bunlardan bazıları:

<>
<input htmlFor=""></input>

<div className=""> </div>
</>

// Niye boş fragment kullandığımı hatırla!

// Components
// Bileşenler, HTML öğelerini döndüren fonksiyonlar gibidir.

// Bileşenler, Class components ve Function components olmak üzere iki türdür, bu derste Function component' a odaklanacağız. Eski React kod tabanlarında, öncelikle Class bileşenlerinin kullanıldığını görebilirsiniz. Artık React 16.8'de eklenen Hook'lar ile birlikte Function bileşenlerinin kullanılması önerilmektedir.

// Function Components
// Bir Fonksiyon bileşeni de HTML döndürür ve bir Sınıf bileşeniyle aynı şekilde davranır, ancak Fonksiyon bileşenleri çok daha az kod kullanılarak yazılabilir, anlaşılması daha kolaydır.

