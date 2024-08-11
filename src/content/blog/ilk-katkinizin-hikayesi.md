---
draft: false
title: İlk Katkınzıın Hikayesi
summary: Açık kaynak geliştiriciliğe dair izlenimler.
category: fikir
subcategory: Rehber
date: 2024-08-11
---

<style>

h3, hr {
    margin: 1em 0 1em 0
}

</style>

Temel ihtiyaçlarımızı karşılamak için inşa edilmiş yapıları düşünün. Yollar, kaldırımlar, kanalizasyon boruları, elektrik hatları… Nasıl bir şehrin işleyişi için bunlar şartsa, yazılım projeleri için de buna karşılık gelen altyapı niteliğinde yazılımlar var. Bu yazılımlar genellikle herhangi bir ücret talep etmeden, mütevazı bir şekilde üstlerine düşen görevi yerine getiriyorlar. Onlar sayesinde genel ihtiyaçlarımız kolay ve ücretsiz bir şekilde karşılanmış oluyor ve projemize has ihtiyaçlarımıza odaklanabiliyoruz.

Buraya kadar olan kısım gayet anlaşılır, hatta biraz sıkıcı. Eğer mesele açık kaynak yazılımları kullanmaktan ibaretse, zaten daha fazla kelime israf etmemize de gerek yok. Bu yazıda bunları kullanmaktan değil, geliştirmekten bahsedeceğiz. Yazının sonunda açık kaynak geliştirici olmanın yalnızca hayır işi veya vicdani sorumluluk olmadığını, aslında bize sağlanmış bir özgürlük ve kendimizi geliştirmenin eğlenceli bir yolu olduğunu göreceğiz! Şimdi izin verin, açık kaynak konusunu biraz daha açalım.

### Açık Kaynak

