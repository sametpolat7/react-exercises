// ==== State ====
// Bir componentin içinde değişme potansiyeli olan verileri tuttuğumuz yapıdır. Herhangi bir state değiştiği anda ilgili component render edilir. Bir componentin mevcut durumunu veya verilerini temsil eden bir nesneyi ifade eder. Esasen bir componentin dahili olarak koruyabileceği ve yönetebileceği bilgilerdir.

// == Özellikler ==
// 1. Veri Depolama: State, React componentlerinin zaman içinde değişebilen verileri depolamasına ve yönetmesine olanak tanır. Bu veriler, kullanıcı girdisini, sunucu yanıtlarını veya bileşenle ilgili diğer dinamik bilgileri içerebilir.

// 2. Değiştirilebilir: Değişmez olan ve üst componentten alt componente aktarılan prop'ların aksine state değişkendir ve component içinde güncellenebilir.

// 3. Component'e Özel: React'teki her component kendi state'ine sahip olabilir. Bu, bir component'in state'inin, açıkça props olarak aktarılmadığı sürece başka bir component'in state'ini etkilemediği anlamına gelir.

// 4. Component için Yerel: State, tanımlandığı component için yereldir. Diğer componentler tarafından doğrudan erişilemez veya değiştirilemez. Ancak, bir component state'ini alt componentlere prop olarak aktarabilir.

// 5. State Başlatma: State genellikle bir class component'inin kurucusunda this.state = { /* initial state */ } kullanılarak başlatılır. Fonksiyonel bileşenlerde state, React 16.8'de tanıtılan useState kancası kullanılarak yönetilebilir.

// 6. State Güncelleme: Bir component'in state'ini güncellemek için, this.state dosyasını asla doğrudan değiştirmemelisiniz. Bunun yerine, React tarafından sağlanan setState() yöntemini kullanmalısınız. Bu, React'in state değişikliklerini düzgün bir şekilde izleyebilmesini ve uzlaştırabilmesini sağlar.

// 7. Asenkron Güncellemeler: setState() asenkron olabilir, bu da React'in performans nedenleriyle birden fazla state güncellemesini toplu olarak yapabileceği anlamına gelir. Bu nedenle, state'i önceki state'e göre güncellerken, uygun senkronizasyonu sağlamak için setState()'in fonksiyon formunu kullanmanız önerilir.

// 8. Durumsuz Bileşenler: React'teki durumsuz veya işlevsel bileşenler varsayılan olarak duruma sahip değildir. Bununla birlikte, React'te kancaların kullanılmaya başlanmasıyla, işlevsel bileşenler artık useState gibi kancaları kullanarak state'e de sahip olabilir.

// Genel olarak state, React'te bileşenlerin veri veya kullanıcı etkileşimlerindeki değişiklikleri yönetmesini ve bunlara yanıt vermesini sağlayarak React uygulamalarını dinamik ve etkileşimli hale getiren temel bir kavramdır.


// == Nasıl Çalışır? == 
// React state (durum) değişikliklerini yönetir ve kullanıcı arayüzünü "uzlaşma" adı verilen bir süreç aracılığıyla günceller.

// 1. State Değişiklikleri: Bir React componentin state'i değiştiğinde (genellikle kullanıcı etkileşimleri veya diğer olaylar nedeniyle), React bu değişikliği algılar.

// 2. Sanal DOM Güncellemesi: React daha sonra componentnin yeni state'ini yansıtmak için sanal DOM'u günceller.

// 3. Fark Algoritması (Diffing): React, güncellenmiş sanal DOM'u sanal DOM'un önceki sürümüyle (anlık durum görüntüsü) karşılaştırmak için hızlı ve verimli bir fark algoritması kullanır.

// 4. Minimal DOM Güncellemeleri: Fark alma işlemi sırasında belirlenen farklılıklara dayanarak React, gerçek DOM'u güncellenmiş sanal DOM ile eşleşecek şekilde güncellemek için gereken minimum değişiklik kümesini belirler.

// 5. Reconciliation (Uzlaşma): React, bu minimum değişiklikleri gerçek DOM'a uygulayarak yalnızca gerekli güncellemelerin yapılmasını sağlar. Bu süreç uzlaştırma olarak bilinir.

// 6. Componenti Yeniden Oluşturma: React, güncellenmiş State yansıtmak için etkilenen componenti ve alt componentnlerini gerçek DOM'da yeniden işler.

// Bu süreci kullanarak React, kullanıcı arayüzü güncellemelerinin verimli bir şekilde gerçekleştirilmesini sağlayarak gereken DOM manipülasyon miktarını en aza indirir ve uygulamanın performansını artırır. Bu yaklaşım ayrıca DOM'u doğrudan manipüle etmenin karmaşıklıklarını soyutlayarak geliştiricilerin uygulama mantığını ve UI componentlerini oluşturmaya odaklanmasına olanak tanır.