// Burada ki bilgiler ../003-react/src/components/Props.js dosyasında işlenmiştir...

// Props
// Prop'lar React component'larına aktarılan argümanlardır. Props component'lara HTML nitelikleri aracılığıyla aktarılır. Props, "properties" anlamına gelir.

// React Props, JavaScript'teki fonksiyon argümanları ve HTML'deki nitelikler gibidir. Bir component'a prop göndermek için HTML nitelikleriyle aynı sözdizimini kullanın:

// Not : React Props salt okunurdur! Değerlerini değiştirmeye çalışırsanız bir hata alırsınız.


// Kısa Devre Değerlendirmesi:
// JavaScript'te && işleci kısa devre değerlendirmesi yapar:

// İlk işlenen (&& öğesinin sol tarafı) "false" olarak değerlendirilirse, tüm ifade false olur ve değerlendirme burada "durur". İkinci işlenen "değerlendirilmez".

// İlk işlenen "true" olarak değerlendirilirse, ikinci işlenen (&& öğesinin sağ tarafı) değerlendirilir ve sonucu tüm ifadenin sonucu olur.

// React'te Koşullu Rendering:
// React'te && operatörü genellikle JSX ifadeleri içinde koşullu işleme için kullanılır.
// Bir JSX ifadesinde kullanıldığında, &&'nin sol tarafı genellikle bir koşulu veya doğru bir değeri temsil eder.
// &&'nin sağ tarafı, koşul doğruysa işlenmesi gereken JSX öğesini veya ifadesini temsil eder.
// Koşul false (veya falsy) ise, React değerlendirmeye kısa devre yaptırır ve &&'nin sağ tarafındaki JSX'i render etmez.