Açık kaynak yazılım, kabaca ifadesiyle herkesin dilediğince kullanabildiği, değiştirebildiği ve başkalarıyla paylaşabildiği kod anlamına geliyor [(1)](https://www.redhat.com/en/topics/open-source/what-is-open-source). Eğer bu tanım yeterince anlaşılır değilse biraz daha açıkça ifade etmeyi deneyelim. Bir yazılımın açık kaynak olması bu yazılımla alakalı bize üç türlü özgürlük sağlıyor:
1. Bu yazılımı projemiz içerisinde bir kütüphane veya çalıştırılabilir program olarak dilediğimiz şekilde ve ortamda kullanabiliyoruz.
2. Bu yazılımın kodunda kalıcı düzenlemeler, ihtiyaçlarımız doğrultusunda eklemeler ve çıkarmalar yapabiliyoruz.
3. Yazılımın orijinal veya düzenlenmiş kopyalarını başkalarıyla paylaşabiliyoruz hatta duruma göre satabiliyoruz [(2)](https://snyk.io/learn/open-source-licenses/).

İlk bakışta bu kimsenin kalkışmayacağı bir hayır işi gibi görünse de projelerinin hızlı bir şekilde yaygınlaşmasını ve gelişmesini isteyen yazılımcılar ve yazılım firmaları bunları açık kaynak olarak paylaşmayı tercih edebiliyorlar. Bize de bunları *özgürce* kullanması kalıyor, veya değiştirmesi ve geliştirmesi! Herhalde girişte ne demek istediğim şimdi daha iyi anlaşılmıştır. Tekrarlamak pahasına: Açık kaynak yazılımlara katkı sağlamak hayır işi veya vicdani sorumluluk olarak algılanmamalıdır, ihtiyaçlarımız doğrultusunda bu yazılımlarda değişiklikler yapabilmek bize sağlanmış bir özgürlüktür!

O halde artık açık kaynak projelere nasıl katkı sağlayabileceğimizden bahsedebiliriz. Katkı sağlayıcı olmanın çetrefilli yanları var ve katkıda bulunmak istediğiniz projelerin binlerce satır koduyla ilk kez karşılıştığınızda korkmanız muhtemel; her işin başında olduğu gibi! Bu noktada süreci tanımak işinizi oldukça kolaylaştıracaktır ve özgüveninizi arttıracaktır. Süreci iyi bir şekilde anladığınızda ne kadar tecrübesiz olursanız olun açık kaynak geliştiricisi olmanın mümkün, keyifli ve her açıdan gelişiminize katkı sağlayacak bir iş olduğunu göreceksiniz. Aynı zamanda size ilk katkımdan da bahsedeceğim. Lafı daha fazla uzatmadan ilk adımımızı atalım.

### İlk Adımlar

İşe bir açık kaynak projeyi gözümüze kestirerek başlıyoruz. Gözünüz korkmasın, bu projeyi uzaklarda aramanıza gerek yok. Daha önce yazdığınız bir projenin bağımlılıklarının olduğu dosyayı (package.json, go.mod vb.) açın. Burada bir liste halinde projede kullandığınız kütüphanelere rastlayacaksınız. Projeyi siz yazdıysanız bu kütüphanelerin az çok ne işe yaradığını biliyor olmalısınız, olmasanız da önemli değil, aralarından bir tanesini seçin. Özel bir kritere ihtiyacınız yok, hangisi hoşunuza giderse! Sonra projenin adını bir arama motoruna yazın ve kütüphanenin kaynak kodunun barındırıldığı internet sayfasına gidin. Burası muhtemelen Github olacak.

Öncelikle, bu proje ile alakalı öğrenmeniz gereken üç bilgi var:
1. En son katkı (commit) ne zaman yapılmış.
2. Kaç katkı sağlayan (contributor) var.
3. Son ayda kaç katkı isteği (pull request) kabul edilmiş.
Eğer bu ilk katkınız olacaksa en geç 1 hafta önce güncellenmiş, en çok katkı sağlayan ve katkı isteği kabul edilmiş projeyi tercih etmenizi tavsiye ederim. Bu tür projelerin katkı sağlama süreçleri daha sistematik bir hale getirilmiş oluyor, yeni gelenlere daha hoşgörülü yaklaşılıyor ve katkı isteği hızlı bir şekilde cevaplanıyor.
### Sorun

Tebrik ederim, ilk adımı attınız, sizi heyecanlandıracak hareketli bir proje buldunuz. Sırada bir sorun bulmak var. Korkmayın, durduk yere bir sorun üretmenize gerek yok. Github vb. platformlarda her projenin sorunlar (issues) kısmı olur, burada projeden faydalanan insanlar, proje ile alakalı karşılaştıkları problemleri yazarlar. Burada biraz vakit geçirmeniz gerekebilir, projeye yeni katılmış biri olarak her sorunu anlamayabilirsiniz.

Hatırlarsanız size ilk katkımın hikayesini anlatacağım demiştim.  Hikayem tam olarak burada başlıyor. Ben de Astro ismindeki bir önyüz freymvörkünü (frontend framework) gözüme kestirmiştim. Size tavsiye ettiğim gibi birkaç günümü sorunlar kısmında, yeni açılan sorunları inceleyerek geçirdim. Pek çoğunu nasıl çözebileceğime dair hiçbir fikrim yoktu. Bu durum canımı sıkmıştı.

Bir sabah yeni açılan bir sorun başlığı ile karşılaştım. Test kütüphanelerini değiştirdikleri için Astro’nun bazı testlerinin güncellenmesi gerekiyordu. Eski testler bu yeni kütüphane kullanılarak tekrar yazılacaktı. Sorun başlığını açan kişi, bu sorunun projeye yeni dahil olmak isteyenler için iyi bir fırsat olduğunu da özellikle belirtmişti. Daha önce test yazmış olduğumdan,  ne yapılması gerektiğini kestirebiliyordum. Hemen yorumlar kısmında katkı sunmak istediğimi belirttim. Sırada kodda gerekli değişikleri yapıp katkı isteğini göndermek vardı.

Sizin de bir sorunu seçtiğinizi varsayalım, dilerseniz sorun başlığının altına sorunla ilgilenmeye başladığınızı yorum olarak belirtebilirsiniz. Genellikle çözülmesi gereken sorun sayısı, katkı sağlayıcıların sayısından fazla olduğundan bunu yazmanıza bile gerek kalmayabilir.

(Yorumumun fotoğrafı)

### Triyaj

Genellikle projeler yapacağınız değişiklikleri orijinal kodda değil kendi kopyanızda (fork) yapmanızı isterler. Büyük projelerin kodunu düzenlemek tabiri caizse *kirli* bir iş olduğundan, proje sahipleri kodu batırmanızı istemezler, muhtemel karışıkların önüne geçmek için kendi kopyanızdan çalışmanızı talep ederler. Neyse ki bir projenin kopyasını oluşturmak birkaç saniyelik oldukça basit bir iştir.

Bu aşamada ana klasörün altında `CONTRIBUTING.md` isminde bir dosya olup olmadığını kontrol etmeyi unutmayın. Bu dosyadan ilgili projede katkı sağlama sürecinin nasıl işlediğini ve nelere dikkat etmeniz gerektiğini öğrenebilirsiniz.

Kendi kopyanızı oluşturduktan sonra sıra, sorunun kaynağını tespit etmeye gelir. Buna triyaj denir. Sorun başlığında soruna yol açmış kodun bulunduğu dosyanın ismi bazen verilir, bazen de henüz tespit edilemediğinden verilmez. Bu durumda soruna neyin yol açtığını sizin tespit etmeniz beklenir.

Bunu tespit etmek için öncelikle sorunun açıklamasını dikkatlice okumalısınız. Eğer sorun başlığını açan kişi, sorunun ne üzerine ortaya çıktığını detaylı bir şekilde belirtmediyse bunu sormaktan asla çekinmeyin. Sorunun bütün yükünü omuzlamak zorunda değilsiniz. Sorunu detaylıca açıklamak, başlığı açan kişinin sorumluluğundadır. Pek çok proje raporlanan sorunun yeniden çıkarılabilir (reproducable) olmasını ister. Yani siz de sorunu yaşayan kişiyle aynı adımları takip ettiğinizde aynı hatayla karşılaşıyor olmalısınız.

### Çözüm

 Sorunu yeniden çıkardıktan sonra sırada bunun kaynağını tespit etmek var. Neyse ki hata ayıklama araçları bize hatanın muhtemel kaynaklarıyla alakalı detaylı bilgiler verebiliyor. Burada size düşen sanki zamanda geriye gider gibi, hatanın ortaya çıktığı fonksiyondan başlayarak fonksiyon çağrılarını geriye doğru takip etmek ve hangi parametrenin, değişkenin veya fonksiyon çağrısının sorunlu olduğunu tespit etmek.

 Benim ilk katkımda yalnızca bir test dosyasında değişiklik yapmam gerektiğinden bu aşamayı atlamıştım fakat çözdüğüm bir başka sorunda [(3)](https://github.com/withastro/astro/issues/10161) problemin kaynağı fonksiyonun eksik bir değer dönmesiydi. Bunu eklediğimde hata çözülmüş oldu. Sorunu çözmem için yalnızca 5 satır eklemem gerekiyordu!

Sorunun kaynağı olan değişkeni, parametreyi, fonksiyonu vb. tespit ettikten sonra bir çözüm üretmeye çalışın. Eğer bulduğunuz çözüm birden fazla dosyada değişiklik yapmanızı gerektiriyorsa ve işe yarayıp yaramayacağından emin değilseniz hemen sorun başlığına geri dönüp aklınızdaki fikri detaylı bir şekilde yorumlar kısmına yazın. Gereksiz yere vakit kaybetmektense projede tecrübe sahibi birinden geri bildirim almak çok daha mantıklı olacaktır!

(örnek geri bildirim fotoğrafı)

Pekala, sorunun kaynağını tespit ettiniz, gerekli değişiklikleri yaptınız ve artık aynı adımları tekrar uyguladığınızda sorunun ortadan kalktığını gördünüz! Öncelikle sizi tebrik ederim, zor bir iş başardınız. Fakat kötü bir haberim var, sorunun gerçekten ortadan kalktığına diğer yazılımcıları da ikna etmeniz gerekiyor. Bunun için çözümünüzü test etmelisiniz!

### Test

Sorunu çözmeyi başardıysanız, test yazması da zor olmayacaktır. Yine de her proje farklı bir test düzeni takip ettiği için projenizin testlerini nasıl kurguladıklarını öğrenmek biraz zaman alabilir. Diğer testleri örnek alarak testinizi yazmaya başlayın. Testiniz, sırayla sorundaki adımları canlandırmalı ve kodun herhangi bir hata vermediğini göstermeli. Bu, aynı zamanda yaptığınız değişiklikleri geri aldığınızda testin hata vermesi gerektiği anlamına geliyor. Duruma göre birden fazla test yazmanız da gerekebilir.

(Astro test klasörü)
### Mutlu Son

Uzun soluklu ve yorucu bir süreç oldu ama artık ilk katkınızı yapmaya hazırsınız! Katkı isteğinizi atın ve beklemeye başlayın. Muhtemelen yaptığınız değişiklikler öncelikle bazı otomatik testlerden geçecek. Sonrasında katkı isteklerini değerlendirmekle görevli biri katkınızı inceleyecek ve yaptığınız değişiklikleri değerlendirecektir. Şanslıysanız isteğiniz hemen kabul edilir fakat zaman zaman ilgili kişi sizden bazı düzenlemeler yapmanızı isteyebilir. Bu hevesinizi kırmasın, projenin uyum içerisinde çalışması için bütün katkıların belirli estetik ve işlevsel kriterlere uyması gerekiyor.

Düzenlemelerden sonra katkı isteğiniz kabul edilirse öncelikle derin bir nefes alın, sonra bilgisayarınızı kapatıp soğuk bir bardak su için. Aynaya bakıp gülümseyin ve yaptığınız değişiklerin gelecek güncelleme ile beraber binlerce bilgisayara dalga dalga yayılacağını hayal edin.

Katkı sağlama sürecini son kez özetleyecek olursak:
1. Zevkinize uygun hareketli bir proje seçimi.
2. Sorunun (issue) seçimi.
3. Kendi kopyanızı (fork) oluşturma.
4. Triyaj, sorunun kaynağını tespit etme.
5. Çözümü uygulama.
6. Test etme.
7. Katkı isteği (pull request) gönderme.

Umarım anlattıklarım katkı sağlayıcı olma yolunda ilk adımı atmanızı kolaylaştırır. Emin olun ilk katkınızı yapmak sandığınızdan çok daha kolay olacak! Yazıyla alakalı geri bildirimlerinizi bekliyorum, bir başka yazıda görüşmek dileğiyle. 👋️

---

### Kaynaklar

1. https://www.redhat.com/en/topics/open-source/what-is-open-source
2. https://snyk.io/learn/open-source-licenses/
3. https://github.com/withastro/astro/issues/10161
