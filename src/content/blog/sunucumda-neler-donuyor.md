---
draft: false
title: Sunucumda Neler Dönüyor
summary: Bu sayfayı sunmamı mümkün kılan, kimisi CI/CD'den, kimsi e-postadan, kimisi konteynerlerden sorumlu servisleri tanıyoruz.
category: teknik
subcategory: Tanıtım
date: 2024-08-25
---

<style>

h3, hr {
    margin: 0.7em 0 0.5em 0
}

#full-text p {
    margin: 0.5em 0 1.2em 0;
}

figcaption {
    color: gray;
    margin-top: -0.8em;
    text-align: center;
    font-size: 0.9em;
}

ul {
    line-height: 2em;
}

li a {
    color: black;
}

table {
    border: 1px solid slategrey;
    padding: 4px;
    background-color: #f8f9fa;
    margin: 0.5em 0 1.2em 0;
}

th {
    text-align: left;
    white-space: nowrap;
}

td {
    text-align: left;
    white-space: nowrap;
}

</style>

Birkaç ay önce, Vercel’lerin, Firebase’lerin, AWS’lerin sunduğu sihirlerin etkisini yitirdiği, vadettikleri masal diyarının yerini sermayeci, küçük bir ada ülkesinin aldığı o huzursuz sınıra varmıştım. Bir başka deyişle, bu platformların sunduğu hizmetlerden ücretsiz yararlanma hakkımı kaybetmiştim. Artık bir bedel ödemem gerekiyordu.

Peki bu bedeli ödemek beni özgür kılacak mıydı? Tam aksine, projemi bir PaaS’ın ahtapot kollarına teslim edeceğim bu sınırın ötesinde kapalı bir ekosistem, internette cevabı olmayan sorular ve desteklenmeyen API’ler görüyordum. Karar vermem için bana tanıdıkları o dar vakit içerisinde, daha esnek ve uzun vadeli bir çözüm arayışına giriştim.

Araştırmalarım neticesinde bulduğum çözüm yeni bir teknoloji, yeni bir PaaS değildi. Çözüm geriye, DevOps’un köklerine dönmekti. Kendi CI/CD sistemimi yürütecek, uygulamalarımı sunacak, Docker imajlarımı saklayacak bir sunucu kuracaktım. Kollarımı sıvadım, 2592000 saniyelik sayacımı başlattım ve işe koyuldum.

Sayaç sıfırı gösterdiğinde istediğim özelliklere sahip bir sunucu kurmayı başarmıştım. Yaklaşık 3 aydır işte bu sunucuyu kullanıyorum. Bu tecrübenin kendi sunucusunu kurmak isteyenlere faydalı olacağını düşünerek, sunucumdaki servisleri tanıttığım bu yazıyı kaleme aldım.

### İçindekiler

### Sunucumun Teknik Özellikleri

<table>
<tr>
<th>CPU:</th>
<td>Sanal, tek çekirdek</td>
</tr>
<tr>
<th>RAM:</th>
<td>2 GB</td>
</tr>
<tr>
<th>Harddisk:</th>
<td>50GB</td>
</tr>
<tr>
<th>İşletim Sistemi:</th>
<td>Ubuntu</td>
</tr>
</table>

Sunucumu Linode’dan kiraladım. İlk kayıt olduğunuzda 3 ay süreyle kullanabileceğiniz 100$’lık hediye kuponu veriyor. Dokümantasyonu çok kapsamlı, destek hizmeti de ihtiyaç duyduğunuzda hızlı bir şekilde dönüş yapıyor. Ayrıca çok kullanışlı ve sade bir arayüzü var. Özellikle AWS’den gelenler arayüzün sadeliği karşısında parmaklarını ısırabilir.
### Elektronik Posta: Docker Mailserver

E-posta servisini Docker konteynerleri yeniden başlatıldığı, uygulamam çöktüğü, CI/CD sistemim derleme işlemini bitirdiği zaman haberdar edilmek için kurdum. Diğer başlıklarda tanıttığım bütün servisler bir şekilde e-posta servisiyle bağlantılı.

Bunun için öncelikle bir dizi DNS ayarı yaptım. Bunlar yapılmadığı takdirde e-postalar istenmeyen (spam) olarak işaretleniyor, bazı durumlarda doğrudan engelleniyor, gönderilen adrese bile ulaşmıyor.

