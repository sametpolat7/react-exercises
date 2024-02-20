


// React state (durum) değişikliklerini yönetir ve kullanıcı arayüzünü "uzlaşma" adı verilen bir süreç aracılığıyla günceller. İşte nasıl çalıştığı:

// 1. State Değişiklikleri: Bir React componentin state'i değiştiğinde (genellikle kullanıcı etkileşimleri veya diğer olaylar nedeniyle), React bu değişikliği algılar.

// 2. Sanal DOM Güncellemesi: React daha sonra bileşenin yeni durumunu yansıtmak için sanal DOM'u günceller.

// 3. Fark Algoritması (Diffing): React, güncellenmiş sanal DOM'u sanal DOM'un önceki sürümüyle (anlık durum görüntüsü) karşılaştırmak için hızlı ve verimli bir fark algoritması kullanır.

// 4. Minimal DOM Güncellemeleri: Fark alma işlemi sırasında belirlenen farklılıklara dayanarak React, gerçek DOM'u güncellenmiş sanal DOM ile eşleşecek şekilde güncellemek için gereken minimum değişiklik kümesini belirler.

// 5. Reconciliation (Uzlaşma): React, bu minimum değişiklikleri gerçek DOM'a uygulayarak yalnızca gerekli güncellemelerin yapılmasını sağlar. Bu süreç uzlaştırma olarak bilinir.

// 6. Bileşen Yeniden Oluşturma: React, güncellenmiş durumu yansıtmak için etkilenen bileşeni ve alt bileşenlerini gerçek DOM'da yeniden işler.

// Bu süreci kullanarak React, kullanıcı arayüzü güncellemelerinin verimli bir şekilde gerçekleştirilmesini sağlayarak gereken DOM manipülasyon miktarını en aza indirir ve uygulamanın performansını artırır. Bu yaklaşım ayrıca DOM'u doğrudan manipüle etmenin karmaşıklıklarını soyutlayarak geliştiricilerin uygulama mantığını ve UI bileşenlerini oluşturmaya odaklanmasına olanak tanır.