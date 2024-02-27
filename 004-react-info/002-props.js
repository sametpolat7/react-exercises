// Burada ki bilgiler ../003-react/src/components/Props.js dosyasında işlenmiştir.

// ==== PROPS ====

// 1. Prop'lar (properties) React'te üst componentden alt componente veri aktarmak için kullanılan bir mekanizmadır. Değişmezdirler, yani alt component ebeveynlerinden aldıkları prop'ları doğrudan değiştiremezler.

// 2. Prop'lar, HTML niteliklerine benzer bir şekilde componente aktarılır. Dizeler, sayılar, diziler, nesneler, fonksiyonlar ve hatta React öğeleri dahil olmak üzere her tür veriyi prop olarak aktarabilirsiniz.

// 3. Props, JSX içinde bir component'a nitelik olarak aktarılır. Component içinde props nesnesi aracılığıyla erişilebilirler.

// 4. Fonksiyonel bir componenet'ın içinde, prop'lara doğrudan fonksiyonun parametreleri olarak erişilebilir. Bir sınıf componet'ının içinde, prop'lara this.props aracılığıyla erişilebilir.

// 5. Props bir component'ın oluşturulmasını özelleştirmek için kullanılabilir JSX içinde küme parantezleri {} içine sarılarak enterpole edilebilirler.

// 6. Bir prop'un sağlanamayabileceği durumlarda yardımcı olan defaultProps nesnesini kullanarak prop'lar için varsayılan değerler belirtebilirsiniz.

// 7. PropTypes, component'ların doğru veri türünü almasını sağlamak için prop türlerini belirlemeye yönelik bir sistemdir. Yanlış prop kullanımıyla ilgili hataların yakalanmasına yardımcı olur.

// 8. Kodu basitleştirmek ve okunabilirliği artırmak için, prop'ları doğrudan fonksiyon parametreleri içinde veya fonksiyon gövdesi içinde yıkabilirsiniz.

// 9. Prop'ların değişmez olduğunu unutmayın; bir alt bileşen ebeveyninden aldığı prop'ları doğrudan değiştiremez.

// 10. Props dinamik olabilir, yani ana component'in durumuna veya diğer dış faktörlere bağlı olarak zaman içinde değişebilirler. Ancak alt component'e parametre olarak geçilen props değiştirilemez.Prop'lar bir bileşene aktarıldıktan sonra, o bileşen tarafından değiştirilemezler. Ancak, prop'ların temsil ettiği veriler, ana bileşenin durumundaki değişiklikler veya diğer kaynaklardan gelen güncellemeler gibi dış faktörlere bağlı olarak zaman içinde gerçekten değişebilir.






















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