Mail sunucusu olarak [Docker Mailserver](https://github.com/docker-mailserver/docker-mailserver) ismindeki bir projeyi kullandım. Bu proje arka planda Postfix ve Dovecot uygulamalarını kullanıyor. Bunları ayrıca kurması çok daha uğraştırıcı. Docker Mailserver’de birkaç ufak konfigürasyon ile servisiniz kullanıma hazır hale geliyor. Mail sunucumu test etmek için log101@log101.dev adresine geri bildirimlerinizi gönderebilirsiniz!

### HTTP Sunucusu: Nginx

HTTP sunucusu deyince akla iki isim gelir: Nginx ve Apache. Benim aklıma ilk Nginx geldiği için Nginx’i tercih ettim. HTTP sunucusu tüm bu anlattıklarım arasındaki en önemli hizmet çünkü internet sayfalarının kullanıcılara sunulmasından sorumlu.

Sunulacak her uygulama veya internet sayfası için bir konfigürasyon dosyası oluşturmak gerekiyor. Ayrıca sayfaların SSL sertifikalarını üretmek gerekiyor, bunun için Certbot ismindeki bir aracı kullanıyorum.

Uygulamalarımı genellikle ön uçta statik, yalnızca Nginx ile sunulabilecek şekilde yazmayı tercih ediyorum. Arka uçta da her biri için bir Go uygulaması var. Böylece kaynak tüketimimi asgari seviyeye çekmiş oluyorum. Sunduğum örnek bir uygulama: https://konulukonum.log101.dev

### Durum (Status) Sayfası: Gatus

Yaygın internet uygulamalarının bir çoğunun durum (status) sayfası var. Bu sayfalar sayesinde uygulamalara ulaşılamadığında sorunun hangi taraftan (sunucu veya istemci) kaynaklandığını öğrenme imkanı oluyor. Örnek vermek gerekirse: https://discordstatus.com/.,

Ben de kendi uygulamalarım ve servislerimin durumunu görüntülemek için bir durum sayfası oluşturdum. Bunun için konteyner olarak çalıştırılan [Gatus](https://github.com/TwiN/gatus) ismindeki açık kaynak bir projeyi kullandım.

Çalışma mantığı oldukça basit. Konfigürasyon dosyasına Gatus’un HTTP isteği atacağı URL’lerin listesi veriliyor. Gatus, belirli sıklıkta bu istekler ile hayatta olup olmadıklarını kontrol ediyor. Ulaşamadığı durumda konfigürasyon dosyasında belirtilen adrese e-posta gönderiyor. Durum sayfam için: https://status.log101.dev

### DevOps: Gitea

Github yalnızca kod barındırma değil aynı zamanda bir CI/CD platformu. *Github Actions* sayesinde projelerin kodu derleme, test etme gibi süreçlerden geçirilerek yayınlamaya hazır hale getirilebiliyor. [Gitea](https://github.com/go-gitea/gitea) de Github’un muadili, kendi sunucunuzda barındırabileceğiniz (self hosted) bir proje. Bir diğer alternatif Gitlab’e kıyasla çok daha az kaynak tüketiyor. CI/CD sisteminin çalışma şekli de Github ile neredeyse birebir aynı.

Gitea, Github profilini *yeşil* tutmak isteyenler için “mirror push” imkanı sunuyor. Böylece Gitea’deki yaptığınız değişiklikler Github’daki projenize de uygulanıyor. Gitea sayfamı incelemek için: https://git.log101.dev

### Konteyner Kütüğü (Registry): Distribution

Docker’dan kaçabilirsiniz ama saklanamazsınız. O eninde sonunda sizi kendini kullanmaya mecbur bırakır. Docker imajı olarak dağıtılan uygulamaların başka bir sunucuda düzgün bir şekilde güncellenebilmesi için bir konteyner kütüğüne (container registry) kaydedilmesi gerekiyor.

Bunun için Docker’ın resmi kütüğü (Docker Hub) kullanılabileceği gibi sunucunuzda kendi kütüğünüzü barındırmak da mümkün. Ben ikinci yöntemi tercih ettim. Bunun için de [Distribution](https://github.com/distribution/distribution/) isminde bir projeyi kullandım. Distribution’ın kendisi konteyner olarak çalıştırılıyor.

### Otomatik Güncelleme: Watchtower

Docker imajı olarak dağıttığım arka uç uygulamalarımı güncelledikten sonra otomatik olarak yeniden başlatmak için [Watchtower](https://github.com/containrrr/watchtower) isminde bir proje kullanıyorum.

Watchtower, docker imajlarını düzenli olarak kontrol ediyor ve bir güncelleme olduğu zaman konteynerleri yeniden başlatıyor. Ek olarak e-posta bildirim gönderebiliyor. Sistemdeki diğer servisler de konteyner tabanlı olduğu için beni bunları elimle güncelleme derdinden kurtarıyor.

### Gözlemleme: Linux Dash

Peki tüm bu saydığım servisler ne kadar kaynak tüketiyor? Özellikle RAM kapasiteniz yalnızca 2 gigabaytsa sistemin ne kadar kaynak tükettiğini görmek oldukça önemli. [Linux Dash](https://github.com/tariqbuilds/linux-dash) bunun için kullanılabilecek, Node uygulaması olarak çalıştırılan, kendisi de çok az kaynak tüketen bir servis. Bu servis sayesinde sisteminizin durumunu RAM, CPU vb. göstergeler üzerinden takip edebiliyorsunuz. Sunucumun gözlem sayfası için: https://monitor.log101.dev

### Gelecek

Sistemimde çalışan servisleri kısaca tanıtmış oldum. Bunlar şimdilik işimi görüyor fakat yakın gelecekte daha fazlasına ihtiyaç duyacağımı tahmin ediyorum. Özellikle güvenlik açısından sunucumun çok eksiği var. DDoS saldırılarına açık ve bildiğim bilmediğim birçok zafiyete sahip. Yine de kendi CI/CD sistemimi kullanmak ve kodum ile alakalı bütün süreçleri yönetmek projelerime esneklik katıyor.

Kendi sunucunuzu kurmanın, sizin için de keyifli ve kıymetli bir tecrübe olacağına inanıyorum.

Yazımı okuduğunuz için teşekkürler, geri dönüşlerinizi bekliyorum!
