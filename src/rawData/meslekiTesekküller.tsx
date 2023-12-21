interface NaceObject {
    ID: number;
    dc_MESLEK_GRUBU:string;
    dc_MESLEK_GRUBU_ADI:string;
    dc_NACE_KODU:string;
    dc_NACE_BASLIK:string;

    // Add other properties if there are any
  }
export const nacelist:NaceObject[]=[
    {
        "ID": 1,
        "dc_MESLEK_GRUBU": "1",
        "dc_MESLEK_GRUBU_ADI": "PERAKENDE TİCARET",
        "dc_NACE_KODU": "47.11.01",
        "dc_NACE_BASLIK": "Bakkal ve marketlerde yapılan perakende ticaret (belirli bir mala tahsis edilmemiş mağazalarda gıda, içecek veya tütün ağırlıklı perakende ticaret)"
    },
    {
        "ID": 21,
        "dc_MESLEK_GRUBU": "2",
        "dc_MESLEK_GRUBU_ADI": "TOPTAN VE DIŞ TİCARET",
        "dc_NACE_KODU": "46.19.01",
        "dc_NACE_BASLIK": "Çeşitli malların bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 26,
        "dc_MESLEK_GRUBU": "3",
        "dc_MESLEK_GRUBU_ADI": "BİJUTERİ, OYUNCAK VE HEDİYELİK EŞYA",
        "dc_NACE_KODU": "23.19.04",
        "dc_NACE_BASLIK": "Küçük cam eşya imalatı (biblo, vb. süs eşyası, boncuklar, imitasyon inciler/taşlar, imitasyon mücevherler, vb. dahil)"
    },
    {
        "ID": 58,
        "dc_MESLEK_GRUBU": "4",
        "dc_MESLEK_GRUBU_ADI": "KUYUMCULUK",
        "dc_NACE_KODU": "24.41.16",
        "dc_NACE_BASLIK": "Altın imalatı (işlenmemiş, yarı işlenmiş, toz halde) ile gümüş veya adi metallerin altınla kaplanması veya giydirilmesi"
    },
    {
        "ID": 72,
        "dc_MESLEK_GRUBU": "5",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ TEKNOLOJİLERİ",
        "dc_NACE_KODU": "26.20.01",
        "dc_NACE_BASLIK": "Bilgisayar ve bilgisayar çevre birimleri imalatı"
    },
    {
        "ID": 96,
        "dc_MESLEK_GRUBU": "6",
        "dc_MESLEK_GRUBU_ADI": "KAĞIT VE KIRTASİYE",
        "dc_NACE_KODU": "17.11.08",
        "dc_NACE_BASLIK": "Kağıt hamuru imalatı"
    },
    {
        "ID": 122,
        "dc_MESLEK_GRUBU": "7",
        "dc_MESLEK_GRUBU_ADI": "KOZMETİK",
        "dc_NACE_KODU": "20.42.01",
        "dc_NACE_BASLIK": "Ağız veya diş bakım ürünleri imalatı (diş macunu, vb. ile takma dişleri ağızda sabit tutmaya yarayan macun ve tozlar ile diş temizleme iplikleri dahil)"
    },
    {
        "ID": 139,
        "dc_MESLEK_GRUBU": "8",
        "dc_MESLEK_GRUBU_ADI": "İLAÇ VE TIBBİ CİHAZ",
        "dc_NACE_KODU": "21.10.01",
        "dc_NACE_BASLIK": "Temel eczacılık ürünlerinin imalatı (antibiyotik, vitamin, salisilik asit gibi ilaçların imalatında farmakolojik özelliklerinden yararlanmak üzere tıbbi olarak etken maddeler ile kan ürünlerinin, salgı bezi ve ekstrelerin, hormonların vb. imalatı)"
    },
    {
        "ID": 167,
        "dc_MESLEK_GRUBU": "9",
        "dc_MESLEK_GRUBU_ADI": "TOPTAN GIDA VE TEMİZLİK ÜRÜNLERİ",
        "dc_NACE_KODU": "10.41.02",
        "dc_NACE_BASLIK": "Bitkisel sıvı yağ (yenilebilen) imalatı (soya, susam, haşhaş, pamuk, fındık, kolza, hardal vb. yağlar) (zeytin yağı, ayçiçeği yağı ve mısır yağı hariç)"
    },
    {
        "ID": 226,
        "dc_MESLEK_GRUBU": "10",
        "dc_MESLEK_GRUBU_ADI": "CAM VE CAM ÜRÜNLERİ",
        "dc_NACE_KODU": "23.11.01",
        "dc_NACE_BASLIK": "Levha veya tabaka halinde düz cam imalatı (telli, buzlu cam, renkli veya boyalı düz cam dahil) (dökülmüş, haddelenmiş, çekilmiş, üflenmiş, float, yüzeyi parlatılmış veya cilalanmış ancak başka şekilde işlenmemiş olanlar)"
    },
    {
        "ID": 240,
        "dc_MESLEK_GRUBU": "11",
        "dc_MESLEK_GRUBU_ADI": "PEYZAJ VE ÇİÇEKÇİLİK",
        "dc_NACE_KODU": "01.14.01",
        "dc_NACE_BASLIK": "Şeker kamışı yetiştirilmesi"
    },
    {
        "ID": 284,
        "dc_MESLEK_GRUBU": "12",
        "dc_MESLEK_GRUBU_ADI": "EKMEK, UN VE UNLU MAMÜLLER",
        "dc_NACE_KODU": "10.31.01",
        "dc_NACE_BASLIK": "Patatesin işlenmesi ve saklanması (dondurulmuş, kurutulmuş, suyu çıkartılmış, ezilmiş patates imalatı) (soyulması dahil)"
    },
    {
        "ID": 340,
        "dc_MESLEK_GRUBU": "14",
        "dc_MESLEK_GRUBU_ADI": "HAYVANSAL GIDA ÜRÜNLERİ",
        "dc_NACE_KODU": "01.41.31",
        "dc_NACE_BASLIK": "Sütü sağılan büyük baş hayvan yetiştiriciliği (sütü için inek ve manda yetiştiriciliği)"
    },
    {
        "ID": 389,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.10.01",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen okul öncesi eğitim faaliyeti (okula yönelik eğitim verilmeyen gündüz bakım (kreş) faaliyetleri hariç)"
    },
    {
        "ID": 390,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.10.02",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen okul öncesi eğitim faaliyeti (okula yönelik eğitim verilmeyen gündüz bakım (kreş) faaliyetleri hariç)"
    },
    {
        "ID": 391,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.20.06",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen fiziksel veya zihinsel engellilere yönelik ilköğretim faaliyeti"
    },
    {
        "ID": 392,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.20.07",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen ilköğretim faaliyeti (yetişkinlere yönelik okuma yazma programlarının verilmesi dahil, engelliler için verilen eğitim hariç)"
    },
    {
        "ID": 393,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.20.08",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen fiziksel veya zihinsel engellilere yönelik ilköğretim faaliyeti"
    },
    {
        "ID": 394,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.20.09",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen ilköğretim faaliyeti (yetişkinlere yönelik okuma yazma programlarının verilmesi dahil, engelliler için verilen eğitim hariç)"
    },
    {
        "ID": 395,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.31.12",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen genel ortaöğretim (lise) faaliyeti (engellilere yönelik verilen eğitim hariç)"
    },
    {
        "ID": 396,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.31.13",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen fiziksel veya zihinsel engellilere yönelik genel ortaöğretim (lise) faaliyeti"
    },
    {
        "ID": 397,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.31.14",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen genel ortaöğretim (lise) faaliyeti (engellilere yönelik verilen eğitim hariç)"
    },
    {
        "ID": 398,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.31.16",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen fiziksel veya zihinsel engellilere yönelik genel ortaöğretim (lise) faaliyeti"
    },
    {
        "ID": 399,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.10",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen fiziksel veya zihinsel engellilere yönelik teknik ve mesleki ortaöğretim (lise) faaliyeti"
    },
    {
        "ID": 400,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.11",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen teknik ve mesleki ortaöğretim (lise) faaliyeti (engellilere yönelik verilen eğitim hariç)"
    },
    {
        "ID": 401,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.12",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen fiziksel veya zihinsel engellilere yönelik teknik ve mesleki ortaöğretim (lise) faaliyeti"
    },
    {
        "ID": 402,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.13",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen teknik ve mesleki ortaöğretim (lise) faaliyeti (engellilere yönelik verilen eğitim hariç)"
    },
    {
        "ID": 403,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.14",
        "dc_NACE_BASLIK": "Çıraklık eğitimi"
    },
    {
        "ID": 404,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.15",
        "dc_NACE_BASLIK": "Ticari sertifika veren havacılık, yelkencilik, gemicilik, vb. kursların faaliyetleri"
    },
    {
        "ID": 405,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.16",
        "dc_NACE_BASLIK": "Ticari taşıt kullanma belgesi veren sürücü kurslarının faaliyetleri"
    },
    {
        "ID": 406,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.32.90",
        "dc_NACE_BASLIK": "Mesleki amaçlı eğitim veren diğer kursların faaliyetleri"
    },
    {
        "ID": 407,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.41.01",
        "dc_NACE_BASLIK": "Ortaöğretim sonrası yükseköğretim derecesinde olmayan eğitim faaliyeti"
    },
    {
        "ID": 408,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.42.01",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen yükseköğretim faaliyeti (yükseköğretim düzeyinde eğitim sağlayan konservatuarlar dahil)"
    },
    {
        "ID": 409,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.42.03",
        "dc_NACE_BASLIK": "Özel öğretim kurumları tarafından verilen yükseköğretim faaliyeti (yükseköğretim düzeyinde eğitim sağlayan konservatuarlar dahil)"
    },
    {
        "ID": 410,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.51.03",
        "dc_NACE_BASLIK": "Spor ve eğlence eğitim kursları (futbol, dövüş sanatları, jimnastik, binicilik, yüzme, dalgıçlık, paraşüt, briç, yoga, vb. eğitimi ile profesyonel spor eğitimcilerinin faaliyetleri dahil, temel, orta ve yükseköğretim düzeyinde verilen eğitim hariç)"
    },
    {
        "ID": 411,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.52.05",
        "dc_NACE_BASLIK": "Kültürel eğitim veren kursların faaliyeti (bale, dans, müzik, fotoğraf, halk oyunu, resim, drama, vb. eğitimi dahil, temel, orta ve yükseköğretim düzeyinde verilen eğitim hariç)"
    },
    {
        "ID": 412,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.53.01",
        "dc_NACE_BASLIK": "Sürücü kursu faaliyetleri (ticari sertifika veren sürücülük, havacılık, yelkencilik, gemicilik eğitimi hariç)"
    },
    {
        "ID": 413,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.01",
        "dc_NACE_BASLIK": "Halk eğitim merkezlerinin faaliyetleri"
    },
    {
        "ID": 414,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.03",
        "dc_NACE_BASLIK": "Bilgisayar, yazılım, veritabanı, vb. eğitimi veren kursların faaliyetleri (temel, orta ve yükseköğretim düzeyinde verilen eğitim hariç)"
    },
    {
        "ID": 415,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.05",
        "dc_NACE_BASLIK": "Orta öğretime, yüksek öğretime, kamu personeli, vb. sınavlara yönelik yardımcı dersler veren dershanelerin faaliyetleri"
    },
    {
        "ID": 416,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.06",
        "dc_NACE_BASLIK": "Biçki, dikiş, nakış, halıcılık, güzellik, berberlik, kuaförlük kurslarının faaliyetleri"
    },
    {
        "ID": 417,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.08",
        "dc_NACE_BASLIK": "Kuran kursları ve diğer dini eğitim veren yerlerin faaliyetleri (temel, orta ve yükseköğretim düzeyinde verilen eğitim hariç)"
    },
    {
        "ID": 418,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.09",
        "dc_NACE_BASLIK": "Dil ve konuşma becerileri eğitimi veren kursların faaliyetleri (temel, orta ve yükseköğretim düzeyinde verilen eğitim hariç)"
    },
    {
        "ID": 419,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.10",
        "dc_NACE_BASLIK": "Mankenlik, modelistlik, stilistlik kurslarının faaliyetleri"
    },
    {
        "ID": 420,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.12",
        "dc_NACE_BASLIK": "Muhasebe eğitimi kurslarının faaliyeti"
    },
    {
        "ID": 421,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.15",
        "dc_NACE_BASLIK": "Akademik özel ders verme faaliyeti (temel, orta ve yükseköğretim düzeyinde bire bir eğitim)"
    },
    {
        "ID": 422,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.59.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer eğitim kursu faaliyetleri (cankurtaranlık, hayatta kalma, topluluğa konuşma, hızlı okuma, vb. eğitimi dahil, yetişkin okuma yazma programları ile temel, orta ve yükseköğretim düzeyinde verilen eğitim hariç)"
    },
    {
        "ID": 423,
        "dc_MESLEK_GRUBU": "15",
        "dc_MESLEK_GRUBU_ADI": "EĞİTİM",
        "dc_NACE_KODU": "85.60.02",
        "dc_NACE_BASLIK": "Eğitimi destekleyici faaliyetler (eğitim rehberlik, danışmanlık, test değerlendirme, öğrenci değişim programlarının organizasyonu, yaprak test ve soru bankası hazırlama gibi eğitimi destekleyen öğrenim dışı faaliyetler)"
    },
    {
        "ID": 424,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.10.02",
        "dc_NACE_BASLIK": "Otel vb. konaklama yerlerinin faaliyetleri (günlük temizlik ve yatak yapma hizmeti sağlanan yerlerin faaliyetleri) (kendi müşterilerine restoran hizmeti vermeyenler ile devre mülkler hariç)"
    },
    {
        "ID": 425,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.10.05",
        "dc_NACE_BASLIK": "Otel vb. konaklama yerlerinin faaliyetleri (günlük temizlik ve yatak yapma hizmeti sağlanan yerlerin faaliyetleri) (kendi müşterilerine restoran hizmeti verenler ile devre mülkler hariç)"
    },
    {
        "ID": 426,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.20.01",
        "dc_NACE_BASLIK": "Tatil ve diğer kısa süreli konaklama faaliyetleri (hosteller, devre mülkler, tatil evleri, apart oteller, bungalov, dağ evleri, vb.nde) (günlük temizlik ve yatak yapma hizmeti sağlanan oda veya süit konaklama faaliyetleri hariç)"
    },
    {
        "ID": 427,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.20.03",
        "dc_NACE_BASLIK": "Kendine ait veya kiralanmış mobilyalı evlerde bir aydan daha kısa süreli olarak konaklama faaliyetleri"
    },
    {
        "ID": 428,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.20.04",
        "dc_NACE_BASLIK": "Tatil amaçlı pansiyonların faaliyetleri "
    },
    {
        "ID": 429,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.30.36",
        "dc_NACE_BASLIK": "Kamp alanlarının, motorlu karavan, vb. için park yerlerinin faaliyetleri (çadır veya karavan ile kamp kurma amaçlı açık hava tesisi sağlanması, yetişkinler veya çocuklar için kamp programlarında ve avcılık kamplarında konaklama hizmetinin sağlanması, vb.)"
    },
    {
        "ID": 430,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.90.01",
        "dc_NACE_BASLIK": "Öğrenci ve işçi yurtları, pansiyonlar ve odası kiralanan evlerde yapılan konaklama faaliyetleri (tatil amaçlı olanlar hariç)"
    },
    {
        "ID": 431,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.90.02",
        "dc_NACE_BASLIK": "Misafirhaneler, ordu evi, polis evi ve öğretmen evleri ile eğitim ve dinlenme tesisleri gibi konaklama yerlerinin faaliyetleri"
    },
    {
        "ID": 432,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "55.90.03",
        "dc_NACE_BASLIK": "Diğer konaklama yerlerinin faaliyetleri (başka bir birim tarafından işletildiğinde yataklı vagonlar, vb. dahil, misafirhaneler, öğretmen evi, vb. hariç)"
    },
    {
        "ID": 433,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "56.30.04",
        "dc_NACE_BASLIK": "Bar, meyhane ve birahanelerde içecek sunum faaliyetleri (alkollü-alkolsüz)"
    },
    {
        "ID": 434,
        "dc_MESLEK_GRUBU": "16",
        "dc_MESLEK_GRUBU_ADI": "OTELLER",
        "dc_NACE_KODU": "56.30.05",
        "dc_NACE_BASLIK": "Gazino, gece kulübü, taverna, diskotek, kokteyl salonları, vb. yerlerde içecek sunum faaliyetleri (alkollü-alkolsüz)"
    },
    {
        "ID": 435,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "10.85.01",
        "dc_NACE_BASLIK": "Hazır yemek imalatı (vakumla paketlenmiş veya korunmuş olanlar) (lokanta ve catering hizmetleri hariç)"
    },
    {
        "ID": 436,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.01",
        "dc_NACE_BASLIK": "Seyyar yemek servisi faaliyetleri (simit, poğaça, börek, kokoreç, nohut-pilav, piyaz, dondurma, vb. ile kayıklarda yapılanlar dahil)"
    },
    {
        "ID": 437,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.02",
        "dc_NACE_BASLIK": "Börekçilerin faaliyetleri (imalatçıların faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 438,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.03",
        "dc_NACE_BASLIK": "Çorbacıların ve işkembecilerin faaliyetleri (imalatçıların faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 439,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.04",
        "dc_NACE_BASLIK": "Dondurmacıların faaliyetleri (imalatçıların faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 440,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.05",
        "dc_NACE_BASLIK": "Oturacak yeri olmayan fast-food satış yerleri (hamburger, sandviç, tost, vb.), al götür tesisleri ve benzerleri tarafından sağlanan diğer yemek hazırlama ve sunum faaliyetleri"
    },
    {
        "ID": 441,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.06",
        "dc_NACE_BASLIK": "Döner, lahmacun ve pidecilik faaliyeti (garson servisi sunanlar ile self servis sunanlar dahil, imalatçıların ve al götür tesislerin faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 442,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.07",
        "dc_NACE_BASLIK": "Ciğer, kokoreç, köfte ve kebapçıların faaliyeti (garson servisi sunanlar ile self servis sunanlar dahil, imalatçıların ve al götür tesislerin faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 443,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.08",
        "dc_NACE_BASLIK": "Diğer lokanta ve restoranların (içkili ve içkisiz) faaliyetleri (garson servisi sunanlar ile self servis sunanlar dahil, imalatçıların ve al götür tesislerin faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 444,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.10",
        "dc_NACE_BASLIK": "Pizzacıların faaliyeti (garson servisi sunanlar ile self servis sunanlar dahil, imalatçıların ve al götür tesislerin faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 445,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.14",
        "dc_NACE_BASLIK": "Başka birimler tarafından işletildiğinde gemi ve trenlerde restoran işletmeciliği (yemekli vagon, vb.)"
    },
    {
        "ID": 446,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.17",
        "dc_NACE_BASLIK": "Mantıcı ve gözlemecilerin faaliyeti (garson servisi sunanlar ile self servis sunanlar dahil, imalatçıların ve al götür tesislerin faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 447,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.18",
        "dc_NACE_BASLIK": "Oturacak yeri olan fast-food satış yerleri (hamburger, sandviç, tost, vb.) tarafından sağlanan yemek hazırlama ve sunum faaliyetleri"
    },
    {
        "ID": 448,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.10.19",
        "dc_NACE_BASLIK": "Yiyecek ağırlıklı hizmet veren kafeteryaların faaliyetleri"
    },
    {
        "ID": 449,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.21.01",
        "dc_NACE_BASLIK": "Özel günlerde dışarıya yemek sunan işletmelerin faaliyetleri "
    },
    {
        "ID": 450,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.29.01",
        "dc_NACE_BASLIK": "Kantinlerin faaliyetleri (spor, fabrika, okul veya işyeri kantinleri, vb.)"
    },
    {
        "ID": 451,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.29.03",
        "dc_NACE_BASLIK": "Hava yolu şirketleri ve diğer ulaştırma şirketleri için sözleşmeye bağlı düzenlemelere dayalı olarak yiyecek hazırlanması ve temini hizmetleri"
    },
    {
        "ID": 452,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.29.90",
        "dc_NACE_BASLIK": "Dışarıya yemek sunan diğer işletmelerin faaliyetleri (spor, fabrika, işyeri, üniversite, vb. mensupları için tabldot servisi, vb. dahil, özel günlerde hizmet verenler hariç)"
    },
    {
        "ID": 453,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.30.02",
        "dc_NACE_BASLIK": "Çay ocakları, kıraathaneler, kahvehaneler, kafeler, meyve suyu salonları ve çay bahçelerinde içecek sunum faaliyeti"
    },
    {
        "ID": 454,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.30.03",
        "dc_NACE_BASLIK": "Lokallerde içecek sunum faaliyeti (alkollü-alkolsüz)"
    },
    {
        "ID": 455,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.30.06",
        "dc_NACE_BASLIK": "Trenlerde ve gemilerde işletilen barların faaliyetleri (alkollü-alkolsüz)"
    },
    {
        "ID": 456,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.30.08",
        "dc_NACE_BASLIK": "Boza, şalgam ve sahlep sunum faaliyeti"
    },
    {
        "ID": 457,
        "dc_MESLEK_GRUBU": "17",
        "dc_MESLEK_GRUBU_ADI": "RESTORAN VE YİYECEK İÇECEK HİZMETLERİ",
        "dc_NACE_KODU": "56.30.90",
        "dc_NACE_BASLIK": "Seyyar içecek satanlar ile diğer içecek sunum faaliyetleri"
    },
    {
        "ID": 458,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.11.06",
        "dc_NACE_BASLIK": "Merkez bankası faaliyetleri"
    },
    {
        "ID": 459,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.19.01",
        "dc_NACE_BASLIK": "Bankaların faaliyetleri (katılım bankaları, tasarruf bankaları, kredi birlikleri vb. dahil, merkez bankası ve yatırım bankaları hariç)"
    },
    {
        "ID": 460,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.20.19",
        "dc_NACE_BASLIK": "Holding şirketlerinin faaliyetleri (bağlı iştiraklerini yönetenler hariç)"
    },
    {
        "ID": 461,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.30.01",
        "dc_NACE_BASLIK": "Trustlar, fonlar ve benzeri mali varlıklar"
    },
    {
        "ID": 462,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.91.01",
        "dc_NACE_BASLIK": "Finansal kiralama (finansal leasing)"
    },
    {
        "ID": 463,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.92.01",
        "dc_NACE_BASLIK": "Diğer kredi verme faaliyetleri (bankacılık sistemi dışında borç para verilmesi, uluslararası ticari finansman, mevduat kabul etmeyen uzmanlaşmış kuruluşlarca konut kredisi verilmesi, rehin karşılığında borç para verilmesi vb.) (ikrazatçılar hariç)"
    },
    {
        "ID": 464,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.92.04",
        "dc_NACE_BASLIK": "Tarım kredi kooperatiflerinin kredi verme faaliyetleri"
    },
    {
        "ID": 465,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.92.07",
        "dc_NACE_BASLIK": "İkrazatçıların faaliyetleri"
    },
    {
        "ID": 466,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.92.08",
        "dc_NACE_BASLIK": "Tüketici finansman şirketlerinin faaliyetleri"
    },
    {
        "ID": 467,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.99.01",
        "dc_NACE_BASLIK": "Faktoring faaliyetleri"
    },
    {
        "ID": 468,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.99.03",
        "dc_NACE_BASLIK": "Gayrimenkul yatırım ortaklığı"
    },
    {
        "ID": 469,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.99.08",
        "dc_NACE_BASLIK": "Yatırım bankacılığı faaliyetleri"
    },
    {
        "ID": 470,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.99.09",
        "dc_NACE_BASLIK": "Varlık yönetim şirketlerinin faaliyetleri (mülkiyet devri yoluyla yapılanlar)"
    },
    {
        "ID": 471,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.99.10",
        "dc_NACE_BASLIK": "Menkul kıymet yatırım ortaklığı"
    },
    {
        "ID": 472,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "64.99.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer finansal hizmet faaliyetleri (swap, opsiyon ve diğer riskten korunma sözleşmelerinin yazılması, vb. dahil)"
    },
    {
        "ID": 473,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.11.02",
        "dc_NACE_BASLIK": "Finansal piyasaların yönetimi (emtia sözleşmeleri borsası, menkul kıymetler borsası, hisse senedi borsası, vb. yönetimi dahil, kamu otoriteleri tarafından yapılanlar hariç)"
    },
    {
        "ID": 474,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.12.01",
        "dc_NACE_BASLIK": "Menkul kıymetler aracılık faaliyetleri (borsa aracılığı ve vadeli işlemler dahil)"
    },
    {
        "ID": 475,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.12.04",
        "dc_NACE_BASLIK": "Döviz bürolarının faaliyetleri"
    },
    {
        "ID": 476,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.12.06",
        "dc_NACE_BASLIK": "Kambiyo hizmetleri (döviz bürolarının faaliyetleri hariç)"
    },
    {
        "ID": 477,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.12.08",
        "dc_NACE_BASLIK": "Emtia sözleşmeleri aracılık faaliyetleri"
    },
    {
        "ID": 478,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.13.01",
        "dc_NACE_BASLIK": "Kendi adına menkul sermaye iradı faaliyetleri (temettü, banka faizi, iştirak kazançları, huzur hakkı vb.)"
    },
    {
        "ID": 479,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.19.02",
        "dc_NACE_BASLIK": "İpotekli satış ile kredi simsarlığı ve danışmanlığı faaliyetleri (sigorta ve emeklilik fonları ile esnaf ve sanatkarlar kredi kefalet kooperatiflerinin faaliyetleri hariç)"
    },
    {
        "ID": 480,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.19.03",
        "dc_NACE_BASLIK": "Finansal danışmanlık faaliyetleri"
    },
    {
        "ID": 481,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.19.04",
        "dc_NACE_BASLIK": "Menkul kıymetlerin operasyon ve takas işlemi faaliyetleri"
    },
    {
        "ID": 482,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.19.05",
        "dc_NACE_BASLIK": "Yatırım bankacılığına ilişkin yardımcı faaliyetler (birleşme ve devir faaliyeti, işletme finansmanı ve risk sermayesi finansman faaliyeti, vb.)"
    },
    {
        "ID": 483,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.19.06",
        "dc_NACE_BASLIK": "Esnaf ve sanatkarlar kredi kefalet kooperatiflerinin kredi aracılık faaliyetleri ile kredi garanti fonunun faaliyetleri"
    },
    {
        "ID": 484,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.19.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış finansal hizmetlere yardımcı diğer faaliyetler (finansal işlemlerin operasyonu ve takas merkezi faaliyetleri, yatırım ortaklığı ve saklama hizmetleri, vb.)"
    },
    {
        "ID": 485,
        "dc_MESLEK_GRUBU": "18",
        "dc_MESLEK_GRUBU_ADI": "FİNANS KURULUŞLARI",
        "dc_NACE_KODU": "66.30.02",
        "dc_NACE_BASLIK": "Bir ücret veya sözleşmeye dayalı olarak fon yönetimi faaliyetleri (portföy yönetimi, müşterek fonların yönetimi, emeklilik fonlarının yönetimi, vb.)"
    },
    {
        "ID": 486,
        "dc_MESLEK_GRUBU": "19",
        "dc_MESLEK_GRUBU_ADI": "MALİ MÜŞAVİRLİK",
        "dc_NACE_KODU": "69.20.01",
        "dc_NACE_BASLIK": "Mali müşavirlik hizmetleri"
    },
    {
        "ID": 487,
        "dc_MESLEK_GRUBU": "19",
        "dc_MESLEK_GRUBU_ADI": "MALİ MÜŞAVİRLİK",
        "dc_NACE_KODU": "69.20.02",
        "dc_NACE_BASLIK": "Muhasebe ve defter tutma faaliyetleri"
    },
    {
        "ID": 488,
        "dc_MESLEK_GRUBU": "19",
        "dc_MESLEK_GRUBU_ADI": "MALİ MÜŞAVİRLİK",
        "dc_NACE_KODU": "69.20.03",
        "dc_NACE_BASLIK": "Vergi danışmanlığı ve vergi beyannamesinin hazırlanması faaliyetleri"
    },
    {
        "ID": 489,
        "dc_MESLEK_GRUBU": "19",
        "dc_MESLEK_GRUBU_ADI": "MALİ MÜŞAVİRLİK",
        "dc_NACE_KODU": "69.20.04",
        "dc_NACE_BASLIK": "Yeminli mali müşavirlik faaliyetleri"
    },
    {
        "ID": 490,
        "dc_MESLEK_GRUBU": "19",
        "dc_MESLEK_GRUBU_ADI": "MALİ MÜŞAVİRLİK",
        "dc_NACE_KODU": "69.20.05",
        "dc_NACE_BASLIK": "Mali denetim faaliyetleri"
    },
    {
        "ID": 491,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "65.11.02",
        "dc_NACE_BASLIK": "Hayat sigortası faaliyetleri"
    },
    {
        "ID": 492,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "65.12.13",
        "dc_NACE_BASLIK": "Hayat sigortası dışındaki sigortacılık faaliyetleri (sağlık, yangın, motorlu taşıt, konut, tarım, denizcilik, havacılık, kaza, doğal afet, ulaştırma, nakliyat, para kaybı, borçlanma, mali sorumluluk, vb.)"
    },
    {
        "ID": 493,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "65.20.01",
        "dc_NACE_BASLIK": "Reasürans faaliyetleri (sigorta şirketleri tarafından taahhüt edilen sigorta poliçelerine ilişkin riskin üstlenilmesi)"
    },
    {
        "ID": 494,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "65.30.01",
        "dc_NACE_BASLIK": "Emeklilik fonu faaliyetleri"
    },
    {
        "ID": 495,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "66.21.01",
        "dc_NACE_BASLIK": "Risk ve hasar değerlemesi faaliyetleri (sigorta eksperliği dahil)"
    },
    {
        "ID": 496,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "66.22.01",
        "dc_NACE_BASLIK": "Sigorta acentelerinin ve aracılarının faaliyetleri"
    },
    {
        "ID": 497,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "66.22.02",
        "dc_NACE_BASLIK": "Sigorta brokerlarının faaliyetleri"
    },
    {
        "ID": 498,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "66.29.01",
        "dc_NACE_BASLIK": "Aktüerya faaliyetleri"
    },
    {
        "ID": 499,
        "dc_MESLEK_GRUBU": "20",
        "dc_MESLEK_GRUBU_ADI": "SİGORTACILIK",
        "dc_NACE_KODU": "66.29.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış sigorta ve emeklilik fonuna yardımcı diğer faaliyetler (kurtarılan sigortalı eşyanın idaresi, vb.)"
    },
    {
        "ID": 500,
        "dc_MESLEK_GRUBU": "21",
        "dc_MESLEK_GRUBU_ADI": "EMLAK MÜŞAVİRLERİ",
        "dc_NACE_KODU": "68.10.01",
        "dc_NACE_BASLIK": "Kendine ait gayrimenkulün alınıp satılması (kendine ait binalar, devre mülkler, araziler, müstakil evler, vb.)"
    },
    {
        "ID": 501,
        "dc_MESLEK_GRUBU": "21",
        "dc_MESLEK_GRUBU_ADI": "EMLAK MÜŞAVİRLERİ",
        "dc_NACE_KODU": "68.20.02",
        "dc_NACE_BASLIK": "Kendine ait veya kiralanan gayrimenkullerin kiraya verilmesi veya leasingi (kendine ait binalar, devre mülkler, araziler, müstakil evler, vb.)"
    },
    {
        "ID": 502,
        "dc_MESLEK_GRUBU": "21",
        "dc_MESLEK_GRUBU_ADI": "EMLAK MÜŞAVİRLERİ",
        "dc_NACE_KODU": "68.31.01",
        "dc_NACE_BASLIK": "Gayrimenkul acentelerinin faaliyetleri (gayrimenkulü ücret veya sözleşme temeline dayalı olarak satın alınması, satılması ve kiralanmasında  aracılık, vb.)"
    },
    {
        "ID": 503,
        "dc_MESLEK_GRUBU": "21",
        "dc_MESLEK_GRUBU_ADI": "EMLAK MÜŞAVİRLERİ",
        "dc_NACE_KODU": "68.31.02",
        "dc_NACE_BASLIK": "Bir ücret veya sözleşmeye dayalı olarak yapılan gayrimenkul danışmanlık ve ekspertiz faaliyetleri"
    },
    {
        "ID": 504,
        "dc_MESLEK_GRUBU": "21",
        "dc_MESLEK_GRUBU_ADI": "EMLAK MÜŞAVİRLERİ",
        "dc_NACE_KODU": "68.32.02",
        "dc_NACE_BASLIK": "Bir ücret veya sözleşmeye dayalı olarak yapılan gayrimenkul yönetimi faaliyetleri (apartman ve site yöneticiliği, mobil ev alanlarının, müşterek mülkiyetli konutların, devre mülklerin, ikamet amaçlı olmayan mülklerin, vb. yönetimi)"
    },
    {
        "ID": 505,
        "dc_MESLEK_GRUBU": "21",
        "dc_MESLEK_GRUBU_ADI": "EMLAK MÜŞAVİRLERİ",
        "dc_NACE_KODU": "68.32.03",
        "dc_NACE_BASLIK": "Bir ücret veya sözleşmeye dayalı olarak yapılan kira toplama faaliyetleri"
    },
    {
        "ID": 506,
        "dc_MESLEK_GRUBU": "21",
        "dc_MESLEK_GRUBU_ADI": "EMLAK MÜŞAVİRLERİ",
        "dc_NACE_KODU": "68.32.04",
        "dc_NACE_BASLIK": "Bir ücret veya sözleşmeye dayalı olarak yapılan apartman yöneticiliği"
    },
    {
        "ID": 507,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.31.01",
        "dc_NACE_BASLIK": "Demir yolu, metro, tramvay, vb. ile şehir içi ve banliyö yolcu taşımacılığı (şehir içi ve banliyö taşımacılığının parçası olan füniküler, teleferik, vb. dahil)"
    },
    {
        "ID": 508,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.31.04",
        "dc_NACE_BASLIK": "Halk otobüsü ile yapılan şehir içi ve banliyö yolcu taşımacılığı"
    },
    {
        "ID": 509,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.31.05",
        "dc_NACE_BASLIK": "Belediye otobüsü ile yapılan şehir içi ve banliyö yolcu taşımacılığı (belediyenin sağladığı havaalanı otobüsü dahil)"
    },
    {
        "ID": 510,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.31.06",
        "dc_NACE_BASLIK": "Minibüs ve dolmuş ile yapılan şehir içi ve banliyö yolcu taşımacılığı (belirlenmiş güzergahlarda)"
    },
    {
        "ID": 511,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.31.90",
        "dc_NACE_BASLIK": "Kara yolu taşımacılığı ile yapılan diğer şehir içi ve banliyö yolcu taşımacılığı (troleybüs, vb. dahil, halk otobüsü, minibüs, belediye otobüsü ile havaalanı otobüsü hariç) (belirlenmiş güzergahlarda)"
    },
    {
        "ID": 512,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.32.01",
        "dc_NACE_BASLIK": "Taksi ile yolcu taşımacılığı (dolmuşlar hariç)"
    },
    {
        "ID": 513,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.39.02",
        "dc_NACE_BASLIK": "Kara yolu şehir içi ve şehirler arası havaalanı servisleri ile yolcu taşımacılığı"
    },
    {
        "ID": 514,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.39.03",
        "dc_NACE_BASLIK": "Şehir içi, banliyö ve kırsal alanlarda kara yolu ile personel, öğrenci, vb. grup taşımacılığı (şehir içi personel ve okul servisleri, vb.)"
    },
    {
        "ID": 515,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "49.39.08",
        "dc_NACE_BASLIK": "İnsanlar veya hayvanlar tarafından çekilen taşıtlarla veya yük hayvanları ile yolcu taşımacılığı (fayton, bisiklet, vb. ile yolcu taşımacılığı)"
    },
    {
        "ID": 516,
        "dc_MESLEK_GRUBU": "22",
        "dc_MESLEK_GRUBU_ADI": "ŞEHİRİÇİ YOLCU TAŞIMACILIĞI",
        "dc_NACE_KODU": "52.21.10",
        "dc_NACE_BASLIK": "Kara yolu yolcu taşımacılığına yönelik otobüs, minibüs ve taksi duraklarının işletilmesi (otobüs terminal hizmetleri hariç)"
    },
    {
        "ID": 517,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "49.10.01",
        "dc_NACE_BASLIK": "Demir yolu ile şehirler arası yolcu taşımacılığı"
    },
    {
        "ID": 518,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "49.39.01",
        "dc_NACE_BASLIK": "Şehirler arası tarifeli kara yolu yolcu taşımacılığı (şehirler arası otobüs ve tramvay, şehirler arası personel ve okul servisleri, vb. dahil, şehir içi ve şehirler arası havaalanı servisleri ile şehir içi havaalanı otobüsleri hariç)"
    },
    {
        "ID": 519,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "49.39.04",
        "dc_NACE_BASLIK": "Kara yolu (otobüs, vb.) ile uluslararası yolcu taşımacılığı"
    },
    {
        "ID": 520,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "49.39.90",
        "dc_NACE_BASLIK": "Kablolu trenler (füniküler), teleferikler ve telesiyejler (şehir içi, banliyö veya metropol transit sistemlerin parçası olanlar hariç) ve diğer şoförlü taşıtlarla başka yerde sınıflandırılmamış kara yolu yolcu taşımacılığı"
    },
    {
        "ID": 521,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.10.12",
        "dc_NACE_BASLIK": "Deniz ve kıyı sularında yolcu gemilerinin ve teknelerinin mürettebatıyla birlikte kiralanması (gezinti tekneleri dahil)"
    },
    {
        "ID": 522,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.10.13",
        "dc_NACE_BASLIK": "Kıyı sularında yolcuların feribotlarla, kruvaziyer gemilerle ve teknelerle taşınması (deniz otobüsleri işletmeciliği dahil, uluslararası denizler ile göl ve nehirlerde yapılanlar hariç)"
    },
    {
        "ID": 523,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.10.14",
        "dc_NACE_BASLIK": "Deniz ve kıyı sularında yat işletmeciliği"
    },
    {
        "ID": 524,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.10.15",
        "dc_NACE_BASLIK": "Deniz ve kıyı sularında gezi veya tur bot ve teknelerinin işletilmesi (yat işletmeciliği hariç)"
    },
    {
        "ID": 525,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.10.16",
        "dc_NACE_BASLIK": "Uluslararası denizlerde yolcuların gemilerle taşınması"
    },
    {
        "ID": 526,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.10.90",
        "dc_NACE_BASLIK": "Deniz ve kıyı sularında diğer yolcu taşımacılığı (deniz taksi vb. dahil)"
    },
    {
        "ID": 527,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.30.08",
        "dc_NACE_BASLIK": "İç sularda yolcu taşımacılığı (nehir, kanal ve göllerde yapılanlar, vb.) (gezinti amaçlı olanlar dahil)"
    },
    {
        "ID": 528,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "50.30.09",
        "dc_NACE_BASLIK": "İç sularda yolcu taşıma gemilerinin ve teknelerinin mürettebatıyla birlikte kiralanması"
    },
    {
        "ID": 529,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "51.10.01",
        "dc_NACE_BASLIK": "Hava yolu yolcu taşımacılığı (tarifeli olanlar)"
    },
    {
        "ID": 530,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "51.10.02",
        "dc_NACE_BASLIK": "Hava yolu yolcu taşımacılığı (turistik ve gezi amaçlı olanlar ile tarifesiz olanlar) (hava taksi taşımacılığı dahil)"
    },
    {
        "ID": 531,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "51.10.03",
        "dc_NACE_BASLIK": "Hava yolu yolcu taşıma araçlarının mürettebatıyla birlikte kiralanması"
    },
    {
        "ID": 532,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "52.21.09",
        "dc_NACE_BASLIK": "Kara yolu yolcu taşımacılığına yönelik otobüs terminal hizmetleri"
    },
    {
        "ID": 533,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "52.21.13",
        "dc_NACE_BASLIK": "Yolcu taşımacılığı kooperatiflerinin faaliyetleri"
    },
    {
        "ID": 534,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "79.11.01",
        "dc_NACE_BASLIK": "Seyahat acentesi faaliyetleri (hava yolu, deniz yolu, kara yolu, demir yolu ulaşımı için bilet rezervasyon işlemleri ve bilet satışı, seyahat, tur, ulaşım ve konaklama hizmetlerinin toptan veya perakende satışı, vb.)"
    },
    {
        "ID": 535,
        "dc_MESLEK_GRUBU": "23",
        "dc_MESLEK_GRUBU_ADI": "YOLCU TAŞIMACILIĞI VE SEYAHAT ACENTELERİ",
        "dc_NACE_KODU": "79.12.01",
        "dc_NACE_BASLIK": "Tur operatörü faaliyetleri (turların düzenlenmesi)"
    },
    {
        "ID": 536,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.20.01",
        "dc_NACE_BASLIK": "Demir yolu ile şehirler arası ve şehiriçi yük taşımacılığı (donmuş ürünlerin, petrol ürünlerinin, dökme sıvı ve gazların, kuru yüklerin, vb. taşınması)"
    },
    {
        "ID": 537,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.41.01",
        "dc_NACE_BASLIK": "Karayolu ile şehir içi yük taşımacılığı (gıda, sıvı, kuru yük, vb.) (gaz ve petrol ürünleri hariç)"
    },
    {
        "ID": 538,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.41.02",
        "dc_NACE_BASLIK": "Kara yolu ile şehirler arası yük taşımacılığı (gıda, sıvı, kuru yük, vb.) (gaz ve petrol ürünleri hariç)"
    },
    {
        "ID": 539,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.41.03",
        "dc_NACE_BASLIK": "Kara yolu ile uluslararası yük taşımacılığı (gıda, sıvı, kuru yük, vb.) (gaz ve petrol ürünleri hariç)"
    },
    {
        "ID": 540,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.41.05",
        "dc_NACE_BASLIK": "Kara yolu ile canlı hayvan taşımacılığı (çiftlik hayvanları, kümes hayvanları, vahşi hayvanlar vb.)"
    },
    {
        "ID": 541,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.41.06",
        "dc_NACE_BASLIK": "Şoförü ile birlikte kamyon ve diğer motorlu yük taşıma araçlarının kiralanması"
    },
    {
        "ID": 542,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.41.07",
        "dc_NACE_BASLIK": "Karayolu ile insan veya hayvan tarafından çekilen taşıtlarla yük taşımacılığı (tornet, at arabası vb. ile yük taşımacılığı)"
    },
    {
        "ID": 543,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.41.90",
        "dc_NACE_BASLIK": "Kara yolu ile çeşitli taşıma türüne uygun konteyner ve diğer yük taşımacılığı hizmetleri (evden eve nakliyat, vb. hariç)"
    },
    {
        "ID": 544,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.42.01",
        "dc_NACE_BASLIK": "Kara yolu taşımacılığı ile ev ve iş yerlerinin taşınması (evden eve nakliyat, vb.)"
    },
    {
        "ID": 545,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "49.50.90",
        "dc_NACE_BASLIK": "Boru hattı ile diğer malların taşımacılığı (kömür çamuru, kimyasal ürünler, vb.)"
    },
    {
        "ID": 546,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.18",
        "dc_NACE_BASLIK": "Uluslararası sularda dökme kuru yük taşınması (kimyasalların taşınması hariç)"
    },
    {
        "ID": 547,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.19",
        "dc_NACE_BASLIK": "Uluslararası sularda ve kabotaj hattında çekme ve itme hizmetleri (römorkaj) (mavnaların, petrol kulelerinin vb.nin taşınması) (iç sular hariç)"
    },
    {
        "ID": 548,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.20",
        "dc_NACE_BASLIK": "Uluslararası sularda frigorifik gemilerle dondurulmuş veya soğutulmuş malların taşınması"
    },
    {
        "ID": 549,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.21",
        "dc_NACE_BASLIK": "Uluslararası sularda çoklu taşıma türüne uygun konteynerlerin konteyner gemileriyle taşınması"
    },
    {
        "ID": 550,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.22",
        "dc_NACE_BASLIK": "Uluslararası sularda ve kabotaj hattında yük taşımacılığı gemilerinin mürettebatıyla birlikte kiralanması (iç sular hariç)"
    },
    {
        "ID": 551,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.23",
        "dc_NACE_BASLIK": "Uluslararası sularda diğer dökme sıvıların tanker gemilerle taşınması (ham petrolün, petrol ürünlerinin, gazların ve kimyasalların taşınması hariç)"
    },
    {
        "ID": 552,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.26",
        "dc_NACE_BASLIK": "Kabotaj hattında dökme kuru yük taşınması (kimyasalların taşınması hariç) (iç sular hariç)"
    },
    {
        "ID": 553,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.27",
        "dc_NACE_BASLIK": " Kabotaj hattında frigorifik gemilerle dondurulmuş veya soğutulmuş malların taşınması (iç sular hariç)"
    },
    {
        "ID": 554,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.28",
        "dc_NACE_BASLIK": "Kabotaj hattında çoklu taşıma türüne uygun konteynerlerin konteyner gemileriyle taşınması (iç sular hariç)"
    },
    {
        "ID": 555,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.29",
        "dc_NACE_BASLIK": "Kabotaj hattında diğer sıvıların tanker gemilerle taşınması (ham petrolün, petrol ürünlerinin, gazların ve kimyasalların taşınması hariç) (iç sular hariç)"
    },
    {
        "ID": 556,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.90",
        "dc_NACE_BASLIK": "Uluslararası sularda yapılan diğer yük taşımacılığı"
    },
    {
        "ID": 557,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.20.91",
        "dc_NACE_BASLIK": "Kabotaj hattında yapılan diğer yük taşımacılığı (iç sular hariç)"
    },
    {
        "ID": 558,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.40.05",
        "dc_NACE_BASLIK": "İç sularda yük taşımacılığı (nehir, kanal ve göllerde yapılanlar, vb.)"
    },
    {
        "ID": 559,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.40.07",
        "dc_NACE_BASLIK": "İç sularda yük taşıma gemi ve teknelerinin mürettebatıyla birlikte kiralanması hizmetleri (nehir, kanal ve göllerde, vb.)"
    },
    {
        "ID": 560,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "50.40.08",
        "dc_NACE_BASLIK": "İç sularda çekme ve itme hizmetleri (römorkaj) (mavnaların, şamandıraların vb.nin taşınması) (nehir, kanal ve göllerde, vb.)"
    },
    {
        "ID": 561,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "51.21.17",
        "dc_NACE_BASLIK": "Hava yolu ile yük taşımacılığı"
    },
    {
        "ID": 562,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "51.22.02",
        "dc_NACE_BASLIK": "Uzay taşımacılığı (uyduların ve uzay taşıtlarının fırlatılması, yük ve yolcuların uzaya taşınması)"
    },
    {
        "ID": 563,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.21.04",
        "dc_NACE_BASLIK": "Kara yolu taşımacılığı ile ilgili özel ve ticari araçlar için çekme ve yol yardımı faaliyetleri"
    },
    {
        "ID": 564,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.21.05",
        "dc_NACE_BASLIK": "Demir yolu taşımacılığını destekleyici faaliyetler (demir yolu çekme ve itme hizmetleri, manevra ve makas değiştirme hizmetleri, demir yolu terminal hizmetleri vb. dahil, emanetçilik hariç)"
    },
    {
        "ID": 565,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.21.07",
        "dc_NACE_BASLIK": "Otopark ve garaj işletmeciliği (bisiklet parkları ve karavanların kışın saklanması dahil)"
    },
    {
        "ID": 566,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.21.08",
        "dc_NACE_BASLIK": "Otoyol, tünel ve köprü işletmeciliği"
    },
    {
        "ID": 567,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.21.90",
        "dc_NACE_BASLIK": "Kara taşımacılığını destekleyici diğer hizmetler (kamyon terminal işletmeciliği dahil)"
    },
    {
        "ID": 568,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.22.06",
        "dc_NACE_BASLIK": "Su yolu taşımacılığını destekleyici olarak liman ve su yollarının işletilmesi (limanların, iskelelerin, rıhtımların, su yolu havuzlarının, deniz terminallerinin vb. işletilmesi) (deniz feneri, fener dubası vb. işletilmesi hariç)"
    },
    {
        "ID": 569,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.22.07",
        "dc_NACE_BASLIK": "Su yolu taşımacılığını destekleyici olarak deniz feneri, fener dubası, fener gemisi, şamandıra, kanal işaretleri vb. seyir yardımcıları ile verilen hizmet faaliyetleri"
    },
    {
        "ID": 570,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.22.08",
        "dc_NACE_BASLIK": "Deniz ve kıyı suları ile iç sularda kılavuzluk ve rıhtıma yanaştırma faaliyetleri (geminin havuzlanması ve havuzdan çıkarılması dahil)"
    },
    {
        "ID": 571,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.22.10",
        "dc_NACE_BASLIK": "Deniz ve kıyı suları ile iç sularda gemi kurtarma ve tekrar yüzdürme faaliyetleri (zor durumdaki gemilerin çekilmesi, bu gemilerin ve kargolarının kurtarılması vb.)"
    },
    {
        "ID": 572,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.22.90",
        "dc_NACE_BASLIK": "Su taşımacılığını destekleyici diğer hizmetler"
    },
    {
        "ID": 573,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.23.03",
        "dc_NACE_BASLIK": "Havaalanı yer hizmet faaliyetleri (kargo ve bagaj yükleme boşaltma hizmetleri hariç)"
    },
    {
        "ID": 574,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.23.04",
        "dc_NACE_BASLIK": "Havaalanı işletmeciliği (uçak pisti işletme hizmetleri ve hava yolu yolcu terminali hizmetleri dahil, havaalanı yer hizmetleri hariç)"
    },
    {
        "ID": 575,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.23.06",
        "dc_NACE_BASLIK": "Hava trafik kontrol hizmetleri (havaalanında yer alan kule ve radar istasyonları tarafından sağlanan hizmetler dahil)"
    },
    {
        "ID": 576,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.23.07",
        "dc_NACE_BASLIK": "Uzay taşımacılığını destekleyici hizmetler"
    },
    {
        "ID": 577,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.23.90",
        "dc_NACE_BASLIK": "Hava taşımacılığını destekleyici diğer faaliyetler (havaalanlarında yangın söndürme ve yangın önleme faaliyetleri, hava taşıtlarının çekilmesi, vb.)"
    },
    {
        "ID": 578,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.05",
        "dc_NACE_BASLIK": "Kantar hizmetleri (yüklü araçların tartılması, vb.)"
    },
    {
        "ID": 579,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.06",
        "dc_NACE_BASLIK": "Kara yolu yük nakliyat acentelerinin faaliyetleri"
    },
    {
        "ID": 580,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.07",
        "dc_NACE_BASLIK": "Kara yolu yük nakliyat komisyoncularının faaliyetleri"
    },
    {
        "ID": 581,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.11",
        "dc_NACE_BASLIK": "Taşıma belgelerinin ve irsaliyelerin düzenlenmesi ve tedarik edilmesi"
    },
    {
        "ID": 582,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.13",
        "dc_NACE_BASLIK": "Hava yolu yük nakliyat komisyoncularının faaliyetleri"
    },
    {
        "ID": 583,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.14",
        "dc_NACE_BASLIK": "Demir yolu yük nakliyat acentelerinin faaliyetleri"
    },
    {
        "ID": 584,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.15",
        "dc_NACE_BASLIK": "Demir yolu yük nakliyat komisyoncularının faaliyetleri"
    },
    {
        "ID": 585,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.16",
        "dc_NACE_BASLIK": "Taşınan malların kasalardan, sandıklardan vb.lerinden çıkarılması, numune alınması, incelenmesi vb. faaliyetler"
    },
    {
        "ID": 586,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.17",
        "dc_NACE_BASLIK": "Yük taşımacılığı kooperatiflerinin faaliyetleri"
    },
    {
        "ID": 587,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.18",
        "dc_NACE_BASLIK": "Kabotaj hattı deniz yolu yük nakliyat acentelerinin faaliyetleri"
    },
    {
        "ID": 588,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "52.29.90",
        "dc_NACE_BASLIK": "Bys. taşımacılığı destekleyici diğer faaliyetler (grup sevkiyatının organizasyonu, malların taşınması sırasında korunması için geçici olarak kasalara vb. yerleştirilmesi, yüklerin birleştirilmesi, gruplanması ve parçalara ayırılması, vb. dahil)"
    },
    {
        "ID": 589,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "66.19.07",
        "dc_NACE_BASLIK": "Yediemin faaliyetleri"
    },
    {
        "ID": 590,
        "dc_MESLEK_GRUBU": "24",
        "dc_MESLEK_GRUBU_ADI": "TAŞIMACILIK VE LOJİSTİK HİZMETLERİ",
        "dc_NACE_KODU": "74.90.03",
        "dc_NACE_BASLIK": "Fatura denetimi ve navlun oranı bilgi faaliyetleri"
    },
    {
        "ID": 591,
        "dc_MESLEK_GRUBU": "25",
        "dc_MESLEK_GRUBU_ADI": "GÜMRÜK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "52.29.01",
        "dc_NACE_BASLIK": "Deniz yolu yük nakliyat komisyoncularının faaliyetleri"
    },
    {
        "ID": 592,
        "dc_MESLEK_GRUBU": "25",
        "dc_MESLEK_GRUBU_ADI": "GÜMRÜK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "52.29.02",
        "dc_NACE_BASLIK": "Uluslararası deniz yolu yük nakliyat acentelerinin faaliyetleri"
    },
    {
        "ID": 593,
        "dc_MESLEK_GRUBU": "25",
        "dc_MESLEK_GRUBU_ADI": "GÜMRÜK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "52.29.03",
        "dc_NACE_BASLIK": "Hava yolu yük nakliyat acentelerinin faaliyetleri"
    },
    {
        "ID": 594,
        "dc_MESLEK_GRUBU": "25",
        "dc_MESLEK_GRUBU_ADI": "GÜMRÜK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "52.29.04",
        "dc_NACE_BASLIK": "Gümrük komisyoncularının faaliyetleri"
    },
    {
        "ID": 595,
        "dc_MESLEK_GRUBU": "25",
        "dc_MESLEK_GRUBU_ADI": "GÜMRÜK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "52.29.09",
        "dc_NACE_BASLIK": "Yetkili gümrük müşavirliği veya gümrük müşavirliği"
    },
    {
        "ID": 596,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "49.32.02",
        "dc_NACE_BASLIK": "Sürücüsü ile birlikte diğer özel araç (otomobil, limuzin, vb. dahil, minibüs, otobüs vb. hariç) kiralama faaliyeti"
    },
    {
        "ID": 597,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "49.39.06",
        "dc_NACE_BASLIK": "Sürücüsü ile birlikte otobüs, minibüs vb. kiralama (belirlenmemiş güzergahlar için) ile geziler için kara yolu yolcu taşımacılığı (şehir turu otobüsleri, gezi otobüsü, vb. dahil)"
    },
    {
        "ID": 598,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "74.90.01",
        "dc_NACE_BASLIK": "Ekspertiz faaliyerleri (antika eşyalar, mücevherler vb. için ekspertsiz hizmetleri) (deniz, gayrimenkul ve sigorta için olan ekspertsiz faaliyetleri hariç)"
    },
    {
        "ID": 599,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "74.90.02",
        "dc_NACE_BASLIK": "İşyeri komisyonculuğu faaliyetleri (küçük ve orta ölçekli işletmelerin alım ve satımının düzenlenmesi vb.)"
    },
    {
        "ID": 600,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "74.90.06",
        "dc_NACE_BASLIK": "Gemi Klas Müessesleri, Deniz Ekspertsiz ve Deniz Sürveyör faaliyetleri"
    },
    {
        "ID": 601,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.11.01",
        "dc_NACE_BASLIK": "Motorlu hafif kara taşıtlarının ve arabaların sürücüsüz olarak kiralanması ve leasingi (3.5 tondan daha az olan otomobil, kamyonet, vb. dahil, motosiklet hariç)"
    },
    {
        "ID": 602,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.12.01",
        "dc_NACE_BASLIK": "Motorlu ağır kara taşıtlarının sürücüsüz olarak kiralanması ve leasingi (3.5 tondan daha fazla olan kamyon, treyler (römork), vb.) (karavan ve tarımsal makine ve ekipmanlar ile inşaat makine ve ekipmanlarının kiralanması ve leasingi hariç)"
    },
    {
        "ID": 603,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.21.01",
        "dc_NACE_BASLIK": "Eğlence ve spor amaçlı olarak at, midilli, deve vb. kiralanması ve leasingi"
    },
    {
        "ID": 604,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.21.02",
        "dc_NACE_BASLIK": "Bisikletlerin kiralanması ve leasingi"
    },
    {
        "ID": 605,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.21.04",
        "dc_NACE_BASLIK": "Eğlence ve spor amaçlı sandal, tekne, kano, yelkenli, vb.nin mürettebatsız olarak kiralanması ve leasingi"
    },
    {
        "ID": 606,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.21.90",
        "dc_NACE_BASLIK": "Diğer eğlence ve spor eşyalarının kiralanması ve leasingi (kar kayağı, buz pateni, planör, delta kanat, sörf tahtası, su kayağı, golf sopası, kamp malzemesi, plaj sandalyesi ve şemsiyesi, saha oyunları için malzeme, oyuncak vb.)"
    },
    {
        "ID": 607,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.22.01",
        "dc_NACE_BASLIK": "Video kasetlerinin, plakların ve disklerin kiralanması"
    },
    {
        "ID": 608,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.29.01",
        "dc_NACE_BASLIK": "Gelinlik, kostüm, tekstil, giyim eşyası, ayakkabı ve mücevherlerin kiralanması"
    },
    {
        "ID": 609,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.29.02",
        "dc_NACE_BASLIK": "Bys. diğer kişisel ve ev eşyalarının kiralanması ve leasingi (mobilya, elektrikli ve elektronik alet, kitap, TV, kamera, bitki, vb. dahil, müzik aleti, giyim eşyası, mücevher, vb. ile video kasetler, büro mobilyaları, eğlence ve spor ekipmanları hariç)"
    },
    {
        "ID": 610,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.29.03",
        "dc_NACE_BASLIK": "Müzik aletlerinin kiralanması ve leasingi"
    },
    {
        "ID": 611,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.31.01",
        "dc_NACE_BASLIK": "Tarımsal makine ve ekipmanların operatörsüz olarak kiralanması ve leasingi (tarımsal traktör, pulluk, biçerdöver, süt sağma makinesi, arıcılık makinesi, vb. dahil, çim biçme makineleri hariç)"
    },
    {
        "ID": 612,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.32.01",
        "dc_NACE_BASLIK": "Bina ve bina dışı inşaatlarda kullanılan makine ve ekipmanların operatörsüz olarak kiralanması ve leasingi (vinç kamyonu, inşaat ve toprak taşımak için traktör, yol greyderi ve silindiri, buldozer, yapı iskelesi, şantiye kulübesi, vb.) (kurma/sökme hariç)"
    },
    {
        "ID": 613,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.33.01",
        "dc_NACE_BASLIK": "Büro makine ve ekipmanlarının operatörsüz olarak kiralanması ve leasingi (kasa, fotokopi makinesi, daktilo, yazar kasa, vb. dahil, bilgisayarlar ve çevre birimleri, telefon ve faks makineleri ve büro mobilyaları hariç)"
    },
    {
        "ID": 614,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.33.02",
        "dc_NACE_BASLIK": "Büro mobilyalarının kiralanması ve leasingi (büro sandalyesi ve masasının kiralanması dahil)"
    },
    {
        "ID": 615,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.33.03",
        "dc_NACE_BASLIK": "Bilgisayar ve çevre birimlerinin operatörsüz olarak kiralanması ve leasingi (elektronik veri işlemci, merkezi işlem birimi, çevre birimleri, manyetik veya optik okuyucular, vb.)"
    },
    {
        "ID": 616,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.34.01",
        "dc_NACE_BASLIK": "Su yolu taşımacılığı ekipmanlarının operatörsüz olarak kiralanması ve leasingi (yolcu ve yük taşımacılığı için ticari tekne ve gemiler dahil, gezinti tekneleri hariç)"
    },
    {
        "ID": 617,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.35.01",
        "dc_NACE_BASLIK": "Hava taşımacılığı araçlarının operatörsüz olarak kiralanması ve leasingi (uçak, helikopter, balon, vb.)"
    },
    {
        "ID": 618,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.01",
        "dc_NACE_BASLIK": "Demir yolu ulaşım ekipmanlarının operatörsüz olarak kiralanması ve leasingi (lokomotif ve diğer vagonlar, metro vagonları, hafif demir yolu ekipmanları, tramvay, vb.)"
    },
    {
        "ID": 619,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.02",
        "dc_NACE_BASLIK": "Konteynerlerin kiralanması veya leasingi (konaklama ve büro amaçlı olanlar, birden çok taşıma türlerine uygun olanlar ve diğerleri)"
    },
    {
        "ID": 620,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.03",
        "dc_NACE_BASLIK": "Motosiklet, karavan ve kamp gereçlerinin operatörsüz olarak kiralanması veya leasingi"
    },
    {
        "ID": 621,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.04",
        "dc_NACE_BASLIK": "Maden ve petrol sahasında kullanılan ekipmanların operatörsüz olarak kiralanması veya leasingi"
    },
    {
        "ID": 622,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.05",
        "dc_NACE_BASLIK": "Motorlar ve türbinlerin operatörsüz olarak kiralanması veya leasingi"
    },
    {
        "ID": 623,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.06",
        "dc_NACE_BASLIK": "Mesleki ve bilimsel amaçlı ölçüm ve kontrol ekipmanlarının operatörsüz olarak kiralanması veya leasingi (tıbbi cihaz ve ekipmanların kiralanması dahil)"
    },
    {
        "ID": 624,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.07",
        "dc_NACE_BASLIK": "Ticari radyo, televizyon ve telekomünikasyon ekipmanları, sinema filmi yapım ekipmanları, telefon, faks makinesi, çağrı cihazı ve hücresel telefonların operatörsüz olarak kiralanması veya leasingi (kişisel ve ev eşyası olan TV, radyo, kameralar hariç)"
    },
    {
        "ID": 625,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.08",
        "dc_NACE_BASLIK": "Madeni para ile çalışan kumar makinelerinin operatörsüz olarak kiralanması veya leasingi"
    },
    {
        "ID": 626,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.10",
        "dc_NACE_BASLIK": "Takım tezgahlarının ve diğer ticari ve endüstriyel makinelerin operatörsüz olarak kiralanması veya leasingi"
    },
    {
        "ID": 627,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.11",
        "dc_NACE_BASLIK": "Tiyatro dekor ve malzemelerinin kiralanması (kostümler hariç)"
    },
    {
        "ID": 628,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.13",
        "dc_NACE_BASLIK": "Hayvanların kiralanması faaliyetleri (hayvan sürüleri, yarış atları vb.) (eğlence ve spor amaçlı olanlar hariç)"
    },
    {
        "ID": 629,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.39.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış genellikle endüstride sermaye malı olarak kullanılan diğer makine, ekipman ve eşyaların operatörsüz olarak kiralanması ve leasingi (sergi malzemesi, palet, vb. dahil, kişisel eşyalar ve ev eşyaları hariç)"
    },
    {
        "ID": 630,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "77.40.01",
        "dc_NACE_BASLIK": "Fikri mülkiyet haklarının ve benzer ürünlerin leasingi (patentli varlıklar, markalar, imtiyaz sözleşmeleri, vb. dahil, telif hakkı alınmış olan çalışmalar hariç)"
    },
    {
        "ID": 631,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "82.11.01",
        "dc_NACE_BASLIK": "Kombine büro yönetim hizmeti faaliyetleri (bir ücret veya sözleşme temelinde sekreterlik, finansal planlama, faturalama ve kayıt tutulması, personel ve posta vb. hizmetlerin kombinasyonunun sağlanması)"
    },
    {
        "ID": 632,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "82.19.01",
        "dc_NACE_BASLIK": "Fotokopi, doküman hazırlama ve diğer uzmanlaşmış büro destek hizmetleri (doküman hazırlama, daktilo, sekreterya, fotokopi, ozalit çekimi, mektup, çoğaltma vb.) (adres derleme ve postalama hizmetleri dahil, tez yazımı hariç)"
    },
    {
        "ID": 633,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "82.99.04",
        "dc_NACE_BASLIK": "Trafik müşavirliği"
    },
    {
        "ID": 634,
        "dc_MESLEK_GRUBU": "26",
        "dc_MESLEK_GRUBU_ADI": "TRAFİK MÜŞAVİRLİĞİ",
        "dc_NACE_KODU": "82.99.08",
        "dc_NACE_BASLIK": "İş takipçiliği faaliyeti"
    },
    {
        "ID": 635,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "06.10.01",
        "dc_NACE_BASLIK": "Ham petrolün çıkarılması"
    },
    {
        "ID": 636,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "09.10.03",
        "dc_NACE_BASLIK": "Petrol ve gaz çıkarımı ile ilgili vinç ve sondaj kulesi kurma, onarım, sökme vb. hizmet faaliyetleri"
    },
    {
        "ID": 637,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "46.71.01",
        "dc_NACE_BASLIK": "Sıvı yakıtlar ve bunlarla ilgili ürünlerin toptan ticareti (ham petrol, ham yağ, mazot, benzin, biodizel, fuel oil, gaz yağı, madeni yağlar, gres yağları vb.)"
    },
    {
        "ID": 638,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "47.30.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda motorlu kara taşıtı ve motosiklet yakıtının (benzin, mazot, dizel, biodizel, LPG, CNG vb.) perakende ticareti"
    },
    {
        "ID": 639,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "47.30.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda motorlu kara taşıtları için yağlama ve soğutma ürünlerinin perakende ticareti (madeni yağ, antifriz vb.)"
    },
    {
        "ID": 640,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "47.78.09",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda evlerde kullanılan fuel oil perakende ticareti (dökme olanlar ile müşterinin istediği yere ulaştırılarak yapılan doğrudan fuel oil satışı hariç)"
    },
    {
        "ID": 641,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "49.41.08",
        "dc_NACE_BASLIK": "Kara yolu ile şehir içi yük taşımacılığı (gaz ve petrol ürünleri, kimyasal ürünler vb.)"
    },
    {
        "ID": 642,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "49.41.09",
        "dc_NACE_BASLIK": "Kara yolu ile şehirler arası yük taşımacılığı (gaz ve petrol ürünleri, kimyasal ürünler vb.)"
    },
    {
        "ID": 643,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "49.41.10",
        "dc_NACE_BASLIK": "Kara yolu ile uluslararası yük taşımacılığı (gaz ve petrol ürünleri, kimyasal ürünler vb.)"
    },
    {
        "ID": 644,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "49.50.01",
        "dc_NACE_BASLIK": "Boru hattı ile ham petrol, rafine petrol ve petrol ürünleri taşımacılığı"
    },
    {
        "ID": 645,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "49.50.03",
        "dc_NACE_BASLIK": "Boru hattı pompa istasyonlarını işletme hizmetleri"
    },
    {
        "ID": 646,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "50.20.17",
        "dc_NACE_BASLIK": "Uluslararası sularda ham petrolün, petrol ürünlerinin ve kimyasalların tanker gemilerle taşınması (gazlar hariç)"
    },
    {
        "ID": 647,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "50.20.24",
        "dc_NACE_BASLIK": "Uluslararası sularda gazların tanker gemilerle taşınması"
    },
    {
        "ID": 648,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "50.20.25",
        "dc_NACE_BASLIK": "Kabotaj hattında ham petrolün, petrol ürünlerinin ve kimyasalların tanker gemilerle taşınması (gazlar hariç) (iç sular hariç)"
    },
    {
        "ID": 649,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "50.20.30",
        "dc_NACE_BASLIK": "Kabotaj hattında gazların tanker gemilerle taşınması (iç sular hariç)"
    },
    {
        "ID": 650,
        "dc_MESLEK_GRUBU": "27",
        "dc_MESLEK_GRUBU_ADI": "AKARYAKIT",
        "dc_NACE_KODU": "52.21.12",
        "dc_NACE_BASLIK": "Kara taşımacılığını destekleyici olarak gazların sıvılaştırılması"
    },
    {
        "ID": 651,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "69.10.01",
        "dc_NACE_BASLIK": "Bilirkişi faaliyetleri (hukuki konularda)"
    },
    {
        "ID": 652,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "69.10.02",
        "dc_NACE_BASLIK": "Hukuk müşavirliği"
    },
    {
        "ID": 653,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "69.10.03",
        "dc_NACE_BASLIK": "Hukuk danışmanlığı ve temsil faaliyetleri (avukatlık faaliyetleri)"
    },
    {
        "ID": 654,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "69.10.04",
        "dc_NACE_BASLIK": "Diğer hukuki hizmet faaliyetleri (patent, telif hakkı ve diğer fikri mülkiyet hakları, varlıkların tasviyesi vb. danışmanlık ve diğer yasal hizmetler)"
    },
    {
        "ID": 655,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "69.10.07",
        "dc_NACE_BASLIK": "Noterlik faaliyetleri"
    },
    {
        "ID": 656,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "69.10.08",
        "dc_NACE_BASLIK": "Sosyal güvenlik müşavirlerinin faaliyetleri"
    },
    {
        "ID": 657,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "69.10.09",
        "dc_NACE_BASLIK": "Hukuki arabuluculuk ve uzlaştırma faaliyetleri (işgücü ve yönetim arasında, işletmeler arasında veya şahıslar arasında ortaya çıkan anlaşmazlığın çözümü için tahkim veya arabuluculuk hizmetleri)"
    },
    {
        "ID": 658,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "70.10.01",
        "dc_NACE_BASLIK": "İdare merkezi faaliyetleri (idare merkezi tarafından aynı şirket veya girişimin diğer birimlerine sağlanan yönetim hizmetleri ile bağlı iştiraklerini yöneten holdingler dahil)"
    },
    {
        "ID": 659,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "70.22.02",
        "dc_NACE_BASLIK": "İşletme ve diğer idari danışmanlık faaliyetleri (bir organizasyonun stratejik, mali, pazarlama, üretim, iş süreçleri, proje vb. yönetim hizmetleri ile ticari marka ve imtiyaz konularında danışmanlık)"
    },
    {
        "ID": 660,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "70.22.03",
        "dc_NACE_BASLIK": "İnsan kaynakları yönetim danışmanlığı faaliyetleri"
    },
    {
        "ID": 661,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "74.90.04",
        "dc_NACE_BASLIK": "Hava tahmini ve meteorolojik faaliyetler"
    },
    {
        "ID": 662,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "74.90.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer mesleki, bilimsel ve teknik faaliyetler (çevre danışmanlığı, güvenlik danışmanlığı, matematikçiler, istatistikçiler, agronomlar vb. tarafından verilen danışmanlık hizmetleri, patent aracılığı vb.)"
    },
    {
        "ID": 663,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "78.10.01",
        "dc_NACE_BASLIK": "İş bulma acentelerinin faaliyetleri (işe girecek kişilerin seçimi ve yerleştirilmesi faaliyetleri dahil)"
    },
    {
        "ID": 664,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "78.20.01",
        "dc_NACE_BASLIK": "Geçici iş bulma acentelerinin faaliyetleri"
    },
    {
        "ID": 665,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "78.30.03",
        "dc_NACE_BASLIK": "Diğer insan kaynaklarının sağlanması (uzun süreli çalışma dönemleri için personel sağlanması hizmetleri)"
    },
    {
        "ID": 666,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "79.90.90",
        "dc_NACE_BASLIK": "Bys. diğer rezervasyon hizmetleri ve ilgili faaliyetler (devre mülk takas faaliyetleri, turizmi arttırma faaliyetleri, vb. dahil, seyahat acentelerinin ve tur operatörlerinin faaliyetleri hariç)"
    },
    {
        "ID": 667,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "80.10.05",
        "dc_NACE_BASLIK": "Özel güvenlik faaliyetleri (şirketlerce zırhlı araç sağlama, para, vb. değerli şeylerin toplanması ve dağıtımı, koruma ve devriye, araç park kontrol, koruma köpeği eğitimi, parmak izi tespiti vb. dahil, kamu güvenliği hariç)"
    },
    {
        "ID": 668,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "80.30.04",
        "dc_NACE_BASLIK": "Soruşturma faaliyetleri (özel dedektiflik faaliyetleri dahil)"
    },
    {
        "ID": 669,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "80.30.05",
        "dc_NACE_BASLIK": "İmza ve el yazısı tespit faaliyetleri"
    },
    {
        "ID": 670,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "81.10.01",
        "dc_NACE_BASLIK": "Tesis bünyesindeki kombine destek hizmetleri (işletme veya tesis bünyesinde temizlik, bakım, çöplerin bertarafı, koruma ve güvenlik, posta dağıtımı, çamaşırhane, resepsiyon vb. yardımcı hizmet ve görevlerin birden fazlasının sağlanması)"
    },
    {
        "ID": 671,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "81.21.01",
        "dc_NACE_BASLIK": "Binaların genel temizliği (daire, apartman, büro, fabrika, kurum, mağaza vb. her türlü binanın genel temizliği dahil, pencere, baca, sanayi makinesi, vb. uzmanlaşmış temizlik faaliyetleri hariç)"
    },
    {
        "ID": 672,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "81.22.01",
        "dc_NACE_BASLIK": "Diğer bina ve endüstriyel temizlik faaliyetleri (binaların dışı, pencere, baca, fırın, kalorifer kazanı, havalandırma kanalı, egzoz ünitesi, sanayi makinesi temizliği vb. uzmanlaşmış temizlik faaliyetleri)"
    },
    {
        "ID": 673,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "81.29.02",
        "dc_NACE_BASLIK": "Yol ve pistlerdeki kar ve buzun kaldırılması (kum, tuz dökülmesi dahil)"
    },
    {
        "ID": 674,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "81.29.03",
        "dc_NACE_BASLIK": "Park ve caddelerin süpürülerek yıkanması, temizlenmesi faaliyetleri"
    },
    {
        "ID": 675,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "81.29.04",
        "dc_NACE_BASLIK": "Böceklerin, kemirgenlerin ve diğer zararlıların imhası ve haşere kontrol faaliyetleri (tarımsal zararlılarla mücadele hariç)"
    },
    {
        "ID": 676,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "81.29.90",
        "dc_NACE_BASLIK": "Diğer temizlik faaliyetleri (yüzme havuzları, tren, otobüs, uçak, tanker, plaj ve şişelerin temizlenmesi ile dezenfekte faaliyetleri dahil, oto yıkama hariç)"
    },
    {
        "ID": 677,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.19.03",
        "dc_NACE_BASLIK": "Tez vb. yazım bürolarının faaliyetleri"
    },
    {
        "ID": 678,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.30.02",
        "dc_NACE_BASLIK": "Gösteri, kongre, konferans, ticari fuar, vb. etkinliklerin organizasyonu faaliyetleri"
    },
    {
        "ID": 679,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.91.01",
        "dc_NACE_BASLIK": "Tahsilat büroları ve kredi kayıt bürolarının faaliyetleri (telefon, elektrik, su, vb. fatura ve borç toplama, kişilerin veya işletmelerin kredi veya çalışma geçmişleri hakkında bilgi toplama, vb.)"
    },
    {
        "ID": 680,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.92.01",
        "dc_NACE_BASLIK": "Tehlikesiz ürünleri paketleme faaliyetleri (bir ücret veya sözleşme temelinde yiyecek, içecek dahil sıvıların şişelenmesi, katı maddelerin paketlenmesi, etiketleme, damgalama, marka basma, paket ambalajlama, vb.)"
    },
    {
        "ID": 681,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.92.05",
        "dc_NACE_BASLIK": "Tehlikeli ürünleri paketleme faaliyetleri (bir ücret veya sözleşme temelinde sıvıların şişelenmesi, katı maddelerin paketlenmesi, etiketleme, damgalama, marka basma, paket ambalajlama, vb.)"
    },
    {
        "ID": 682,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.99.02",
        "dc_NACE_BASLIK": "Elektrik, gaz, su ve ısınma sayaçlarını okuma ve faturalama faaliyetleri"
    },
    {
        "ID": 683,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.99.05",
        "dc_NACE_BASLIK": "Harfi harfine raporlama ve stenografi kayıt faaliyetleri"
    },
    {
        "ID": 684,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.99.07",
        "dc_NACE_BASLIK": "Barkodlama faaliyetleri (paketleme faaliyeti dışındakiler)"
    },
    {
        "ID": 685,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "82.99.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer iş destek hizmet faaliyetleri (borcu ödenmeyen malların geri alınması, indirim kuponu dağıtım hizmetleri, park sayacından paraların toplanması ve diğer iş destek hizmetleri)"
    },
    {
        "ID": 686,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.41",
        "dc_NACE_BASLIK": "Belediyelerin kamu yönetimi hizmetleri"
    },
    {
        "ID": 687,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.42",
        "dc_NACE_BASLIK": "Ekonomik ve sosyal planlama ile istatistik ile ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 688,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.43",
        "dc_NACE_BASLIK": "Finansal, mali ve denetim ile ilgili kamu yönetimi hizmetleri (defterdarlık, mal müdürlükleri, vergi daireleri, Sayıştay, kamu borç ve fonlarının yönetimi dahil)"
    },
    {
        "ID": 689,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.44",
        "dc_NACE_BASLIK": "Genel personel işleri ile ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 690,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.45",
        "dc_NACE_BASLIK": "Gümrüklerle ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 691,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.46",
        "dc_NACE_BASLIK": "Muhtarların faaliyetleri"
    },
    {
        "ID": 692,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.47",
        "dc_NACE_BASLIK": "Valiliklerin ve kaymakamlıkların kamu yönetimi hizmetleri (il ve ilçe özel idarelerinin faaliyetleri dahil)"
    },
    {
        "ID": 693,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.48",
        "dc_NACE_BASLIK": "Yasama ve yürütme hizmetleri"
    },
    {
        "ID": 694,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.11.90",
        "dc_NACE_BASLIK": "Kamu için diğer destekleyici kamu yönetimi hizmetleri (merkezi kamu ihale ve tedarik hizmetleri ile haritacılık vb.)"
    },
    {
        "ID": 695,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.12.11",
        "dc_NACE_BASLIK": "Eğitime ilişkin kamu yönetimi hizmetleri"
    },
    {
        "ID": 696,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.12.12",
        "dc_NACE_BASLIK": "İskan ve toplum refahına ilişkin kamu yönetimi hizmetleri (su temini ve çevre koruma programları dahil)"
    },
    {
        "ID": 697,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.12.13",
        "dc_NACE_BASLIK": "Sağlığa ve sosyal hizmetlere ilişkin kamu yönetimi hizmetleri"
    },
    {
        "ID": 698,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.13.11",
        "dc_NACE_BASLIK": "Çok amaçlı geliştirme projeleri ile ilgili kamu yönetimi hizmetleri (bölgesel kalkınma projeleri dahil)"
    },
    {
        "ID": 699,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.13.12",
        "dc_NACE_BASLIK": "Genel ekonomik, ticari ve işgücü ile ilgili kamu yönetimi hizmetleri (genel ekonomi politikalarının oluşturulması, teşvik faaliyetleri, patent işleri, genel istihdam politikaları, meteoroloji işleri, istihdam vb.)"
    },
    {
        "ID": 700,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.13.14",
        "dc_NACE_BASLIK": "Tarım, ormancılık, balıkçılık ve avcılıkla ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 701,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.13.15",
        "dc_NACE_BASLIK": "Ticaret, otelcilik ve lokantacılık ile ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 702,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.13.16",
        "dc_NACE_BASLIK": "Turizm ile ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 703,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.13.17",
        "dc_NACE_BASLIK": "Ulaştırma ve iletişim ile ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 704,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.13.18",
        "dc_NACE_BASLIK": "Yakıt ve enerji ile ilgili kamu yönetimi hizmetleri (enerji bakanlığı, vb.)"
    },
    {
        "ID": 705,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.21.05",
        "dc_NACE_BASLIK": "Dış işleri ile ilgili kamu yönetimi hizmetleri (yurt dışı diplomatik hizmetler ve konsolosluk hizmetleri hariç)"
    },
    {
        "ID": 706,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.21.06",
        "dc_NACE_BASLIK": "Yurt dışı diplomatik hizmetler ve konsolosluk hizmetleri (yabancı konsolosluklar hariç)"
    },
    {
        "ID": 707,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.22.05",
        "dc_NACE_BASLIK": "Askeri savunma hizmetleri (silahlı kuvvetler ve savunma ile ilgili idari hizmetler)"
    },
    {
        "ID": 708,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.22.06",
        "dc_NACE_BASLIK": "Sivil savunma hizmetleri"
    },
    {
        "ID": 709,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.23.04",
        "dc_NACE_BASLIK": "Adalet ve yargı organlarının faaliyetleri (icra müdürlükleri vb. dahil, ceza infaz kurumlarının ve mahkemelerin faaliyetleri hariç)"
    },
    {
        "ID": 710,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.23.05",
        "dc_NACE_BASLIK": "Ceza infaz ve tutuk evlerinin faaliyetleri (eğitim ve rehabilitasyon faaliyetleri hariç)"
    },
    {
        "ID": 711,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.23.06",
        "dc_NACE_BASLIK": "Mahkemelerin faaliyetleri (yüksek yargı organları dahil)"
    },
    {
        "ID": 712,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.24.01",
        "dc_NACE_BASLIK": "Kamu düzeni ve güvenliği ile ilgili faaliyetler (polis hizmetleri, sahil güvenlik vb.)"
    },
    {
        "ID": 713,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.25.01",
        "dc_NACE_BASLIK": "İtfaiye hizmetleri (hava taşıtlarıyla yapılanlar ile orman yangınlarıyla mücadele ve koruma faaliyetleri hariç)"
    },
    {
        "ID": 714,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.25.02",
        "dc_NACE_BASLIK": "Hava taşıtları yoluyla yapılan itfaiye hizmetleri (orman yangınlarıyla mücadele ve koruma faaliyetleri hariç)"
    },
    {
        "ID": 715,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "84.30.01",
        "dc_NACE_BASLIK": "Zorunlu sosyal güvenlik faaliyetleri"
    },
    {
        "ID": 716,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "97.00.10",
        "dc_NACE_BASLIK": "Ev içi çalışan personelin işverenleri olarak hanehalklarının hizmetleri"
    },
    {
        "ID": 717,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "98.10.01",
        "dc_NACE_BASLIK": "Hanehalkları tarafından kendi kullanımlarına yönelik olarak üretilen ayrım yapılmamış mallar"
    },
    {
        "ID": 718,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "98.20.01",
        "dc_NACE_BASLIK": "Hanehalkları tarafından kendi kullanımlarına yönelik olarak üretilen ayrım yapılmamış hizmetler"
    },
    {
        "ID": 719,
        "dc_MESLEK_GRUBU": "28",
        "dc_MESLEK_GRUBU_ADI": "İŞLETME DESTEK HİZMETLERİ",
        "dc_NACE_KODU": "99.00.15",
        "dc_NACE_BASLIK": "Uluslararası örgütler ve temsilciliklerinin faaliyetleri (yabancı ülke elçilikleri, milletlerarası işbirliği örgütleri, vb. dahil)"
    },
    {
        "ID": 720,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "36.00.02",
        "dc_NACE_BASLIK": "Suyun toplanması, arıtılması ve dağıtılması"
    },
    {
        "ID": 721,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "36.00.03",
        "dc_NACE_BASLIK": "Su sayaçlarının bakım ve onarımı"
    },
    {
        "ID": 722,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "37.00.01",
        "dc_NACE_BASLIK": "Kanalizasyon (kanalizasyon atıklarının uzaklaştırılması ve arıtılması, kanalizasyon sistemlerinin ve atık su arıtma tesislerinin işletimi, foseptik çukurların ve havuzların boşaltılması ve temizlenmesi, seyyar tuvalet faaliyetleri vb.)"
    },
    {
        "ID": 723,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.11.01",
        "dc_NACE_BASLIK": "Tehlikesiz atıkların toplanması (çöpler, geri dönüştürülebilir maddeler, tekstil atıkları, vb.) (inşaat ve yıkım atıkları, çalı, çırpı, moloz gibi enkazlar hariç)"
    },
    {
        "ID": 724,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.11.03",
        "dc_NACE_BASLIK": "Tehlikesiz atık transfer istasyonlarının işletilmesi"
    },
    {
        "ID": 725,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.12.01",
        "dc_NACE_BASLIK": "Tehlikeli atıkların toplanması (patlayıcı, oksitleyici, yanıcı, zehirli, aşındırıcı, bulaşıcı ve insan sağlığı için zararlı atıkların ve maddelerin toplanması faaliyetleri) (nükleer atıklar, biyokimyasal atıklar, kullanılmış piller vb.)"
    },
    {
        "ID": 726,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.21.01",
        "dc_NACE_BASLIK": "Tehlikesiz atıkların ıslahı ve bertaraf edilmesi ve bertarafı için depolama alanlarının işletilmesi"
    },
    {
        "ID": 727,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.22.01",
        "dc_NACE_BASLIK": "Tehlikeli atıkların ıslahı ve bertaraf edilmesi (tehlikeli atıkların ıslahını yapan tesislerin işletilmesi, zararlı atıkların yok edilmesi için kullanılmış malların bertarafı vb. faaliyetler) (radyoaktif atıklar hariç)"
    },
    {
        "ID": 728,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.22.02",
        "dc_NACE_BASLIK": "Radyoaktif atıkların ıslahı ve bertaraf edilmesi"
    },
    {
        "ID": 729,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.31.01",
        "dc_NACE_BASLIK": "Gemi ve yüzer yapıların hurdalarının materyallerinin geri kazanımı amacıyla parçalara ayrılması (sökülmesi)"
    },
    {
        "ID": 730,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.31.02",
        "dc_NACE_BASLIK": "Hurdaların geri kazanım amacıyla parçalara ayrılması (otomobil, bilgisayar, televizyon vb. donanımlar) (gemiler ve yüzer yapılar ile satmak için kullanılabilir parçalar oluşturmak amacıyla sökme hariç)"
    },
    {
        "ID": 731,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.32.01",
        "dc_NACE_BASLIK": "Tasnif edilmiş metal atıklar, hurdalar ve diğer parçaların genellikle mekanik veya kimyasal değişim işlemleri ile geri kazanılması"
    },
    {
        "ID": 732,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "38.32.02",
        "dc_NACE_BASLIK": "Tasnif edilmiş metal dışı atıklar, hurdalar ve diğer parçaların genellikle mekanik veya kimyasal değişim işlemleri ile geri kazanılması"
    },
    {
        "ID": 733,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "39.00.01",
        "dc_NACE_BASLIK": "İyileştirme faaliyetleri ve diğer atık yönetimi hizmetleri (kirletilmiş toprak ve yeraltı sularının temizlenmesi, kara mayınlarının temizlenmesi, vb.)"
    },
    {
        "ID": 734,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "46.18.06",
        "dc_NACE_BASLIK": "İşlenmemiş ağaç, atık, hurda ve geri dönüştürülebilir malzemeler, vb. başka yerde sınıflandırılmamış diğer belirli ürünlerin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 735,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "46.77.01",
        "dc_NACE_BASLIK": "Atık ve hurda toptan ticareti (metal ikincil hammaddeler) (kağıt, cam, plastik vb. ikincil hammaddeler hariç)"
    },
    {
        "ID": 736,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "46.77.02",
        "dc_NACE_BASLIK": "Atık ve hurda toptan ticareti (kağıt, cam, plastik vb. ikincil hammaddeler) (metal ikincil hammaddeler hariç)"
    },
    {
        "ID": 737,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.11.01",
        "dc_NACE_BASLIK": "Mimarlık faaliyetleri ve mimari danışmanlık faaliyetleri"
    },
    {
        "ID": 738,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.11.02",
        "dc_NACE_BASLIK": "Şehir ve bölge planlama faaliyetleri (nazım imar planı, vaziyet planı vb. dahil)"
    },
    {
        "ID": 739,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.11.04",
        "dc_NACE_BASLIK": "Peyzaj mimarisi faaliyetleri ve peyzaj konusunda mimari danışmanlık faaliyetleri"
    },
    {
        "ID": 740,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.01",
        "dc_NACE_BASLIK": "Yer yüzeyinin araştırılması ve harita yapımına yönelik mühendislik faaliyetleri (jeodezik, fotogrametrik  ve hidrografik ölçüm yapma, topografya hizmetleri ile yol, kadastro, topoğrafik, vb. haritaların hazırlanması)"
    },
    {
        "ID": 741,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.03",
        "dc_NACE_BASLIK": "Bina projelerine yönelik mühendislik ve danışmanlık faaliyetleri"
    },
    {
        "ID": 742,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.04",
        "dc_NACE_BASLIK": "Jeolojik, jeofizik ve ilgili araştırma ve danışmanlık hizmetlerine yönelik mühendislik faaliyetleri (maden yatağı, yer altı toprak oluşumu, vb. hizmetler) (petrol ve doğalgaz için olanlar hariç)"
    },
    {
        "ID": 743,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.05",
        "dc_NACE_BASLIK": "Petrol ve doğalgaz çıkarım projelerine yönelik mühendislik ve danışmanlık faaliyetleri"
    },
    {
        "ID": 744,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.06",
        "dc_NACE_BASLIK": "Ulaştırma projelerine yönelik mühendislik ve danışmanlık faaliyetleri (karayolu, köprü, tünel, demir yolları, havaalanı, petrol ve gaz taşımacılık projeleri, liman vb.)"
    },
    {
        "ID": 745,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.07",
        "dc_NACE_BASLIK": "Su, kanalizasyon ve drenaj projelerine yönelik mühendislik ve danışmanlık faaliyetleri (içme suyu dağıtım sistemleri, pompa istasyonları, yağmur suyu yönetim sistemleri, atık suların toplanması vb. projeler)"
    },
    {
        "ID": 746,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.08",
        "dc_NACE_BASLIK": "Sanayi ve imalat projelerine yönelik mühendislik ve danışmanlık faaliyetleri (haddehaneler, farineriler, ulaşım araçları, sanayi makineleri, vb.)"
    },
    {
        "ID": 747,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.09",
        "dc_NACE_BASLIK": "Enerji projelerine yönelik mühendislik ve danışmanlık faaliyetleri (kömür, petrol ve gaz gibi enerji yakıtları kullananlar ile nükleer, su, güneş, rüzgar ve diğer enerjiler için santrallere ve enerji iletim ve dağıtım hatlarına yönelik hizmetler)"
    },
    {
        "ID": 748,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.10",
        "dc_NACE_BASLIK": "Mühendislik danışmanlık hizmetleri (bir projeyle bağlantılı olarak yapılanlar hariç)"
    },
    {
        "ID": 749,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.11",
        "dc_NACE_BASLIK": "Yapı denetim kuruluşları (a sınıfı)"
    },
    {
        "ID": 750,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.12",
        "dc_NACE_BASLIK": "Yapı denetim kuruluşları (b sınıfı)"
    },
    {
        "ID": 751,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.13",
        "dc_NACE_BASLIK": "Yapı denetim kuruluşları (c sınıfı)"
    },
    {
        "ID": 752,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.12.90",
        "dc_NACE_BASLIK": "Diğer projelere yönelik mühendislik ve danışmanlık faaliyetleri (telekomünikasyon ve yayıncılık projeleri, doğalgaz ve buhar dağıtım projeleri ve diğerleri ile inşaat projelerinin yönetimi dahil))"
    },
    {
        "ID": 753,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.05",
        "dc_NACE_BASLIK": "Kara yolu taşıma araçlarının teknik muayene faaliyetleri (otomobil, motosiklet, otobüs, pikap, kamyon ve diğer kara yolu araçlarının periyodik teknik muayene hizmetleri)"
    },
    {
        "ID": 754,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.07",
        "dc_NACE_BASLIK": "Bileşim ve saflık konularında teknik test ve analiz faaliyetleri (atık, yakıt, metal, mineral ve kimyasallar gibi maddelerin biyolojik ve kimyasal özellikleri ile mikrobiyoloji, biyokimya vb. ilgili alanlarda test ve analiz faaliyetleri)"
    },
    {
        "ID": 755,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.08",
        "dc_NACE_BASLIK": "Su, hava vb. kirliliği konularında teknik test ve analiz faaliyetleri"
    },
    {
        "ID": 756,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.09",
        "dc_NACE_BASLIK": "Fiziksel özellikler konusunda teknik test ve analiz faaliyetleri (metal, plastik, tekstil, beton ve diğer maddelerin mukavemeti, esnekliği, iletkenliği gibi fiziksel özellikleri ile gerilim, sertlik, darbe direnci vb. test ve analiz faaliyetleri)"
    },
    {
        "ID": 757,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.10",
        "dc_NACE_BASLIK": "Ürünlerin ruhsatlandırılması faaliyetleri (tüketim malları, motorlu kara taşıtları, uçaklar, ilaçlar vb.)"
    },
    {
        "ID": 758,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.11",
        "dc_NACE_BASLIK": "Gıda konusunda teknik test ve analiz faaliyetleri (veteriner denetimi de dahil olmak üzere gıda hijyeni alanında teknik test faaliyetleri)"
    },
    {
        "ID": 759,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.12",
        "dc_NACE_BASLIK": "Entegre mekanik ve elektrik sistemleri konusunda teknik test ve analiz faaliyetleri (mekanik ve elektrik bileşenli makine, motor, otomobil, alet, cihaz, iletişim ekipmanı vb. ekipmanların test ve analiz faaliyetleri)"
    },
    {
        "ID": 760,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.13",
        "dc_NACE_BASLIK": "Polis laboratuvarlarının analiz faaliyetleri"
    },
    {
        "ID": 761,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "71.20.90",
        "dc_NACE_BASLIK": "Diğer teknik test ve analiz faaliyetleri (makine parça ve yapıların kusurlarını belirlemek için radyografik, manyetik ve ultrasonik testleri, sanatsal çalışmaların doğruluğunun kanıtlanması, kaynakların radyolojik muayenesi ve diğerleri)"
    },
    {
        "ID": 762,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "72.11.01",
        "dc_NACE_BASLIK": "Biyoteknolojiyle ilgili araştırma ve deneysel geliştirme faaliyetleri"
    },
    {
        "ID": 763,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "72.19.01",
        "dc_NACE_BASLIK": "Doğal bilimler ve mühendislikle ilgili diğer araştırma ve deneysel geliştirme faaliyetleri (tarımsal araştırmalar dahil)"
    },
    {
        "ID": 764,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "72.20.01",
        "dc_NACE_BASLIK": "Sosyal bilimlerle ve beşeri bilimlerle ilgili araştırma ve deneysel geliştirme faaliyetleri"
    },
    {
        "ID": 765,
        "dc_MESLEK_GRUBU": "29",
        "dc_MESLEK_GRUBU_ADI": "MİMARLIK VE MÜHENDİSLİK",
        "dc_NACE_KODU": "74.10.01",
        "dc_NACE_BASLIK": "İç mimarların faaliyetleri (iç dekorasyon dahil)"
    },
    {
        "ID": 766,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "26.70.11",
        "dc_NACE_BASLIK": "Objektif merceği, levha ve tabaka halinde polarizan madde, renk filtresi, optik mercek, prizma, ayna ve diğer optik elemanlar ile dürbün, optik mikroskop, optik teleskop ve diğer astronomik aletler ile bunların aksam ve parçalarının imalatı"
    },
    {
        "ID": 767,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "26.70.12",
        "dc_NACE_BASLIK": "Mikrofilm, mikrofiş ve diğer mikroform okuyucuların imalatı"
    },
    {
        "ID": 768,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "26.70.13",
        "dc_NACE_BASLIK": "Sinematografik kameraların ve projektörlerin, diyapozitif (slayt) ve diğer projektörlerin imalatı"
    },
    {
        "ID": 769,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.21",
        "dc_NACE_BASLIK": "Elektronik müzik aletleri veya klavyeli çalgıların imalatı (elektrik gücüyle ses üreten veya sesi güçlendirilen enstrümanlar) (dijital piyano, sintizayzır, elektrogitar, vb.)"
    },
    {
        "ID": 770,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.22",
        "dc_NACE_BASLIK": "Diğer yaylı/telli müzik aletlerinin imalatı (saz, gitar, keman, vb.)"
    },
    {
        "ID": 771,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.23",
        "dc_NACE_BASLIK": "Ağızları huni gibi genişleyen neviden olan boru esaslı müzik aletleri ile diğer üflemeli müzik aletlerinin imalatı (saksafon, flüt, trombon, borazan, vb.)"
    },
    {
        "ID": 772,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.24",
        "dc_NACE_BASLIK": "Vurmalı çalgıların imalatı (trampet, davul, ksilofon, zil, kas vs.)"
    },
    {
        "ID": 773,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.25",
        "dc_NACE_BASLIK": "Piyanolar ve diğer klavyeli yaylı/telli çalgıların imalatı"
    },
    {
        "ID": 774,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.26",
        "dc_NACE_BASLIK": "Borulu ve klavyeli orglar, armonyumlar, akordiyonlar, ağız mızıkaları (armonikalar), tulum vb. çalgıların imalatı"
    },
    {
        "ID": 775,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.27",
        "dc_NACE_BASLIK": "Müzik kutuları, orkestriyonlar, laternalar, çıngıraklar vb. imalatı"
    },
    {
        "ID": 776,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.28",
        "dc_NACE_BASLIK": "Metronomlar, akort çatalları (diyapazonlar) ve akort düdükleri, müzik kutuları için mekanizmalar, müzik aleti telleri ile müzik aletlerinin parça ve aksesuarlarının imalatı"
    },
    {
        "ID": 777,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "32.20.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer müzik aletlerinin imalatı"
    },
    {
        "ID": 778,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "46.49.06",
        "dc_NACE_BASLIK": "Müzik aletleri toptan ticareti"
    },
    {
        "ID": 779,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "46.49.21",
        "dc_NACE_BASLIK": "Sanat eserleri toptan ticareti (büst ve heykeller dahil)"
    },
    {
        "ID": 780,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "47.59.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda müzik aletleri ve müzik partisyonu (nota kağıdı) perakende ticareti"
    },
    {
        "ID": 781,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "47.78.06",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda sanat eserlerinin perakende ticareti (ticari sanat galerilerinin hizmetleri ile ressamların, gravürcülerin, heykeltıraşların, bestekarların ve diğer sanatçıların orijinal çalışmaları) (antika eşyalar hariç)"
    },
    {
        "ID": 782,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.11.03",
        "dc_NACE_BASLIK": "Sinema filmi, video ve televizyon programları yapım faaliyetleri (belgesel yapımcılığı dahil)"
    },
    {
        "ID": 783,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.12.01",
        "dc_NACE_BASLIK": "Sinema filmi, video ve televizyon programları çekim sonrası faaliyetleri (ses-görüntü redaksiyonu, asıl kopyaların aktarımı, renk düzeltme, sayısal iyileştirme, görsel efekt, animasyon, alt yazı, başlıklandırma, grafik, vb. işler)"
    },
    {
        "ID": 784,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.13.02",
        "dc_NACE_BASLIK": "Sinema filmi, video ve televizyon programları dağıtım faaliyetleri (film hakları ve gelirleri için lisanslama hizmetleri, çalışmaların gösterimi, yayımlanması ve kiralanması için izin verilmesi, elde edilen gelirlerin dağıtılması vb.)"
    },
    {
        "ID": 785,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.14.02",
        "dc_NACE_BASLIK": "Sinema filmi gösterim faaliyetleri"
    },
    {
        "ID": 786,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.20.01",
        "dc_NACE_BASLIK": "Müzik yayımcılığı faaliyetleri (basılı müzik notaları, elektronik formdaki müzikal besteler, müzikal ses diskleri, indirilebilir müzikler vb.)"
    },
    {
        "ID": 787,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.20.02",
        "dc_NACE_BASLIK": "Ses kayıt ve canlı kayıt faaliyetleri (seslerin, sözlerin ve müziğin ses kayıt stüdyosunun özel teknik ekipmanları kullanılarak kaydedilmesi ile konferans, seminer, konser vb. canlı etkinliklerde yapılan kayıt hizmetleri vb.)"
    },
    {
        "ID": 788,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.20.03",
        "dc_NACE_BASLIK": "Orijinal ses kayıtlarını kullanım hakkı için lisanslama faaliyetleri"
    },
    {
        "ID": 789,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "59.20.06",
        "dc_NACE_BASLIK": "Radyo programı yapımcılık faaliyetleri"
    },
    {
        "ID": 790,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "60.10.09",
        "dc_NACE_BASLIK": "Radyo yayıncılığı (radyo yayın stüdyoları vb.)"
    },
    {
        "ID": 791,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "60.20.01",
        "dc_NACE_BASLIK": "Televizyon programcılığı ve yayıncılığı faaliyetleri"
    },
    {
        "ID": 792,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "63.11.08",
        "dc_NACE_BASLIK": "Veri işleme, barındırma ve ilgili faaliyetler (veri girişi, verinin işlenmesi, özel raporların oluşturulması, depolanması, vb.)"
    },
    {
        "ID": 793,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "63.12.01",
        "dc_NACE_BASLIK": "Web portalı faaliyetleri"
    },
    {
        "ID": 794,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "63.91.01",
        "dc_NACE_BASLIK": "Haber ajanslarının faaliyetleri (medya için haber, resim ve röportaj tedarik eden haber bürosu ve haber ajanslarının faaliyetleri)"
    },
    {
        "ID": 795,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "63.99.01",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer bilgi hizmet faaliyetleri (bilgi araştırma hizmetleri, gazete kupürleri hizmetleri vb.)"
    },
    {
        "ID": 796,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "70.21.01",
        "dc_NACE_BASLIK": "Halkla ilişkiler ve iletişim faaliyetleri"
    },
    {
        "ID": 797,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "73.11.01",
        "dc_NACE_BASLIK": "Reklam ajanslarının faaliyetleri (kullanılacak medyanın seçimi, reklamın tasarımı, sözlerin yazılması, reklam filmleri için senaryonun yazımı, satış noktalarında reklam ürünlerinin gösterimi ve sunumu vb.)"
    },
    {
        "ID": 798,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "73.11.03",
        "dc_NACE_BASLIK": "Reklam araç ve eşantiyonların dağıtımı ve teslimi faaliyetleri"
    },
    {
        "ID": 799,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "73.12.02",
        "dc_NACE_BASLIK": "Çeşitli medya reklamları için alan ve zamanın bir ücret veya sözleşmeye dayalı olarak satışı (ilan tahtası, billboard, bina, araç vb. üzerinden reklam alanlarının ve zamanlarının satışı dahil)"
    },
    {
        "ID": 800,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "73.20.03",
        "dc_NACE_BASLIK": "Piyasa ve kamuoyu araştırma faaliyetleri (anket yapma, kamuoyu yoklamaları vb.)"
    },
    {
        "ID": 801,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "74.10.02",
        "dc_NACE_BASLIK": "Diğer uzmanlaşmış tasarım faaliyetleri (tekstil, giyim, ayakkabı gibi kişisel eşyalar ve ev eşyaları tasarımı ile endüstriyel tasarım dahil, iç mimarların ve uzmanlaşmış grafik tasarımcıların faaliyetleri hariç)"
    },
    {
        "ID": 802,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "74.10.03",
        "dc_NACE_BASLIK": "Uzmanlaşmış grafik tasarımcılarının faaliyetleri (marka ve alametifarika tasarımı dahil)"
    },
    {
        "ID": 803,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "74.30.12",
        "dc_NACE_BASLIK": "Tercüme ve sözlü tercüme faaliyetleri (yeminli tercüme büroları, mütercimlik ve tercümanlık faaliyetleri vb. dahil)"
    },
    {
        "ID": 804,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "74.90.05",
        "dc_NACE_BASLIK": "Sanatçı, sporcu, şovmen, manken ve diğerleri için ajansların ve menajerlerin faaliyetleri"
    },
    {
        "ID": 805,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "78.10.04",
        "dc_NACE_BASLIK": "Oyuncu seçme ajansları ve bürolarının faaliyetleri (tiyatro rol dağıtım ajansları vb.)"
    },
    {
        "ID": 806,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "79.90.01",
        "dc_NACE_BASLIK": "Turist rehberliği ve ziyaretçiler için danışmanlık faaliyetleri (gezilerle ilgili bilgi sağlanması)"
    },
    {
        "ID": 807,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "79.90.02",
        "dc_NACE_BASLIK": "Spor, müzik, tiyatro ve diğer eğlence etkinlikleri için yer ayırma (rezervasyon) ve bilet satılması faaliyeti"
    },
    {
        "ID": 808,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "84.12.14",
        "dc_NACE_BASLIK": "Spor, dinlence, kültür ve dine ilişkin kamu yönetimi hizmetleri"
    },
    {
        "ID": 809,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.01.14",
        "dc_NACE_BASLIK": "Canlı tiyatro, opera, bale, müzikal, konser vb. yapımların sahneye konulması faaliyetleri (illüzyon gösterileri, kukla gösterileri ve kumpanyalar dahil)"
    },
    {
        "ID": 810,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.01.15",
        "dc_NACE_BASLIK": "Orkestra ve bandoların faaliyetleri"
    },
    {
        "ID": 811,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.01.16",
        "dc_NACE_BASLIK": "Bağımsız müzisyen, ses sanatçısı, konuşmacı, sunucu vb.lerin faaliyetleri (müzik grupları dahil)"
    },
    {
        "ID": 812,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.01.17",
        "dc_NACE_BASLIK": "Bağımsız manken ve modellerin faaliyetleri"
    },
    {
        "ID": 813,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.01.18",
        "dc_NACE_BASLIK": "Bağımsız aktör, aktrist ve dublörlerin faaliyetleri"
    },
    {
        "ID": 814,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.02.11",
        "dc_NACE_BASLIK": "Gösteri sanatlarına yönelik yönetmenlerin ve yapımcıların faaliyetleri"
    },
    {
        "ID": 815,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.03.09",
        "dc_NACE_BASLIK": "Yazar, bestekar, heykeltıraş, ressam, karikatürcü, gravürcü, ebru sanatçısı, vb. bireysel sanatçıların faaliyetleri (hakkakçılık, hattatçılık, eşya ve motif süslemeciliği (tezyinatçılık) dahil)"
    },
    {
        "ID": 816,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.03.11",
        "dc_NACE_BASLIK": "Bağımsız gazetecilerin faaliyetleri"
    },
    {
        "ID": 817,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.03.12",
        "dc_NACE_BASLIK": "Tablo, gravür vb. sanat eserlerinin restorasyonu (müzelerde ve özel koleksiyonlarda yer alan eserlerin restorasyonu dahil)"
    },
    {
        "ID": 818,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "90.04.01",
        "dc_NACE_BASLIK": "Sanat tesislerinin işletilmesi (sanat galerileri, konser ve tiyatro salonları ve diğer sanat tesisleri)"
    },
    {
        "ID": 819,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "91.01.02",
        "dc_NACE_BASLIK": "Kütüphane ve arşivlerin faaliyetleri (devlet arşivleri dahil)"
    },
    {
        "ID": 820,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "91.02.01",
        "dc_NACE_BASLIK": "Müzelerin faaliyetleri"
    },
    {
        "ID": 821,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "91.03.02",
        "dc_NACE_BASLIK": "Tarihi alanlar ve yapılar ile benzeri turistik yerlerin işletilmesi (tarihi alanların ve yapıların korunması dahil)"
    },
    {
        "ID": 822,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "91.04.02",
        "dc_NACE_BASLIK": "Botanik bahçeleri, hayvanat bahçeleri ve tabiatı koruma alanlarıyla ilgili faaliyetler (milli parklar dahil)"
    },
    {
        "ID": 823,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "93.29.05",
        "dc_NACE_BASLIK": "Dans pistlerinin, diskoteklerin işletilmesi (içecek sunum hizmetleri hariç)"
    },
    {
        "ID": 824,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "93.29.08",
        "dc_NACE_BASLIK": "Havai fişek ile \"ses ve ışık\" gösterisi faaliyetleri"
    },
    {
        "ID": 825,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "94.99.09",
        "dc_NACE_BASLIK": "Üyelik gerektiren kültür, dayanışma ve eğlence dernek ve birliklerinin faaliyetleri"
    },
    {
        "ID": 826,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "94.99.16",
        "dc_NACE_BASLIK": "Engellilere, etnik gruplara ve azınlıklara yönelik üyelik gerektiren birlik ve kuruluşların faaliyetleri"
    },
    {
        "ID": 827,
        "dc_MESLEK_GRUBU": "30",
        "dc_MESLEK_GRUBU_ADI": "BİLGİ, İLETİŞİM VE MEDYA",
        "dc_NACE_KODU": "95.29.06",
        "dc_NACE_BASLIK": "Müzik aletlerinin bakım ve onarımı (piyano akordu dahil)"
    },
    {
        "ID": 828,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.30.17",
        "dc_NACE_BASLIK": "Kar kayakları, kayak ayakkabıları, kayak botları, kayak batonları, buz patenleri ve tekerlekli patenler ile su kayağı araçları, sörf tahtaları, rüzgar sörfleri vb. ekipmanlar ile bunların parçalarının imalatı (kaykaylar dahil)"
    },
    {
        "ID": 829,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.30.18",
        "dc_NACE_BASLIK": "Jimnastik ve atletizm eşyaları ile form tutma salonlarına ait eşya ve ekipmanların imalatı (atlama beygiri, dambıl ve halterler, kürek çekme ve bisiklete binme aletleri, ciritler, çekiçler; boks çalışma topları, boks veya güreş için ringler vb.)"
    },
    {
        "ID": 830,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.30.19",
        "dc_NACE_BASLIK": "Spor amaçlı dağcılık, avcılık veya balıkçılık eşyalarının imalatı (kasklar, olta kamışları, olta iğneleri ve kancaları, otomatik olta makaraları, el kepçeleri, kelebek ağları, yapma balıklar, sinekler gibi suni yemler, kurşunlar, yapma kuşlar vb.)"
    },
    {
        "ID": 831,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.30.20",
        "dc_NACE_BASLIK": "Spor veya açık hava oyunları için diğer eşyaların imalatı (boks eldiveni, spor eldiveni, yaylar, beyzbol ve golf sopaları ile top ve diğer eşyaları, tenis masası, raket, ağ ve topları, tozluklar, bacak koruyucular, şişme ve diğer havuzlar vb.)"
    },
    {
        "ID": 832,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.30.21",
        "dc_NACE_BASLIK": "Top imalatı (beyzbol, futbol, basketbol ve voleybol için)"
    },
    {
        "ID": 833,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.40.01",
        "dc_NACE_BASLIK": "Oyun kağıt ve kartlarının imalatı (iskambil vb.)"
    },
    {
        "ID": 834,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.40.02",
        "dc_NACE_BASLIK": "Bozuk para veya jetonla çalışan oyun makineleri ile bilardo için kullanılan eşya ve aksesuarların imalatı (rulet vb. oyun makineleri ile bilardo masa ve istekaları, isteka dayanakları, bilardo topları, tebeşirleri, toplu veya sürgülü puan sayaçları vb.)"
    },
    {
        "ID": 835,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "32.40.06",
        "dc_NACE_BASLIK": "Lunapark, masa ve salon oyunları için gereçlerin imalatı"
    },
    {
        "ID": 836,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "46.49.02",
        "dc_NACE_BASLIK": "Spor malzemesi toptan ticareti (basketbol, futbol, vb. spor ayakkabıları, kayak botları gibi özel spor ayakkabıları, bisikletler ve bisiklet parçaları ile aksesuarları, çadır ve kamp malzemeleri dahil)"
    },
    {
        "ID": 837,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "46.49.09",
        "dc_NACE_BASLIK": "Sportif amaçlı avcılık ve balıkçılık malzemeleri toptan ticareti (tabanca, av tüfeği ve balık ağları hariç)"
    },
    {
        "ID": 838,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "46.49.26",
        "dc_NACE_BASLIK": "Spor ve eğlence amaçlı teknelerin, kayıkların ve kanoların toptan ticareti (deniz taşıtları için dıştan takmalı motorlar dahil)"
    },
    {
        "ID": 839,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "46.49.27",
        "dc_NACE_BASLIK": "Pul ve jeton toptan ticareti"
    },
    {
        "ID": 840,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "47.64.07",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda jimnastik ve atletizm eşya ve ekipmanları ile form tutma merkezlerine ait eşya ve ekipmanların perakende ticareti (halter, yürüme bantları, vb.)"
    },
    {
        "ID": 841,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "47.64.90",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda diğer spor malzemelerinin perakende ticareti (paraşütler, rotoşütler, cankurtaran yelekleri, cankurtaran simitleri, spor amaçlı ip ve urganlar, binicilik kamçıları, kayak ve patenler vb.)"
    },
    {
        "ID": 842,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "47.78.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda pul ve jeton perakende ticareti (özel günlerde çıkarılan pul ve paraların perakende ticareti dahil)"
    },
    {
        "ID": 843,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "47.89.11",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla spor malzemeleri, av ve kamp malzemeleri perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 844,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "61.90.05",
        "dc_NACE_BASLIK": "İnternet kafelerin faaliyetleri"
    },
    {
        "ID": 845,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "90.01.20",
        "dc_NACE_BASLIK": "Sirklerin faaliyetleri"
    },
    {
        "ID": 846,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "90.01.90",
        "dc_NACE_BASLIK": "Bys. diğer gösteri sanatları"
    },
    {
        "ID": 847,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "90.02.12",
        "dc_NACE_BASLIK": "Gösteri sanatlarına yönelik diğer destekleyici faaliyetler (sahne tasarımcıları, dekoratörleri ve kostüm tasarımcılarının faaliyetleri ile gösteri için dekor ve arka perdenin, ışıklandırma ve ses ekipmanlarının işletilmesi)"
    },
    {
        "ID": 848,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "92.00.01",
        "dc_NACE_BASLIK": "Müşterek bahis faaliyetleri (at yarışı, köpek yarışı, futbol ve diğer spor yarışmaları konusunda bahis hizmetleri)"
    },
    {
        "ID": 849,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "92.00.02",
        "dc_NACE_BASLIK": "Loto, vb. sayısal şans oyunlarına ilişkin faaliyetler (piyango biletlerinin satışı dahil)"
    },
    {
        "ID": 850,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "92.00.03",
        "dc_NACE_BASLIK": "Kumarhanelerin faaliyetleri (çevrim içi olanlar dahil)"
    },
    {
        "ID": 851,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.11.01",
        "dc_NACE_BASLIK": "Spor tesislerinin işletilmesi (futbol, hokey, paten, golf, vb. sahaları, yarış pistleri, stadyumlar, yüzme havuzları, tenis kortları, bovling alanları, boks arenaları, vb. tesisler)"
    },
    {
        "ID": 852,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.11.02",
        "dc_NACE_BASLIK": "Hipodromların işletilmesi"
    },
    {
        "ID": 853,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.01",
        "dc_NACE_BASLIK": "Atıcılık ve okçuluk kulüplerinin faaliyetleri"
    },
    {
        "ID": 854,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.03",
        "dc_NACE_BASLIK": "Futbol, voleybol, basketbol vb. kulüplerinin faaliyetleri"
    },
    {
        "ID": 855,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.04",
        "dc_NACE_BASLIK": "Güreş kulüplerinin faaliyetleri"
    },
    {
        "ID": 856,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.05",
        "dc_NACE_BASLIK": "Jokey kulüplerinin faaliyetleri"
    },
    {
        "ID": 857,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.06",
        "dc_NACE_BASLIK": "Tenis kulüplerinin faaliyetleri"
    },
    {
        "ID": 858,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.07",
        "dc_NACE_BASLIK": "Yüzme kulüplerinin faaliyetleri"
    },
    {
        "ID": 859,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.09",
        "dc_NACE_BASLIK": "Atletizm kulüplerinin faaliyetleri"
    },
    {
        "ID": 860,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.12.90",
        "dc_NACE_BASLIK": "Diğer spor kulüplerinin faaliyetleri (golf, bovling, satranç, kayak, buz pateni, vb. kulüpleri)"
    },
    {
        "ID": 861,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.13.01",
        "dc_NACE_BASLIK": "Form tutma ve vücut geliştirme salonlarının faaliyetleri"
    },
    {
        "ID": 862,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.19.01",
        "dc_NACE_BASLIK": "Kendi hesabına bireysel çalışan atlet, hakem, zaman tutucu, antrenör, spor eğitmeni vb. sporcuların faaliyetleri"
    },
    {
        "ID": 863,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.19.02",
        "dc_NACE_BASLIK": "Spor ve eğlence amaçlı spor etkinliği ve karşılaşması düzenleyicilerinin ve organizatörlerin faaliyetleri"
    },
    {
        "ID": 864,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.19.03",
        "dc_NACE_BASLIK": "Spor ve eğlence amaçlı sporlara ilişkin destek hizmetler (balıkçılık ve avcılık spor alanlarının işletilmesi, avcılık, balıkçılık ve dağcılık rehberliği, yarış atı ahırı ve yarış aracı garajlarının hizmetleri, spor ve eğlence hayvanlarının eğitimi, vb.)"
    },
    {
        "ID": 865,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.19.04",
        "dc_NACE_BASLIK": "Spor ligleri ve düzenleyici birimlerin faaliyetleri"
    },
    {
        "ID": 866,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.19.05",
        "dc_NACE_BASLIK": "Bilardo salonlarının faaliyetleri"
    },
    {
        "ID": 867,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.19.06",
        "dc_NACE_BASLIK": "Atış poligonlarının faaliyetleri"
    },
    {
        "ID": 868,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.19.90",
        "dc_NACE_BASLIK": "Diğer spor ve eğlence amaçlı spor hizmetleri (paraşüt hizmetleri, delta-kanat hizmetleri, dalgıçlık hizmetleri ve bys. Diğer spor ve eğlence hizmetleri)"
    },
    {
        "ID": 869,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.21.01",
        "dc_NACE_BASLIK": "Eğlence parkları ve lunaparkların faaliyetleri"
    },
    {
        "ID": 870,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.29.01",
        "dc_NACE_BASLIK": "Plaj alanlarının işletilmesi (bu tesislerin bütünleyici bir parçası olan soyunma odası, dolap, sandalye, kano, deniz motosikleti vb. kiralanması dahil)"
    },
    {
        "ID": 871,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.29.02",
        "dc_NACE_BASLIK": "Düğün, balo ve kokteyl salonlarının işletilmesi (yiyecek ve içecek sunum hizmetleri hariç)"
    },
    {
        "ID": 872,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.29.03",
        "dc_NACE_BASLIK": "Bozuk para veya jetonla çalışan oyun makinelerinin işletilmesi (langırt, tilt, atari salonları, vb.)"
    },
    {
        "ID": 873,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.29.07",
        "dc_NACE_BASLIK": "Marina, vb. dinlence amaçlı ulaştırma tesislerinin işletilmesi"
    },
    {
        "ID": 874,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.29.09",
        "dc_NACE_BASLIK": "Kayak pistlerinin işletilmesi"
    },
    {
        "ID": 875,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.29.10",
        "dc_NACE_BASLIK": "Dinlence (rekreasyon) parklarının faaliyetleri (konaklamalı olanlar ile eğlence parkları ve lunaparkların işletilmesi hariç)"
    },
    {
        "ID": 876,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "93.29.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış çeşitli eğlence hizmetleri (boğa güreşi, rodeo vb.)"
    },
    {
        "ID": 877,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.11.03",
        "dc_NACE_BASLIK": "Esnaf ve sanatkar odaları, birlikleri ve üst kuruluşlarının faaliyetleri"
    },
    {
        "ID": 878,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.11.04",
        "dc_NACE_BASLIK": "Çiftçi ve ziraat odaları, birlikleri ve üst kuruluşlarının faaliyetleri"
    },
    {
        "ID": 879,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.11.05",
        "dc_NACE_BASLIK": "Ticaret ve sanayi odaları ve üst kuruluşlarının faaliyetleri"
    },
    {
        "ID": 880,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.11.06",
        "dc_NACE_BASLIK": "İşveren sendikalarının faaliyetleri"
    },
    {
        "ID": 881,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.11.90",
        "dc_NACE_BASLIK": "Diğer iş ve işveren odaları, birlikleri ve üst kuruluşlarının faaliyetleri (işçi, işveren ve memur sendikaları hariç)"
    },
    {
        "ID": 882,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.12.01",
        "dc_NACE_BASLIK": "Baroların faaliyetleri"
    },
    {
        "ID": 883,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.12.05",
        "dc_NACE_BASLIK": "Mesleki birlikler, dernekler ve odaların faaliyetleri (mimar, mühendis, tabip, muhasebeci, yazar vb. dernek ve odaları) (barolar hariç)"
    },
    {
        "ID": 884,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.12.90",
        "dc_NACE_BASLIK": "Diğer profesyonel meslek kuruluşlarının faaliyetleri"
    },
    {
        "ID": 885,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.20.01",
        "dc_NACE_BASLIK": "İşçi ve memur sendikalarının faaliyetleri (üst kuruluşları dahil)"
    },
    {
        "ID": 886,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.91.02",
        "dc_NACE_BASLIK": "Üyelik gerektiren dini kuruluşların faaliyetleri (cami, kilise, sinagog vb. yerlerde ibadet edenlere doğrudan hizmet sağlayan dini organizasyonların veya kişilerin faaliyetleri vb.)"
    },
    {
        "ID": 887,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.92.02",
        "dc_NACE_BASLIK": "Siyasi kuruluşların faaliyetleri (siyasi partiler, vb.)"
    },
    {
        "ID": 888,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.01",
        "dc_NACE_BASLIK": "Üyelik gerektiren çevre ve doğal hayatın korunmasına yönelik dernek ve birliklerin faaliyetleri (vahşi yaşamı koruma kuruluşları dahil)"
    },
    {
        "ID": 889,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.02",
        "dc_NACE_BASLIK": "Üyelik gerektiren gençlik dernek ve birliklerinin faaliyetleri (öğrenci birlikleri ile izci birlik ve kulüpleri dahil)"
    },
    {
        "ID": 890,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.03",
        "dc_NACE_BASLIK": "Üyelik gerektiren yurtsever dernek ve birliklerinin faaliyetleri (savaş gazisi birlikleri vb.)"
    },
    {
        "ID": 891,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.04",
        "dc_NACE_BASLIK": "Üyelik gerektiren hayvanları koruma dernek ve birliklerinin faaliyetleri (hayvanları koruma derneği, vb.)"
    },
    {
        "ID": 892,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.05",
        "dc_NACE_BASLIK": "Üyelik gerektiren kadın hakları koruma dernek ve birliklerinin faaliyetleri"
    },
    {
        "ID": 893,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.08",
        "dc_NACE_BASLIK": "Okul aile birlikleri"
    },
    {
        "ID": 894,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.12",
        "dc_NACE_BASLIK": "Üyelik gerektiren ideoloji ve düşünce kuruluşlarının ve derneklerinin faaliyetleri"
    },
    {
        "ID": 895,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.13",
        "dc_NACE_BASLIK": "Üyelik gerektiren sivil arama ve kurtarma dernek ve birliklerinin faaliyetleri (sivil savunma faaliyetleri hariç)"
    },
    {
        "ID": 896,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.14",
        "dc_NACE_BASLIK": "Üyelik gerektiren bireysel özgürlük ve insan hakları dernek ve birliklerinin faaliyetleri"
    },
    {
        "ID": 897,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.15",
        "dc_NACE_BASLIK": "Üyelik gerektiren gönüllü sağlık dernek ve birliklerinin faaliyetleri"
    },
    {
        "ID": 898,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.17",
        "dc_NACE_BASLIK": "Üyelik gerektiren toplumsal hayatı geliştirme ve iyileştirmeye yönelik oluşturulan birlik ve kuruluşların faaliyetleri"
    },
    {
        "ID": 899,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.18",
        "dc_NACE_BASLIK": "Üyelik gerektiren tüketici haklarını savunan birlikler ve kuruluşların faaliyetleri"
    },
    {
        "ID": 900,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.19",
        "dc_NACE_BASLIK": "Havacılığın geliştirilmesine yönelik üyelik gerektiren kuruluş ve derneklerin faaliyetleri"
    },
    {
        "ID": 901,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.20",
        "dc_NACE_BASLIK": "Üye olunan derneklerin üst kuruluşları ve üst birlikleri (iş, işveren ve mesleki birlik ve derneklerin üst kuruluşları hariç)"
    },
    {
        "ID": 902,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.21",
        "dc_NACE_BASLIK": "Üyelik gerektiren yardım kuruluşlarının ve derneklerinin faaliyetleri (doğal afetlerde zarar görenler, evsizler, fakirler için organizasyonlar, vb.) (arama ve kurtarma hariç)"
    },
    {
        "ID": 903,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.22",
        "dc_NACE_BASLIK": "Üyelik gerektiren eğitim ve araştırma birlik ve derneklerinin faaliyetleri"
    },
    {
        "ID": 904,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.23",
        "dc_NACE_BASLIK": "Üyelik gerektiren konut ve kalkınma birlik ve derneklerinin faaliyetleri"
    },
    {
        "ID": 905,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.24",
        "dc_NACE_BASLIK": "Üyelik gerektiren mezun dernek ve birliklerinin faaliyetleri (profesyonel meslek kuruluşları hariç)"
    },
    {
        "ID": 906,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "94.99.90",
        "dc_NACE_BASLIK": "Üyelik gerektiren başka yerde sınıflandırılmamış diğer üye olunan kuruluşların faaliyetleri (klasik araba birlikleri, kiracı birlikleri, vb. dahil)"
    },
    {
        "ID": 907,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "95.29.03",
        "dc_NACE_BASLIK": "Spor araç ve gereçleri ile kamp malzemelerinin bakımı ve onarımı (kayak, sörf tahtası, paten, raket, diğer spor ve açık hava oyunlarına ait eşya ve ekipmanlar) (spor ve eğlence amaçlı silahların onarımı hariç)"
    },
    {
        "ID": 908,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.03.01",
        "dc_NACE_BASLIK": "Cenaze işleri ile ilgili faaliyetler (cenaze yıkama yerlerinin işletilmesi, cenazenin nakli, yıkama hizmetleri, mezar yeri satışı, defin hizmetleri, cenaze levazımatçılığı vb.)"
    },
    {
        "ID": 909,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.04.01",
        "dc_NACE_BASLIK": "Hamam, sauna, vb. yerlerin faaliyetleri"
    },
    {
        "ID": 910,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.04.02",
        "dc_NACE_BASLIK": "Kaplıca, ılıca, içmeler, spa merkezleri, vb. yerlerin faaliyetleri (konaklama hizmetleri hariç)"
    },
    {
        "ID": 911,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.04.03",
        "dc_NACE_BASLIK": "Zayıflama salonu, masaj salonu, solaryum, vb. yerlerin işletilmesi faaliyetleri (form tutma salonlarının ve diyetisyenlerin faaliyetleri hariç)"
    },
    {
        "ID": 912,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.02",
        "dc_NACE_BASLIK": "Nikah salonlarının hizmetleri"
    },
    {
        "ID": 913,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.03",
        "dc_NACE_BASLIK": "Fal , astroloji ve spiritualist hizmetleri"
    },
    {
        "ID": 914,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.04",
        "dc_NACE_BASLIK": "Genel tuvaletlerin işletilmesi faaliyeti"
    },
    {
        "ID": 915,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.05",
        "dc_NACE_BASLIK": "Hamallık hizmetleri"
    },
    {
        "ID": 916,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.07",
        "dc_NACE_BASLIK": "Kendi hesabına çalışan valelerin hizmetleri"
    },
    {
        "ID": 917,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.08",
        "dc_NACE_BASLIK": "Eskort ve refakat hizmetleri (güvenlik hizmetleri hariç)"
    },
    {
        "ID": 918,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.09",
        "dc_NACE_BASLIK": "Tanıştırma bürolarının ve evlendirme ajanslarının hizmetleri"
    },
    {
        "ID": 919,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.10",
        "dc_NACE_BASLIK": "Kendi hesabına çalışan yamak, garson, vb. hizmet sunanların faaliyetleri"
    },
    {
        "ID": 920,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.12",
        "dc_NACE_BASLIK": "Genelev hizmetleri"
    },
    {
        "ID": 921,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.14",
        "dc_NACE_BASLIK": "Ev hayvanları bakım hizmetleri (ev hayvanlarına verilen besleme, bakım, barındırma, kuaförlük, eğitim, vb. hizmetler)"
    },
    {
        "ID": 922,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.15",
        "dc_NACE_BASLIK": "Şecere bulma faaliyetleri"
    },
    {
        "ID": 923,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.18",
        "dc_NACE_BASLIK": "Arzuhalcilerin faaliyetleri"
    },
    {
        "ID": 924,
        "dc_MESLEK_GRUBU": "31",
        "dc_MESLEK_GRUBU_ADI": "KÜLTÜR VE SPOR",
        "dc_NACE_KODU": "96.09.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer hizmet faaliyetleri (dövme ve piercing hizmetleri, vb.)"
    },
    {
        "ID": 925,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.11.01",
        "dc_NACE_BASLIK": "Gazetelerin, dergilerin ve süreli yayınların basım hizmetleri (haftada dört veya daha fazla yayınlananlar)"
    },
    {
        "ID": 926,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.12.01",
        "dc_NACE_BASLIK": "Çıkartma, takvim, ticari katalog, tanıtım broşürü, poster, satış bülteni, kartpostal, davetiye ve tebrik kartları, yıllık, rehber, resim, çizim ve boyama kitapları, çizgi roman vb. basım hizmetleri"
    },
    {
        "ID": 927,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.12.02",
        "dc_NACE_BASLIK": "Gazetelerin, dergilerin ve süreli yayınların basım hizmetleri (haftada dört kereden daha az yayınlananlar)"
    },
    {
        "ID": 928,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.12.03",
        "dc_NACE_BASLIK": "Ansiklopedi, sözlük, kitap, kitapçık, müzik eserleri ve müzik el yazmaları, atlas, harita vb. basım hizmetleri"
    },
    {
        "ID": 929,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.12.04",
        "dc_NACE_BASLIK": "Röprodüksiyon basımı (bir sanat eserinin aslını bozmadan basılması)"
    },
    {
        "ID": 930,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.12.05",
        "dc_NACE_BASLIK": "Serigrafi faaliyetleri"
    },
    {
        "ID": 931,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.12.06",
        "dc_NACE_BASLIK": "Posta pulu, damga pulu, matbu belgeler, tapu senetleri, akıllı kart, çek defterleri, kağıt para ve diğer değerli kağıtların ve benzerlerinin basım hizmetleri"
    },
    {
        "ID": 932,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.12.07",
        "dc_NACE_BASLIK": "Plastik, cam, metal, ağaç ve seramik üstüne baskı hizmetleri"
    },
    {
        "ID": 933,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.13.01",
        "dc_NACE_BASLIK": "Basımda kullanmak üzere baskı klişeleri ya da silindirleri ile diğer basım unsurlarının üretilmesi (klişecilik vb.) ile mizanpaj, dizgi, tabaka yapım hizmetleri, gravür baskı için silindirlerin kazınması veya asitle aşındırılması vb. hizmetler"
    },
    {
        "ID": 934,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.13.02",
        "dc_NACE_BASLIK": "Basım öncesi bilgisayar destekli hizmetler (bilgisayar destekli sayfa tasarımı ile saydam, asetat, reprografik sunum araçları ve diğer sayısal sunum ortamları, taslaklar, planlar vb. baskı ürünlerinin tasarlanması) (masa üstü yayımcılık dahil)"
    },
    {
        "ID": 935,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.14.01",
        "dc_NACE_BASLIK": "Ciltçilik ve ilgili hizmetler/mücellitlik (katlama, birleştirme, dikme, yapıştırma, kesme, kapak takma gibi işlemler ile damgalama, Braille alfabesi kopyalama vb. hizmetler)"
    },
    {
        "ID": 936,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.20.02",
        "dc_NACE_BASLIK": "Ses ve görüntü kayıtlarının çoğaltılması hizmetleri (CD'lerin, DVD'lerin, kasetlerin ve benzerlerinin asıl (master) kopyalarından çoğaltılması)"
    },
    {
        "ID": 937,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "18.20.03",
        "dc_NACE_BASLIK": "Yazılımların çoğaltılması hizmetleri (CD, kaset vb. ortamlardaki bilgisayar yazılımlarının ve verilerin asıl (master) kopyalarından çoğaltılması)"
    },
    {
        "ID": 938,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "46.49.11",
        "dc_NACE_BASLIK": "Kitap, dergi ve gazete toptan ticareti"
    },
    {
        "ID": 939,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "47.61.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kitap perakende ticareti (kitap, ansiklopedi, rehber vb. ile CD ve DVD ortamındaki kitaplar vb.)"
    },
    {
        "ID": 940,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "47.62.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda gazete ve dergilerin perakende ticareti"
    },
    {
        "ID": 941,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "47.63.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda müzik ve video kayıtlarının perakende ticareti (dolu ses, müzik ve video kasetleri, CD/DVD vb. ürünler ile boş olanlar dahil)"
    },
    {
        "ID": 942,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "47.79.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ikinci el kitapların perakende ticareti (sahafların faaliyetleri)"
    },
    {
        "ID": 943,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "47.89.15",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla kitap perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 944,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.11.01",
        "dc_NACE_BASLIK": "Kitap yayımı (broşür, risale, ansiklopedi, vb. dahil, çocuk kitaplarının, ders kitaplarının ve yardımcı ders kitaplarının yayımlanması hariç)"
    },
    {
        "ID": 945,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.11.03",
        "dc_NACE_BASLIK": "Çocuk kitaplarının yayımlanması"
    },
    {
        "ID": 946,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.11.04",
        "dc_NACE_BASLIK": "Ders kitaplarının ve yardımcı ders kitaplarının yayımlanması (sözlük, atlas, grafikler, haritalar vb. dahil)"
    },
    {
        "ID": 947,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.12.01",
        "dc_NACE_BASLIK": "Rehberlerin ve posta adres listelerinin yayımlanması (telefon rehberleri, iş ve ticaret rehberleri, belediye ve şehir rehberleri, vb.)"
    },
    {
        "ID": 948,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.13.01",
        "dc_NACE_BASLIK": "Gazetelerin yayımlanması (haftada en az dört kez yayımlananlar) (reklam gazeteleri dahil)"
    },
    {
        "ID": 949,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.14.02",
        "dc_NACE_BASLIK": "Eğitime destek amaçlı dergi ve süreli yayınların yayımlanması (haftada dörtten az yayımlananlar)"
    },
    {
        "ID": 950,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.14.03",
        "dc_NACE_BASLIK": "Bilimsel, teknik, kültürel vb. dergi ve süreli yayınların yayımlanması (haftada dörtten az yayımlananlar)"
    },
    {
        "ID": 951,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.14.90",
        "dc_NACE_BASLIK": "Diğer dergi ve süreli yayınların yayımlanması (haftada dörtten az yayımlananlar) (çizgi roman, magazin dergileri vb.)"
    },
    {
        "ID": 952,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.19.04",
        "dc_NACE_BASLIK": "Değerli kağıtların yayımlanması faaliyetleri (pul, tahvil, hisse senedi, bono veya senet vb. değerli kağıtlar)"
    },
    {
        "ID": 953,
        "dc_MESLEK_GRUBU": "32",
        "dc_MESLEK_GRUBU_ADI": "BASIM-YAYIN",
        "dc_NACE_KODU": "58.19.90",
        "dc_NACE_BASLIK": "Bys. diğer yayıncılık faaliyetleri (kartpostal, tebrik kartları vb. ile katalog, poster, reklam materyali vb.)"
    },
    {
        "ID": 954,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "75.00.02",
        "dc_NACE_BASLIK": "Hayvan hastanelerinin faaliyetleri (evcil hayvanlar için ambulans faaliyetleri dahil)"
    },
    {
        "ID": 955,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "75.00.04",
        "dc_NACE_BASLIK": "Veterinerlik hizmetleri (hayvan hastanelerinde verilen hizmetler hariç)"
    },
    {
        "ID": 956,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.10.04",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen insan sağlığına yönelik özel ihtisas gerektiren yataklı hastane hizmetleri (kadın doğum, onkoloji, kemik, ruh ve sinir hastalıkları hastaneleri, vb.)"
    },
    {
        "ID": 957,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.10.05",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından verilen insan sağlığına yönelik yataklı hastane hizmetleri (devlet üniversite hastaneleri dahil, özel ihtisas hastaneleri ile dişçilik, ambulansla taşıma, tıbbi laboratuvar test faaliyetleri hariç)"
    },
    {
        "ID": 958,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.10.12",
        "dc_NACE_BASLIK": "Özel sağlık kurumları tarafından verilen insan sağlığına yönelik özel ihtisas gerektiren yataklı hastane hizmetleri (kadın doğum, onkoloji, kemik, ruh ve sinir hastalıkları hastaneleri, vb.)"
    },
    {
        "ID": 959,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.10.13",
        "dc_NACE_BASLIK": "Özel sağlık kurumları tarafından verilen insan sağlığına yönelik yataklı hastane hizmetleri (özel veya vakıf üniversite hastaneleri dahil, dişçilik, ambulansla taşıma, tıbbi laboratuvar testleri faaliyetleri hariç)"
    },
    {
        "ID": 960,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.21.02",
        "dc_NACE_BASLIK": "Aile ve toplum sağlığı merkezleri tarafından sağlanan yatılı olmayan genel hekimlik uygulama faaliyetleri (yatılı hastane faaliyetleri ile ebeler, hemşireler ve fizyoterapistlerce gerçekleştirilen paramedikal faaliyetler hariç)"
    },
    {
        "ID": 961,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.21.03",
        "dc_NACE_BASLIK": "Özel sağlık kurumları tarafından polikliniklerde sağlanan yatılı olmayan genel hekimlik uygulama faaliyetleri (özel muayene ve yatılı hastane faaliyetleri ile ebe, hemşire ve fizyoterapistlerin paramedikal faaliyetleri hariç)"
    },
    {
        "ID": 962,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.21.04",
        "dc_NACE_BASLIK": "Özel muayenehanelerde sağlanan yatılı olmayan genel hekimlik uygulama faaliyetleri (hastane ve poliklinik faaliyetleri ile ebe, hemşire ve fizyoterapistlerin paramedikal faaliyetleri hariç)"
    },
    {
        "ID": 963,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.21.90",
        "dc_NACE_BASLIK": "Diğer yatılı olmayan genel hekimlik uygulama faaliyetleri (ev, iş yeri, okul vb. yerlerde sağlananlar dahil, ebe, hemşire ve fizyoterapistlerin paramedikal faaliyetleri hariç)"
    },
    {
        "ID": 964,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.22.02",
        "dc_NACE_BASLIK": "Özel muayenehanelerde sağlanan uzman hekimlik ile ilgili yatılı olmayan uygulama faaliyetleri (hastane ve poliklinik faaliyetleri ile ebe, hemşire ve fizyoterapistlerin paramedikal faaliyetleri hariç)"
    },
    {
        "ID": 965,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.22.05",
        "dc_NACE_BASLIK": "Özel sağlık kurumları tarafından poliklinik ve yatılı olmayan tıp merkezlerinde sağlanan uzman hekimlik ile ilgili uygulama faaliyetleri (yatılı hastane faaliyetleri ile ebe, hemşire ve fizyoterapistlerin paramedikal faaliyetleri hariç)"
    },
    {
        "ID": 966,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.22.06",
        "dc_NACE_BASLIK": "Aile ve toplum sağlığı merkezleri tarafından sağlanan yatılı olmayan uzman hekimlik uygulama faaliyetleri (yatılı hastane faaliyetleri ile ebe, hemşire ve fizyoterapistlerin paramedikal faaliyetleri hariç)"
    },
    {
        "ID": 967,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.22.07",
        "dc_NACE_BASLIK": "Diyaliz merkezleri (hastane dışı)"
    },
    {
        "ID": 968,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.22.90",
        "dc_NACE_BASLIK": "Diğer yatılı olmayan uzman hekimlik uygulama faaliyetleri (ev, iş yeri, okul vb. yerlerde sağlananlar dahil, ebe, hemşire ve fizyoterapistlerin paramedikal faaliyetleri hariç)"
    },
    {
        "ID": 969,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.23.01",
        "dc_NACE_BASLIK": "Özel sağlık kurumları tarafından sağlanan diş hekimliği uygulama faaliyetleri (yatılı hastane faaliyetleri ile diş hijyenistleri gibi paramedikal diş sağlığı personelinin faaliyetleri hariç)"
    },
    {
        "ID": 970,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.23.03",
        "dc_NACE_BASLIK": "Özel muayenehanelerde sağlanan diş hekimliği uygulama faaliyetleri (yatılı hastane faaliyetleri ile diş hijyenistleri gibi paramedikal diş sağlığı personelinin faaliyetleri hariç)"
    },
    {
        "ID": 971,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.23.05",
        "dc_NACE_BASLIK": "Kamu kurumları tarafından sağlanan diş hekimliği uygulama faaliyetleri (yatılı hastane faaliyetleri ile diş hijyenistleri gibi paramedikal diş sağlığı personelinin faaliyetleri hariç)"
    },
    {
        "ID": 972,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.01",
        "dc_NACE_BASLIK": "Hemşirelik hizmetleri (evdeki hastalar için bakım, koruma, anne bakımı, çocuk sağlığı ve hemşirelik bakımı alanındaki benzeri hizmetler dahil, hemşireli yatılı bakım tesislerinin faaliyetleri ile tıp doktorlarının hizmetleri hariç) (hastane dışı)"
    },
    {
        "ID": 973,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.03",
        "dc_NACE_BASLIK": "Tıp doktorları dışında yetkili kişilerce sağlanan akupunkturla tedavi faaliyeti (hastane dışı)"
    },
    {
        "ID": 974,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.04",
        "dc_NACE_BASLIK": "Ambulansla hasta taşıma faaliyeti (hastane dışı)"
    },
    {
        "ID": 975,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.05",
        "dc_NACE_BASLIK": "Ebe, sağlık memuru, sünnetçi, iğneci, pansumancı vb.leri tarafından verilen hizmetler (tıp doktorları dışında yetkili kişilerce sağlanan gebelik süresince ve doğum sonrası izleme ve tıbbi işlemleri kapsayan aile planlaması hizmetleri dahil) (hastane dışı)"
    },
    {
        "ID": 976,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.06",
        "dc_NACE_BASLIK": "Fizyoterapi hizmetleri (tıp doktorları dışında yetkili kişilerce sağlanan fizyoterapi, ergoterapi vb. alanlardaki hizmetler) (hastane dışı)"
    },
    {
        "ID": 977,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.07",
        "dc_NACE_BASLIK": "Analiz veya raporlama olmaksızın teşhis amaçlı görüntüleme hizmetleri (tıp doktorları dışında yetkili kişilerce sağlanan röntgen, ultrason, manyetik rezonans (MR) vb. görüntüleme hizmetleri) (hastane dışı)"
    },
    {
        "ID": 978,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.09",
        "dc_NACE_BASLIK": "Kan, sperm ve organ bankalarının faaliyetleri (hastane dışı)"
    },
    {
        "ID": 979,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.10",
        "dc_NACE_BASLIK": "Tıbbi laboratuvarların hizmetleri (adli tıp ve diş laboratuvarlarının faaliyetleri hariç) (hastane dışı)"
    },
    {
        "ID": 980,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.14",
        "dc_NACE_BASLIK": "Tıp doktorları dışında yetkili kişilerce sağlanan akıl sağlığı hizmetleri (psikoanalistler, psikologlar ve psikoterapistler tarafından sağlanan hizmetler) (hastane dışı)"
    },
    {
        "ID": 981,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.16",
        "dc_NACE_BASLIK": "Adli tıp laboratuvarlarının faaliyetleri"
    },
    {
        "ID": 982,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "86.90.90",
        "dc_NACE_BASLIK": "Bys. diğer paramedikal insan sağlığı hizmetleri (tıp doktorları dışında yetkili kişilerce sağlanan mesleki terapi, aroma terapi, konuşma terapisi, homeopati, besin tedavisi, ayak bakımı, diş hijyeni vb. hizmetler) (hastane dışı)"
    },
    {
        "ID": 983,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "87.10.01",
        "dc_NACE_BASLIK": "Hemşireli yatılı bakım faaliyetleri (hemşireli bakım evlerinin, hemşireli huzur evlerinin faaliyetleri dahil, sadece asgari düzeyde hemşire bakımı sağlanan yaşlı evlerinin, yetimhanelerin, yurtların faaliyetleri ile evlerde sağlanan hizmetler hariç)"
    },
    {
        "ID": 984,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "87.20.02",
        "dc_NACE_BASLIK": "Zihinsel engellilik, ruh sağlığı ve madde bağımlılığına yönelik yatılı bakım faaliyetleri (hastanelerin faaliyetleri ile yatılı sosyal hizmet faaliyetleri hariç)"
    },
    {
        "ID": 985,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "87.30.02",
        "dc_NACE_BASLIK": "Yaşlılara ve bedensel engellilere yönelik yatılı bakım faaliyetleri (destekli yaşam tesisleri, hemşire bakımı olmayan huzurevleri ve asgari düzeyde hemşire bakımı olan evlerin faaliyetleri dahil, yaşlılar için hemşire bakımlı evlerin faaliyetleri hariç)"
    },
    {
        "ID": 986,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "87.90.03",
        "dc_NACE_BASLIK": "Çocuklara ve gençlere yönelik diğer yatılı bakım faaliyetleri (kimsesiz çocuklar için sosyal hizmetler, çocuk bakım evleri dahil, çocuk ıslah evlerinin ve hemşireli bakım tesislerinin faaliyetleri ile bedensel engelliler için olanlar hariç)"
    },
    {
        "ID": 987,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "87.90.04",
        "dc_NACE_BASLIK": "Çocuklara ve gençlere yönelik ıslah evleri ile çocuk suçlu ve sabıkalılar için bakım evlerince sağlanan diğer yatılı bakım faaliyetleri"
    },
    {
        "ID": 988,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "87.90.90",
        "dc_NACE_BASLIK": "Yetişkinlere yönelik bys diğer yatılı bakım faaliyetleri (sığınma evleri, geçici evsiz barınakları, suçlu ve sabıkalılar için bakım evleri dahil, hemşireli bakım tesislerinin faaliyetleri ile yaşlılar ve bedensel engelliler için olanlar hariç)"
    },
    {
        "ID": 989,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "88.10.02",
        "dc_NACE_BASLIK": "Yaşlılar ve bedensel engelliler için barınacak yer sağlanmaksızın verilen sosyal hizmetler (yatılı bakım faaliyetleri ile engelli çocuklara yönelik gündüz bakım (kreş) faaliyetleri hariç)"
    },
    {
        "ID": 990,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "88.91.01",
        "dc_NACE_BASLIK": "Çocuk gündüz bakım (kreş) faaliyetleri (engelli çocuklar için olanlar ile bebek bakıcılığı dahil, okul öncesi eğitim faaliyetleri hariç)"
    },
    {
        "ID": 991,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "88.99.07",
        "dc_NACE_BASLIK": "Barınacak yer sağlanmaksızın mesleki rehabilitasyon hizmetleri (bedensel engelliler için rehabilitasyon hizmetleri hariç)"
    },
    {
        "ID": 992,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "88.99.08",
        "dc_NACE_BASLIK": "Bys. barınacak yer sağlanmaksızın verilen diğer sosyal yardım hizmetleri (aile rehberliği, borç danışmanlığı, sosyal hizmet için para toplama, evlat edindirme, evsiz, afetzede ve mültecilere geçici barınak sağlama, yardım için uygun kişi belirleme, vb.)"
    },
    {
        "ID": 993,
        "dc_MESLEK_GRUBU": "33",
        "dc_MESLEK_GRUBU_ADI": "SAĞLIK HİZMETLERİ",
        "dc_NACE_KODU": "88.99.09",
        "dc_NACE_BASLIK": "Barınacak yer sağlanmaksızın çocuk ve gençlere yönelik rehabilitasyon hizmetleri (zihinsel engelliler için olanlar dahil, bedensel engellilere yönelik olanlar hariç)"
    },
    {
        "ID": 994,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "14.11.05",
        "dc_NACE_BASLIK": "Deri giyim eşyası imalatı (deri karışımlı olanlar dahil, ayakkabı hariç)"
    },
    {
        "ID": 995,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "14.20.04",
        "dc_NACE_BASLIK": "Post, kürk veya kürklü deriden yapılmış eşya ve parçaların imalatı (giyim eşyası ve giysi aksesuarları hariç)"
    },
    {
        "ID": 996,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "14.20.05",
        "dc_NACE_BASLIK": "Post, kürk veya kürklü deriden yapılmış giyim eşyası ve giysi aksesuarları imalatı (kürkten şapka, başlık ve eldiven hariç)"
    },
    {
        "ID": 997,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.11.10",
        "dc_NACE_BASLIK": "Deri ve kürklü deri imalatı (kürkün ve derinin tabaklanması, sepilenmesi, boyanması, cilalanması ve işlenmesi)(işlenmiş derinin başka işlemlere tabi tutulmaksızın yalnızca tamburda ütülenmesi ve kurutulması hariç)"
    },
    {
        "ID": 998,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.11.11",
        "dc_NACE_BASLIK": "Kürklü derinin ve postların kazınarak temizlenmesi, kırkılması, tüylerinin yolunması ve ağartılması (postlu derilerin terbiyesi dahil)"
    },
    {
        "ID": 999,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.11.13",
        "dc_NACE_BASLIK": "Deri ve kösele esaslı terkip ile elde edilen levha, yaprak, şerit deri ve kösele imalatı"
    },
    {
        "ID": 1000,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.11.14",
        "dc_NACE_BASLIK": "İşlenmiş derinin başka işlemlere tabi tutulmaksızın yanlızca tamburda ütülenmesi ve kurutulması"
    },
    {
        "ID": 1001,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.12.07",
        "dc_NACE_BASLIK": "Deri, kösele, karma deri ve diğer malzemelerden bavul, el çantası, cüzdan, okul çantası, evrak çantası, deriden sigaralık, deri ayakkabı bağı, kişisel bakım, dikiş, vb. amaçlı seyahat seti, vb. ürünlerin imalatı"
    },
    {
        "ID": 1002,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.12.08",
        "dc_NACE_BASLIK": "Deriden veya diğer malzemelerden saraçlık ve koşum takımı imalatı (kamçı, semer, eyer, tasma kayışı, heybe, vb.)"
    },
    {
        "ID": 1003,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.12.09",
        "dc_NACE_BASLIK": "Deri saat kayışı imalatı"
    },
    {
        "ID": 1004,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "15.12.12",
        "dc_NACE_BASLIK": "Tabii/terkip yoluyla elde edilen deri ve köseleden taşıma ve konveyör bantları imalatı"
    },
    {
        "ID": 1005,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "46.24.01",
        "dc_NACE_BASLIK": "Ham deri, post ve kürklü deri toptan ticareti"
    },
    {
        "ID": 1006,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "46.24.02",
        "dc_NACE_BASLIK": "Tabaklanmış deri, güderi ve kösele toptan ticareti"
    },
    {
        "ID": 1007,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "46.42.04",
        "dc_NACE_BASLIK": "Kürk ve deriden giyim eşyalarının toptan ticareti"
    },
    {
        "ID": 1008,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "46.49.01",
        "dc_NACE_BASLIK": "Deri eşyalar ve seyahat aksesuarları toptan ticareti (çanta, valiz, cüzdan, kemer, vb. dahil)"
    },
    {
        "ID": 1009,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "47.71.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kürklü deriden giyim eşyalarının perakende ticareti (işlenmiş kürklü deriler dahil)"
    },
    {
        "ID": 1010,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "47.72.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bavul, el çantası ve diğer seyahat aksesuarlarının perakende ticareti (deriden, deri bileşimlerinden, plastik levhadan, tekstil malzemesinden, vulkanize (ebonit) elyaf veya mukavvadan)"
    },
    {
        "ID": 1011,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "47.72.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda saraciye ürünleri ve koşum takımı perakende ticareti (eyer, semer, vb.)"
    },
    {
        "ID": 1012,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "47.72.90",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda başka yerde sınıflandırılmamış deriden veya deri bileşimlerinden diğer ürünlerin perakende ticareti (deri veya deri bileşimli giyim eşyası hariç)"
    },
    {
        "ID": 1013,
        "dc_MESLEK_GRUBU": "34",
        "dc_MESLEK_GRUBU_ADI": "DERİ, KÜRK VE SARACİYE",
        "dc_NACE_KODU": "95.29.07",
        "dc_NACE_BASLIK": "Deri ve deri bileşimli giyim eşyaları ile kürk giyim eşyalarının onarımı"
    },
    {
        "ID": 1014,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.03",
        "dc_NACE_BASLIK": "Doğal pamuk elyafının imalatı (kardelenmesi, taraklanması, vb.)"
    },
    {
        "ID": 1015,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.05",
        "dc_NACE_BASLIK": "Doğal yün ve tiftik elyafının imalatı (kardelenmesi, taraklanması, yün yağının giderilmesi, karbonize edilmesi ve yapağının boyanması vb.)"
    },
    {
        "ID": 1016,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.06",
        "dc_NACE_BASLIK": "Doğal jüt, keten ve diğer bitkisel tekstil elyaflarının imalatı (kardelenmesi, taraklanması vb.) (pamuk hariç)"
    },
    {
        "ID": 1017,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.08",
        "dc_NACE_BASLIK": "İpeğin kozadan ayrılması ve sarılması"
    },
    {
        "ID": 1018,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.09",
        "dc_NACE_BASLIK": "Sentetik veya suni devamsız elyafın kardelenmesi ve taraklanması"
    },
    {
        "ID": 1019,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.10",
        "dc_NACE_BASLIK": "Doğal ipeğin bükülmesi ve iplik haline getirilmesi"
    },
    {
        "ID": 1020,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.12",
        "dc_NACE_BASLIK": "Pamuk elyafının bükülmesi ve iplik haline getirilmesi"
    },
    {
        "ID": 1021,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.13",
        "dc_NACE_BASLIK": "Yün ve tiftik elyafının bükülmesi ve iplik haline getirilmesi"
    },
    {
        "ID": 1022,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.14",
        "dc_NACE_BASLIK": "Jüt, keten ve diğer bitkisel tekstil elyaflarının bükülmesi ve iplik haline getirilmesi (pamuk hariç)"
    },
    {
        "ID": 1023,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.10.15",
        "dc_NACE_BASLIK": "Suni ve sentetik elyafların bükülmesi ve iplik haline getirilmesi (filament ipliği ve suni ipek elyafı imalatı hariç)"
    },
    {
        "ID": 1024,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.92.06",
        "dc_NACE_BASLIK": "Tekstilden çuval, torba, çanta ve benzerlerinin imalatı (eşya paketleme amacıyla kullanılanlar)"
    },
    {
        "ID": 1025,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.99.04",
        "dc_NACE_BASLIK": "Tekstil kırpıntısı imalatı (yatak, yorgan, yastık, şilte ve benzeri doldurmak için)"
    },
    {
        "ID": 1026,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "13.99.06",
        "dc_NACE_BASLIK": "Gipe iplik ve şeritlerin, şönil ipliklerin, şenet ipliklerin imalatı (metalize olanlar ile gipe lastikler hariç)"
    },
    {
        "ID": 1027,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "20.60.01",
        "dc_NACE_BASLIK": "Kardelenmemiş ve taranmamış suni ve sentetik elyaf imalatı"
    },
    {
        "ID": 1028,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "20.60.02",
        "dc_NACE_BASLIK": "Sentetik filament ipliği ve sentetik monofilamentlerin, şeritlerin ve benzerlerinin imalatı (poliamidden ve polyesterden yüksek mukavemetli filament iplikler dahil) (bükülü, katlı ve tekstürize olanlar hariç)"
    },
    {
        "ID": 1029,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "46.21.05",
        "dc_NACE_BASLIK": "İpek böceği kozası toptan ticareti"
    },
    {
        "ID": 1030,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "46.21.06",
        "dc_NACE_BASLIK": "Pamuk toptan ticareti"
    },
    {
        "ID": 1031,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "46.21.07",
        "dc_NACE_BASLIK": "Yün ve tiftik toptan ticareti"
    },
    {
        "ID": 1032,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "46.41.04",
        "dc_NACE_BASLIK": "İplik toptan ticareti (tuhafiye ürünleri ile dikiş ipliği hariç)"
    },
    {
        "ID": 1033,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "46.76.01",
        "dc_NACE_BASLIK": "Tekstil elyafı toptan ticareti (bükülmemiş ham ipek, yün, hayvan kılı, kardelenmiş veya taranmış pamuk, vb.)"
    },
    {
        "ID": 1034,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "46.76.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış ara ürün (tarım hariç) toptan ticareti (korindon, lastik kord bezi, teknik kullanım amaçlı tekstil ürünleri (hortum, konveyör bandı, elek bezi), plastik veya kauçuk levha ve boru, sanayi elması, gıda dışı buz, vb.)"
    },
    {
        "ID": 1035,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "47.78.16",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda yün, tiftik vb. perakende ticareti"
    },
    {
        "ID": 1036,
        "dc_MESLEK_GRUBU": "35",
        "dc_MESLEK_GRUBU_ADI": "İPLİK VE ELYAF ÜRÜNLERİ",
        "dc_NACE_KODU": "47.78.30",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda tekstilden çuval, torba, vb. perakende ticareti (eşya paketleme amacıyla kullanılanlar)"
    },
    {
        "ID": 1037,
        "dc_MESLEK_GRUBU": "36",
        "dc_MESLEK_GRUBU_ADI": "ÖRME KUMAŞ, ÇORAP VE TRİKOTAJ",
        "dc_NACE_KODU": "13.91.01",
        "dc_NACE_BASLIK": "Örgü ve tığ işi kumaşların imalatı (penye ve havlı kumaşlar ile raschel veya benzeri makineler ile örülen tül, perde, vb. örgü veya tığ ile örülmüş ürünler dahil)"
    },
    {
        "ID": 1038,
        "dc_MESLEK_GRUBU": "36",
        "dc_MESLEK_GRUBU_ADI": "ÖRME KUMAŞ, ÇORAP VE TRİKOTAJ",
        "dc_NACE_KODU": "13.91.02",
        "dc_NACE_BASLIK": "Örme yoluyla imitasyon (taklit) kürk kumaşı imalatı"
    },
    {
        "ID": 1039,
        "dc_MESLEK_GRUBU": "36",
        "dc_MESLEK_GRUBU_ADI": "ÖRME KUMAŞ, ÇORAP VE TRİKOTAJ",
        "dc_NACE_KODU": "14.31.01",
        "dc_NACE_BASLIK": "Çorap imalatı (örme ve tığ işi olan külotlu çorap, tayt çorap, kısa kadın çorabı, erkek çorabı, patik ve diğer çoraplar)"
    },
    {
        "ID": 1040,
        "dc_MESLEK_GRUBU": "36",
        "dc_MESLEK_GRUBU_ADI": "ÖRME KUMAŞ, ÇORAP VE TRİKOTAJ",
        "dc_NACE_KODU": "14.39.01",
        "dc_NACE_BASLIK": "Örgü (triko) ve tığ işi (kroşe) diğer giyim eşyası imalatı (doğrudan süveter, kazak, hırka, yelek, vb. şekillerde üretilenler)"
    },
    {
        "ID": 1041,
        "dc_MESLEK_GRUBU": "37",
        "dc_MESLEK_GRUBU_ADI": "KUMAŞ",
        "dc_NACE_KODU": "46.41.03",
        "dc_NACE_BASLIK": "Kumaş toptan ticareti (manifatura ürünleri dahil)"
    },
    {
        "ID": 1042,
        "dc_MESLEK_GRUBU": "37",
        "dc_MESLEK_GRUBU_ADI": "KUMAŞ",
        "dc_NACE_KODU": "47.51.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kumaş perakende ticareti (manifatura ürünleri dahil)"
    },
    {
        "ID": 1043,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "14.13.04",
        "dc_NACE_BASLIK": "Dış giyim eşyası imalatı, dokuma, örme (trikotaj) ve tığ işi (kroşe), vb. kumaştan olanlar (kaban, palto, ceket, pantolon, takım elbise, döpiyes, anorak, yağmurluk, gece kıyafetleri vb.) (iş giysileri ve terzilerin faaliyetleri hariç)"
    },
    {
        "ID": 1044,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "14.13.05",
        "dc_NACE_BASLIK": "Siparişe göre ölçü alınarak dış giyim eşyası imalatı, dokuma, örgü (triko) ve tığ işi (kroşe), vb. kumaştan olanlar (terzilerin faaliyetleri) (giyim eşyası tamiri ile gömlek imalatı hariç)"
    },
    {
        "ID": 1045,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "14.13.06",
        "dc_NACE_BASLIK": "Sahne ve gösteri elbiseleri imalatı, dokuma, örgü (triko) ve tığ işi (kroşe), vb. kumaştan olanlar"
    },
    {
        "ID": 1046,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "14.13.07",
        "dc_NACE_BASLIK": "Gelinlik imalatı"
    },
    {
        "ID": 1047,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "46.42.01",
        "dc_NACE_BASLIK": "Bebek giysileri, sporcu giysileri ve diğer giyim eşyalarının toptan ticareti (kayak kıyafetleri, yüzme kıyafetleri, mayo vb. dahil)"
    },
    {
        "ID": 1048,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "46.42.05",
        "dc_NACE_BASLIK": "Dış giyim eşyalarının toptan ticareti (iş giysileri ile triko olanlar dahil, kürk ve deriden olanlar hariç)"
    },
    {
        "ID": 1049,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "47.71.04",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda diğer dış giyim perakende satışı (palto, kaban, anorak, takım elbise, ceket, pantolon, şort (tekstil kumaşından veya örgü ve tığ işi))"
    },
    {
        "ID": 1050,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "47.71.07",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda deri veya deri bileşimli giyim eşyası perakende ticareti"
    },
    {
        "ID": 1051,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "47.71.08",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda süveter, kazak, hırka, yelek ve benzeri eşyaların perakende ticareti"
    },
    {
        "ID": 1052,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "47.71.10",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kullanılmış giysiler ve aksesuarlarının perakende ticareti"
    },
    {
        "ID": 1053,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "47.71.12",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda gelinlik perakende ticareti"
    },
    {
        "ID": 1054,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "47.71.90",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bys. giyim eşyası perakende ticareti (plastikten, vulkanize kauçuktan, kağıttan, dokusuz kumaştan ya da emdirilmiş veya kaplanmış tekstil kumaşından giysiler)"
    },
    {
        "ID": 1055,
        "dc_MESLEK_GRUBU": "38",
        "dc_MESLEK_GRUBU_ADI": "HAZIR GİYİM VE KONFEKSİYON",
        "dc_NACE_KODU": "95.29.02",
        "dc_NACE_BASLIK": "Giyim eşyası ve ev tekstil ürünlerinin onarımı ve tadilatı (deri giyim eşyaları hariç)"
    },
    {
        "ID": 1056,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.12.07",
        "dc_NACE_BASLIK": "Endüstriyel iş giysisi (iş önlükleri, iş elbiseleri, iş tulumları, vb.) imalatı (dikişsiz plastik olanlar ile ateşe dayanıklı ve koruyucu güvenlik kıyafetleri hariç)"
    },
    {
        "ID": 1057,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.12.08",
        "dc_NACE_BASLIK": "Mesleki kıyafet imalatı (resmi ve özel üniforma vb. ile okul önlükleri dahil, endüstriyel iş giysileri hariç)"
    },
    {
        "ID": 1058,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.14.01",
        "dc_NACE_BASLIK": "Gömlek, tişört, bluz, vb. ceket altına giyilebilen giyim eşyası imalatı (dokuma, örgü veya tığ işi kumaştan)"
    },
    {
        "ID": 1059,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.14.02",
        "dc_NACE_BASLIK": "Gecelik, sabahlık, pijama, bornoz ve ropdöşambır imalatı (dokuma, örgü veya tığ işi kumaştan)"
    },
    {
        "ID": 1060,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.14.03",
        "dc_NACE_BASLIK": "Atlet, fanila, külot, slip, iç etek, kombinezon, jüp, jüpon, sütyen, korse vb. iç çamaşırı imalatı (dokuma, örgü veya tığ işi kumaştan)"
    },
    {
        "ID": 1061,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.14.04",
        "dc_NACE_BASLIK": "Çorap bağları, jartiyer, pantolon askıları ve benzeri iç giyim aksesuarları imalatı (dokuma, örgü veya tığ işi kumaştan)"
    },
    {
        "ID": 1062,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.19.01",
        "dc_NACE_BASLIK": "Spor ve antrenman giysileri, kayak kıyafetleri, yüzme kıyafetleri vb. imalatı (mayo, bikini dahil) (dokuma, örgü veya tığ işi kumaştan)"
    },
    {
        "ID": 1063,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "14.19.07",
        "dc_NACE_BASLIK": "Şapka, kep, başlık, kasket, tabla ve el manşonları ile bunların parçalarının imalatı (kürkten şapka ve başlıklar dahil, bebekler için olanlar hariç)"
    },
    {
        "ID": 1064,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "46.42.03",
        "dc_NACE_BASLIK": "Çorap ve giysi aksesuarlarının toptan ticareti (şapka, eldiven, şal, papyon, kravat vb.)"
    },
    {
        "ID": 1065,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "46.42.06",
        "dc_NACE_BASLIK": "İç giyim eşyalarının toptan ticareti (slip, külot, gömlek, tişört, sabahlık, pijama, sütyen, korse, bornoz, vb.)"
    },
    {
        "ID": 1066,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "47.71.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bebek ve çocuk giyim eşyası perakende ticareti (bebek iç giyim eşyaları dahil)"
    },
    {
        "ID": 1067,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "47.71.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda giysi aksesuarları perakende ticareti (eldiven, kravat, şapka, eşarp, şal, mendil, kemer, pantolon askısı, şemsiye, baston, vb. (güneş şemsiyeleri hariç))"
    },
    {
        "ID": 1068,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "47.71.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda iç giyim ve çorap perakende ticareti (gömlek, külot, slip, gecelik, pijama, bornoz, ropdöşambır, kombinezon, iç etek, jüpon, sabahlık, atlet, fanila, sütyen, korse, tişört, külotlu çorap, tayt, vb.)"
    },
    {
        "ID": 1069,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "47.71.09",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda iş giysisi perakende ticareti (endüstriyel ve mesleki pantolonlar, bahçıvan tipi iş tulumları, binici/külot pantolonları, şortlar, takımlar, ceketler ve blazerler, vb.)"
    },
    {
        "ID": 1070,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "47.71.11",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda spor giysisi perakende ticareti (eşofman, mayo, kayak giysisi, dağcılık kıyafetleri, vb)"
    },
    {
        "ID": 1071,
        "dc_MESLEK_GRUBU": "39",
        "dc_MESLEK_GRUBU_ADI": "İÇ GİYİM VE AKSESUARLARI",
        "dc_NACE_KODU": "47.82.01",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla iç giyim eşyası, dış giyim eşyası, çorap, giysi aksesuarı ve ayakkabı perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 1072,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "13.92.01",
        "dc_NACE_BASLIK": "Yatak örtü takımları, yatak çarşafları, yastık kılıfları, masa örtüsü ile tuvalet ve mutfakta kullanılan örtülerin imalatı (el ve yüz havluları dahil)"
    },
    {
        "ID": 1073,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "13.92.02",
        "dc_NACE_BASLIK": "Yorgan, kuştüyü yorgan, minder, puf, yastık, halı yastık, uyku tulumu ve benzerlerinin imalatı"
    },
    {
        "ID": 1074,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "13.92.03",
        "dc_NACE_BASLIK": "Perdelerin ve iç storların, perde veya yatak saçaklarının, farbelalarının ve malzemelerinin imalatı (gipür, tül perde ve kalın perdeler dahil)"
    },
    {
        "ID": 1075,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "13.92.04",
        "dc_NACE_BASLIK": "Tekstilden yer bezi, bulaşık bezi, toz bezi vb. temizlik bezleri imalatı"
    },
    {
        "ID": 1076,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "13.92.10",
        "dc_NACE_BASLIK": "Tekstilden örtü ve kılıf imalatı (araba, makine, mobilya vb. için)"
    },
    {
        "ID": 1077,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "13.99.02",
        "dc_NACE_BASLIK": "Tül ve diğer ağ kumaşların (dokuma, örgü (triko) veya tığ işi (kroşe) olanlar hariç) imalatı ile oya, dantel ve nakış imalatı (yaka, fisto yaka, lez, aplik, motif, kapitone ürünleri vb. dahil)"
    },
    {
        "ID": 1078,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "46.16.04",
        "dc_NACE_BASLIK": "Tekstil ürünlerinin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar (iplik, kumaş, ev tekstili, perde vb. ürünler) (giyim eşyaları hariç)"
    },
    {
        "ID": 1079,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "46.41.01",
        "dc_NACE_BASLIK": "Evde kullanılan tekstil takımları, perdeler ve çeşitli tekstil malzemesinden ev eşyaları toptan ticareti (çarşaf, yatak takımı, yastık kılıfı, masa örtüsü, havlu, battaniye, yorgan, diğer mefruşatlar vb. dahil)"
    },
    {
        "ID": 1080,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "47.51.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda evde kullanılan tekstil takımları ve çeşitli tekstil malzemesinden ev eşyaları perakende ticareti (çarşaf, yatak takımı, yastık kılıfı, masa örtüsü, havlu, battaniye, yorgan, diğer mefruşatlar vb.)"
    },
    {
        "ID": 1081,
        "dc_MESLEK_GRUBU": "40",
        "dc_MESLEK_GRUBU_ADI": "EV TEKSTİLİ",
        "dc_NACE_KODU": "47.53.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda perde, iç stor, perde veya yatak saçağı ve farbelası perakende ticareti"
    },
    {
        "ID": 1082,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "13.93.01",
        "dc_NACE_BASLIK": "Halı (duvar halısı dahil) ve kilim imalatı (paspas, yolluk ve benzeri tekstil yer kaplamaları dahil)"
    },
    {
        "ID": 1083,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "13.93.02",
        "dc_NACE_BASLIK": "Halı, kilim vb. için çözgücülük, halı oymacılığı vb. faaliyetler"
    },
    {
        "ID": 1084,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "16.10.05",
        "dc_NACE_BASLIK": "Ahşap döşemelerin ve yer döşemelerinin imalatı (birleştirilebilir parkeler hariç)"
    },
    {
        "ID": 1085,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "46.47.02",
        "dc_NACE_BASLIK": "Halı, kilim, vb. yer kaplamaları toptan ticareti"
    },
    {
        "ID": 1086,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "46.73.21",
        "dc_NACE_BASLIK": "Duvar kağıdı, tekstil duvar kaplamaları, plastikten zemin, duvar veya tavan kaplamalarının toptan ticareti (paspas, kauçuk paspas, yer muşambası, marley vb. yer kaplamaları dahil)"
    },
    {
        "ID": 1087,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "46.73.23",
        "dc_NACE_BASLIK": "Masif, lamine ve laminant parke toptan ticareti"
    },
    {
        "ID": 1088,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "47.53.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda halı, kilim ve diğer tekstil yer döşemeleri perakende ticareti (keçeden olanlar dahil)"
    },
    {
        "ID": 1089,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "47.53.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda duvar kağıdı, tekstil duvar kaplamaları, kauçuk yer döşemeleri ve paspaslar ile plastik zemin, duvar veya tavan kaplamaları perakende ticareti (linolyum gibi elastiki zemin kaplamaları, marley, vb. dahil)"
    },
    {
        "ID": 1090,
        "dc_MESLEK_GRUBU": "41",
        "dc_MESLEK_GRUBU_ADI": "HALI-KİLİM VE YER KAPLAMALARI",
        "dc_NACE_KODU": "47.89.18",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla halı, kilim, vb. perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 1091,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.92.09",
        "dc_NACE_BASLIK": "Bayrak, sancak ve flama imalatı"
    },
    {
        "ID": 1092,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.92.11",
        "dc_NACE_BASLIK": "Branda, tente, stor (güneşlik), yelken, çadır ve kamp malzemeleri imalatı (şişme yataklar dahil)"
    },
    {
        "ID": 1093,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.94.02",
        "dc_NACE_BASLIK": "Ağ ve ağ ürünleri imalatı, sicim, kınnap, halat veya urgandan (balık ağı, yük boşaltma ağları, vb.)"
    },
    {
        "ID": 1094,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.94.03",
        "dc_NACE_BASLIK": "Sicim, urgan, halat, kordon ve benzerleri imalatı (kauçuk veya plastik emdirilmiş, kaplanmış olanlar dahil)"
    },
    {
        "ID": 1095,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.95.01",
        "dc_NACE_BASLIK": "Dokusuz kumaşlar ile bunlardan yapılan ürünlerin imalatı (giyim eşyası hariç)"
    },
    {
        "ID": 1096,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.96.02",
        "dc_NACE_BASLIK": "Tekstil malzemelerinden parça halinde kordonlar; işleme yapılmamış şeritçi eşyası ve benzeri süs eşyalarının imalatı"
    },
    {
        "ID": 1097,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.96.03",
        "dc_NACE_BASLIK": "Dar dokuma kumaşların imalatı (etiket, arma ve diğer benzeri eşyalar hariç)"
    },
    {
        "ID": 1098,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.96.04",
        "dc_NACE_BASLIK": "Tekstil malzemelerinden dokuma etiket, rozet, arma ve diğer benzeri eşyaların imalatı"
    },
    {
        "ID": 1099,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.96.05",
        "dc_NACE_BASLIK": "Teknik kullanım amaçlı tekstil ürünleri ve eşyaları imalatı (fitil, lüks lambası gömleği, tekstil malzemesinden hortumlar, taşıma veya konveyör bantları, elek bezi ve süzgeç bezi dahil)"
    },
    {
        "ID": 1100,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.96.07",
        "dc_NACE_BASLIK": "Tekstille kaplanmış kauçuk iplik veya kordon ile kauçuk veya plastikle kaplanmış veya emdirilmiş tekstilden iplik veya şeritler ve bunlardan yapılmış mensucat imalatı"
    },
    {
        "ID": 1101,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.96.08",
        "dc_NACE_BASLIK": "Kaplanmış veya emdirilmiş tekstil kumaşlarının imalatı (cilt kapağı için mensucat, mühendis muşambası, tiyatro dekorları, tuval vb. dahil)"
    },
    {
        "ID": 1102,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "13.99.03",
        "dc_NACE_BASLIK": "Keçe, basınçlı hassas giysi dokumaları, tekstilden ayakkabı bağı, pudra ponponu vb. imalatı"
    },
    {
        "ID": 1103,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "14.19.04",
        "dc_NACE_BASLIK": "Eldiven, kemer, şal, papyon, kravat, saç fileleri, kumaş mendil, atkı, fular, duvak vb. giysi aksesuarları imalatı (deriden, dokusuz kumaştan veya dokuma, örgü veya tığ işi kumaştan) (bebekler için olanlar hariç)"
    },
    {
        "ID": 1104,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "14.19.05",
        "dc_NACE_BASLIK": "Bebek giyim eşyası ve aksesuarları imalatı (dokuma, örgü veya tığ işi kumaştan) (tabansız panduf dahil)"
    },
    {
        "ID": 1105,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "14.19.08",
        "dc_NACE_BASLIK": "Giyim eşyası imalatı (keçeden veya diğer dokusuz kumaştan ya da emdirilmiş veya kaplanmış tekstil kumaşından olanlar)"
    },
    {
        "ID": 1106,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "32.99.01",
        "dc_NACE_BASLIK": "Terzi mankeni, el kalbur ve eleği, yapma çiçek, meyve ve bitkiler, şaka ve sihirbazlık benzeri eşya, koku püskürtücüleri ve mekanizmaları, tabut vb. eşyaların imalatı (gelin çiçeği dahil)"
    },
    {
        "ID": 1107,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "32.99.02",
        "dc_NACE_BASLIK": "Kot vb. baskı düğmeleri, çıtçıtlar, düğmeler, fermuarlar vb. imalatı (düğme formları ve fermuar parçaları dahil)"
    },
    {
        "ID": 1108,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "32.99.07",
        "dc_NACE_BASLIK": "Şemsiyeler, güneş şemsiyeleri, baston ve koltuklu baston, koltuk değneği vb. imalatı (parçaları dahil)"
    },
    {
        "ID": 1109,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "33.19.01",
        "dc_NACE_BASLIK": "Tentelerin, kamp ekipmanlarının, çuvalların ve balıkçılık ağları gibi diğer hazır tekstil malzemelerinin onarımı"
    },
    {
        "ID": 1110,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "33.19.02",
        "dc_NACE_BASLIK": "Halatlar, gemi çarmık ve halatları ile yelken bezleri ve bez astarlı muşambaların onarımı"
    },
    {
        "ID": 1111,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "46.16.03",
        "dc_NACE_BASLIK": "Giyim eşyalarının bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar (deri giyim eşyaları hariç)"
    },
    {
        "ID": 1112,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "46.41.02",
        "dc_NACE_BASLIK": "Tuhafiye ürünleri toptan ticareti (iğne, dikiş ipliği, düğme, fermuar, çıtçıt, fisto, dantel, gipür vb.)"
    },
    {
        "ID": 1113,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "46.41.05",
        "dc_NACE_BASLIK": "Diğer tekstil ürünleri toptan ticareti (balık ağı, çuval, çul, halat, urgan dahil)"
    },
    {
        "ID": 1114,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "46.42.07",
        "dc_NACE_BASLIK": "Şemsiye toptan ticareti (güneş ve bahçe şemsiyeleri hariç)"
    },
    {
        "ID": 1115,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "47.51.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda tuhafiye ürünleri perakende ticareti (iğne, dikiş ipliği, orlon, düğme, fermuar, çıtçıt, fisto, dantel, gipür vb.)"
    },
    {
        "ID": 1116,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "47.51.04",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda goblen veya nakış yapımı için temel materyallerin perakende ticareti"
    },
    {
        "ID": 1117,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "47.51.90",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda diğer tekstil ürünleri perakende ticareti (tuhafiye ürünleri ve dikiş ipliği hariç diğer iplikler, gazlı dokumalar, gaz lambası fitili, araba örtüleri vb.)"
    },
    {
        "ID": 1118,
        "dc_MESLEK_GRUBU": "42",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL YAN SANAYİ ÜRÜNLERİ",
        "dc_NACE_KODU": "47.82.02",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla tuhafiye, manifatura ve mefruşat ürünleri perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 1119,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "13.30.01",
        "dc_NACE_BASLIK": "Kumaş ve tekstil ürünlerini ağartma ve boyama hizmetleri (giyim eşyası dahil)"
    },
    {
        "ID": 1120,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "13.30.02",
        "dc_NACE_BASLIK": "Tekstil elyaf ve ipliklerini ağartma ve boyama hizmetleri (kasarlama dahil)"
    },
    {
        "ID": 1121,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "13.30.03",
        "dc_NACE_BASLIK": "Kumaş ve tekstil ürünlerine baskı yapılması hizmetleri (giyim eşyası dahil)"
    },
    {
        "ID": 1122,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "13.30.04",
        "dc_NACE_BASLIK": "Kumaş ve tekstil ürünlerine ilişkin diğer bitirme hizmetleri (apreleme, pliseleme, sanforlama, vb. dahil)"
    },
    {
        "ID": 1123,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "96.01.01",
        "dc_NACE_BASLIK": "Çamaşırhane hizmetleri (para veya jetonla çalışan makinelerle yapılanlar dahil)"
    },
    {
        "ID": 1124,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "96.01.02",
        "dc_NACE_BASLIK": "Halı ve kilim yıkama hizmetleri"
    },
    {
        "ID": 1125,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "96.01.03",
        "dc_NACE_BASLIK": "Giyim eşyası ve diğer tekstil ürünlerini boyama ve renklendirme hizmetleri (imalat aşamasında yapılanlar hariç)"
    },
    {
        "ID": 1126,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "96.01.04",
        "dc_NACE_BASLIK": "Kuru temizleme hizmetleri (giysi ve diğer tekstil ürünlerinin, kürk ve deri ürünlerinin kuru temizlenmesi)"
    },
    {
        "ID": 1127,
        "dc_MESLEK_GRUBU": "43",
        "dc_MESLEK_GRUBU_ADI": "TEKSTİL TERBİYE",
        "dc_NACE_KODU": "96.01.05",
        "dc_NACE_BASLIK": "Giyim eşyası ve diğer tekstil ürünlerini ütüleme hizmetleri (pres ve silindir ütüleme hizmetleri dahil)"
    },
    {
        "ID": 1128,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.11.01",
        "dc_NACE_BASLIK": "Oto yollar, kara yolları, şehir içi yollar ve diğer araç veya yaya yollarının inşaatı"
    },
    {
        "ID": 1129,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.11.02",
        "dc_NACE_BASLIK": "Yol yüzeylerinin asfaltlanması ve onarımı, kaldırım, kasis, bisiklet yolu vb.lerin inşaatı, yolların vb. yüzeylerin boyayla işaretlenmesi, yol bariyeri, trafik işaret ve levhaları vb.nin kurulumu gibi yol, tünel vb. yerlerdeki yüzey işleri"
    },
    {
        "ID": 1130,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.11.03",
        "dc_NACE_BASLIK": "Havaalanı pisti inşaatı"
    },
    {
        "ID": 1131,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.12.01",
        "dc_NACE_BASLIK": "Demir yolları ve metroların inşaatı (bakım ve onarımı dahil)"
    },
    {
        "ID": 1132,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.13.01",
        "dc_NACE_BASLIK": "Köprülerin inşaatı (yükseltilmiş kara yolları-viyadükler dahil)"
    },
    {
        "ID": 1133,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.13.02",
        "dc_NACE_BASLIK": "Tünel inşaatı"
    },
    {
        "ID": 1134,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.21.01",
        "dc_NACE_BASLIK": "Akışkanlar için uzun mesafe boru hatlarının inşaatı (petrol ürünleri ve gaz taşımacılığı ile su ve diğer ürünlerin taşımacılığına yönelik karada ve deniz altında uzun mesafe boru hattı)"
    },
    {
        "ID": 1135,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.21.02",
        "dc_NACE_BASLIK": "Su kuyusu açma ve septik sistem kurulum faaliyetleri (kuyu, artezyen vb.)"
    },
    {
        "ID": 1136,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.21.03",
        "dc_NACE_BASLIK": "Ana su şebekeleri ve su hatları ile su arıtma tesisleri, kanalizasyon bertaraf tesisleri ve pompa istasyonları inşaatı (sulama sistemleri (kanallar) dahil)"
    },
    {
        "ID": 1137,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.21.05",
        "dc_NACE_BASLIK": "Akışkanlar için kısa mesafe (yerel) boru hatlarının inşaatı (petrol ürünleri ve gaz taşımacılığı ile su, kanalizasyon, sıcak su, buhar ve diğer ürünlerin taşımacılığına yönelik kısa mesafe boru hattı)"
    },
    {
        "ID": 1138,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.22.01",
        "dc_NACE_BASLIK": "Uzun mesafe elektrik hatlarının inşaatı (uzun mesafe yüksek gerilim elektirik iletim hatları ile uzun mesafe yer üstü/altı veya deniz altıı iletim hatları) "
    },
    {
        "ID": 1139,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.22.02",
        "dc_NACE_BASLIK": "Enerji santralleri inşaatı (hidroelektrik santrali, termik santral, nükleer enerji üretim santralleri vb.)"
    },
    {
        "ID": 1140,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.22.04",
        "dc_NACE_BASLIK": "Kentsel (kısa mesafe) elektrik hatlarının inşaatı (trafo istasyonları ve yerel sınırlar içerisindeki dağıtım alt istasyonları vb.)"
    },
    {
        "ID": 1141,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.22.06",
        "dc_NACE_BASLIK": "Uzun mesafe telekomünikasyon (iletişim) hatlarının inşaatı (uzun mesafe yer üstü/altı veya deniz altı telekomünikasyon iletim hatları)"
    },
    {
        "ID": 1142,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.22.07",
        "dc_NACE_BASLIK": "Kentsel (kısa mesafe) telekomünikasyon (iletişim) hatlarının inşaatı (anten dahil iletim kuleleri ve trafo istasyonları ve yerel sınırlar içerisindeki dağıtım alt istasyonları vb.)"
    },
    {
        "ID": 1143,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.91.01",
        "dc_NACE_BASLIK": "Kıyı ve liman inşaatları ve ilgili hidromekanik yapıların inşaatı (su yolları, liman ve yat limanları, kıyı düzenlemeleri, iskele ve rıhtımlar, dalgakıranlar, kanallar vb. yapılar)"
    },
    {
        "ID": 1144,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.91.02",
        "dc_NACE_BASLIK": "Su ve su zemininin taranması ve temizlenmesi (deniz, nehir, göl vb.)"
    },
    {
        "ID": 1145,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.91.03",
        "dc_NACE_BASLIK": "Tersane, dok ve kanal havuzu inşaatı (gemi inşaatı ve tamiri için)"
    },
    {
        "ID": 1146,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.91.04",
        "dc_NACE_BASLIK": "Baraj ve bentlerin inşaatı"
    },
    {
        "ID": 1147,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "42.99.03",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış bina dışı diğer yapıların inşaatı (arazi iyileştirilmesi ile birlikte arazinin parsellemesi dahil, iyileştirme yapılmaksızın parselleme hariç)"
    },
    {
        "ID": 1148,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "43.12.01",
        "dc_NACE_BASLIK": "Zemin ve arazi hazırlama, alanın temizlenmesi ile kazı ve hafriyat işleri (tarımsal arazinin hazırlanması, dinamitleme ve kayaların kaldırılması, inşaat, tarım vb. alanların drenajı, hafriyat, kazı, dolgu vb. işler) (madencilik için yapılanlar hariç)"
    },
    {
        "ID": 1149,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "43.12.02",
        "dc_NACE_BASLIK": "Maden sahalarının hazırlanması (tünel açma dahil, petrol ve gaz sahaları için olanlar hariç)"
    },
    {
        "ID": 1150,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "43.13.01",
        "dc_NACE_BASLIK": "Test sondajı ve delme (inşaat, jeofizik, jeolojik vb. amaçlar için test sondajı ve delme işleri ile örnekleme sondajı) (madencilikle bağlantılı olarak gerçekleştirilen test sondajı hariç)"
    },
    {
        "ID": 1151,
        "dc_MESLEK_GRUBU": "44",
        "dc_MESLEK_GRUBU_ADI": "ALTYAPI İNŞAATI",
        "dc_NACE_KODU": "43.99.02",
        "dc_NACE_BASLIK": "Yeraltı çalışmaları (madencilik, depolama, vb. için düşey galeri ve kuyu açma faaliyeti dahil, su kuyusu açma hariç)"
    },
    {
        "ID": 1152,
        "dc_MESLEK_GRUBU": "45",
        "dc_MESLEK_GRUBU_ADI": "KONUT İNŞAATI",
        "dc_NACE_KODU": "41.10.02",
        "dc_NACE_BASLIK": "Konut yapı kooperatiflerinin faaliyetleri"
    },
    {
        "ID": 1153,
        "dc_MESLEK_GRUBU": "45",
        "dc_MESLEK_GRUBU_ADI": "KONUT İNŞAATI",
        "dc_NACE_KODU": "41.20.02",
        "dc_NACE_BASLIK": "İkamet amaçlı binaların inşaatı (müstakil konutlar, birden çok ailenin oturduğu binalar, gökdelenler vb.nin inşaatı) (ahşap binaların inşaatı hariç)"
    },
    {
        "ID": 1154,
        "dc_MESLEK_GRUBU": "45",
        "dc_MESLEK_GRUBU_ADI": "KONUT İNŞAATI",
        "dc_NACE_KODU": "41.20.04",
        "dc_NACE_BASLIK": "İkamet amaçlı ahşap binaların inşaatı"
    },
    {
        "ID": 1155,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "41.10.01",
        "dc_NACE_BASLIK": "Bina projelerinin geliştirilmesi (satışa yönelik bina projeleri için mali, teknik ve fiziksel araçların bir araya getirilmesi suretiyle konut veya diğer amaçlı kullanıma yönelik bina projelerinin organize edilmesi) (yapı kooperatifleri hariç)"
    },
    {
        "ID": 1156,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "41.10.03",
        "dc_NACE_BASLIK": "İşyeri yapı kooperatiflerinin faaliyetleri"
    },
    {
        "ID": 1157,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "41.20.01",
        "dc_NACE_BASLIK": "İkamet amaçlı olmayan binaların inşaatı (fabrika, atölye vb. sanayi üretimini amaçlayan binalar ile hastane, okul, otel, işyeri, mağaza, alışveriş merkezi, lokanta, kapalı spor tesisi, cami, kapalı otopark, tuvalet, vb. inşaatı)"
    },
    {
        "ID": 1158,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "41.20.03",
        "dc_NACE_BASLIK": "Prefabrik binalar için bileşenlerin alanda birleştirilmesi ve kurulması"
    },
    {
        "ID": 1159,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "42.99.01",
        "dc_NACE_BASLIK": "Açık havada yapılan sporlara uygun tesislerin ve eğlence alanları yapılarının inşaatı (golf sahaları, açık stadyumlar, tenis kortları, atletizm sahaları, plaj tesisi, dağ barınakları, eğlence parkları vb.)"
    },
    {
        "ID": 1160,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "42.99.02",
        "dc_NACE_BASLIK": "Madencilik ve imalat sanayisi yapılarının inşaatı (sarım mili ve kuleleri, maden yükleme ve boşaltma istasyonları, rafineriler, kimyasal tesisler vb.)"
    },
    {
        "ID": 1161,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "42.99.04",
        "dc_NACE_BASLIK": "Doğalgaz işleme tesisleri inşaatı"
    },
    {
        "ID": 1162,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.11.01",
        "dc_NACE_BASLIK": "Yıkım işleri (binaların ve diğer yapıların yıkılması ve sökülmesi)"
    },
    {
        "ID": 1163,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.29.05",
        "dc_NACE_BASLIK": "Parmaklık ve korkuluk tesisatı işleri (metal yangın merdivenlerinin kurulumu dahil)"
    },
    {
        "ID": 1164,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.31.01",
        "dc_NACE_BASLIK": "Sıva işleri (binalarda veya diğer inşaatlarda iç ve dış sıva veya alçı sıva işleri ile alçıpan işleri vb.)"
    },
    {
        "ID": 1165,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.99.01",
        "dc_NACE_BASLIK": "Yapısal çelik bileşenlerin kurulması işleri (bina, köprü, gezer vinç veya elektrik iletim kulesi gibi diğer yapılar için prefabrik yapısal çelik bileşenlerin kurulması vb.)"
    },
    {
        "ID": 1166,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.99.03",
        "dc_NACE_BASLIK": "Açık yüzme havuzlarının inşaatı"
    },
    {
        "ID": 1167,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.99.04",
        "dc_NACE_BASLIK": "Vinç ve benzeri diğer inşaat ekipmanlarının operatörü ile birlikte kiralanması (özel bir inşaat çeşidinde yer almayan)"
    },
    {
        "ID": 1168,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.99.05",
        "dc_NACE_BASLIK": "İnşaatlarda beton işleri (kalıp içerisine beton dökülmesi vb.)"
    },
    {
        "ID": 1169,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.99.07",
        "dc_NACE_BASLIK": "İnşaat iskelesi ve çalışma platformunu kurma ve sökme işleri"
    },
    {
        "ID": 1170,
        "dc_MESLEK_GRUBU": "46",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT TAAHHÜT",
        "dc_NACE_KODU": "43.99.11",
        "dc_NACE_BASLIK": "İnşaat amaçlı kazık çakma ve temel inşaatı işleri (forekazık çakma dahil)"
    },
    {
        "ID": 1171,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "23.99.01",
        "dc_NACE_BASLIK": "Asfalttan ve benzeri malzemelerden yapılan ürünlerin imalatı (çatı yapımında veya su yalıtımında kullanılan bitüm esaslı keçeler dahil)"
    },
    {
        "ID": 1172,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "23.99.02",
        "dc_NACE_BASLIK": "Mineral ses/ısı izolasyon malzemelerinin imalatı (cüruf yünleri, taş yünü, madeni yünler, pul pul ayrılmış vermikulit, genleştirilmiş kil, soğuk tandiş plakası, vb. ısı ve ses yalıtım malzemeleri)"
    },
    {
        "ID": 1173,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "38.11.02",
        "dc_NACE_BASLIK": "İnşaat ve yıkım atıklarının, çalı, çırpı, moloz gibi enkazların toplanması ve kaldırılması"
    },
    {
        "ID": 1174,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "41.20.05",
        "dc_NACE_BASLIK": "Mevcut konut amaçlı olan veya ikamet amaçlı olmayan binaların yeniden düzenlenmesi veya yenilenmesi (büyük çaplı revizyon)"
    },
    {
        "ID": 1175,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.29.03",
        "dc_NACE_BASLIK": "Isı, ses veya titreşim yalıtımı ile diğer inşaat tesisatı işleri (mantolama ve vakumlu temizleme sistemlerinin kurulumu dahil)"
    },
    {
        "ID": 1176,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.33.01",
        "dc_NACE_BASLIK": "Bina ve diğer yapıların içi veya dışında yer ve duvar kaplama faaliyetleri (mermer, mozaik, granit, karo ve kaldırım taşlarının, parke dahil ahşap yer ve duvar kaplamalarının döşenmesi vb.) (halı, taban muşambası ve kağıt kaplama hariç)"
    },
    {
        "ID": 1177,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.33.02",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer yer döşeme ve kaplama ile duvar kaplama işleri (halı, taban muşambası ve diğer esnek yer kaplamaları ile duvar kaplama işleri)"
    },
    {
        "ID": 1178,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.34.01",
        "dc_NACE_BASLIK": "Binaların iç ve dış boyama işleri"
    },
    {
        "ID": 1179,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.34.02",
        "dc_NACE_BASLIK": "Cam takma işleri"
    },
    {
        "ID": 1180,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.34.03",
        "dc_NACE_BASLIK": "Bina dışı yapıların boyama işleri"
    },
    {
        "ID": 1181,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.39.01",
        "dc_NACE_BASLIK": "Dekoratif malzemenin, bezemelerin ve süslerin montajı ile inşaatlardaki bys. diğer bütünleyici ve tamamlayıcı işler (radyatörleri kaplayan ızgaraların montajı ile akustik panel, karo veya diğer malzemeleri içeren akustik işler dahil)"
    },
    {
        "ID": 1182,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.39.02",
        "dc_NACE_BASLIK": "Yeni binaların inşaat sonrası temizliği"
    },
    {
        "ID": 1183,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.91.01",
        "dc_NACE_BASLIK": "Çatı işleri (çatı iskeleti kurulumunu içeren inşaat işleri, çatı yapımı, çatı oluğu ve oluk ağzı montaj işleri ile metal ve diğer malzemeden çatı kaplama işleri) (dülgerlik işleri dahil)"
    },
    {
        "ID": 1184,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.99.06",
        "dc_NACE_BASLIK": "Duvarcılık ve tuğla örme işleri"
    },
    {
        "ID": 1185,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.99.08",
        "dc_NACE_BASLIK": "Su yalıtım işleri (düz çatı ve teraslardaki su yalıtım işleri, inşaat ve diğer yer altı yapıların dış cephesindeki su yalıtım işleri, nem yalıtımı vb.)"
    },
    {
        "ID": 1186,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.99.10",
        "dc_NACE_BASLIK": "Baca ve sanayi fırınlarının inşaatı ve kurulması (fırınlar için yanma odasına ateş tuğlası döşenmesi işleri dahil)"
    },
    {
        "ID": 1187,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.99.13",
        "dc_NACE_BASLIK": "İnşaat demirciliği (inşaat demirinin bükülmesi ve bağlanması)"
    },
    {
        "ID": 1188,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.99.14",
        "dc_NACE_BASLIK": "Prefabrik yapıların montajı ve kurulması (prefabrik binalar hariç her çeşit prefabrik sokak düzeneklerinin (otobüs durağı, telefon kulübesi, bank vb.) kurulumu vb.)"
    },
    {
        "ID": 1189,
        "dc_MESLEK_GRUBU": "47",
        "dc_MESLEK_GRUBU_ADI": "RESTORASYON VE İZOLASYON",
        "dc_NACE_KODU": "43.99.15",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer uzmanlaşmış inşaat işleri (şömine, barbekü dahil)"
    },
    {
        "ID": 1190,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "16.23.01",
        "dc_NACE_BASLIK": "Ahşap pencere, kapı ve bunların kasaları ve eşikleri ile ahşap merdiven, tırabzan, veranda, parmaklık vb. imalatı"
    },
    {
        "ID": 1191,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "16.23.02",
        "dc_NACE_BASLIK": "Ahşap prefabrik yapılar ve ahşap taşınabilir evlerin imalatı"
    },
    {
        "ID": 1192,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.13.01",
        "dc_NACE_BASLIK": "İnşaat malzemesinin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar (inşaat demiri ve kerestesi hariç)"
    },
    {
        "ID": 1193,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.06",
        "dc_NACE_BASLIK": "Metalden prefabrik yapıların, köprülerin, köprü parçalarının, kulelerin, kafes direklerin, konstrüksiyon elemanlarının, diğer yapıların ve yapı elemanlarının toptan ticareti"
    },
    {
        "ID": 1194,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.07",
        "dc_NACE_BASLIK": "Çimento, alçı, harç, kireç, mozaik vb. inşaat malzemeleri toptan ticareti"
    },
    {
        "ID": 1195,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.08",
        "dc_NACE_BASLIK": "Tuğla, kiremit, briket, kaldırım taşı vb. inşaat malzemeleri toptan ticareti"
    },
    {
        "ID": 1196,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.09",
        "dc_NACE_BASLIK": "Taş, kum, çakıl, mıcır, kil, kaolin vb. inşaat malzemeleri toptan ticareti"
    },
    {
        "ID": 1197,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.13",
        "dc_NACE_BASLIK": "Metalden kapı, pencere ve bunların kasaları ile kapı eşiklerinin toptan ticareti"
    },
    {
        "ID": 1198,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.14",
        "dc_NACE_BASLIK": "Ahşap kapı, pencere ve bunların kasaları ile kapı eşiklerinin toptan ticareti"
    },
    {
        "ID": 1199,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.16",
        "dc_NACE_BASLIK": "Betondan, çimentodan ve suni taştan prefabrik yapıların, yapı elemanlarının ve diğer ürünlerin toptan ticareti"
    },
    {
        "ID": 1200,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.18",
        "dc_NACE_BASLIK": "Ahşaptan prefabrik yapıların ve yapı elemanlarının toptan ticareti"
    },
    {
        "ID": 1201,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.19",
        "dc_NACE_BASLIK": "Alçı ve alçı esaslı bileşenlerden inşaat amaçlı ürünlerin toptan ticareti (kartonpiyer, panel, levha vb.)"
    },
    {
        "ID": 1202,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.22",
        "dc_NACE_BASLIK": "İnşaatlarda izolasyon amaçlı kullanılan malzemelerin toptan ticareti (rulolar halinde cam yünü, taş yünü, bitüm esaslı malzemeler, vb.)"
    },
    {
        "ID": 1203,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "46.73.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer inşaat malzemesi toptan ticareti (merdiven, korkuluk, plastik depolar, seramik borular vb. dahil)"
    },
    {
        "ID": 1204,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "47.52.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda metalden kapı, pencere ve bunların kasaları ile kapı eşiklerinin perakende ticareti (çelik kapı dahil)"
    },
    {
        "ID": 1205,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "47.52.11",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda banyo küveti, lavabo, klozet kapağı, tuvalet taşı ve rezervuarı ile seramikten karo ve fayans vb. sıhhi ürünlerin perakende ticareti (seramik, cam, mermerit, plastik, demir, çelik, bakır vb. dahil, mermer hariç)"
    },
    {
        "ID": 1206,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "47.52.17",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ahşap kapı, pencere ve bunların kasaları ile kapı eşiklerinin perakende ticareti"
    },
    {
        "ID": 1207,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "47.52.18",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda prefabrik yapılar ve yapı elemanlarının perakende ticareti (metalden, betondan, plastikten, ahşaptan vb.)"
    },
    {
        "ID": 1208,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "47.52.20",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda alçı ve alçı esaslı bileşenlerden inşaat amaçlı ürünlerin perakende ticareti (kartonpiyer, panel, levha vb.)"
    },
    {
        "ID": 1209,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "47.52.22",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda masif, lamine ve laminant parke perakende ticareti"
    },
    {
        "ID": 1210,
        "dc_MESLEK_GRUBU": "48",
        "dc_MESLEK_GRUBU_ADI": "İNŞAAT MALZEMELERİ",
        "dc_NACE_KODU": "47.52.90",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda başka yerde sınıflandırılmamış inşaat malzemesi perakende ticareti (ev tipi lehim ve kaynak makinesi, merdiven, korkuluk, metal veya plastik depo, seramik boru vb. dahil)"
    },
    {
        "ID": 1211,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.20.16",
        "dc_NACE_BASLIK": "Silisli süzme topraktan (kizelgur) ısı yalıtımlı seramik ürünler ile ateşe dayanıklı briket, blok, tuğla, ateş tuğlası, vb. ateşe dayanıklı seramik yapı ürünleri imalatı"
    },
    {
        "ID": 1212,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.20.17",
        "dc_NACE_BASLIK": "Ateşe dayanıklı imbikler, damıtma kabı, eritme potası, vana ucu, tüp, boru, döküm potaları, mufl ocağı, püskürtme tüpleri vb. seramik ürünlerin imalatı"
    },
    {
        "ID": 1213,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.20.18",
        "dc_NACE_BASLIK": "Ateşe dayanıklı çimento, çamur, harç, beton vb. imalatı"
    },
    {
        "ID": 1214,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.31.01",
        "dc_NACE_BASLIK": "Seramik karo ve kaldırım taşı imalatı (mozaik taşı ve mozaik küpleri dahil) (ateşe dayanıklı olanlar hariç)"
    },
    {
        "ID": 1215,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.32.01",
        "dc_NACE_BASLIK": "Fırınlanmış, ateşe dayanıklı olmayan kil ve topraktan baca künkleri ve başlıkları, şömine ve baca boruları, oluklar ve bağlantı parçaları ile tuğla, kiremit, karo vb. inşaat malzemeleri imalatı (seramikten oluklar, borular ve bağlantı parçaları dahil)"
    },
    {
        "ID": 1216,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.42.01",
        "dc_NACE_BASLIK": "Seramik sıhhi ürünlerin imalatı"
    },
    {
        "ID": 1217,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.43.01",
        "dc_NACE_BASLIK": "Seramik yalıtkanların (izolatörlerin) ve yalıtkan bağlantı parçalarının imalatı"
    },
    {
        "ID": 1218,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.44.01",
        "dc_NACE_BASLIK": "Diğer teknik seramik ürünlerin imalatı (laboratuvar, kimyasal ve diğer teknik alanlarda kullanılan seramikten ürünler) (ateşe dayanıklı seramik ürünler hariç)"
    },
    {
        "ID": 1219,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.49.01",
        "dc_NACE_BASLIK": "Tarımsal amaçlı olanlar ile malların taşınması ya da ambalajlanması için kullanılan seramik ürünlerin imalatı (seramik çömlekler, kavanozlar, vb. ile yalaklar, tekneler vb.)"
    },
    {
        "ID": 1220,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.49.02",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış yapı işlerinde kullanılmayan diğer seramik eşyaların imalatı (dekoratif amaçlı olmayan seramik saksılar dahil)"
    },
    {
        "ID": 1221,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.51.01",
        "dc_NACE_BASLIK": "Çimento imalatı (çimento klinkeri, portland, alüminyumlu çimento (boksit çimentosu), cüruf çimento, süper fosfat çimentolar ve benzeri suya dayanıklı çimentolar)"
    },
    {
        "ID": 1222,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.52.01",
        "dc_NACE_BASLIK": "Sönmemiş kireç, sönmüş kireç ve suya dayanıklı kireç imalatı"
    },
    {
        "ID": 1223,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.52.02",
        "dc_NACE_BASLIK": "Sönmüş alçıtaşından ya da sönmüş sülfattan alçı imalatı"
    },
    {
        "ID": 1224,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.52.03",
        "dc_NACE_BASLIK": "Yanmış (kalsine edilmiş) veya aglomera edilmiş dolomit imalatı"
    },
    {
        "ID": 1225,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.61.01",
        "dc_NACE_BASLIK": "Çimentodan, betondan veya suni taştan prefabrik yapı elemanları imalatı (gaz betondan ve kireç taşından olanlar dahil)"
    },
    {
        "ID": 1226,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.61.02",
        "dc_NACE_BASLIK": "Çimentodan, betondan veya suni taştan karo, döşeme taşı, kiremit, tuğla, boru, vb. inşaat amaçlı ürünlerin imalatı"
    },
    {
        "ID": 1227,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.61.03",
        "dc_NACE_BASLIK": "Betondan yapılmış prefabrik yapıların imalatı"
    },
    {
        "ID": 1228,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.62.01",
        "dc_NACE_BASLIK": "İnşaat amaçlı alçı ürünlerin imalatı (kartonpiyer, levhalar, panolar, paneller, vb.)"
    },
    {
        "ID": 1229,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.63.01",
        "dc_NACE_BASLIK": "Hazır beton imalatı"
    },
    {
        "ID": 1230,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.64.01",
        "dc_NACE_BASLIK": "Toz harç imalatı"
    },
    {
        "ID": 1231,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.65.02",
        "dc_NACE_BASLIK": "Lif ve çimento karışımlı ürünlerin imalatı"
    },
    {
        "ID": 1232,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.69.01",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış alçı ve alçı esaslı bileşenlerden ürünlerin imalatı"
    },
    {
        "ID": 1233,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.69.02",
        "dc_NACE_BASLIK": "Beton, çimento ya da suni taştan yapılmış diğer ürünlerin imalatı (heykel, alçak ve yüksek kabartma, vazo, çiçek saksısı, mimari süsler, bahçe süsleri, vb.)"
    },
    {
        "ID": 1234,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.99.04",
        "dc_NACE_BASLIK": "İşlenmiş mika ve mikadan ürünlerin imalatı"
    },
    {
        "ID": 1235,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.99.05",
        "dc_NACE_BASLIK": "Bitümlü karışımların imalatı (doğal veya suni taştan malzemeler ile bir bağlayıcı olarak bitüm, doğal asfalt veya ilgili maddelerin karıştırılmasıyla elde edilenler)"
    },
    {
        "ID": 1236,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.99.09",
        "dc_NACE_BASLIK": "Suni korindon imalatı"
    },
    {
        "ID": 1237,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "23.99.90",
        "dc_NACE_BASLIK": "Diğer metal dışı minerallerden (turbadan, grafitten, vb. monte edilmemiş) ürünlerin imalatı (karbon elyafı dahil, elektrik amaçlı olanlar hariç)"
    },
    {
        "ID": 1238,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "46.73.05",
        "dc_NACE_BASLIK": "Banyo küvetleri, lavabolar, eviyeler, klozet kapakları, tuvalet taşı ve rezervuarları ile seramikten karo ve fayans vb. sıhhi ürünlerin toptan ticareti (seramik, cam, mermer, plastik, mermerit, demir, çelik, bakır veya alüminyum vb.)"
    },
    {
        "ID": 1239,
        "dc_MESLEK_GRUBU": "49",
        "dc_MESLEK_GRUBU_ADI": "TOPRAK ÜRÜNLERİ",
        "dc_NACE_KODU": "47.52.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda çimento, alçı, harç, kireç, tuğla, kiremit, briket, taş, kum, çakıl vb. inşaat malzemeleri perakende ticareti"
    },
    {
        "ID": 1240,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "28.25.03",
        "dc_NACE_BASLIK": "İklimlendirme cihazlarının (klimalar) imalatı (motorlu taşıtlarda kullanılanlar dahil)"
    },
    {
        "ID": 1241,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "28.25.04",
        "dc_NACE_BASLIK": "Isı değiştirici birimlerin (eşanjörler), hava veya diğer gazların sıvılaştırılmasında kullanılan makinelerin ve hava/gazların filtrelenmesi ve arıtılması için kullanılan makine ve cihazların imalatı"
    },
    {
        "ID": 1242,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "33.20.45",
        "dc_NACE_BASLIK": "Sanayi tipi ısıtma, iklimlendirme ve soğutma cihaz ve ekipmanlarının kurulumu"
    },
    {
        "ID": 1243,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "43.22.01",
        "dc_NACE_BASLIK": "Bina veya diğer inşaat projelerinde ısıtma, havalandırma, soğutma ve iklimlendirme sistemlerinin tesisatı (ev tipi boyler (kombi, kazan vb.) ve brülörlerin bakım, onarım ve kurulumu ile elektriksiz güneş enerjisi kolektörlerinin kurulumu dahil)"
    },
    {
        "ID": 1244,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "43.22.03",
        "dc_NACE_BASLIK": "Bina ve diğer inşaat projelerinde su ve kanalizasyon tesisatı ve onarımı (yağmurlama sistemlerinin kurulumu dahil sıhhi tesisat işleri, yangın söndürme sistemlerinin kurulumu, kanalizasyon tesisatı döşeme işleri vb.)"
    },
    {
        "ID": 1245,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "43.22.05",
        "dc_NACE_BASLIK": "Gaz tesisatı faaliyetleri (hastanelerdeki oksijen gazı temini için kurulum işleri dahil)"
    },
    {
        "ID": 1246,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "46.74.03",
        "dc_NACE_BASLIK": "Sıhhi tesisat ve ısıtma tesisatı malzemesi toptan ticareti (lavabo musluğu, vana, valf, tıkaç, t-parçaları, bağlantılar, vb.) (kombiler ve radyatörler hariç)"
    },
    {
        "ID": 1247,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "46.74.04",
        "dc_NACE_BASLIK": "Demirden veya çelikten merkezi ısıtma radyatörleri, merkezi ısıtma kazanları (kombiler dahil) ile bunların parçalarının toptan ticareti (buhar jeneratörleri ve kızgın su üreten kazanlar hariç)"
    },
    {
        "ID": 1248,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "46.74.06",
        "dc_NACE_BASLIK": "Metal rezervuar, tank, fıçı ve benzeri konteyner toptan ticareti, kapasitesi > 300 litre olanlar (merkezi ısıtma amaçlı olanlar ile mekanik veya termal ekipmanlı olanlar hariç)"
    },
    {
        "ID": 1249,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "47.52.06",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda sıhhi tesisat ve ısıtma tesisatı malzemesi perakende ticareti (lavabo musluğu, vana, valf, tıkaç, t-parçaları, bağlantılar, vb. dahil) (kombiler ve radyatörler hariç)"
    },
    {
        "ID": 1250,
        "dc_MESLEK_GRUBU": "50",
        "dc_MESLEK_GRUBU_ADI": "MEKANİK TESİSAT VE DOĞALGAZ TESİSATI",
        "dc_NACE_KODU": "47.52.15",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda demirden veya çelikten merkezi ısıtma radyatörleri, merkezi ısıtma kazanları (kombiler dahil) ile bunların parçalarının perakende ticareti (buhar jeneratörleri ve kızgın su üreten kazanlar hariç)"
    },
    {
        "ID": 1251,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "15.20.15",
        "dc_NACE_BASLIK": "Deriden ayakkabı, mes, bot, çizme, postal, terlik, vb. imalatı (tamamıyla tekstilden olanlar ile ortopedik ayakkabı ve kayak ayakkabısı hariç)"
    },
    {
        "ID": 1252,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "15.20.17",
        "dc_NACE_BASLIK": "Plastik veya kauçuktan ayakkabı, bot, çizme, postal, terlik, vb. imalatı (tamamıyla tekstilden olanlar ile ortopedik ayakkabı ve kayak ayakkabısı hariç)"
    },
    {
        "ID": 1253,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "15.20.18",
        "dc_NACE_BASLIK": "Tekstilden ve diğer malzemelerden ayakkabı, mes, bot, çizme, postal, terlik, vb. imalatı (deri ve plastik olanlar ile tamamıyla tekstilden olanlar, ortopedik ayakkabı ve kayak ayakkabısı hariç)"
    },
    {
        "ID": 1254,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "15.20.19",
        "dc_NACE_BASLIK": "Ayakkabıların deri kısımlarının ve ayakkabı parçalarının (kauçuk, plastik ve ahşap parçalar hariç) imalatı (üst ve alt parçaları, topuklar, vb. imalatı ile sayacılık faaliyetleri dahil)"
    },
    {
        "ID": 1255,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "22.19.05",
        "dc_NACE_BASLIK": "Kauçuk ayakkabı/bot tabanları ve ayakkabı/botların diğer kauçuk parçalarının imalatı"
    },
    {
        "ID": 1256,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "22.29.04",
        "dc_NACE_BASLIK": "Ayakkabı ve terliklerin plastik parçalarının imalatı (plastik ayakkabı kalıbı imalatı dahil)"
    },
    {
        "ID": 1257,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "46.16.01",
        "dc_NACE_BASLIK": "Deri giyim eşyası, kürk ve ayakkabının bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1258,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "46.16.02",
        "dc_NACE_BASLIK": "Deri eşyalar ve seyahat aksesuarlarının bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1259,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "46.42.02",
        "dc_NACE_BASLIK": "Ayakkabı toptan ticareti (terlik, çarık, mes, vb. dahil, spor ayakkabıları hariç)"
    },
    {
        "ID": 1260,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "46.42.08",
        "dc_NACE_BASLIK": "Ayakkabı malzemeleri toptan ticareti"
    },
    {
        "ID": 1261,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "47.64.06",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda spor ayakkabısı perakende ticareti (kayak botları dahil)"
    },
    {
        "ID": 1262,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "47.72.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ayakkabı, terlik vb. perakende ticareti (kavafiye dahil, spor ayakkabıları ile tamamı tekstilden olanlar hariç)"
    },
    {
        "ID": 1263,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "47.72.06",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ayakkabı parçaları perakende ticareti (deri, ayakkabı sayası, topuk, topuk yastığı, ayakkabı bağları vb.)"
    },
    {
        "ID": 1264,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "95.23.01",
        "dc_NACE_BASLIK": "Ayakkabı ve deri eşyaların onarımı (ayakkabı, valiz, el çantası, vb.) (deri giyim eşyası hariç)"
    },
    {
        "ID": 1265,
        "dc_MESLEK_GRUBU": "51",
        "dc_MESLEK_GRUBU_ADI": "AYAKKABI VE AYAKKABI YAN SANAYİ",
        "dc_NACE_KODU": "96.09.01",
        "dc_NACE_BASLIK": "Ayakkabı boyama hizmetleri"
    },
    {
        "ID": 1266,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "23.99.03",
        "dc_NACE_BASLIK": "İşlenmiş asbest (amyant) lifleri, asbest ve magnezyum karbonat esaslı karışımlar, bu karışımlardan veya asbestten yapılan ürünler, fren, debriyaj ve benzerleri için monte edilmemiş sürtünme malzemeleri (fren balatası vb.) imalatı"
    },
    {
        "ID": 1267,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "25.99.08",
        "dc_NACE_BASLIK": "Metalden gemi ve tekne pervaneleri ve bunların aksamları ile çıpalar, filika demirleri vb. imalatı"
    },
    {
        "ID": 1268,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "25.99.19",
        "dc_NACE_BASLIK": "Demir yolu veya tramvay hatlarında kullanılan adi metalden sabit malzemeler ve bağlantı parçaları ile bunların parçalarının imalatı"
    },
    {
        "ID": 1269,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "27.20.01",
        "dc_NACE_BASLIK": "Elektrik akümülatör parçalarının imalatı (akümülatör plakaları, separatörler, kurşun ızgaralar) (akümülatör kutu ve kapak larının imalatı hariç)"
    },
    {
        "ID": 1270,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "27.20.03",
        "dc_NACE_BASLIK": "Akümülatör imalatı (kurşun asitli, nikel kadmiyum, nikel metal hidrit, lityum-iyon, lityum polimer, nikel demir ve diğer elektrik akümülatörleri)"
    },
    {
        "ID": 1271,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "27.20.05",
        "dc_NACE_BASLIK": "Akümülatör kutu ve kapaklarının imalatı"
    },
    {
        "ID": 1272,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.11.10",
        "dc_NACE_BASLIK": "Tüm içten yanmalı motorlar, dizel motorlar vb.de kullanılan pistonlar, silindirler ve silindir blokları, silindir başları, silindir gömlekleri, emme ve egzos subapları, segmanlar, hareket kolları, karbüratörler, yakıt memeleri vb.nin imalatı"
    },
    {
        "ID": 1273,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.13.04",
        "dc_NACE_BASLIK": "İçten yanmalı motorlara monte edilmek üzere tasarlanmış pompaların imalatı (yağ pompaları, yakıt pompaları (benzin, mazot vb. pompaları) ve soğutma pompaları)"
    },
    {
        "ID": 1274,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.15.02",
        "dc_NACE_BASLIK": "Debriyajlar (kavramalar), mil (şaft) kaplinler ve üniversal mafsalların imalatı (motorlu kara taşıtlarında kullanılan debriyajlar hariç)"
    },
    {
        "ID": 1275,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.15.03",
        "dc_NACE_BASLIK": "Dişliler/dişli takımları, bilyeli ve makaralı vidalar, şanzımanlar, vites kutuları ve diğer hız değiştiricilerin imalatı (motorlu kara taşıtlarında kullanılan vites kutuları ve diferansiyelleri hariç)"
    },
    {
        "ID": 1276,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.18",
        "dc_NACE_BASLIK": "İçten yanmalı motorlar için yağ filtresi, yakıt filtresi, hava filtresi, gres nipelleri, yağ keçesi ve benzerlerinin imalatı"
    },
    {
        "ID": 1277,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.30.08",
        "dc_NACE_BASLIK": "Tarımsal amaçlı römork veya yarı-römork imalatı"
    },
    {
        "ID": 1278,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.30.10",
        "dc_NACE_BASLIK": "Traktörlerin ve yaya kontrollü traktörlerin (motokültörler) imalatı"
    },
    {
        "ID": 1279,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.08",
        "dc_NACE_BASLIK": "Paletli traktörlerin imalatı (inşaat veya madencilikte kullanılan traktörler)"
    },
    {
        "ID": 1280,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.09",
        "dc_NACE_BASLIK": "Kara yolu dışında kullanılan damperli kamyonların imalatı (mega kamyonlar)"
    },
    {
        "ID": 1281,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.10.01",
        "dc_NACE_BASLIK": "Kamyonet, kamyon, yarı römorklar için çekiciler, tankerler, vb. karayolu taşıtlarının imalatı"
    },
    {
        "ID": 1282,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.10.02",
        "dc_NACE_BASLIK": "Otomobil ve benzeri araçların imalatı"
    },
    {
        "ID": 1283,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.10.03",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının motorlarının imalatı (motorların fabrikada yeniden yapımı dahil)"
    },
    {
        "ID": 1284,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.10.04",
        "dc_NACE_BASLIK": "Minibüs, midibüs, otobüs, troleybüs, metrobüs, vb. yolcu nakil araçlarının imalatı"
    },
    {
        "ID": 1285,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.10.05",
        "dc_NACE_BASLIK": "Kar motosikleti, golf arabası, ATV motosikletler, go-kart arabaları vb. taşıtların imalatı"
    },
    {
        "ID": 1286,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.10.07",
        "dc_NACE_BASLIK": "Özel amaçlı motorlu kara taşıtlarının imalatı (amfibi araçlar, çöp kamyonu, yol temizleme araçları, zırhlı nakil araçları, mikserli kamyon, vinçli kamyon, itfaiye aracı, ambulans, motorlu karavan vb.)"
    },
    {
        "ID": 1287,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.10.08",
        "dc_NACE_BASLIK": "Motorlu kara taşıtları için şasi imalatı"
    },
    {
        "ID": 1288,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.20.01",
        "dc_NACE_BASLIK": "Treyler (römork), yarı treyler (yarı römork) ve mekanik hareket ettirici tertibatı bulunmayan diğer araçların parçalarının imalatı (bu araçların karoserleri, kasaları, aksları ve diğer parçaları)"
    },
    {
        "ID": 1289,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.20.02",
        "dc_NACE_BASLIK": "Motorlu kara taşıtları için karoser, kabin, kupa, dorse ve damper imalatı (otomobil, kamyon, kamyonet, otobüs, minibüs, traktör, damperli kamyon ve özel amaçlı motorlu kara taşıtlarının karoserleri)"
    },
    {
        "ID": 1290,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.20.03",
        "dc_NACE_BASLIK": "Konteyner imalatı (bir veya daha fazla taşıma şekline göre özel olarak tasarlanmış olanlar)"
    },
    {
        "ID": 1291,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.20.04",
        "dc_NACE_BASLIK": "Treyler (römork) ve yarı treyler (yarı römork) imalatı (karavan tipinde olanlar ve tarımsal amaçlı olanlar hariç)"
    },
    {
        "ID": 1292,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.20.05",
        "dc_NACE_BASLIK": "Karavan tipinde treyler (römork) ve yarı treyler (yarı römork) imalatı - ev olarak veya kamp için"
    },
    {
        "ID": 1293,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.20.06",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının modifiye edilmesi ve karoser hizmetleri"
    },
    {
        "ID": 1294,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.31.04",
        "dc_NACE_BASLIK": "Motorlu taşıtlar için ateşleme kablo takımları ve diğer kablo setleri ile ateşleme bujisi ve manyetosu, dinamo, manyetik volan, distribütör, ateşleme bobini, marş motoru, alternatör vb. imalatı"
    },
    {
        "ID": 1295,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.31.05",
        "dc_NACE_BASLIK": "Motorlu kara taşıtları ve motosikletler için elektrikli sinyalizasyon donanımları,  kornalar, sirenler, cam silecekleri, buğu önleyiciler, elektrikli cam/kapı sistemleri, voltaj regülatörleri vb. elektrikli ekipmanların imalatı"
    },
    {
        "ID": 1296,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.31.06",
        "dc_NACE_BASLIK": "Oto alarm sistemlerinin imalatı"
    },
    {
        "ID": 1297,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.31.07",
        "dc_NACE_BASLIK": "Bisikletler için elektrikli veya pille çalışan aydınlatma veya işaret cihazlarının imalatı (bisiklet dinamoları dahil)"
    },
    {
        "ID": 1298,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.32.20",
        "dc_NACE_BASLIK": "Motorlu kara taşıtları için diğer parça ve aksesuarların imalatı (fren, vites kutusu, jant, süspansiyon sistemleri, amortisör, radyatör, egzoz, debriyaj, direksiyon kutusu, rot, rotbaşı, rotil vb.) (traktör, itfaiye araçları, vb. için olanlar dahil)"
    },
    {
        "ID": 1299,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.32.21",
        "dc_NACE_BASLIK": "Motorlu kara taşıtları için karoser, kabin ve kupalara ait parça ve aksesuarların imalatı (tamponlar, koltuk emniyet kemerleri, hava yastıkları, kapılar vb. dahil)"
    },
    {
        "ID": 1300,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "29.32.22",
        "dc_NACE_BASLIK": "Motorlu kara taşıtları için koltuk imalatı (demiryolu ve havayolu için olanlar hariç)"
    },
    {
        "ID": 1301,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.12.01",
        "dc_NACE_BASLIK": "Jet ski vb. kişisel su araçlarının imalatı"
    },
    {
        "ID": 1302,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.12.03",
        "dc_NACE_BASLIK": "Şişirilebilir motorlu/motorsuz botların imalatı (eğlence ve spor amaçlı olanlar)"
    },
    {
        "ID": 1303,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.12.04",
        "dc_NACE_BASLIK": "Eğlence ve sportif amaçlı motorlu/motorsuz yelkenlilerin, motorlu tekne ve yatların, sandalların, kayıkların, kanoların, eğlence amaçlı hover kraftların ve benzer araçların imalatı (polyester tekneler dahil)"
    },
    {
        "ID": 1304,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.20.01",
        "dc_NACE_BASLIK": "Demir yolu ve tramvay lokomotifleri, vagonları, bagaj vagonları, lokomotif tenderleri, demir yolu veya tramvay bakım veya servis araçları imalatı (lokomotiflere ve vagonlara ait parçalar ile koltuklarının imalatı hariç)"
    },
    {
        "ID": 1305,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.20.02",
        "dc_NACE_BASLIK": "Demir yolu ve tramvay lokomotif veya vagonlarının parçalarının imalatı"
    },
    {
        "ID": 1306,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.20.03",
        "dc_NACE_BASLIK": "Raylı sistem taşıtları için koltuk imalatı"
    },
    {
        "ID": 1307,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.20.04",
        "dc_NACE_BASLIK": "Mekanik veya elektromekanik sinyalizasyon, emniyet veya trafik kontrol cihazları ve bunların parçalarının imalatı (demir yolu, tramvay hatları, kara yolları, dahili su yolları, park yerleri, liman tesisleri veya hava alanları için olanlar)"
    },
    {
        "ID": 1308,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.20.05",
        "dc_NACE_BASLIK": "Demir yolu veya tramvay lokomotiflerinin ve vagonlarının büyük çapta yenilenmesi ve donanım hizmetleri (tamamlama)"
    },
    {
        "ID": 1309,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.91.01",
        "dc_NACE_BASLIK": "Motosiklet, moped ve motorlu bisiklet (bir yardımcı motoru bulunan bisikletler) imalatı"
    },
    {
        "ID": 1310,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.91.02",
        "dc_NACE_BASLIK": "Motosiklet parça ve aksesuarları imalatı (sele, motosiklet yan sepeti, motosiklet vitesi vb.)"
    },
    {
        "ID": 1311,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.91.03",
        "dc_NACE_BASLIK": "Motosiklet motorları imalatı"
    },
    {
        "ID": 1312,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.92.01",
        "dc_NACE_BASLIK": "Motorsuz bisiklet imalatı (üç tekerlekli servis bisikleti, iki ya da daha fazla kişilik bisiklet, yarış bisikleti, vitesli bisiklet) (çocuklar için plastik bisikletler hariç)"
    },
    {
        "ID": 1313,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.92.02",
        "dc_NACE_BASLIK": "Bisiklet parça ve aksesuarlarının imalatı (jantlar, gidonlar, iskelet, çatallar, pedal fren göbekleri/poyraları, göbek/poyra frenleri, krank-dişlileri, pedallar ve serbest dişlilerin parçaları, vb.)"
    },
    {
        "ID": 1314,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.92.03",
        "dc_NACE_BASLIK": "Engelli araçlarının imalatı (motorlu, motorsuz, akülü, şarjlı, vb.)"
    },
    {
        "ID": 1315,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.92.04",
        "dc_NACE_BASLIK": "Engelli araçlarının parça ve aksesuarlarının imalatı"
    },
    {
        "ID": 1316,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.92.05",
        "dc_NACE_BASLIK": "Bebek arabaları, pusetler ve bunların parçalarının imalatı"
    },
    {
        "ID": 1317,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.99.01",
        "dc_NACE_BASLIK": "Mekanik hareket ettirici tertibatı bulunmayan araçların imalatı (alışveriş arabaları, sanayi el arabaları, işportacı arabaları, bagaj arabaları, elle çekilen golf arabaları, hasta nakli için arabalar, kızaklar dahil)"
    },
    {
        "ID": 1318,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "30.99.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer ulaşım ekipmanlarının imalatı"
    },
    {
        "ID": 1319,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.20.01",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının elektrik sistemlerinin onarımı"
    },
    {
        "ID": 1320,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.20.08",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarına LPG sistemi montajı ve bakımı hizmetleri"
    },
    {
        "ID": 1321,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.31.10",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının aksesuarlarının toptan ticareti (oto alarm sistemleri dahil, motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1322,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.31.11",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının parçalarının toptan ticareti (dorse, damper, akü dahil, motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1323,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.31.12",
        "dc_NACE_BASLIK": "Motorlu kara taşıtı lastiklerinin ve jantlarının toptan ticareti (motosiklet ve bisiklet lastiği ve jantları hariç)"
    },
    {
        "ID": 1324,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.31.13",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının camlarının toptan ticareti"
    },
    {
        "ID": 1325,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.31.14",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının parça ve aksesuarlarının bir ücret ya da sözleşmeye dayalı olarak toptan ticareti"
    },
    {
        "ID": 1326,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.32.02",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının parçalarının belirli bir mala tahsis edilmiş mağazalarda perakende ticareti (dorse, damper, akü dahil, lastik ve camlar ile motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1327,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.32.03",
        "dc_NACE_BASLIK": "Motorlu kara taşıtı lastiklerinin ve jantlarının belirli bir mala tahsis edilmiş mağazalarda perakende ticareti (motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1328,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.32.04",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının aksesuarlarının belirli bir mala tahsis edilmiş mağazalarda perakende ticareti (motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1329,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.32.05",
        "dc_NACE_BASLIK": "Motorlu kara taşıtı camlarının belirli bir mala tahsis edilmiş mağazalarda perakende ticareti (motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1330,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.32.06",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının ikinci el (kullanılmış) parçalarının belirli bir mala tahsis edilmiş mağazalarda perakende ticareti (motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1331,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.32.90",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının parça ve aksesuarlarının diğer perakende ticareti (uzmanlaşmamış olanlar ile internet, posta, tezgah, pazar vb. yoluyla yapılanlar) (motosiklet parça ve aksesuarları hariç)"
    },
    {
        "ID": 1332,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.40.01",
        "dc_NACE_BASLIK": "Motosiklet ve motorlu bisikletlerin bakım ve onarım hizmetleri"
    },
    {
        "ID": 1333,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.40.05",
        "dc_NACE_BASLIK": "Motosikletler ve motorlu bisikletlerin parça ve aksesuarlarının toptan ticareti"
    },
    {
        "ID": 1334,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.40.06",
        "dc_NACE_BASLIK": "Motosikletler, motorlu bisikletler ve bunların parça ve aksesuarlarının bir ücret veya sözleşmeye dayalı olarak toptan ticareti"
    },
    {
        "ID": 1335,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "45.40.07",
        "dc_NACE_BASLIK": "Motosikletler, motorlu bisikletler ve bunların parça ve aksesuarlarının diğer perakende ticareti (uzmanlaşmamış olanlar ile internet, posta, tezgah, pazar vb. yoluyla yapılanlar)"
    },
    {
        "ID": 1336,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "47.64.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bisiklet perakende ticareti"
    },
    {
        "ID": 1337,
        "dc_MESLEK_GRUBU": "52",
        "dc_MESLEK_GRUBU_ADI": "KARA TAŞITLARI, YEDEK PARÇALARI VE EKİPMANLARI",
        "dc_NACE_KODU": "47.78.27",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bebek arabaları ve bunların parçalarının perakende ticareti"
    },
    {
        "ID": 1338,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.11.10",
        "dc_NACE_BASLIK": "Otomobillerin ve hafif motorlu kara taşıtlarının toptan ticareti (ambulans ve minibüs benzeri motorlu yolcu taşıtları dahil (3,5 tondan daha az))"
    },
    {
        "ID": 1339,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.11.11",
        "dc_NACE_BASLIK": "Otomobillerin ve hafif motorlu kara taşıtlarının belirli bir mala tahsis edilmiş mağazalarda perakende ticareti (ambulans ve minibüs benzeri motorlu yolcu taşıtları dahil (3,5 tondan daha az)) (galericiler dahil)"
    },
    {
        "ID": 1340,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.11.12",
        "dc_NACE_BASLIK": "Otomobil ve hafif motorlu kara taşıtlarının bir ücret veya sözleşmeye dayalı olarak (aracılar) toptan ticareti (ambulans ve minibüs benzeri motorlu yolcu taşıtları (3,5 tondan daha az) dahil)"
    },
    {
        "ID": 1341,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.11.13",
        "dc_NACE_BASLIK": "Otomobil ve hafif motorlu kara taşıtlarının diğer perakende ticareti (ambulans ve minibüs benzeri motorlu yolcu taşıtları dahil (3,5 tondan daha az)) (aracılar ile internet, TV. Vb. Üzerinden ticaret dahil)"
    },
    {
        "ID": 1342,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.19.01",
        "dc_NACE_BASLIK": "Diğer motorlu kara taşıtlarının toptan ticareti (kamyonlar, çekiciler, otobüsler, römorklar, yarı römorklar, karavanlar ve motorlu karavanlar)"
    },
    {
        "ID": 1343,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.19.02",
        "dc_NACE_BASLIK": "Diğer motorlu kara taşıtlarının perakende ticareti (kamyonlar, çekiciler, otobüsler, römorklar, yarı römorklar, karavanlar ve motorlu karavanlar)"
    },
    {
        "ID": 1344,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.40.02",
        "dc_NACE_BASLIK": "Motosikletler ve motorlu bisikletlerin belirli bir mala tahsis edilmiş mağazalarda perakende ticareti"
    },
    {
        "ID": 1345,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.40.03",
        "dc_NACE_BASLIK": "Motosikletler ve motorlu bisikletlerin parça ve aksesuarlarının belirli bir mala tahsis edilmiş mağazalarda perakende ticareti"
    },
    {
        "ID": 1346,
        "dc_MESLEK_GRUBU": "53",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU TAŞIT SATIŞ VE SERVİSİ",
        "dc_NACE_KODU": "45.40.04",
        "dc_NACE_BASLIK": "Motosikletler ve motorlu bisikletlerin toptan ticareti"
    },
    {
        "ID": 1347,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "28.11.08",
        "dc_NACE_BASLIK": "Türbin ve türbin parçalarının imalatı (rüzgar, gaz, su ve buhar türbinleri ile su çarkları ve bunların parçaları) (hava taşıtları için turbo jetler veya turbo pervaneler hariç)"
    },
    {
        "ID": 1348,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "28.11.09",
        "dc_NACE_BASLIK": "Deniz taşıtlarında, demir yolu taşıtlarında ve sanayide kullanılan kıvılcım ateşlemeli veya sıkıştırma ateşlemeli içten yanmalı motorların ve bunların parçalarının imalatı (hava taşıtı, motorlu kara taşıtı ve motosiklet motorları hariç)"
    },
    {
        "ID": 1349,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.01",
        "dc_NACE_BASLIK": "Yüzen ve su altında kalabilen sondaj platformlarının inşası faaliyetleri"
    },
    {
        "ID": 1350,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.02",
        "dc_NACE_BASLIK": "Yolcu gemi ve tekneleri, feribotlar, tankerler, frigorifik gemiler, kuru yük gemileri, çekici ve itici römorkörler, tarak gemileri, açık deniz gemileri, hover kraftların ve diğer gemilerin inşası (spor ve eğlence amaçlı olanlar hariç)"
    },
    {
        "ID": 1351,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.03",
        "dc_NACE_BASLIK": "Savaş gemileri ve denizaltıların imalatı"
    },
    {
        "ID": 1352,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.04",
        "dc_NACE_BASLIK": "Balıkçı gemi ve tekneleri ile deniz ürünlerinin işlenmesine ve saklanmasına yönelik fabrika gemilerinin yapımı"
    },
    {
        "ID": 1353,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.05",
        "dc_NACE_BASLIK": "Yüzen rıhtımlar, dubalar, batardolar, koferdamlar, yüzen iskeleler, şamandıralar, yüzen tanklar, mavnalar, salapuryalar, yüzen vinçler, eğlence amaçlı olmayan şişme botlar vb. imalatı"
    },
    {
        "ID": 1354,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.06",
        "dc_NACE_BASLIK": "Gemiler ve yüzer yapılar için oturulacak yerlerin imalatı"
    },
    {
        "ID": 1355,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.07",
        "dc_NACE_BASLIK": "Gemiler ve yüzer yapılar için iç bölmelerin imalatı"
    },
    {
        "ID": 1356,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.11.08",
        "dc_NACE_BASLIK": "Gemilerin, yüzer platformların ve yüzer yapıların büyük çapta değiştirilmesi ve yeniden inşası"
    },
    {
        "ID": 1357,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.01",
        "dc_NACE_BASLIK": "Helikopter imalatı (helikopter veya helikopter motorlarının fabrikalarda büyük çaplı revizyonu ve değiştirilmesi dahil)"
    },
    {
        "ID": 1358,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.02",
        "dc_NACE_BASLIK": "Hava taşıtı parçalarının imalatı (uçak gövdesi, kanatları, kapıları, kumanda yüzeyleri, iniş takımları gibi ana montaj parçaları, pervaneler, helikopter rotorları, motorlar, turbo jetler, turbo pervaneli motorlar vb. ile bunların parçaları)"
    },
    {
        "ID": 1359,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.03",
        "dc_NACE_BASLIK": "Sıcak hava balonu, zeplin, planör, delta kanatlı planör ve diğer motorsuz hava araçlarının imalatı"
    },
    {
        "ID": 1360,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.04",
        "dc_NACE_BASLIK": "Uçak ve benzer hava taşıtlarının imalatı (uçak veya uçak motorlarının fabrikalarda büyük çaplı revizyonu ve değiştirilmesi dahil)"
    },
    {
        "ID": 1361,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.05",
        "dc_NACE_BASLIK": "Yer uçuş eğitim cihazları ve bunların parçalarının imalatı"
    },
    {
        "ID": 1362,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.06",
        "dc_NACE_BASLIK": "Uzay aracı, uzay aracı fırlatma araçları ve mekanizmaları ile uydular, uzay roketleri, yörünge istasyonları ve uzay mekiklerinin imalatı"
    },
    {
        "ID": 1363,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.07",
        "dc_NACE_BASLIK": "Kıtalar arası balistik füzelerin (ICBM) imalatı"
    },
    {
        "ID": 1364,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.30.08",
        "dc_NACE_BASLIK": "Hava taşıtları ve uzay araçlarında kullanılan koltukların imalatı"
    },
    {
        "ID": 1365,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.40.01",
        "dc_NACE_BASLIK": "Askeri savaş araçlarının imalatı (tank, zırhlı savaş araçları ve bunların parçaları)"
    },
    {
        "ID": 1366,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "30.99.02",
        "dc_NACE_BASLIK": "Hayvanlar tarafından çekilen araçların imalatı (at, eşek arabası, fayton, vb.)"
    },
    {
        "ID": 1367,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "33.15.01",
        "dc_NACE_BASLIK": "Gemilerin ve teknelerin bakım ve onarımı (yüzen yapılar, sandal, kayık, vb. bakım ve onarımı ile bunların kalafatlanması dahil)"
    },
    {
        "ID": 1368,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "33.16.01",
        "dc_NACE_BASLIK": "Hava taşıtlarının ve uzay araçlarının bakım ve onarımı (fabrikalarda yapılan dönüştürme, elden geçirme ve yeniden üretme hariç)"
    },
    {
        "ID": 1369,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "33.17.01",
        "dc_NACE_BASLIK": "Demir yolu lokomotiflerinin ve vagonlarının bakım ve onarımı"
    },
    {
        "ID": 1370,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "33.17.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer ulaşım ekipmanlarının bakım ve onarımı (at arabaları ve dört tekerlekli yük arabalarının bakım ve onarımı dahil)"
    },
    {
        "ID": 1371,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "45.20.02",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının lastik onarımı (tekerlek ayar ve balansı dahil)"
    },
    {
        "ID": 1372,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "45.20.03",
        "dc_NACE_BASLIK": "Araba yağlama, yıkama, cilalama ve benzeri faaliyetler"
    },
    {
        "ID": 1373,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "45.20.04",
        "dc_NACE_BASLIK": "Motorlu taşıtların koltuk ve döşemelerinin bakım ve onarımı"
    },
    {
        "ID": 1374,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "45.20.05",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının karoser ve kaporta onarımı vb. faaliyetler (kapı, kilit, cam, boyama, çarpma onarımı vb.)"
    },
    {
        "ID": 1375,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "45.20.06",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının genel bakım ve onarımı (radyatör, klima ve egzoz bakım ve onarımı dahil, aynı işletmede yapılanlar ile elektrik sistemi, tekerlek ve karoser onarım hizmetleri hariç)"
    },
    {
        "ID": 1376,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "45.20.07",
        "dc_NACE_BASLIK": "Motorlu kara taşıtlarının genel bakım ve onarım hizmetleri (aynı işletmede mekanik, elektrik sistemi, kaporta, boya, fren sistemi, cam, pencere vb. bakım ve onarımının yapılması)"
    },
    {
        "ID": 1377,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "46.14.03",
        "dc_NACE_BASLIK": "Gemilerin, hava taşıtlarının ve başka yerde sınıflandırılmamış diğer ulaşım araçlarının bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1378,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "46.69.01",
        "dc_NACE_BASLIK": "Ulaşım araçları toptan ticareti (gemi, römorkör, lokomotif, hava taşıtları vb. ile bunların parçaları ve konteynerler dahil, motorlu kara taşıtları, motosiklet ve bisikletler hariç)"
    },
    {
        "ID": 1379,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "46.69.03",
        "dc_NACE_BASLIK": "Akümülatör, batarya, pil ve buların parçalarının toptan ticareti (evlerde, motosikletlerde ve motorlu kara taşıtlarında kullanılanlar hariç)"
    },
    {
        "ID": 1380,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "47.64.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda motorlu taşıtlar dışındaki eğlence ve spor amaçlı taşıtların perakende ticareti (tekne, yelkenli, kano, kayık, bot, balon, zeplin, vb. ile deniz taşıtları için dıştan takmalı motorlar dahil)"
    },
    {
        "ID": 1381,
        "dc_MESLEK_GRUBU": "54",
        "dc_MESLEK_GRUBU_ADI": "MOTORLU ARAÇLAR TAMİR, BAKIM VE İMALATI",
        "dc_NACE_KODU": "95.29.05",
        "dc_NACE_BASLIK": "Bisiklet onarımı"
    },
    {
        "ID": 1382,
        "dc_MESLEK_GRUBU": "55",
        "dc_MESLEK_GRUBU_ADI": "DEMİR ÇELİK",
        "dc_NACE_KODU": "46.72.04",
        "dc_NACE_BASLIK": "Demir cevherleri toptan ticareti"
    },
    {
        "ID": 1383,
        "dc_MESLEK_GRUBU": "55",
        "dc_MESLEK_GRUBU_ADI": "DEMİR ÇELİK",
        "dc_NACE_KODU": "46.72.05",
        "dc_NACE_BASLIK": "Birincil formdaki demir ve çelik toptan ticareti - kütük (ingot), blok, granül, toz, pelet, parça vb. formlarda (pik demir, manganezli dökme demir, demir, çelik ve çelik alaşımları vb.)"
    },
    {
        "ID": 1384,
        "dc_MESLEK_GRUBU": "55",
        "dc_MESLEK_GRUBU_ADI": "DEMİR ÇELİK",
        "dc_NACE_KODU": "46.72.08",
        "dc_NACE_BASLIK": "Demir/çelikten haddelenmiş/soğuk çekilmiş yassı ürünlerin toptan ticareti"
    },
    {
        "ID": 1385,
        "dc_MESLEK_GRUBU": "55",
        "dc_MESLEK_GRUBU_ADI": "DEMİR ÇELİK",
        "dc_NACE_KODU": "46.72.09",
        "dc_NACE_BASLIK": "Demir/çelikten bar ve çubukların, profillerin, levha kazıkların (palplanş), tüp ve boruların toptan ticareti (filmaşin, inşaat demiri, sondaj borusu, petrol, gaz vb. hatlar için borular, vb. ile tel dahil)"
    },
    {
        "ID": 1386,
        "dc_MESLEK_GRUBU": "55",
        "dc_MESLEK_GRUBU_ADI": "DEMİR ÇELİK",
        "dc_NACE_KODU": "46.72.10",
        "dc_NACE_BASLIK": "Demir/çelikten diğer birincil formdaki ürünlerin toptan ticareti (nervürlü levhalar, sandviç paneller ve demir yolu veya tramvay yolu yapım malzemesi dahil)"
    },
    {
        "ID": 1387,
        "dc_MESLEK_GRUBU": "55",
        "dc_MESLEK_GRUBU_ADI": "DEMİR ÇELİK",
        "dc_NACE_KODU": "47.52.13",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda demir/çelikten bar ve çubukların, profillerin, tüp ve boruların perakende ticareti"
    },
    {
        "ID": 1388,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.41.19",
        "dc_NACE_BASLIK": "Değerli metal alaşımlarının imalatı"
    },
    {
        "ID": 1389,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.42.16",
        "dc_NACE_BASLIK": "Alüminyum folyo imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1390,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.42.17",
        "dc_NACE_BASLIK": "Alüminyum imalatı (işlenmemiş halde)"
    },
    {
        "ID": 1391,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.42.18",
        "dc_NACE_BASLIK": "Alüminyum sac, levha, tabaka, şerit imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1392,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.42.20",
        "dc_NACE_BASLIK": "Alüminyum oksit imalatı (suni korindon hariç) (alümina)"
    },
    {
        "ID": 1393,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.42.21",
        "dc_NACE_BASLIK": "Alüminyum bar, çubuk, tel ve profil, tüp, boru ve bağlantı parçaları imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1394,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.43.01",
        "dc_NACE_BASLIK": "Kurşun tabaka, levha, şerit, folyo, kurşun tozu ve pulu imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1395,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.43.02",
        "dc_NACE_BASLIK": "Kurşun imalatı (işlenmemiş)"
    },
    {
        "ID": 1396,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.43.04",
        "dc_NACE_BASLIK": "Kalay bar, çubuk, profil, tel, vb. imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1397,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.43.05",
        "dc_NACE_BASLIK": "Kalay imalatı (işlenmemiş halde)"
    },
    {
        "ID": 1398,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.43.06",
        "dc_NACE_BASLIK": "Çinko imalatı (işlenmemiş halde)"
    },
    {
        "ID": 1399,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.43.07",
        "dc_NACE_BASLIK": "Çinko bar, çubuk, profil, tel vb. imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1400,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.43.08",
        "dc_NACE_BASLIK": "Çinko sac, tabaka, levha, şerit, folyo, çinko tozları, vb. imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1401,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.44.01",
        "dc_NACE_BASLIK": "Bakır, bakır matı, bakır tozu, semente bakır, bakır anotu ile bakır ve bakır alaşımlarının imalatı"
    },
    {
        "ID": 1402,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.44.03",
        "dc_NACE_BASLIK": "Bakır sac, tabaka, levha, şerit, folyo imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1403,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.44.04",
        "dc_NACE_BASLIK": "Bakırın çekilmesi ve haddelenmesi ile tüp, boru, bunların bağlantı elemanları, bar, çubuk, tel ve profil imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1404,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.45.01",
        "dc_NACE_BASLIK": "Maden cevherlerinden ya da oksitlerden işlenmemiş krom, manganez, nikel, tungsten, molibden, tantalum, kobalt, bizmut, titanyum, zirkonyum, berilyum, germanyum vb. imalatı (alaşımları dahil)"
    },
    {
        "ID": 1405,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.45.02",
        "dc_NACE_BASLIK": "Krom, manganez, tungsten, molibden, tantalum, kobalt, bizmut, titanyum, zirkonyum, berilyum, germanyum vb. demir dışı metallerden yapılan ürünlerin imalatı (sermetler ve diğer ara ürünler dahil, nikelden olanlar hariç)"
    },
    {
        "ID": 1406,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.45.06",
        "dc_NACE_BASLIK": "Nikel matları, nikel oksit sinterleri ve diğer ara ürünleri ile nikel bar, çubuk, profil, tel, levha, şerit, folyo, tüp, boru ve bağlantı parçaları imalatı"
    },
    {
        "ID": 1407,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "24.46.01",
        "dc_NACE_BASLIK": "Uranyum ve radyumlu maden cevherlerinden veya diğer cevherlerden metalik uranyum üretimi, uranyumun ergitilmesi ve rafine edilmesi (zenginleştirilmiş plutonyum, uranyum, toryum ile bunların bileşiklerinin imalatı hariç)"
    },
    {
        "ID": 1408,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "32.12.03",
        "dc_NACE_BASLIK": "Değerli metallerden yapılan teknik ve laboratuvar malzemeleri imalatı (maden eritme kapları, spatulalar, elektrolitik kaplama anotları, vb. dahil)"
    },
    {
        "ID": 1409,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "46.72.01",
        "dc_NACE_BASLIK": "Demir dışı metal cevherleri ve konsantrelerinin toptan ticareti (alüminyum, bakır, nikel, kurşun, çinko, kalay, vb. cevherleri dahil, uranyum ve toryum cevherleri ile değerli metal cevherleri hariç)"
    },
    {
        "ID": 1410,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "46.72.02",
        "dc_NACE_BASLIK": "Birincil formdaki demir dışı metallerin toptan ticareti - kütük, blok, granül, toz, pelet, levha, bar, çubuk, profil vb. formlarda (alüminyum, bakır, nikel, kurşun, çinko, kalay, vb. dahil, altın, gümüş ve platin hariç)"
    },
    {
        "ID": 1411,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "46.72.06",
        "dc_NACE_BASLIK": "Birincil formdaki değerli metallerin toptan ticareti - kütük, blok, granül, toz, pelet, levha, bar, çubuk, profil vb. formlarda (altın, gümüş, platin vb.)"
    },
    {
        "ID": 1412,
        "dc_MESLEK_GRUBU": "56",
        "dc_MESLEK_GRUBU_ADI": "DEMİR DIŞI METALLER",
        "dc_NACE_KODU": "46.72.07",
        "dc_NACE_BASLIK": "Uranyum ve toryum cevherleri toptan ticareti"
    },
    {
        "ID": 1413,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.01",
        "dc_NACE_BASLIK": "Ham çelik üretilmesi (kütük veya diğer birincil formlarda ya da yarı mamul çelik ürünler halinde)"
    },
    {
        "ID": 1414,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.02",
        "dc_NACE_BASLIK": "Çelikten açık profil imalatı (sıcak haddeleme, sıcak çekme veya kalıptan çekme işlemlerinden daha ileri işlem görmemiş)"
    },
    {
        "ID": 1415,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.03",
        "dc_NACE_BASLIK": "Demir ve çelikten sıcak veya soğuk çekilmiş yassı hadde ürünleri imalatı (demir veya çelik alaşımlı levha, şerit, sac, teneke sac, vb. dahil)"
    },
    {
        "ID": 1416,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.05",
        "dc_NACE_BASLIK": "Sıcak haddelenmiş demir veya çelikten bar ve çubukların üretilmesi (inşaat demiri dahil)"
    },
    {
        "ID": 1417,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.06",
        "dc_NACE_BASLIK": "Demir veya çelik granül ve demir tozu üretilmesi"
    },
    {
        "ID": 1418,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.07",
        "dc_NACE_BASLIK": "Demir ya da çelik hurdaların yeniden eritilmesi"
    },
    {
        "ID": 1419,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.08",
        "dc_NACE_BASLIK": "Demir cevherinin doğrudan indirgenmesiyle elde edilen demirli ürünler ve diğer sünger demir ürünlerinin imalatı ile elektroliz veya diğer kimyasal yöntemlerle istisnai saflıkta demir üretilmesi"
    },
    {
        "ID": 1420,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.09",
        "dc_NACE_BASLIK": "Çelikten demir yolu ve tramvay yolu yapım malzemesi (birleştirilmemiş raylar ile ray donanımı, aksamı, vb.) ile levha kazıkları (palplanş) ve kaynaklı açık profil imalatı"
    },
    {
        "ID": 1421,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.10",
        "dc_NACE_BASLIK": "Pik demir ve manganezli dökme demir (aynalı demir/spiegeleisen) üretimi (külçe, blok, veya diğer birincil formlarda)"
    },
    {
        "ID": 1422,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.10.12",
        "dc_NACE_BASLIK": "Ferro alaşımların imalatı (ferro manganez, ferro silisyum, ferro siliko manganez, ferro krom ve diğerleri)"
    },
    {
        "ID": 1423,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.20.09",
        "dc_NACE_BASLIK": "Çelikten yapılmış tüp, boru, içi boş profiller ve ilgili bağlantı parçalarının imalatı"
    },
    {
        "ID": 1424,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.20.10",
        "dc_NACE_BASLIK": "Çelikten/demirden yapılmış tüp.boru.içi boş profiller ve ilgili bağlantı parçalarının imalatı (soğuk çekilmiş veya soğuk haddelenmiş)"
    },
    {
        "ID": 1425,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.31.01",
        "dc_NACE_BASLIK": "Çelik barların ve içi dolu profillerin soğuk çekme yöntemiyle imalatı"
    },
    {
        "ID": 1426,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.32.01",
        "dc_NACE_BASLIK": "Çelik dar şeritlerin soğuk hadde yöntemiyle imalatı (genişliği < 600 mm olan)"
    },
    {
        "ID": 1427,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.33.01",
        "dc_NACE_BASLIK": "Açık profillerin, nervürlü levhaların ve sandviç panellerin soğuk şekillendirme veya katlama yöntemiyle imalatı"
    },
    {
        "ID": 1428,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.34.01",
        "dc_NACE_BASLIK": "Çelik tellerin soğuk çekme yöntemiyle imalatı"
    },
    {
        "ID": 1429,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.51.13",
        "dc_NACE_BASLIK": "Demir döküm (yarı mamul demir ürünlerin dökümü, gri demir dökümü, küresel grafit demir dökümü, dövülebilir dökme demir ürünleri dökümü, tüpler, borular ve içi boş profiller ile dökme demirden tüp ve borular ile bunların bağlantı parçalarının imalatı)"
    },
    {
        "ID": 1430,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.52.20",
        "dc_NACE_BASLIK": "Çelik dökümü"
    },
    {
        "ID": 1431,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.53.01",
        "dc_NACE_BASLIK": "Hafif metallerin dökümü (alüminyum, magnezyum, titanyum, çinko vb.den yarı mamul ürünlerin dökümü ile dökme hafif metallerin dökümü)"
    },
    {
        "ID": 1432,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.54.01",
        "dc_NACE_BASLIK": "Demir dışı ağır metallerin dökümü (bakır vb.)"
    },
    {
        "ID": 1433,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "24.54.02",
        "dc_NACE_BASLIK": "Değerli metallerin dökümü"
    },
    {
        "ID": 1434,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "25.50.01",
        "dc_NACE_BASLIK": "Metallerin dövülmesi, preslenmesi, baskılanması ve damgalanması"
    },
    {
        "ID": 1435,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "25.50.02",
        "dc_NACE_BASLIK": "Toz metalürjisi"
    },
    {
        "ID": 1436,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "25.62.01",
        "dc_NACE_BASLIK": "CNC oksijen, CNC plazma, CNC su jeti vb. makinelerinin kullanılması yoluyla metallerin kesilmesi veya üzerlerinin yazılması"
    },
    {
        "ID": 1437,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "25.62.02",
        "dc_NACE_BASLIK": "Metallerin makinede işlenmesi (torna tesfiye işleri, metal parçaları delme, tornalama, frezeleme, rendeleme, parlatma, oluk açma, perdahlama, birleştirme, kaynak yapma vb. faaliyetler) (metallerin lazerle kesilmesi hariç)"
    },
    {
        "ID": 1438,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "25.62.03",
        "dc_NACE_BASLIK": "Lazer ışınlarının kullanılması yoluyla metallerin kesilmesi veya üzerlerinin yazılması"
    },
    {
        "ID": 1439,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "25.73.03",
        "dc_NACE_BASLIK": "Metalden kalıp ve döküm modeli imalatı (kek ve ayakkabı kalıpları hariç)"
    },
    {
        "ID": 1440,
        "dc_MESLEK_GRUBU": "57",
        "dc_MESLEK_GRUBU_ADI": "DÖKÜM VE METAL İŞLEME",
        "dc_NACE_KODU": "25.73.06",
        "dc_NACE_BASLIK": "Ahşap ve diğer malzemelerden kalıp ve döküm modeli imalatı (kek ve ayakkabı kalıpları hariç)"
    },
    {
        "ID": 1441,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.11.06",
        "dc_NACE_BASLIK": "İnşaat ve inşaatın parçaları için metal çatı ya da iskeletlerin imalatı (kuleler, direkler, destekler, köprüler vb.) (Kepenk ve yangın merdiveni ile prefabrik yapılar hariç)"
    },
    {
        "ID": 1442,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.11.07",
        "dc_NACE_BASLIK": "Metalden kepenk ve yangın merdiveni imalatı"
    },
    {
        "ID": 1443,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.11.08",
        "dc_NACE_BASLIK": "Metalden prefabrik yapı imalatı"
    },
    {
        "ID": 1444,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.12.04",
        "dc_NACE_BASLIK": "Alüminyum kapı, pencere, bunların kasaları, kapı eşiği, panjur, vb. imalatı"
    },
    {
        "ID": 1445,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.12.05",
        "dc_NACE_BASLIK": "Çelik kapı, pencere, bunların kasaları, kapı eşiği, panjur, vb. imalatı"
    },
    {
        "ID": 1446,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.12.06",
        "dc_NACE_BASLIK": "Demir kapı, pencere, bunların kasaları, kapı eşiği, panjur, vb. imalatı (bahçe kapıları dahil)"
    },
    {
        "ID": 1447,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.29.01",
        "dc_NACE_BASLIK": "Sıkıştırılmış veya sıvılaştırılmış gaz için kullanılan metal konteynerlerin imalatı"
    },
    {
        "ID": 1448,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.29.02",
        "dc_NACE_BASLIK": "Metalden rezervuarlar, tanklar, fıçılar ve benzeri kapasitesi > 300 litre olan konteynerlerin imalatı (sıkıştırılmış veya sıvılaştırılmış gazlar için olanlar ile mekanik veya termal ekipmanlı olanlar hariç)"
    },
    {
        "ID": 1449,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.71.01",
        "dc_NACE_BASLIK": "Kaşık, çatal, kepçe, kevgir, servis spatulası, şeker maşası ve benzeri mutfak gereçleri, sofra takımları, çatal bıçak takımları imalatı (balık bıçakları, kahvaltı ve meyve bıçakları dahil fakat, sofra bıçakları hariç)"
    },
    {
        "ID": 1450,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.71.02",
        "dc_NACE_BASLIK": "Sofra bıçakları (balık bıçakları, kahvaltı ve meyve bıçakları hariç), budama bıçakları, sustalı bıçaklar, satır, vb. bıçaklar (makineler için olanlar hariç) ile terzi makasları, vb. makaslar ve bunların ağızlarının imalatı"
    },
    {
        "ID": 1451,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.71.03",
        "dc_NACE_BASLIK": "Kılıç, pala, kasatura, mızrak, süngü, avcı bıçağı ve benzeri silahlar ile bunların parçalarının imalatı"
    },
    {
        "ID": 1452,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.71.04",
        "dc_NACE_BASLIK": "Manikür veya pedikür setleri ve aletleri, kağıt bıçakları, mektup açacakları, kalemtıraşlar ve bunların bıçakları, kırma, yarma ve kıyma bıçakları, saç kesme ve hayvan kırkma makine ve aletleri ile benzeri elektriksiz kesici aletlerin imalatı"
    },
    {
        "ID": 1453,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.71.05",
        "dc_NACE_BASLIK": "Tıraş bıçakları, usturalar ile jiletler ve tıraş makinelerinin bıçaklarının imalatı"
    },
    {
        "ID": 1454,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.91.01",
        "dc_NACE_BASLIK": "Çelik varil ve benzer muhafazaların imalatı"
    },
    {
        "ID": 1455,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.92.01",
        "dc_NACE_BASLIK": "Demir veya çelikten yiyecek, içecek ve diğer ürünler için kapasitesi < 50 litre olan kutuların imalatı (lehim veya kıvrılarak kapatılanlar) (tenekeden olanlar dahil)"
    },
    {
        "ID": 1456,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.92.02",
        "dc_NACE_BASLIK": "Adi metalden dişli kapaklar (şişe kapağı vb.) ve tıpalar ile tıkaçlar ve kapakların imalatı"
    },
    {
        "ID": 1457,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.92.03",
        "dc_NACE_BASLIK": "Kapasitesi 300 lt.yi geçmeyen alüminyum varil fıçı, kova, kutu, vb. imalatı (diş macunu, krem gibi kapaklı tüpler ve katlanabilir kutular ile aerosol kutuları dahil)"
    },
    {
        "ID": 1458,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.01",
        "dc_NACE_BASLIK": "Demir, çelik ve alüminyumdan sofra ve mutfak eşyalarının imalatı (tencere, tava, çaydanlık, cezve, yemek kapları, bulaşık telleri vb.) (teflon, emaye vb. ile kaplanmışlar dahil, bakırdan olanlar hariç)"
    },
    {
        "ID": 1459,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.02",
        "dc_NACE_BASLIK": "Metalden yapılmış eviye, lavabo, küvet, duş teknesi, jakuzi (emaye olsun-olmasın) ve diğer sıhhi ürünlerin imalatı"
    },
    {
        "ID": 1460,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.03",
        "dc_NACE_BASLIK": "Zırhlı veya güçlendirilmiş kasalar, kasa daireleri, kilitli para kasaları, zırhlı kapılar vb. imalatı (adi metalden)"
    },
    {
        "ID": 1461,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.04",
        "dc_NACE_BASLIK": "Adi metalden büro malzemeleri imalatı (dosya kutuları, kaşeler, zımba telleri, kağıt ataçları vb.)"
    },
    {
        "ID": 1462,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.05",
        "dc_NACE_BASLIK": "Metalden yapılmış çeşitli eşyaların imalatı (klips, tarak, saç tokası, saç firketesi, bigudi, kopça, elbise askısı, rozet, rütbe, kapan, tuzak, çöp sepeti, sigara tabakası, palet, makara, kanca, kozmetik kutuları vb.) (tekstil ürünleri imalatında kullanıl"
    },
    {
        "ID": 1463,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.06",
        "dc_NACE_BASLIK": "Bakırdan sofra ve mutfak eşyası imalatı (cezve, tencere, çanak, tabak, ibrik vb.)"
    },
    {
        "ID": 1464,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.07",
        "dc_NACE_BASLIK": "Kalıcı metalik mıknatısların imalatı"
    },
    {
        "ID": 1465,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.09",
        "dc_NACE_BASLIK": "Alüminyum jaluzi perde imalatı"
    },
    {
        "ID": 1466,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.11",
        "dc_NACE_BASLIK": "Zil, çan, gong vb. eşyalar ile adi metallerden biblo, heykelcik, çerçeve, ayna ve diğer süs eşyası imalatı (bisiklet zilleri dahil ancak kalıba dökülerek yapılanlar, bakırdan olanlar ile mutfak eşyaları hariç)"
    },
    {
        "ID": 1467,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.12",
        "dc_NACE_BASLIK": "Kalıba dökülerek yapılan zil, çan, gong vb. eşyalar ile adi metallerden kalıba dökülerek yapılan biblo, heykelcik ve diğer süs eşyası imalatı (bisiklet zilleri dahil ancak bakırdan olanlar ile mutfak eşyaları hariç)"
    },
    {
        "ID": 1468,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.13",
        "dc_NACE_BASLIK": "Metalden çatı olukları, çatı kaplamaları vb. imalatı"
    },
    {
        "ID": 1469,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.15",
        "dc_NACE_BASLIK": "Kurşun tüp, boru ve bunların bağlantı parçaları ile kurşun bar, çubuk, profil, tel vb. imalatı (alaşımdan olanlar dahil)"
    },
    {
        "ID": 1470,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.16",
        "dc_NACE_BASLIK": "Kalay plaka, tabaka, sac, levha, şerit, folyo, tüp, boru ve kalay tozları ile diğer ürünlerin imalatı"
    },
    {
        "ID": 1471,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.17",
        "dc_NACE_BASLIK": "Çinko tüp, boru ve bağlantı parçaları ile diğer ürünlerin imalatı"
    },
    {
        "ID": 1472,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.18",
        "dc_NACE_BASLIK": "Bakırdan yapılan biblolar, çerçeveler, aynalar ve diğer süsleme eşyaları ile süsleme işleri (mutfak eşyaları hariç)"
    },
    {
        "ID": 1473,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.20",
        "dc_NACE_BASLIK": "Elektriksiz sebze-meyve dilme, doğrama ve sularını çıkarma aletleri, et kıyma aletleri, kahve ve baharat değirmenleri, el havanı, rende vb. el gücüyle çalışan mutfak aletleri ve aksesuarları imalatı"
    },
    {
        "ID": 1474,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "25.99.21",
        "dc_NACE_BASLIK": "Elektriksiz hazneli döner bacaların, havalandırma kanallarının vb. imalatı"
    },
    {
        "ID": 1475,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "28.21.07",
        "dc_NACE_BASLIK": "Elektrikli veya elektriksiz laboratuar ocakları, döküm ocakları vb. endüstriyel ocak ve fırınlarının imalatı (çöp yakma fırınları ile elektrikli ekmek ve unlu mamul fırınları dahil)"
    },
    {
        "ID": 1476,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "28.21.11",
        "dc_NACE_BASLIK": "Endüksiyon veya dielektrik ısıtma ekipmanlarının imalatı"
    },
    {
        "ID": 1477,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "32.12.08",
        "dc_NACE_BASLIK": "Değerli metallerden veya değerli metallerle preslenerek kaplanmış adi metallerden yemek takımı, çatal bıçak takımı, tuvalet malzemesi, büro malzemesi, vb. malzemelerin imalatı"
    },
    {
        "ID": 1478,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "46.15.04",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış çatal-bıçak takımı, diğer kesici aletler ve ev eşyalarının bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1479,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "46.49.07",
        "dc_NACE_BASLIK": "Çatal-bıçak takımı ve diğer kesici aletler ile metal sofra ve mutfak eşyalarının toptan ticareti (bakır mutfak eşyaları dahil)"
    },
    {
        "ID": 1480,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "47.59.06",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda metal sofra ve mutfak eşyası perakende ticareti (düdüklü tencere, tencere, cezve, çanak vb. dahil, bakır olanlar ile çatal-bıçak takımı hariç)"
    },
    {
        "ID": 1481,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "47.59.09",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bakır eşya, bakır sofra ve mutfak eşyası perakende ticareti"
    },
    {
        "ID": 1482,
        "dc_MESLEK_GRUBU": "58",
        "dc_MESLEK_GRUBU_ADI": "METAL ÜRÜNLER VE MUTFAK EKİPMANLARI",
        "dc_NACE_KODU": "47.89.10",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla mutfak eşyaları ile banyo ve tuvalette kullanılan eşyaların perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 1483,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "25.21.10",
        "dc_NACE_BASLIK": "Merkezi ısıtma radyatörleri imalatı (elektrikli radyatörler hariç)"
    },
    {
        "ID": 1484,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "25.21.11",
        "dc_NACE_BASLIK": "Merkezi ısıtma kazanları (boyler) imalatı (kombi, kat kaloriferi ve diğer merkezi ısıtma kazanları) (buhar jeneratörleri ve kızgın su üreten kazanlar hariç)"
    },
    {
        "ID": 1485,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "25.21.12",
        "dc_NACE_BASLIK": "Merkezi ısıtma radyatörleri imalatı. Döküm olanlar  (elektrikli radyatörler hariç)"
    },
    {
        "ID": 1486,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "25.30.01",
        "dc_NACE_BASLIK": "Buhar üretim kazanları (buhar jeneratörü), kızgın su kazanları (boyler) ve bunların parçaları ile kazanlar (boylerler) için yardımcı üniteler ve buhar veya diğer buhar güç üniteleri için kondansatör imalatı"
    },
    {
        "ID": 1487,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "25.30.02",
        "dc_NACE_BASLIK": "Nükleer reaktörler ve nükleer reaktör parçası imalatı (izotop ayırıcılar hariç)"
    },
    {
        "ID": 1488,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.13.01",
        "dc_NACE_BASLIK": "Hava veya vakum pompaları ile hava veya diğer gaz kompresörlerinin imalatı (el ve ayakla çalışan hava pompaları ile motorlu taşıtlar için olanlar hariç)"
    },
    {
        "ID": 1489,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.13.03",
        "dc_NACE_BASLIK": "El ve ayakla çalışan hava pompalarının imalatı"
    },
    {
        "ID": 1490,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.14.01",
        "dc_NACE_BASLIK": "Diğer musluk ve valf/vana imalatı (sanayi musluk, valf ve vanaları, sıhhi tesisat ve ısıtmada kullanılan musluk ve vanalar ile doğalgaz vanaları dahil)"
    },
    {
        "ID": 1491,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.14.02",
        "dc_NACE_BASLIK": "Diğer musluk ve valf/vana imalatı (sanayi musluk, valf ve vanaları, sıhhi tesisat ve ısıtmada kullanılan musluk ve vanalar ile doğalgaz vanaları dahil. Dökme olanlar hariç)"
    },
    {
        "ID": 1492,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.21.08",
        "dc_NACE_BASLIK": "Ocak brülörleri (ateşleyicileri) imalatı"
    },
    {
        "ID": 1493,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.21.09",
        "dc_NACE_BASLIK": "Mekanik kömür taşıyıcıları, mekanik ızgaralar, mekanik kül boşaltıcıları ve benzeri cihazların imalatı"
    },
    {
        "ID": 1494,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.21.10",
        "dc_NACE_BASLIK": "Güneşle (güneş kolektörleri), buharla  ve yağla ısıtma sistemleri ile benzeri ocak ve ısınma donanımları gibi elektriksiz ev tipi ısıtma donanımlarının imalatı"
    },
    {
        "ID": 1495,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.21.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer fırın ve ocakların (sanayi ocakları) imalatı"
    },
    {
        "ID": 1496,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.22.10",
        "dc_NACE_BASLIK": "El veya motor gücü ile çalışan kaldırma, taşıma, yükleme ya da boşaltma makinelerinin imalatı (vinç palangası, yük asansörü, bocurgat, demir ırgat, kriko, forklift, kaldırma ve taşıma kuleleri, vinçler, hareketli kaldırma kafesleri vb.)"
    },
    {
        "ID": 1497,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.22.11",
        "dc_NACE_BASLIK": "Asansör, yürüyen merdiven ve yürüyen yolların imalatı (yeraltında kullanılanlar hariç)"
    },
    {
        "ID": 1498,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.22.12",
        "dc_NACE_BASLIK": "Pnömatik ve diğer devamlı hareketli asansör, elavatör ve konveyörlerin imalatı"
    },
    {
        "ID": 1499,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.22.13",
        "dc_NACE_BASLIK": "Diğer kaldırma, taşıma, yükleme veya boşaltma makinelerinin imalatı (teleferikler, telesiyejler vb. için çekme mekanizmaları, tarımsal kullanım için yükleme makineleri ve diğerleri)"
    },
    {
        "ID": 1500,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.25.01",
        "dc_NACE_BASLIK": "Sanayi tipi soğutucu ve dondurucu donanımları ile ısı pompalarının imalatı (camekanlı, tezgahlı veya mobilya tipi soğutucular, kondenserleri ısı değiştiricisi fonksiyonu gören kompresörlü üniteler vb.)"
    },
    {
        "ID": 1501,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.25.02",
        "dc_NACE_BASLIK": "Sanayi tipi fan ve vantilatörlerin imalatı (çatı havalandırma pervaneleri dahil)"
    },
    {
        "ID": 1502,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.01",
        "dc_NACE_BASLIK": "Petrol rafinerileri, kimya sanayi, içecek sanayi vb. için damıtma ve rektifiye donanımları imalatı"
    },
    {
        "ID": 1503,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.02",
        "dc_NACE_BASLIK": "Gaz jeneratörleri, su gazı jeneratörleri, asetilen gazı jeneratörleri ve benzerlerinin imalatı"
    },
    {
        "ID": 1504,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.03",
        "dc_NACE_BASLIK": "Şişeleri veya diğer muhafaza kaplarını temizleme ve kurutma makineleri imalatı (kavanoz, bidon, fıçı, kutu vb.)"
    },
    {
        "ID": 1505,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.04",
        "dc_NACE_BASLIK": "Sıvılar için filtreleme veya arıtma makine ve cihazlarının imalatı (suyun filtre edilmesi/arıtılmasına mahsus cihazlar dahil)"
    },
    {
        "ID": 1506,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.05",
        "dc_NACE_BASLIK": "Doldurma, paketleme ve ambalajlama makinelerinin imalatı (doldurma, kapatma, mühürleme, kapsülleme veya etiketleme ve içecekleri gazlandırma vb. için makineler)"
    },
    {
        "ID": 1507,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.06",
        "dc_NACE_BASLIK": "Otomatik ürün satış makinelerinin imalatı (yiyecek, içecek, vb. otomatik satış makinesi) (para bozma makineleri dahil)"
    },
    {
        "ID": 1508,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.08",
        "dc_NACE_BASLIK": "Tartı aletleri ve baskül imalatı (ev ve dükkanlarda kullanılan terazi ve kantarlar, sürekli ölçüm için tartılar, taşıt baskülleri (köprü tipi basküller) vb.) (kuyumculukta ve laboratuvarlarda kullanılan hassas tartılar hariç)"
    },
    {
        "ID": 1509,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.09",
        "dc_NACE_BASLIK": "Santrifüj imalatı (krema makinesi, çamaşır kurutma makinesi, laboratuvarlarda kullanılanlar hariç)"
    },
    {
        "ID": 1510,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.12",
        "dc_NACE_BASLIK": "Sanayi tipi bulaşık makinelerinin imalatı"
    },
    {
        "ID": 1511,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.17",
        "dc_NACE_BASLIK": "Kalender veya diğer hadde makinelerinin imalatı (metal ve cam için olanlar hariç)"
    },
    {
        "ID": 1512,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.19",
        "dc_NACE_BASLIK": "Seviye tespit aletleri (nivolar), ölçü çubukları, mezura, çelik metre ve cetveller ile elle kullanılan diğer ölçü aletlerinin imalatı"
    },
    {
        "ID": 1513,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.29.20",
        "dc_NACE_BASLIK": "Maddelerin ısı değişimi yoluyla işlenmesi için bys. makinelerin imalatı (su sirkülasyonu yoluyla doğrudan soğutma için soğutma kuleleri ve benzerleri ile metallerin buhar biriktirme yoluyla kaplanması için vakum-buhar tesisleri vb.)"
    },
    {
        "ID": 1514,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.30.09",
        "dc_NACE_BASLIK": "Yumurta, meyve ve diğer tarımsal ürünlerin temizlenmesi, tasnif edilmesi veya derecelendirilmesi için kullanılan makine ve ekipmanların imalatı"
    },
    {
        "ID": 1515,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.30.11",
        "dc_NACE_BASLIK": "Kümes hayvanı makineleri, arıcılık makineleri ve hayvan yemi hazırlama makinelerinin ve donanımlarının imalatı (kuluçka makineleri dahil)"
    },
    {
        "ID": 1516,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.30.13",
        "dc_NACE_BASLIK": "Hasat ve harman makinelerinin imalatı (biçer-döver, saman yapma makinesi, ot ve saman balyalama makinesi, kök ve yumru hasat makinesi, vb.)"
    },
    {
        "ID": 1517,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.30.14",
        "dc_NACE_BASLIK": "Pulluk, saban, tırmık, diskaro, skarifikatör, kültivatör, çapa makinesi, mibzer, fide ve fidan dikim makinesi vb. toprağın hazırlanmasında, ekiminde, dikiminde kullanılan aletler ile gübreleme makinelerinin imalatı"
    },
    {
        "ID": 1518,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.30.15",
        "dc_NACE_BASLIK": "Süt sağma makinelerinin imalatı"
    },
    {
        "ID": 1519,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.01",
        "dc_NACE_BASLIK": "Beton ve harç karıştırıcıların imalatı (mikserler dahil, beton karıştırıcılı (mikserli) kamyonlar hariç)"
    },
    {
        "ID": 1520,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.02",
        "dc_NACE_BASLIK": "Buldozer, angledozer, greyder, skreyper, düzleyici, önden küreyici-yükleyici, kepçeli yükleyici, mekanik kepçe, ekskavatör, kazık çakma (kazık varyosları) ve sökme makineleri, harç ve asfalt yayıcılar ile beton kaplama makinelerinin imalatı"
    },
    {
        "ID": 1521,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.03",
        "dc_NACE_BASLIK": "Taş, toprak, cevher, alçı, çimento ve diğer mineral maddeleri tasnif etme, eleme, ayırma, yıkama, ezme, öğütme, karıştırma, yoğurma vb. işlemden geçirme için kullanılan makinelerin imalatı (beton ve harç karıştırıcılar (mikserler) hariç)"
    },
    {
        "ID": 1522,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.05",
        "dc_NACE_BASLIK": "Kömür veya kaya kesicileri (havözler), tünel ve kuyu açma makineleri ile delme ve sondaj makinelerinin imalatı (yeraltı veya yerüstü)"
    },
    {
        "ID": 1523,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.06",
        "dc_NACE_BASLIK": "Yer altı kullanımı için sürekli hareketli elevatör ve konveyörlerin imalatı"
    },
    {
        "ID": 1524,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.10",
        "dc_NACE_BASLIK": "Kar küreyici ve püskürtücüleri, toprağı sıkıştırmaya veya bastırıp sıkıştırmaya mahsus makineler ile maden, taşocağı, inşaat, imar, park vb. işler için kullanılan diğer makinelerin imalatı"
    },
    {
        "ID": 1525,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.92.11",
        "dc_NACE_BASLIK": "Delme, sondaj, hafriyat ve kazı makinesi parçalarının, vinç ve hareketli kaldırma kafeslerinin ve toprak, taş ve benzeri maddeleri tasnifleme, öğütme, karıştırma veya diğer işlerde kullanılan makine parçalarının imalatı (buldozer bıçakları dahil)"
    },
    {
        "ID": 1526,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.01",
        "dc_NACE_BASLIK": "Gıda ve içeceklerin endüstriyel olarak hazırlanması veya imalatı için bys. makinelerin imalatı (ekmek, bisküvi, makarna, şekerleme, çikolata, şeker, et, meyve, sebze, sıvı ve katı yağlar vb.nin hazırlanması veya imalatı için sanayi makineleri)"
    },
    {
        "ID": 1527,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.02",
        "dc_NACE_BASLIK": "Şarap, meyve suyu ve benzeri içeceklerin imalatında kullanılan makinelerin imalatı (presler, eziciler ve benzeri makineler)"
    },
    {
        "ID": 1528,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.03",
        "dc_NACE_BASLIK": "Süt ürünleri makinelerinin ve santrifüjlü krema ayırıcılarının imalatı (homojenizeleştiriciler, irradyatörler (ışınlayıcılar), yağ yapma makineleri, peynir yapma makineleri vb.)"
    },
    {
        "ID": 1529,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.04",
        "dc_NACE_BASLIK": "Tütünün hazırlanmasında ve işlenmesinde kullanılan makinelerin imalatı (tütün yapraklarını damarlarından ayıran makineler ile enfiye, sigara, puro, pipo tütünü veya çiğneme tütünleri imalinde kullanılan makineler)"
    },
    {
        "ID": 1530,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.06",
        "dc_NACE_BASLIK": "Değirmencilik sanayiinde, hububat veya kurutulmuş sebzelerin işlnmesi veya öğütülmesi için kullanılan makinelerin imalatı ( un, kaba un vb. üretmek için kullanılan makineler, elekler, kepek temizleyiciler, çeltik soyma makinesi vb.)"
    },
    {
        "ID": 1531,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.07",
        "dc_NACE_BASLIK": "Ekmek ve diğer unlu mamuller için elektrikli olmayan fırınların imalatı (gaz, sıvı ve katı yakıtlı olanlar)"
    },
    {
        "ID": 1532,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.08",
        "dc_NACE_BASLIK": "Ev tipi olmayan pişirme veya ısıtma cihazlarının imalatı (ev tipi olmayan filtreli kahve makineleri vb. dahil)"
    },
    {
        "ID": 1533,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.09",
        "dc_NACE_BASLIK": "Tarımsal ürünler için kurutucuların imalatı (kahve, kuruyemiş vb. için kavurma makine ve cihazları dahil)"
    },
    {
        "ID": 1534,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.93.10",
        "dc_NACE_BASLIK": "Tohumların, tanelerin veya kuru baklagillerin temizlenmesi, tasnif edilmesi veya derecelendirilmesi için kullanılan makinelerin imalatı (tarımsal selektörler dahil)"
    },
    {
        "ID": 1535,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.01",
        "dc_NACE_BASLIK": "Post, deri ve köselelerin işlenmesi ile ayakkabı ve diğer deri eşyaların üretimi veya tamiri için kullanılan makinelerin imalatı"
    },
    {
        "ID": 1536,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.02",
        "dc_NACE_BASLIK": "Sanayi tipi çamaşır makinesi, kuru temizleme makinesi, çamaşır kurutma makinesi, ütü makinesi ve pres ütü imalatı"
    },
    {
        "ID": 1537,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.03",
        "dc_NACE_BASLIK": "Sanayi ve ev tipi dikiş makinelerinin imalatı (dikiş makinelerinin iğneleri, mobilyaları, tabanları, kapakları vb. parçaları dahil)"
    },
    {
        "ID": 1538,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.04",
        "dc_NACE_BASLIK": "Suni ve sentetik tekstil malzemesinin ekstrüzyonu, çekilmesi, tekstüre edilmesi veya kesilmesi için kullanılan makineler ile doğal tekstil elyafı hazırlama makineleri ve dokuma makinelerinin imalatı (çırçır makinesi, taraklama makinesi vb. dahil)"
    },
    {
        "ID": 1539,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.05",
        "dc_NACE_BASLIK": "Tekstil ipliği ve kumaşını yıkama, ağartma, boyama, apreleme, temizleme, sıkma, sarma, emprenye etme, bitirme, kesme, surfile ve benzerleri için makineler ile keçe imalatında ve bitirilmesinde kullanılan makinelerin imalatı"
    },
    {
        "ID": 1540,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.06",
        "dc_NACE_BASLIK": "Tekstil büküm makineleri ile katlama, bükme, bobine sarma veya çile yapma makinelerinin imalatı"
    },
    {
        "ID": 1541,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.07",
        "dc_NACE_BASLIK": "Örgü, trikotaj ve benzeri makineler ile tafting makinelerinin imalatı (gipe iplik, tül, dantel, nakış, süs, örgü veya ağ yapma makineleri dahil)"
    },
    {
        "ID": 1542,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.08",
        "dc_NACE_BASLIK": "Tekstil amaçlı makinelerle kullanılan yardımcı makinelerin ve tekstil baskı makinelerinin imalatı (ratiyerler, jakardlar, vb.) (ofset baskı makineleri, tipografik, fleksografik, gravür baskı makineleri hariç)"
    },
    {
        "ID": 1543,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.94.09",
        "dc_NACE_BASLIK": "Tekstil, giyim eşyası ve deri üretiminde kullanılan makinelerin parçalarının imalatı (dikiş makinelerinde kullanılanlar hariç)"
    },
    {
        "ID": 1544,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.95.01",
        "dc_NACE_BASLIK": "Kağıt ve mukavva üretiminde kullanılan makinelerin ve bunların parçalarının imalatı"
    },
    {
        "ID": 1545,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.96.01",
        "dc_NACE_BASLIK": "Plastik ve kauçuk makinelerinin imalatı (plastik ve kauçuk işlemek için veya bu malzemelerden ürün imalatı için kullanılan makineler)"
    },
    {
        "ID": 1546,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.01",
        "dc_NACE_BASLIK": "Basım ve ciltleme makineleri ile basıma yardımcı makinelerin ve bunların parçalarının imalatı (ofset baskı makinesi, tipografik baskı makinesi, dizgi makinesi, baskı kalıpları için makineler, ciltleme makinesi vb.) (büro tipi baskı makinesi hariç)"
    },
    {
        "ID": 1547,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.02",
        "dc_NACE_BASLIK": "Cam ve cam eşya imalatında ve cam eşyaların sıcak işlenmesinde kullanılan makinelerin ve elektrikli veya elektronik lamba, tüp, ampul montajında kullanılan makinelerin imalatı"
    },
    {
        "ID": 1548,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.04",
        "dc_NACE_BASLIK": "Kiremit, briket, şekilli seramik hamuru, boru, grafik elekrotu, yazı tahtası tebeşiri vb. ürünlerin üretilmesinde kullanılan makinelerin imalatı"
    },
    {
        "ID": 1549,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.05",
        "dc_NACE_BASLIK": "Otomatik bovling salonu donanımlarının, dönme dolap, atlı karınca, salıncak, poligon, vb. diğer panayır alanı eğlence donanımları ile kumarhane oyun masalarının  imalatı"
    },
    {
        "ID": 1550,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.06",
        "dc_NACE_BASLIK": "Hava taşıtı fırlatma donanımlarının, uçak gemilerinde kullanılan katapultların (kısa mesafede hava taşıtlarının kalkmasını sağlayan mekanizma) ve ilgili donanımların imalatı"
    },
    {
        "ID": 1551,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.07",
        "dc_NACE_BASLIK": "Yarı iletken tek kristalli külçe (boules) ve yonga plakalar ile yarı iletken aygıtların, elektronik entegre devre veya düz panel ekranların imalatı için kullanılan makine ve cihazların imalatı"
    },
    {
        "ID": 1552,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.08",
        "dc_NACE_BASLIK": "Sicim ve halat makinelerinin imalatı"
    },
    {
        "ID": 1553,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.09",
        "dc_NACE_BASLIK": "Lastik tekerlerin balansında ve hizalanmasında kullanılan donanımların imalatı (jant için kullanılanlar hariç)"
    },
    {
        "ID": 1554,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.10",
        "dc_NACE_BASLIK": "Özel amaçlar için çoklu görevlerde kullanılabilen sanayi robotlarının imalatı"
    },
    {
        "ID": 1555,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.11",
        "dc_NACE_BASLIK": "Kurutucuların imalatı (odun, kağıt hamuru, kağıt, mukavva, süt tozu ve diğer malzemelerin imalatında kullanılanlar) (ev tipi, tarım ürünleri ve tekstil için olanlar hariç)"
    },
    {
        "ID": 1556,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.12",
        "dc_NACE_BASLIK": "İzotopik ayırma makineleri ve cihazlarının imalatı"
    },
    {
        "ID": 1557,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "28.99.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer özel amaçlı makinelerin imalatı"
    },
    {
        "ID": 1558,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.11.01",
        "dc_NACE_BASLIK": "Metal boru ve boru hatları ile pompa istasyonlarının bakım ve onarımı"
    },
    {
        "ID": 1559,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.11.02",
        "dc_NACE_BASLIK": "Ateşli silahların ve savaş gereçlerinin bakım ve onarımı (spor ve eğlence amaçlı silahların onarımı dahil)"
    },
    {
        "ID": 1560,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.11.03",
        "dc_NACE_BASLIK": "Buhar kazanları veya buhar jeneratörlerinin bakım ve onarımı"
    },
    {
        "ID": 1561,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.11.04",
        "dc_NACE_BASLIK": "Merkezi ısıtma sıcak su kazanları (boyler) ve radyatörlerin bakım ve onarımı"
    },
    {
        "ID": 1562,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.11.10",
        "dc_NACE_BASLIK": "Metal tankların, rezervuarların ve muhafaza kaplarının (konteynerler dahil) onarımı"
    },
    {
        "ID": 1563,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.11.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış metal ürünlerin bakım ve onarımı"
    },
    {
        "ID": 1564,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.13.01",
        "dc_NACE_BASLIK": "Ölçme, test ve seyrüsefer alet ve cihazlarının bakım ve onarımı"
    },
    {
        "ID": 1565,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.13.02",
        "dc_NACE_BASLIK": "Işınlama, elektromedikal ve elektroterapi ekipmanlarının bakım ve onarımı"
    },
    {
        "ID": 1566,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.13.04",
        "dc_NACE_BASLIK": "Diğer profesyonel elektronik ekipmanların bakım ve onarımı"
    },
    {
        "ID": 1567,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.14.03",
        "dc_NACE_BASLIK": "Diğer profesyonel elektrikli ekipmanların bakım ve onarımı"
    },
    {
        "ID": 1568,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.33",
        "dc_NACE_BASLIK": "Tarımsal amaçlı sanayi makine ve ekipmanlarının kurulumu"
    },
    {
        "ID": 1569,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.34",
        "dc_NACE_BASLIK": "Kaldırma ve taşıma ekipmanlarının kurulumu (asansörler ve yürüyen merdivenler hariç)"
    },
    {
        "ID": 1570,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.35",
        "dc_NACE_BASLIK": "Motor ve türbinlerin (hava taşıtı, motorlu kara taşıtı ve motosiklet motorları hariç) ve pompa ve kompresörlerin kurulumu"
    },
    {
        "ID": 1571,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.36",
        "dc_NACE_BASLIK": "Metallerin işlenmesinde, kesilmesinde ve şekillendirilmesinde kullanılan makinelerin kurulum hizmetleri"
    },
    {
        "ID": 1572,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.37",
        "dc_NACE_BASLIK": "Metalürji için sanayi makinelerinin ve ekipmanlarının kurulum hizmetleri"
    },
    {
        "ID": 1573,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.38",
        "dc_NACE_BASLIK": "Maden, taşocağı ve inşaatlarda kullanılan makinelerin kurulumu"
    },
    {
        "ID": 1574,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.39",
        "dc_NACE_BASLIK": "Gıda, içecek ve tütün işleme için sanayi makinelerinin ve ekipmanlarının kurulum hizmetleri"
    },
    {
        "ID": 1575,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.40",
        "dc_NACE_BASLIK": "Tekstil, giyim eşyası ve deri üretimi için sanayi makinelerinin ve ekipmanlarının kurulum hizmetleri"
    },
    {
        "ID": 1576,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.41",
        "dc_NACE_BASLIK": "Kağıt ve mukavva üretimi için sanayi makinelerinin ve ekipmanlarının kurulum hizmetleri"
    },
    {
        "ID": 1577,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.42",
        "dc_NACE_BASLIK": "Sanayi fabrikalarında cam ve seramik boruların ve hatların kurulumu"
    },
    {
        "ID": 1578,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.43",
        "dc_NACE_BASLIK": "Değirmencilikte kullanılan makinelerin kurulumu"
    },
    {
        "ID": 1579,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.44",
        "dc_NACE_BASLIK": "Metal muhafaza tanklarının ve sarnıçların kurulumu"
    },
    {
        "ID": 1580,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.46",
        "dc_NACE_BASLIK": "Genel amaçlı makinelerin kurulum hizmetleri (tartma, filtreleme, damıtma, paketleme, şişeleme, püskürtme, buhar/kum püskürtme, kalenderleme için olanlar ile büro ve muhasebe makinelerinin kurulum hizmetleri dahil)"
    },
    {
        "ID": 1581,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.48",
        "dc_NACE_BASLIK": "Ağaç, mantar, taş, sert kauçuk veya benzeri sert malzemeleri işlemede kullanılan takım tezgahlarının kurulum hizmetleri"
    },
    {
        "ID": 1582,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.49",
        "dc_NACE_BASLIK": "Plastik ve kauçuk üretimi için sanayi makinelerinin ve ekipmanlarının kurulum hizmetleri"
    },
    {
        "ID": 1583,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.52",
        "dc_NACE_BASLIK": "Fabrikasyon metal ürünlerin kurulum hizmetleri (buhar jeneratörlerinin kurulum hizmetleri ve sanayi tesislerindeki metal boru sistemlerinin kurulumu dahil, merkezi ısıtma sıcak su kazanları (boylerleri) ile makine ve ekipmanlar hariç)"
    },
    {
        "ID": 1584,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.53",
        "dc_NACE_BASLIK": "Endüstriyel işlem kontrol ekipmanlarının kurulum hizmetleri (endüstriyel işlem kontrol ekipmanlarının ve otomatik üretim tesislerinin tasarımı ve montajı, endüstriyel zaman ölçüm alet ve cihazlarının kurulumu) (otomasyon destekliler dahil)"
    },
    {
        "ID": 1585,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.54",
        "dc_NACE_BASLIK": "Sanayi fırınlarının ve ocak brülörlerinin (ocak ateşleyicilerinin) kurulumu"
    },
    {
        "ID": 1586,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "33.20.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer sanayi makine ve ekipmanlarının kurulum hizmetleri (matbaa makineleri ve çimento imalatında kullanılan makilerin kurulumu dahil)"
    },
    {
        "ID": 1587,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "43.29.01",
        "dc_NACE_BASLIK": "Asansörlerin, yürüyen merdivenlerin, yürüyen yolların, otomatik ve döner kapıların bakım ve onarımı dahil kurulum işleri"
    },
    {
        "ID": 1588,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "43.29.02",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer tesisat işleri (paratonerlerin, tabelaların (ışıklı olsun veya olmasın), stor ve güneşliklerin montaj işleri vb.)"
    },
    {
        "ID": 1589,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "46.14.02",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış tarım, makine ve sanayi ekipmanlarının bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1590,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "46.61.02",
        "dc_NACE_BASLIK": "Tarım, hayvancılık ve ormancılık makine ve ekipmanları ile aksam ve parçalarının toptan ticareti (traktör, tarımsal römork, pulluk, gübre yayma makinesi, mibzer, biçer döver, süt sağma makinesi, kümes hayvanları makineleri, arıcılık makineleri, vb.)"
    },
    {
        "ID": 1591,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "46.63.01",
        "dc_NACE_BASLIK": "Bina ve bina dışı inşaat iş makinelerinin toptan ticareti (inşaat pompaları, dozer, greyder, kepçe vb. dahil)"
    },
    {
        "ID": 1592,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "46.63.02",
        "dc_NACE_BASLIK": "Madencilik makinelerinin toptan ticareti (madenler için bocurgatlar, sürekli hareketli elavatörler ve konveyörler dahil)"
    },
    {
        "ID": 1593,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "46.64.01",
        "dc_NACE_BASLIK": "Tekstil endüstrisi makineleri ile dikiş ve örgü makinelerinin toptan ticareti (ev tipi olanlar hariç)"
    },
    {
        "ID": 1594,
        "dc_MESLEK_GRUBU": "59",
        "dc_MESLEK_GRUBU_ADI": "MAKİNA VE EKİPMANLARI",
        "dc_NACE_KODU": "46.64.02",
        "dc_NACE_BASLIK": "Tekstil endüstrisi makinelerinin dikiş ve örgü makinelerinin parça ve aksesuarlarının  toptan ticareti (ev tipi olanlara ait parça ve aksesuarlar  hariç)"
    },
    {
        "ID": 1595,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.12.05",
        "dc_NACE_BASLIK": "Akışkan gücü ile çalışan ekipmanların ve bunların parçalarının imalatı (hidrolik ve pnömatik motorlar, hidrolik pompalar, hidrolik ve pnömatik valfler, hidrolik sistemler ve bunların parçaları)"
    },
    {
        "ID": 1596,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.13.02",
        "dc_NACE_BASLIK": "Sıvı pompaları ve sıvı elevatörleri imalatı (yakıt, yağlama, soğutma ve diğer amaçlar için) (deplasmanlı ve santrifüjlü pompalar ile benzinliklerde kullanılan akaryakıt pompaları dahil) (tulumba dahil, içten yanmalı motorlar için olanlar hariç)"
    },
    {
        "ID": 1597,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.41.01",
        "dc_NACE_BASLIK": "Takım tezgahları (metal işlemek için lazer ve benzerleriyle çalışanlar) ile metal ve benzerlerini işlemek için işleme merkezlerinin imalatı"
    },
    {
        "ID": 1598,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.41.03",
        "dc_NACE_BASLIK": "Metal tornalama, delme, frezeleme ve planyalama takım tezgahlarının imalatı"
    },
    {
        "ID": 1599,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.41.06",
        "dc_NACE_BASLIK": "Metal işlemek için kullanılan diğer takım tezgahlarının imalatı"
    },
    {
        "ID": 1600,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.41.07",
        "dc_NACE_BASLIK": "Metal işleyen takım tezgahlarının parça ve aksesuarlarının imalatı (alet tutacakları ve kendinden açılan pafta kafaları, iş tutacakları, ayırıcı kafalar ve takım tezgahları için diğer özel aksesuarlar hariç)"
    },
    {
        "ID": 1601,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.49.02",
        "dc_NACE_BASLIK": "Elektro kaplama makinelerinin imalatı (galvanoplasti, elektro kaplama, elektroliz veya elektroforez için)"
    },
    {
        "ID": 1602,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.49.03",
        "dc_NACE_BASLIK": "Taş, seramik, beton veya benzeri mineral malzemeleri işlemek veya camı soğuk işlemek için olan takım tezgahı ile bunların parçalarının imalatı (testere, taşlama, parlatma, vb.)"
    },
    {
        "ID": 1603,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.49.04",
        "dc_NACE_BASLIK": "Ahşap, mantar, kemik, sert kauçuk, sert plastik veya benzeri sert malzemeleri işlemek için olan takım tezgahı ile bunların parçalarının imalatı (transfer, testere, planya, freze, taşlama, zımparalama, parlatma, bükme, delme, dilimleme, pres, vb.)"
    },
    {
        "ID": 1604,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.49.05",
        "dc_NACE_BASLIK": "Takım tezgahları ve el aletleri için takım tutucuları ve kendinden açılan pafta kafaları, işlenecek parça tutucuları, bölme başlıkları ve diğer özel ek parçalar, dingiller, yüksükler ve rakorlar ile fikstürlerin imalatı"
    },
    {
        "ID": 1605,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.49.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer takım tezgahlarının imalatı"
    },
    {
        "ID": 1606,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.91.01",
        "dc_NACE_BASLIK": "Konvertörler (metalürji), külçe kalıpları (ingot kalıpları), döküm kepçeleri, döküm makineleri, vb. sıcak metallerin işlenmesi için kullanılan makine ve teçhizatın imalatı"
    },
    {
        "ID": 1607,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "28.91.02",
        "dc_NACE_BASLIK": "Sıcak ve soğuk metal haddeleme makinesi ve metal boru imaline özgü hadde makinesi ile hadde ve metalürji makineleri için silindir ve diğer parçaların imalatı"
    },
    {
        "ID": 1608,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.02",
        "dc_NACE_BASLIK": "Tarım ve ormancılık makinelerinin bakım ve onarımı (traktörlerin bakım ve onarımı hariç)"
    },
    {
        "ID": 1609,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.03",
        "dc_NACE_BASLIK": "Motor ve türbinlerin bakım ve onarımı (hidrolik, rüzgar, gaz, su, buhar türbinleri) (gemi ve tekne motorları dahil, motorlu kara taşıtı ve motosiklet motorları hariç)"
    },
    {
        "ID": 1610,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.04",
        "dc_NACE_BASLIK": "Sanayi fırınlarının, ocaklarının ve ocak brülörlerinin bakım ve onarımı"
    },
    {
        "ID": 1611,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.05",
        "dc_NACE_BASLIK": "Kaldırma ve taşıma ekipmanlarının bakım ve onarımı"
    },
    {
        "ID": 1612,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.06",
        "dc_NACE_BASLIK": "Sanayi tipi soğutma ve havalandırma ekipmanlarının bakım ve onarımı"
    },
    {
        "ID": 1613,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.07",
        "dc_NACE_BASLIK": "Tartı aletlerinin bakım ve onarımı"
    },
    {
        "ID": 1614,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.08",
        "dc_NACE_BASLIK": "Madencilik, inşaat, petrol ve gaz sahalarında kullanılan makinelerin bakım ve onarımı"
    },
    {
        "ID": 1615,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.09",
        "dc_NACE_BASLIK": "Tarım ve ormancılıkta kullanılan motokültörler ve traktörlerin bakım ve onarımı"
    },
    {
        "ID": 1616,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.10",
        "dc_NACE_BASLIK": "Akışkan gücü ile çalışan ekipmanlar, pompalar, kompresörler ile valflerin ve vanaların bakım ve onarımı (akaryakıt pompalarının tamiri dahil)"
    },
    {
        "ID": 1617,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.11",
        "dc_NACE_BASLIK": "Metal işleme makinelerinin ve takım tezgahlarının bakım ve onarımı (CNC olanlar dahil)"
    },
    {
        "ID": 1618,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.14",
        "dc_NACE_BASLIK": "Metalürji makinelerinin bakım ve onarımı"
    },
    {
        "ID": 1619,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.15",
        "dc_NACE_BASLIK": "Gıda, içecek ve tütün işleme makinelerinin bakım ve onarımı"
    },
    {
        "ID": 1620,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.16",
        "dc_NACE_BASLIK": "Tekstil, giyim eşyası ve deri üretim makinelerinin bakım ve onarımı (triko makinelerinin onarımı dahil)"
    },
    {
        "ID": 1621,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.17",
        "dc_NACE_BASLIK": "Kağıt, karton ve mukavva üretiminde kullanılan makinelerin bakım ve onarımı"
    },
    {
        "ID": 1622,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.19",
        "dc_NACE_BASLIK": "Ağaç, mantar, taş, sert kauçuk veya benzeri sert malzemeleri işlemede kullanılan takım tezgahlarının bakım ve onarımı (CNC olanlar dahil)"
    },
    {
        "ID": 1623,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.21",
        "dc_NACE_BASLIK": "Sıvılar için filtreleme ya da temizleme makineleri ve aparatlarının bakım ve onarımı"
    },
    {
        "ID": 1624,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.28",
        "dc_NACE_BASLIK": "Plastik ve kauçuk imalatında ve işlenmesinde kullanılan makinelerin bakım ve onarımı"
    },
    {
        "ID": 1625,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.29",
        "dc_NACE_BASLIK": "Endüstriyel rulmanların, dişlilerin, dişli takımlarının ve tahrik tertibatı elemanlarının bakım ve onarımı"
    },
    {
        "ID": 1626,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.12.30",
        "dc_NACE_BASLIK": "Tarımsal amaçlı kullanılan römorkların bakım ve onarımı"
    },
    {
        "ID": 1627,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "33.19.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer ekipmanların onarımı (ahşap konteyner, gemi fıçı ve varilleri, madeni para ile çalışan oyun makineleri, değirmentaşı, bileme taşı vs.)"
    },
    {
        "ID": 1628,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.62.01",
        "dc_NACE_BASLIK": "Ağaç işleme takım tezgahları ve parçalarının toptan ticareti (parça tutucuları dahil)"
    },
    {
        "ID": 1629,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.62.02",
        "dc_NACE_BASLIK": "Metal işleme takım tezgahlarının ve parçalarının toptan ticareti (parça tutucuları dahil)"
    },
    {
        "ID": 1630,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.62.90",
        "dc_NACE_BASLIK": "Diğer malzemeleri işleme için takım tezgahları ve parçalarının toptan ticareti (parça tutucuları dahil) (ağaç ve metal işlemede kullanılanlar hariç)"
    },
    {
        "ID": 1631,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.69.07",
        "dc_NACE_BASLIK": "Kaldırma ve taşıma ekipmanlarının toptan ticareti (forkliftler, araç liftleri, asansörler, yürüyen merdivenler, konveyörler, vinçler, vb.)"
    },
    {
        "ID": 1632,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.69.08",
        "dc_NACE_BASLIK": "Gıda, içecek ve tütün sanayisinde kullanılan makineler ile parçalarının toptan ticareti (şişe vb. kapları temizleme ve doldurma makineleri, süt ürünleri makineleri, içecek ve tütün işleme makineleri, tarımsal ürün kurutucuları vb.)"
    },
    {
        "ID": 1633,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.69.11",
        "dc_NACE_BASLIK": "Gaz, sıvı veya elektrik temin veya üretim sayaçları toptan ticareti"
    },
    {
        "ID": 1634,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.69.12",
        "dc_NACE_BASLIK": "Su buharı, hidrolik ve gaz türbinlerinin toptan ticareti"
    },
    {
        "ID": 1635,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.69.14",
        "dc_NACE_BASLIK": "X ışınının veya alfa, beta ya da gama ışınlarının kullanımına dayalı cihazların toptan ticareti"
    },
    {
        "ID": 1636,
        "dc_MESLEK_GRUBU": "60",
        "dc_MESLEK_GRUBU_ADI": "TAKIM TEZGAHLARI VE OTOMASYON",
        "dc_NACE_KODU": "46.69.15",
        "dc_NACE_BASLIK": "Buhar üretim kazanları ve kızgın su kazanlarının toptan ticareti"
    },
    {
        "ID": 1637,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "13.92.07",
        "dc_NACE_BASLIK": "Can yeleği ve can kurtaran simidi imalatı"
    },
    {
        "ID": 1638,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "13.92.08",
        "dc_NACE_BASLIK": "Paraşüt (yönlendirilebilen paraşütler dahil) ve rotoşüt ile bunların parçalarının imalatı"
    },
    {
        "ID": 1639,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "22.29.02",
        "dc_NACE_BASLIK": "Plastikten dikişsiz giyim eşyası ve giysi aksesuarlarının imalatı (eldiven dahil)"
    },
    {
        "ID": 1640,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "23.91.01",
        "dc_NACE_BASLIK": "Aşındırıcı ürünlerin imalatı (değirmen taşları, bileği taşı, zımpara taşı vb.)(dokuma tekstil kumaşlarına, kağıt ve mukavvaya tutturulmuş zımparalar hariç)"
    },
    {
        "ID": 1641,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "23.91.02",
        "dc_NACE_BASLIK": "Dokuma tekstil kumaşlarına, kağıt ve mukavvaya tutturulmuş olan zımparaların imalatı"
    },
    {
        "ID": 1642,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.40.01",
        "dc_NACE_BASLIK": "Tabanca, revolver (altıpatlar), av tüfeği, havalı tabanca, cop, vb. askeri amaçlı olmayan ateşli silahlar ve benzeri aletlerin ve bunların parçalarının imalatı"
    },
    {
        "ID": 1643,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.40.02",
        "dc_NACE_BASLIK": "Askeri silah ve bunların parçalarının imalatı (büyük toplar, savaş araçları, füzeatarlar, torpil kovanları, ağır makineli tüfekler, vb.)"
    },
    {
        "ID": 1644,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.40.03",
        "dc_NACE_BASLIK": "Bomba, füze ve benzeri savaş gereçleri, fişekler, diğer mermi ve mühimmatlar ile bunların parçalarının imalatı"
    },
    {
        "ID": 1645,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.72.01",
        "dc_NACE_BASLIK": "Asma kilit, kilit, anahtar, menteşe, otomatik kapı kapayıcıları, kilitli klipsler, bağlantı takozu, askılıklar, bulaşıklıklar, anahtar askıları, vb. ile binalar, mobilyalar, taşıtlar, vb. için küçük tekerleklerin imalatı"
    },
    {
        "ID": 1646,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.73.02",
        "dc_NACE_BASLIK": "El aletleri, takım tezgahı uçları, testere ağızları, mengeneler, kıskaçlar, sıkıştırma anahtarları vb. imalatı"
    },
    {
        "ID": 1647,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.73.04",
        "dc_NACE_BASLIK": "Kuyumculuk aletleri ve parçalarının imalatı (pense, keski, çekiç vb. aletler)"
    },
    {
        "ID": 1648,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.93.01",
        "dc_NACE_BASLIK": "Metalden zincirler (mafsallı bağlantı zinciri hariç) ve parçaları ile yay ve yay yaprakları, kaplanmış veya nüveli teller, çubuklar, tüpler, levhalar ve elektrotların imalatı (elektrik işlerinde kullanılanlar ile elektrik yalıtımı olanlar hariç)"
    },
    {
        "ID": 1649,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.93.02",
        "dc_NACE_BASLIK": "İğne, çengelli iğne, çuvaldız, örgü şişi, tığ, raptiye, çivi, vb. imalatı"
    },
    {
        "ID": 1650,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.93.03",
        "dc_NACE_BASLIK": "Telden yapılan diğer ürünlerin imalatı (örgülü tel, örme şerit, taşıma askısı, dikenli tel (elektrik yalıtımı olanlar hariç) ve demir, çelik veya bakır tellerden mensucat, ızgara, ağ, kafeslik ve çitler)"
    },
    {
        "ID": 1651,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.94.01",
        "dc_NACE_BASLIK": "Yivsiz bağlantı malzemeleri imalatı, demir, çelik veya bakırdan (rondelalar, perçinler, perçin çivileri, kamalı pimler, kopilyalar vb. ürünler)"
    },
    {
        "ID": 1652,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.94.02",
        "dc_NACE_BASLIK": "Yivli bağlantı malzemeleri imalatı, demir, çelik veya bakırdan (vidalar, cıvatalar, somunlar vb. yivli ürünler)"
    },
    {
        "ID": 1653,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.99.10",
        "dc_NACE_BASLIK": "Metal merdiven imalatı"
    },
    {
        "ID": 1654,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "25.99.14",
        "dc_NACE_BASLIK": "Adi metallerden işaret levhaları ve tabelalar ile rakamlar, harfler ve diğer sembollerin imalatı (oto plakaları dahil, ışıklı olanlar hariç)"
    },
    {
        "ID": 1655,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.02",
        "dc_NACE_BASLIK": "Dedektör imalatı (yeraltı kaynakları, maden, mayın, güvenlik kontrol, radyasyon vb. dedektörleri)"
    },
    {
        "ID": 1656,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.03",
        "dc_NACE_BASLIK": "Elektrik miktarını (volt, akım vb.) ölçmek ve kontrol etmek için kullanılan alet ve cihazların imalatı (avometre, voltmetre, osiloskop ile diğer voltaj, akım, direnç veya elektrik gücünü ölçüm veya kontrol için olanlar) (elektrik sayaçları hariç)"
    },
    {
        "ID": 1657,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.05",
        "dc_NACE_BASLIK": "Isı ve sıcaklık ölçümünde kullanılan alet ve cihazların imalatı (termometre, termostat, pirometre vb.)"
    },
    {
        "ID": 1658,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.06",
        "dc_NACE_BASLIK": "Işık, ışın ve renk ölçümünde kullanılan alet ve cihazların imalatı (polarimetre, kolorimetre, refraktometre vb.)"
    },
    {
        "ID": 1659,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.07",
        "dc_NACE_BASLIK": "Meteorolojide kullanılan alet ve cihazların imalatı"
    },
    {
        "ID": 1660,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.09",
        "dc_NACE_BASLIK": "Hava, sıvı ve gazların akış, seviye, basınç veya diğer değişkenlerini ölçme ve kontrol etme için kullanılan aletlerin imalatı (hidrometre, debimetre, barometre, higrometre vb.)"
    },
    {
        "ID": 1661,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.10",
        "dc_NACE_BASLIK": "Gaz, sıvı veya elektrik üretim veya tüketim sayaçlarının imalatı"
    },
    {
        "ID": 1662,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.11",
        "dc_NACE_BASLIK": "Teçhizatlı çizim masaları ve makineleri ile diğer çizim, işaretleme veya matematiksel hesaplama aletlerinin imalatı (pergel takımı, pantograf, resim, çizim, hesap yapmaya mahsus elektrikli/elektronik çiziciler vb. dahil)"
    },
    {
        "ID": 1663,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.12",
        "dc_NACE_BASLIK": "Laboratuvar, kuyumculuk vb. yerlerde kullanılan hassas tartıların imalatı"
    },
    {
        "ID": 1664,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.13",
        "dc_NACE_BASLIK": "Sanayide kullanılan işlem kontrol amaçlı teçhizatların imalatı"
    },
    {
        "ID": 1665,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.14",
        "dc_NACE_BASLIK": "Telemetreler, teodolitler ve diğer arazi ölçümü, hidrografik, oşinografik, hidrolojik veya jeofizik alet ve cihazlarının imalatı"
    },
    {
        "ID": 1666,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "26.51.15",
        "dc_NACE_BASLIK": "Seyrüsefere yardımcı telsiz cihazları ile uzaktan kumandalı kontrol cihazlarının (roketler, füzeler, makineler vb) imalatı"
    },
    {
        "ID": 1667,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "27.90.05",
        "dc_NACE_BASLIK": "Elektrikli kaynak ve lehim teçhizatı (lehim havyaları, ark kaynak makineleri, endüksiyon kaynak makineleri vb.) ile metallerin veya sinterlenmiş metal karbürlerin sıcak spreylenmesi için elektrikli makine ve cihazlarının imalatı"
    },
    {
        "ID": 1668,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.15.01",
        "dc_NACE_BASLIK": "Rulmanlar ve mekanik güç aktarma donanımları imalatı (bilyeli ve makaralı rulmanlar, aktarma milleri (şaftları), kam ve krank milleri, kranklar vb. ile rulman yatakları, düz mil rulmanları, yatak kovanları ve mil şaft yatakları vb.)"
    },
    {
        "ID": 1669,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.15.04",
        "dc_NACE_BASLIK": "Volanlar ve kasnaklar ile mafsallı bağlantı zincirleri ve güç aktarım zincirlerininin imalatı"
    },
    {
        "ID": 1670,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.24.01",
        "dc_NACE_BASLIK": "Motorlu veya pnömatik el aletlerinin imalatı (zımparalama, taşlama, parlatma vb. elektrikli elle kullanılan aletler ile dairesel veya zincirli testere, matkap, çivileme aleti, perçin tabancası vb.)"
    },
    {
        "ID": 1671,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.29.07",
        "dc_NACE_BASLIK": "Metal tabakalardan contaların ve mekanik salmastraların imalatı (diğer malzemelerle birleştirilmiş metal tabakalardan veya iki ya da daha fazla metal tabakasından yapılmış olanlar)"
    },
    {
        "ID": 1672,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.29.10",
        "dc_NACE_BASLIK": "Yangın söndürücüler, püskürtme tabancaları, buhar veya kum püskürtme makineleri vb. sıvı ve tozları atan, dağıtan ya da püskürten mekanik cihazların imalatı"
    },
    {
        "ID": 1673,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.29.11",
        "dc_NACE_BASLIK": "Elektrikli olmayan kaynak ve lehim aletleri ile gazla çalışan yüzey temperleme (menevişleme) makine ve cihazlarının imalatı (pürmüz ve şalümolar dahil)"
    },
    {
        "ID": 1674,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.30.12",
        "dc_NACE_BASLIK": "Çim biçme makinelerinin imalatı (traktörlere monte edilen kesici barlar dahil)"
    },
    {
        "ID": 1675,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.30.16",
        "dc_NACE_BASLIK": "Tarım ve bahçecilikte kullanılan sıvı veya toz atma, dağıtma veya püskürtme makinelerinin imalatı (sulama cihazları, pülverizatörler, zirai mücadelede kullanılan portatif sıvı ve toz püskürtücüler vb.)"
    },
    {
        "ID": 1676,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "28.30.17",
        "dc_NACE_BASLIK": "Ormancılığa özgü makineler ile tarla bahçe bakımına mahsus diğer makine ve cihazların imalatı"
    },
    {
        "ID": 1677,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.91.01",
        "dc_NACE_BASLIK": "Ev veya büro temizliği için olan süpürge ve fırçaların imalatı (elektrikli olanlar hariç)"
    },
    {
        "ID": 1678,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.91.02",
        "dc_NACE_BASLIK": "Boyama, badana, duvar kağıdı ve vernik fırçaları ile rulolarının imalatı"
    },
    {
        "ID": 1679,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.99.04",
        "dc_NACE_BASLIK": "Mekanik olsun veya olmasın her çeşit dolma kalem, tükenmez ve kurşun kalem ile boya kalemi, pastel boya imalatı (kalem ucu ve kurşun kalem içleri dahil)"
    },
    {
        "ID": 1680,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.99.08",
        "dc_NACE_BASLIK": "Tarih verme, damga, mühür veya numara verme kaşeleri, numeratör, elle çalışan basım aletleri, kabartma etiketleri, el baskı setleri, hazır daktilo şeritleri ve ıstampaların imalatı"
    },
    {
        "ID": 1681,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.99.09",
        "dc_NACE_BASLIK": "Koruyucu amaçlı solunum ekipmanları ve gaz maskelerinin imalatı (tedavi edici olanlar hariç)"
    },
    {
        "ID": 1682,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.99.10",
        "dc_NACE_BASLIK": "Ateşe dayanıklı ve koruyucu güvenlik kıyafetleri ve başlıkları ile diğer güvenlik ürünlerinin imalatı (solunum ekipmanları ve gaz maskeleri hariç)"
    },
    {
        "ID": 1683,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.99.11",
        "dc_NACE_BASLIK": "Mantar can simitlerinin imalatı"
    },
    {
        "ID": 1684,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.99.13",
        "dc_NACE_BASLIK": "Termos ve vakumlu kapların imalatı"
    },
    {
        "ID": 1685,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "32.99.16",
        "dc_NACE_BASLIK": "Yazı veya çizim tahtaları imalatı"
    },
    {
        "ID": 1686,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "33.12.12",
        "dc_NACE_BASLIK": "Motorlu veya pnömatik (hava basınçlı) el aletlerinin onarımı (yuvarlak/vargel/zincir testere, matkap, pnömatik veya motorlu metal kesme makası, darbeli cıvata anahtarı vb.)"
    },
    {
        "ID": 1687,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "33.12.13",
        "dc_NACE_BASLIK": "Elektrikli kaynak ve lehim aletlerinin bakım ve onarımı"
    },
    {
        "ID": 1688,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "33.12.27",
        "dc_NACE_BASLIK": "Kesici aletler ile el aletlerinin bakım ve onarımı (matbaa giyotini, şerit testere, el testeresi, çapa, orak vb. bileyleme ve çarkçılık dahil) (motorlu ve pnömatik olanlar hariç)"
    },
    {
        "ID": 1689,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "33.12.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer makinelerin bakım ve onarımı (yangın söndürme tüplerinin dolumu ve tamiri dahil)"
    },
    {
        "ID": 1690,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "35.22.02",
        "dc_NACE_BASLIK": "Gaz sayaçlarının bakım ve onarımı"
    },
    {
        "ID": 1691,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.15.02",
        "dc_NACE_BASLIK": "Hırdavatçı (nalburiye) eşyalarının ve el aletlerinin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1692,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.61.03",
        "dc_NACE_BASLIK": "Çim biçme ve bahçe makine ve ekipmanları ile aksam ve parçalarının toptan ticareti"
    },
    {
        "ID": 1693,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.62.04",
        "dc_NACE_BASLIK": "Lehimleme veya kaynak yapma için kullanılan makineler ile metallerin veya sinterlenmiş metal karbürlerin sıcak spreylenmesi için kullanılan elektrikli makine ve cihazlar ile parçalarının toptan ticareti"
    },
    {
        "ID": 1694,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.04",
        "dc_NACE_BASLIK": "Kompresör ve parçalarının toptan ticareti (soğutma, hava ve diğer amaçlar için)"
    },
    {
        "ID": 1695,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.05",
        "dc_NACE_BASLIK": "Silah ve mühimmat toptan ticareti (tabanca, av tüfeği vb. dahil)"
    },
    {
        "ID": 1696,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.06",
        "dc_NACE_BASLIK": "Makine ve ekipmanlarla ilgili aksam ve parçaların toptan ticareti (değirmentaşı, bileği taşı, zımpara ve aşındırma ürünleri, konveyör bantları, teknik kullanım için cam ve seramik ürünler, rulmanlar, vb.) (motorlu kara taşıtları için olanlar hariç)"
    },
    {
        "ID": 1697,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.10",
        "dc_NACE_BASLIK": "Hırsız ve yangın alarmları ile sinyalizasyon ve trafik kontrol ekipmanları toptan ticareti (ev ve arabalar için olanlar hariç)"
    },
    {
        "ID": 1698,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.13",
        "dc_NACE_BASLIK": "Baskül, kantar ve diğer tartı ve ölçüm makineleri toptan ticareti (ev tipi olanlar hariç)"
    },
    {
        "ID": 1699,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.16",
        "dc_NACE_BASLIK": "Zırhlı veya güçlendirilmiş kasalar ve kutular ile kasa daireleri için zırhlı veya güçlendirilmiş kapılar ve kilitli kutular ile para veya evrak kutuları, vb. (adi metalden) toptan ticareti"
    },
    {
        "ID": 1700,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.17",
        "dc_NACE_BASLIK": "Yangın söndürücüler, püskürtme tabancaları, buhar veya kum püskürtme makineleri ile benzeri mekanik cihazların toptan ticareti (tarımsal amaçlı kullanılanlar ile taşıtlar için yangın söndürücüler hariç)"
    },
    {
        "ID": 1701,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.69.90",
        "dc_NACE_BASLIK": "Genel ve özel amaçlı diğer makine, cihaz ve aletlerin toptan ticareti (metal döküm için kalıplar, demir veya çelikten tanklar, variller, fıçılar, kutular ile tıpalar, şişe kapakları, vb. dahil)"
    },
    {
        "ID": 1702,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.74.01",
        "dc_NACE_BASLIK": "Hırdavat (nalburiye) malzemesi ve el aletleri toptan ticareti (çivi, raptiye, vida, adi metalden kilit, menteşe, bağlantı parçası, çekiç, testere, pense, tornavida, takım tezgahı uçları, çengel, halka, perçin, vb.)"
    },
    {
        "ID": 1703,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.74.05",
        "dc_NACE_BASLIK": "Demir veya çelikten dikenli tel, bakır veya alüminyumdan örgülü tel, kablo, örme şerit ve benzerleri (elektrik yalıtımı olanlar hariç), demir, çelik veya bakır tellerden mensucat, ızgara, ağ, kafeslik ve çit toptan ticareti"
    },
    {
        "ID": 1704,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "46.74.07",
        "dc_NACE_BASLIK": "Tarım ve ormancılık alet ve malzemeleri toptan ticareti (balta, kazma, orak, tırpan, vb. dahil, tarımsal amaçlı makine ve ekipmanlar hariç)"
    },
    {
        "ID": 1705,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "47.52.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda hırdavat (nalburiye) malzemesi ve el aletleri perakende ticareti (çivi, vida, kilit, menteşe, çekiç, testere, pense, tornavida, takım tezgahı uçları, perçin, vb.) (tarım ve bahçecilik el aletleri dahil)"
    },
    {
        "ID": 1706,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "47.52.16",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda çim biçme ve bahçe ekipmanları perakende ticareti (kar küreyiciler dahil) (tarım ve bahçecilikte kullanılan el aletleri hariç)"
    },
    {
        "ID": 1707,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "47.78.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda silah ve mühimmat perakende ticareti (sportif ve avcılık amaçlı olanlar hariç)"
    },
    {
        "ID": 1708,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "47.78.23",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda yangın söndürücüler ve ekipmanlarının perakende ticareti (arabalar için olanlar ve yüksek basınçlı olanlar hariç)"
    },
    {
        "ID": 1709,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "95.22.02",
        "dc_NACE_BASLIK": "Ev ve bahçe gereçlerinin onarımı (mutfak eşyası, makas, çim biçme makinesi, budama makasları, vb.)"
    },
    {
        "ID": 1710,
        "dc_MESLEK_GRUBU": "61",
        "dc_MESLEK_GRUBU_ADI": "TEKNİK HIRDAVAT",
        "dc_NACE_KODU": "95.29.04",
        "dc_NACE_BASLIK": "Çilingirlik ve anahtar çoğaltma hizmetleri"
    },
    {
        "ID": 1711,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.10.01",
        "dc_NACE_BASLIK": "Demir cevheri madenciliği (sinterlenmiş demir cevheri üretimi dahil)"
    },
    {
        "ID": 1712,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.21.01",
        "dc_NACE_BASLIK": "Katran ve zift ihtiva eden cevherlerden uranyum metalinin ayrıştırılması"
    },
    {
        "ID": 1713,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.21.02",
        "dc_NACE_BASLIK": "Katran ve zift ihtiva eden cevherlerden toryum metalinin ayrıştırılması"
    },
    {
        "ID": 1714,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.21.03",
        "dc_NACE_BASLIK": "Uranyum madenciliği"
    },
    {
        "ID": 1715,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.21.04",
        "dc_NACE_BASLIK": "Toryum madenciliği"
    },
    {
        "ID": 1716,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.21.05",
        "dc_NACE_BASLIK": "Sarı pasta (U3O8) imalatı (uranyum cevherinden elde edilen)"
    },
    {
        "ID": 1717,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.29.01",
        "dc_NACE_BASLIK": "Altın, gümüş, platin gibi değerli metal madenciliği"
    },
    {
        "ID": 1718,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.29.02",
        "dc_NACE_BASLIK": "Alüminyum madenciliği"
    },
    {
        "ID": 1719,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.29.03",
        "dc_NACE_BASLIK": "Bakır madenciliği"
    },
    {
        "ID": 1720,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.29.04",
        "dc_NACE_BASLIK": "Nikel madenciliği"
    },
    {
        "ID": 1721,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.29.05",
        "dc_NACE_BASLIK": "Kurşun, çinko ve kalay madenciliği"
    },
    {
        "ID": 1722,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.29.06",
        "dc_NACE_BASLIK": "Krom madenciliği"
    },
    {
        "ID": 1723,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "07.29.07",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış demir dışı diğer metal cevherleri madenciliği (cıva, manganez, kobalt, molibden, tantal, vanadyum vb.) (değerli metaller, demir, bakır, kurşun, çinko, alüminyum, kalay, krom, nikel hariç)"
    },
    {
        "ID": 1724,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.11.01",
        "dc_NACE_BASLIK": "Mermer ocakçılığı (traverten dahil)"
    },
    {
        "ID": 1725,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.11.02",
        "dc_NACE_BASLIK": "Granit ocakçılığı"
    },
    {
        "ID": 1726,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.11.03",
        "dc_NACE_BASLIK": "Yapı taşları ocakçılığı"
    },
    {
        "ID": 1727,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.11.04",
        "dc_NACE_BASLIK": "Süsleme ve yapı taşlarının kırılması ve kabaca kesilmesi"
    },
    {
        "ID": 1728,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.11.05",
        "dc_NACE_BASLIK": "Dolomit ve kayağan taşı (arduvaz / kayraktaşı) ocakçılığı"
    },
    {
        "ID": 1729,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.11.06",
        "dc_NACE_BASLIK": "Kireçtaşı (kalker) ocakçılığı (kireçtaşının kırılması ve parçalanması dahil)"
    },
    {
        "ID": 1730,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.11.07",
        "dc_NACE_BASLIK": "Tebeşir, alçıtaşı ve anhidrit ocakçılığı (çıkarma, parçalama, pişirme işlemi dahil)"
    },
    {
        "ID": 1731,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.12.01",
        "dc_NACE_BASLIK": "Çakıl ve kum ocakçılığı (taşların kırılması ile kil ve kaolin madenciliği hariç)"
    },
    {
        "ID": 1732,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.12.02",
        "dc_NACE_BASLIK": "Çakıl taşlarının kırılması ve parçalanması"
    },
    {
        "ID": 1733,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.12.03",
        "dc_NACE_BASLIK": "Kil, refrakter kil ve kaolin madenciliği ile bentonit, andaluzit, siyanit, silimanit, mulit, şamot veya dinas toprakları çıkarımı"
    },
    {
        "ID": 1734,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.91.01",
        "dc_NACE_BASLIK": "Kimyasal ve gübreleme amaçlı mineral madenciliği (azot, potasyum, fosfor, fosfat, nitrat, barit, baryum, pirit, vb.) (bor, kükürt madenciliği hariç)"
    },
    {
        "ID": 1735,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.91.02",
        "dc_NACE_BASLIK": "Bor mineralleri madenciliği"
    },
    {
        "ID": 1736,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.91.03",
        "dc_NACE_BASLIK": "Kükürt madenciliği (ocakçılığı)"
    },
    {
        "ID": 1737,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.91.04",
        "dc_NACE_BASLIK": "Guano madenciliği (kuş gübresi, güherçile dahil)"
    },
    {
        "ID": 1738,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.91.05",
        "dc_NACE_BASLIK": "Kehribar, Oltu taşı ve lületaşı ocakçılığı"
    },
    {
        "ID": 1739,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.93.01",
        "dc_NACE_BASLIK": "Tuz ocakçılığı (deniz, göl, kaya, kaynak), tuzun elenmesi ve kırılması dahil"
    },
    {
        "ID": 1740,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.99.01",
        "dc_NACE_BASLIK": "Aşındırıcı (törpüleyici) materyaller (zımpara), amyant, silisli fosil artıklar, arsenik cevherleri, sabuntaşı (talk) ve feldispat madenciliği (kuartz, mika, şist, talk, silis, sünger taşı, asbest, doğal korindon vb.)"
    },
    {
        "ID": 1741,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.99.02",
        "dc_NACE_BASLIK": "Doğal asfalt, asfaltit, asfaltlı taş (doğal katı zift) ve bitüm madenciliği"
    },
    {
        "ID": 1742,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.99.03",
        "dc_NACE_BASLIK": "Kıymetli ve yarı kıymetli taşların (yakut, zümrüt, safir, kalsedon vb.) ocakçılığı (kehribar, Oltu taşı, lüle taşı ve elmas hariç)"
    },
    {
        "ID": 1743,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.99.04",
        "dc_NACE_BASLIK": "Grafit ocakçılığı"
    },
    {
        "ID": 1744,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.99.05",
        "dc_NACE_BASLIK": "Elmas (endüstri elmasları dahil) madenciliği"
    },
    {
        "ID": 1745,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "08.99.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer madencilik ve taşocakçılığı"
    },
    {
        "ID": 1746,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "09.10.01",
        "dc_NACE_BASLIK": "Doğalgazın sıvılaştırılması ve gaz haline getirilmesi (maden alanında gerçekleştirilenler)"
    },
    {
        "ID": 1747,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "09.10.02",
        "dc_NACE_BASLIK": "Petrol ve gaz çıkarımıyla ilgili sondaj hizmetleri (tetkik, araştırma hizmetleri, jeolojik gözlemler, kuyu çalıştırılması ve kapatılması ile test amaçlı sondaj faaliyetleri vb. dahil)"
    },
    {
        "ID": 1748,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "09.90.01",
        "dc_NACE_BASLIK": "Madencilik ve taş ocakçılığını destekleyici diğer hizmet faaliyetleri (tetkik, araştırma hizmetleri, jeolojik gözlemler, boşaltma, pompalama hizmetleri) (test amaçlı sondaj faaliyetleri ile petrol ve doğalgaz için yapılanlar hariç)"
    },
    {
        "ID": 1749,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "09.90.02",
        "dc_NACE_BASLIK": "Madencilik ve taş ocakçılığını destekleyici test amaçlı sondaj faaliyetleri (petrol ve doğalgaz için yapılanlar hariç)"
    },
    {
        "ID": 1750,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "23.70.01",
        "dc_NACE_BASLIK": "Taş ve mermerin kesilmesi, şekil verilmesi ve bitirilmesi (doğal taşlardan, mermerden, su mermerinden, travertenden, kayağantaşından levha/tabaka, kurna, lavabo, karo, kaldırım taşı, yapı taşı, mezar taşı, vb. imalatı dahil, süs eşyası hariç)"
    },
    {
        "ID": 1751,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "23.70.02",
        "dc_NACE_BASLIK": "Doğal taşlardan, mermerden, su mermerinden, travertenden, kayağantaşından süs eşyası imalatı (lületaşı, kehribar, vb.nden olanlar dahil)"
    },
    {
        "ID": 1752,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "46.73.10",
        "dc_NACE_BASLIK": "İşlenmiş mermer, traverten, kaymaktaşı (su mermeri) ve bunlardan yapılmış ürünlerin toptan ticareti (levha halinde olanlar ile lavabo vb. sıhhi ürünler dahil)"
    },
    {
        "ID": 1753,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "46.73.11",
        "dc_NACE_BASLIK": "Mermer, granit, kayağan taşı, kum taşı vb. toptan ticareti (işlenmemiş veya blok halde olanlar)"
    },
    {
        "ID": 1754,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "47.52.19",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda işlenmiş mermer, traverten, kaymaktaşı (su mermeri) ve bunlardan yapılmış ürünlerin perakende ticareti (levha halinde olanlar ile mermer lavabo vb. sıhhi ürünler dahil)"
    },
    {
        "ID": 1755,
        "dc_MESLEK_GRUBU": "62",
        "dc_MESLEK_GRUBU_ADI": "MERMERCİLİK VE MADENCİLİK",
        "dc_NACE_KODU": "84.13.13",
        "dc_NACE_BASLIK": "Madencilik, doğal kaynaklar, imalat ve inşaat ile ilgili kamu yönetimi hizmetleri"
    },
    {
        "ID": 1756,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "06.20.01",
        "dc_NACE_BASLIK": "Doğalgaz çıkarılması (madenciliği)"
    },
    {
        "ID": 1757,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "20.13.06",
        "dc_NACE_BASLIK": "Uranyum, plütonyum ve toryum cevherlerinin zenginleştirilmesi (nükleer reaktörler için yakıt kartuşları dahil)"
    },
    {
        "ID": 1758,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.11.19",
        "dc_NACE_BASLIK": "Elektrik enerjisi üretimi"
    },
    {
        "ID": 1759,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.13.01",
        "dc_NACE_BASLIK": "Elektrik enerjisinin dağıtımı (üretim kaynağından veya iletim sisteminden son kullanıcıya iletim sistemiyle taşınan elektrik enerjisi dağıtım sisteminin işletilmesi)"
    },
    {
        "ID": 1760,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.14.02",
        "dc_NACE_BASLIK": "Kullanıcılara yönelik elektrik ticareti (komisyoncular ve acenteler hariç)"
    },
    {
        "ID": 1761,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.14.03",
        "dc_NACE_BASLIK": "Elektrik için elektrik ve iletim kapasitesi değiştirme faaliyetleri"
    },
    {
        "ID": 1762,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.21.01",
        "dc_NACE_BASLIK": "Doğalgaz dahil, çeşitli türdeki gazlardan arındırma, karıştırma, vb. işlemlerle kalorifik değerde gazlı yakıtların üretimi"
    },
    {
        "ID": 1763,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.22.01",
        "dc_NACE_BASLIK": "Ana şebeke üzerinden gaz yakıtların dağıtımı (her çeşit gazlı yakıtın, ana boru sistemiyle dağıtımı ve tedariki)"
    },
    {
        "ID": 1764,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.23.01",
        "dc_NACE_BASLIK": "Ana şebeke üzerinden kullanıcılara yönelik gaz ticareti (komisyoncular ve acenteler hariç)"
    },
    {
        "ID": 1765,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.23.02",
        "dc_NACE_BASLIK": "Diğer işletmeler tarafından işletilen gaz dağıtım sistemleri aracılığıyla, gaz satışını düzenleyen gaz komisyoncuları veya acentelerinin faaliyetleri"
    },
    {
        "ID": 1766,
        "dc_MESLEK_GRUBU": "63",
        "dc_MESLEK_GRUBU_ADI": "ENERJİ",
        "dc_NACE_KODU": "35.30.21",
        "dc_NACE_BASLIK": "Buhar ve sıcak su üretimi, toplanması ve dağıtımı"
    },
    {
        "ID": 1767,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.11.01",
        "dc_NACE_BASLIK": "Elektrik motoru, jeneratör ve transformatörlerin imalatı (aksam ve parçaları hariç)"
    },
    {
        "ID": 1768,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.11.03",
        "dc_NACE_BASLIK": "Elektrik motoru, jeneratör ve transformatörlerin aksam ve parçalarının imalatı"
    },
    {
        "ID": 1769,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.12.01",
        "dc_NACE_BASLIK": "Elektrik devrelerinin anahtarlanması, korunması ile elektriğin kontrol ve dağıtımına özgü cihazların imalatı (sigorta, otomatik devre kesici, röle, yalıtım, devre ve yük ayırıcı anahtarlar, voltaj sınırlayıcı, dalga bastırıcı vb.)"
    },
    {
        "ID": 1770,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.12.02",
        "dc_NACE_BASLIK": "Elektrik devrelerinin anahtarlanması, korunması ve elektriğin kontrol ve dağıtımına özgü cihazların parçalarının imalatı (kumanda panosu için tablo, konsol, kabin vb. diğer mesnetler dahil, elektrik düğmesi, fişi ve prizi hariç)"
    },
    {
        "ID": 1771,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.20.02",
        "dc_NACE_BASLIK": "Şarj edilemeyen (birincil) pil ve bataryalar ile bunların aksam ve parçalarının imalatı (manganez dioksitli, cıva oksitli, gümüş oksitli, lityum oksitli, çinko-hava reaksiyonlu pil ve bataryalar)"
    },
    {
        "ID": 1772,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.20.04",
        "dc_NACE_BASLIK": "Şarj edilebilir pil ve batarya ile bunların parçalarının imalatı"
    },
    {
        "ID": 1773,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.31.04",
        "dc_NACE_BASLIK": "Fiber optik kabloların imalatı"
    },
    {
        "ID": 1774,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.32.03",
        "dc_NACE_BASLIK": "Diğer elektronik ve elektrik telleri ve kablolarının imalatı (koaksiyel kablo ve diğer koaksiyel elektrik iletkenleri, yalıtılmış bobin telleri, izolasyonlu toprak su altı iletkenler, asetatlı ve silikonlu bakır iletkenler, vb.) (fiberoptik kablo hariç)"
    },
    {
        "ID": 1775,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.52.06",
        "dc_NACE_BASLIK": "Elektriksiz ev aletlerinin aksam ve parçalarının imalatı"
    },
    {
        "ID": 1776,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.90.02",
        "dc_NACE_BASLIK": "Elektrik kondansatörleri, dirençleri (ısıtma rezistansları hariç), reostaları ve potansiyometrelerin imalatı"
    },
    {
        "ID": 1777,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.90.03",
        "dc_NACE_BASLIK": "Elektrikli sinyalizasyon, güvenlik veya trafik kontrol ekipmanlarının imalatı (demir yolları, kara yolları, iç su yolları, taşıt park alanları, limanlar ve hava meydanları için) (trafik ışıkları ve sinyal donanımları dahil)"
    },
    {
        "ID": 1778,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.90.04",
        "dc_NACE_BASLIK": "Karbon elektrotlar ve elektrik işlerinde kullanılan grafitten veya karbondan diğer ürünlerin imalatı (ısıtıcı kömür rezistanslar, pil kömürleri, ark lambaları ve diğer lambalar için kömürler vb. dahil)"
    },
    {
        "ID": 1779,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.90.08",
        "dc_NACE_BASLIK": "Kendine özel fonksiyonu olan elektrikli makine ve cihazların imalatı (anten yükselteçleri, çitlere elektrik verici cihazlar, tercüme veya sözlük fonksiyonlu elektrikli makineler, ses kayıt cihazlarında kullanılan gürültü azaltma üniteleri vb.)"
    },
    {
        "ID": 1780,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.90.09",
        "dc_NACE_BASLIK": "Elektrik yalıtkanlarının (izolatörlerinin) imalatı (cam ve seramikten olanlar hariç)"
    },
    {
        "ID": 1781,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.90.10",
        "dc_NACE_BASLIK": "Solaryum yatakları, solaryum lambaları vb. bronzlaşma ekipmanlarının imalatı"
    },
    {
        "ID": 1782,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "27.90.90",
        "dc_NACE_BASLIK": "Bys. elektrikli diğer ekipmanların imalatı (elektromıknatıslar, elektromanyetik kaplinler, frenler ve vinç başları ile elektrikli parçacık hızlandırıcılar, sinyal jeneratörleri vb.)"
    },
    {
        "ID": 1783,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "33.11.11",
        "dc_NACE_BASLIK": "Nükleer reaktörlerin bakım ve onarımı"
    },
    {
        "ID": 1784,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "33.14.01",
        "dc_NACE_BASLIK": "Güç transformatörleri, dağıtım transformatörleri ve özel transformatörlerin bakım ve onarımı (elektrik dağıtım ve kontrol cihazları dahil)"
    },
    {
        "ID": 1785,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "33.14.02",
        "dc_NACE_BASLIK": "Elektrik motorları, jeneratörler ve motor jeneratör setlerinin bakım ve onarımı (bobinlerin tekrar sarımı dahil)"
    },
    {
        "ID": 1786,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "33.20.51",
        "dc_NACE_BASLIK": "Elektrikli ekipmanların kurulum hizmetleri (elektrik motorları, jeneratörler ve transformatörlerin, elektrik dağıtım ve kontrol cihazları ile diğer elektrikli ekipmanların kurulumu (yollar, vb. için elektrikli sinyalizasyon ekipmanları hariç))"
    },
    {
        "ID": 1787,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "35.12.13",
        "dc_NACE_BASLIK": "Elektrik enerjisinin iletimi (elektrik üretim kaynağından dağıtım sistemine aktaran iletim sistemlerinin işletilmesi)"
    },
    {
        "ID": 1788,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "35.13.02",
        "dc_NACE_BASLIK": "Elektrik sayaçlarının bakım ve onarımı"
    },
    {
        "ID": 1789,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "35.14.01",
        "dc_NACE_BASLIK": "Diğer işletmeler tarafından işletilen güç dağıtım sistemleri aracılığı ile elektrik satışını düzenleyen elektrik komisyoncuları ve acentelerinin faaliyetleri"
    },
    {
        "ID": 1790,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "43.21.01",
        "dc_NACE_BASLIK": "Bina ve bina dışı yapıların (ulaşım için aydınlatma ve sinyalizasyon sistemleri hariç) elektrik tesisatı, kablolu televizyon ve bilgisayar ağı tesisatı ile konut tipi antenler (uydu antenleri dahil), elektrikli güneş enerjisi kolektörleri, elektrik sayaçl"
    },
    {
        "ID": 1791,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "43.21.03",
        "dc_NACE_BASLIK": "Karayolları, demiryolları ve diğer raylı yolların, liman ve havaalanlarının aydınlatma ve sinyalizasyon sistemlerinin tesisatı (havaalanı pisti aydınlatmasının tesisatı dahil)"
    },
    {
        "ID": 1792,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "46.43.05",
        "dc_NACE_BASLIK": "Elektrik malzemeleri toptan ticareti (kablo, sigorta, duy, fiş, priz, ampul, elektrik anahtarı, devre kesici, şalter, röle, pil, batarya, vb.) (endüstriyel olanlar ile elektirikli makine, cihaz ve aletlerde kullanılanlar hariç)"
    },
    {
        "ID": 1793,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "46.43.08",
        "dc_NACE_BASLIK": "Hırsız ve yangın alarmları ile benzeri cihazların toptan ticareti - evlerde kullanım amaçlı"
    },
    {
        "ID": 1794,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "46.69.09",
        "dc_NACE_BASLIK": "Rüzgar türbinleri, kondansatörler, elektrik yalıtkanları (izolatör), AC/AD/DC motorlar, jeneratörler, yalıtılmış bobin telleri vb. elektrikli makine, cihaz ve aletlerin toptan ticareti"
    },
    {
        "ID": 1795,
        "dc_MESLEK_GRUBU": "64",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİK EKİPMANLARI",
        "dc_NACE_KODU": "47.54.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda evde kullanım amaçlı elektrik tesisat malzemesi perakende ticareti (transformatör, sigorta, röle, pil ve batarya, elektrik akümülatörü, koaksiyel kablo, elektrik iletkenleri, anahtar, duy, bys. fiş, priz, vb.)"
    },
    {
        "ID": 1796,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "23.19.03",
        "dc_NACE_BASLIK": "Cam zarflar (açık) ve bunların cam parçalarının imalatı (elektrik ampulleri, elektrik lambaları, katot-ışınlı tüpler vb. için kullanılan)"
    },
    {
        "ID": 1797,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "27.40.02",
        "dc_NACE_BASLIK": "Hava ve motorlu kara taşıtları için monoblok far üniteleri, kara, hava ve deniz taşıtları için elektrikli aydınlatma donanımları veya görsel sinyalizasyon ekipmanları imalatı (polis araçları, ambulans vb. araçların dış ikaz lambaları dahil)"
    },
    {
        "ID": 1798,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "27.40.03",
        "dc_NACE_BASLIK": "Avize, aplik ve diğer elektrikli aydınlatma armatürleri, sahne, fotoğraf veya sinema stüdyoları için projektörler ve spot ışıkları, elektrikli masa lambaları, çalışma lambaları, abajur vb. lambaların imalatı (süsleme için ışıklandırma setleri dahil)"
    },
    {
        "ID": 1799,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "27.40.04",
        "dc_NACE_BASLIK": "Sokak aydınlatma donanımlarının imalatı (trafik ışıkları hariç)"
    },
    {
        "ID": 1800,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "27.40.05",
        "dc_NACE_BASLIK": "Pil, akümülatör veya manyeto ile çalışan portatif elektrik lambaları ve elektriksiz lambalar ile el feneri, gaz ve lüks lambası vb. aydınlatma armatürlerinin imalatı  (taşıtlar için olanlar hariç)"
    },
    {
        "ID": 1801,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "27.40.06",
        "dc_NACE_BASLIK": "Işıklı tabela, ışıklı reklam panosu ve benzerlerinin imalatı"
    },
    {
        "ID": 1802,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "27.40.07",
        "dc_NACE_BASLIK": "Bys diğer lamba ve aydınlatma armatürleri ile lambaların, aydınlatma armatürü ve benzerlerinin aksam ve parçalarının imalatı (cam veya plastikten olanlar hariç)"
    },
    {
        "ID": 1803,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "27.90.06",
        "dc_NACE_BASLIK": "Sıvı kristal cihazlı (LCD) veya ışık yayan diyotlu (LED) gösterge panelleri ile bys. elektrikli sesli veya görsel sinyalizasyon cihazlarının imalatı (elektronik sayı levhası (skorbord) dahil)"
    },
    {
        "ID": 1804,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "46.47.03",
        "dc_NACE_BASLIK": "Aydınlatma ekipmanlarının toptan ticareti (avize, abajur, vb.)"
    },
    {
        "ID": 1805,
        "dc_MESLEK_GRUBU": "65",
        "dc_MESLEK_GRUBU_ADI": "AYDINLATMA",
        "dc_NACE_KODU": "47.59.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda aydınlatma teçhizatı perakende ticareti (lambalar, aydınlatma armatürleri, avize, abajur, ışıklı tabela, portatif elektrik lambaları vb.) (elektrik malzemeleri hariç)"
    },
    {
        "ID": 1806,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "26.40.08",
        "dc_NACE_BASLIK": "Ses ve görüntü oynatıcı ve kaydedicileri, ev tipi video kameralar ve diğer görüntü kayıt veya görüntü çoğaltma cihazlarının imalatı"
    },
    {
        "ID": 1807,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "26.40.09",
        "dc_NACE_BASLIK": "Radyo ve televizyon imalatı (taşıtlarda kullanılanlar dahil)"
    },
    {
        "ID": 1808,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "26.40.10",
        "dc_NACE_BASLIK": "Mikrofon, hoparlör ve kulaklıklar ile elektrikli ses yükselteçlerinin (amplifikatörler) imalatı"
    },
    {
        "ID": 1809,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "26.40.11",
        "dc_NACE_BASLIK": "Monitörler ve projektörlerin imalatı (bilgisayar gibi bir otomatik veri işleme sisteminde kullanılmayanlar)"
    },
    {
        "ID": 1810,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "26.40.12",
        "dc_NACE_BASLIK": "Video oyun ve konsollarının (televizyonla kullanılanlar ve kendi ekranı olanlar) imalatı"
    },
    {
        "ID": 1811,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.02",
        "dc_NACE_BASLIK": "Ev tipi elektrikli su ısıtıcıları (depolu su ısıtıcıları, anında su ısıtıcıları, şofben, termosifon dahil), elektrikli ısıtma cihazları (elektrikli soba, radyatör, vb.) ve elektrikli toprak ısıtma cihazlarının imalatı"
    },
    {
        "ID": 1812,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.03",
        "dc_NACE_BASLIK": "Ev tipi elektrikli süpürge ve halı temizleme/yıkama makineleri ile kuru veya ıslak elektrikli süpürgeler, şarjlı veya pilli el süpürgelerinin imalatı"
    },
    {
        "ID": 1813,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.04",
        "dc_NACE_BASLIK": "Mutfakta kullanılan elektrikli küçük ev aletlerinin imalatı (çay veya kahve makinesi, semaver, ızgara, kızartma cihazı, ekmek kızartma makinesi, mutfak robotu, mikser, blender, meyve sıkacağı, et kıyma makinesi, tost makinesi, fritöz vb.)"
    },
    {
        "ID": 1814,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.05",
        "dc_NACE_BASLIK": "Elektrikli diğer küçük ev aletleri (elektrotermik el kurutma makinesi, elektrikli ütü, havlu dispenseri, hava nemlendirici) ile elektrikli battaniyelerin imalatı"
    },
    {
        "ID": 1815,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.06",
        "dc_NACE_BASLIK": "Elektrikli kişişel bakım eşyalarının imalatı (elektrikli tıraş makinesi, epilatör ve saç kesme makinesi, elektrotermik saç şekillendirme makinesi (saç kurutma makinesi, bigudi, tarak, saç maşası), elektrikli diş fırçası, vb.)"
    },
    {
        "ID": 1816,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.07",
        "dc_NACE_BASLIK": "Elektrikli ev aletleri aksam ve parçalarının imalatı"
    },
    {
        "ID": 1817,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.08",
        "dc_NACE_BASLIK": "Ev tipi buzdolabı, dondurucu, çamaşır makinesi, çamaşır kurutma makinesi, bulaşık makinesi, vantilatör, aspiratör, fan, aspiratörlü davlumbaz, fırın, ocak, mikrodalga fırın, elektrikli pişirme sacı vb. imalatı"
    },
    {
        "ID": 1818,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.51.90",
        "dc_NACE_BASLIK": "Bys. diğer elektrikli ev aletlerinin imalatı"
    },
    {
        "ID": 1819,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.52.02",
        "dc_NACE_BASLIK": "Elektriksiz ev tipi gaz, sıvı veya katı yakıtlı soba, kuzine, ızgara, şömine, mangal, semaver, su ısıtıcısı (termosifon, şofben vb.) vb. aletlerin imalatı"
    },
    {
        "ID": 1820,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "27.52.05",
        "dc_NACE_BASLIK": "Elektriksiz yemek pişirme cihazlarının imalatı (gaz yakıtlı set üstü ocaklar, gaz veya sıvı yakıtlı fırınlar ve ocaklar vb.)"
    },
    {
        "ID": 1821,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "46.15.03",
        "dc_NACE_BASLIK": "Radyo, televizyon ve video cihazlarının bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1822,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "46.43.01",
        "dc_NACE_BASLIK": "Beyaz eşya toptan ticareti (buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, çamaşır kurutma makinesi vb.)"
    },
    {
        "ID": 1823,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "46.43.12",
        "dc_NACE_BASLIK": "Konutlarda, bürolarda ve mağazalarda kullanılan (sanayi tipi olmayan) klimaların toptan ticareti"
    },
    {
        "ID": 1824,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "46.43.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış elektrikli ev aletleri toptan ticareti (ütü, elektrik süpürgesi, aspiratör, vantilatör,tıraş makinesi, saç kurutma makinesi, su arıtma cihazı, dikiş makinesi, şofben, elektrikli soba, elektrikli radyatör vb.)"
    },
    {
        "ID": 1825,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "46.49.16",
        "dc_NACE_BASLIK": "Kişisel veya ev tipi tartı aletleri ve basküllerin toptan ticareti"
    },
    {
        "ID": 1826,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "47.43.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ses ve görüntü cihazlarının ve bunların parçalarının perakende ticareti (radyo, televizyon, müzik seti, teyp, DVD oynatıcı, mp3 çalar, vb.)"
    },
    {
        "ID": 1827,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "47.54.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda beyaz eşya ve elektrikli küçük ev aleti perakende ticareti (buzdolabı, çamaşır makinesi, su ısıtıcı, vantilatör, davlumbaz, tost makinesi, mutfak robotu, vb.) (radyo, televizyon ve fotoğrafçılık ürünleri hariç)"
    },
    {
        "ID": 1828,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "47.54.90",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bys. elektrikli ev aletleri perakende ticareti (ev tipi hırsız ve yangın alarmı, tıraş, dikiş, dokuma ve örgü makinesi, fırın, soba, radyatör, vb.) (radyo, TV ve fotoğrafçılık ürünleri hariç)"
    },
    {
        "ID": 1829,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "47.79.04",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kullanılmış mobilya, elektrikli ve elektronik ev eşyası perakende ticareti"
    },
    {
        "ID": 1830,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "95.22.01",
        "dc_NACE_BASLIK": "Evde kullanılan elektrikli cihazların onarımı (buzdolabı, fırın, çamaşır makinesi, bulaşık makinesi, oda kliması, elektrikli küçük ev aletleri, vb.)"
    },
    {
        "ID": 1831,
        "dc_MESLEK_GRUBU": "66",
        "dc_MESLEK_GRUBU_ADI": "ELEKTRİKLİ EV ALETLERİ",
        "dc_NACE_KODU": "95.22.03",
        "dc_NACE_BASLIK": "Termosifon, şofben, banyo kazanı vb. bakım ve onarımı (merkezi ısıtma kazanlarının (boylerler) onarımı hariç)"
    },
    {
        "ID": 1832,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.11.04",
        "dc_NACE_BASLIK": "Diyotların, transistörlerin, diyakların, triyaklar, tristör, rezistans, ledler, kristal, röle, mikro anahtar, sabit veya ayarlanabilir direnç ve kondansatörler ile elektronik entegre devrelerin imalatı"
    },
    {
        "ID": 1833,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.11.05",
        "dc_NACE_BASLIK": "Katot ışınlı görüntü tüpleri, televizyon kamerası tüpleri ve  magnetronlar, klistronlar, mikrodalga tüpleri ve diğer valf tüplerinin, LCD ve plazma TV panelleri ve göstergelerin imalatı"
    },
    {
        "ID": 1834,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.11.06",
        "dc_NACE_BASLIK": "Çıplak baskılı devre kartlarının imalatı"
    },
    {
        "ID": 1835,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.11.90",
        "dc_NACE_BASLIK": "Bys. diğer elektronik bileşenlerin imalatı"
    },
    {
        "ID": 1836,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.12.01",
        "dc_NACE_BASLIK": "Yüklü elektronik kart imalatı (yüklü baskılı devre kartları, ses, görüntü, denetleyici, ağ ve modem kartları ile akıllı kartlar vb.)"
    },
    {
        "ID": 1837,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.02",
        "dc_NACE_BASLIK": "Radyo ve televizyon stüdyoları ve yayın teçhizatları ile radyo ve televizyon iletim cihazlarının imalatı (tv kameraları ve baz istasyonları dahil)"
    },
    {
        "ID": 1838,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.03",
        "dc_NACE_BASLIK": "Kızıl ötesi (enfraruj) sinyal kullanan iletişim cihazlarının imalatı (örn: uzaktan kumanda cihazları)"
    },
    {
        "ID": 1839,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.05",
        "dc_NACE_BASLIK": "Alıcı ve verici antenlerin imalatı (harici, teleskopik, çubuk, uydu, çanak ve hava ve deniz taşıtlarının antenleri)"
    },
    {
        "ID": 1840,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.06",
        "dc_NACE_BASLIK": "Kablolu ve kablosuz telefon, cep telefonu, kablolu görüntülü telefon, çağrı cihazı ve faks cihazı imalatı (telesekreter imalatı dahil)"
    },
    {
        "ID": 1841,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.08",
        "dc_NACE_BASLIK": "Merkezi iletişim santral donanımları ile sayısal veya analog telefon-telgraf santrallerinin ve ağ geçitleri, köprüleri, yönlendiricileri gibi veri iletim donanımlarının imalatı (mors veya mors tipi kaydedici ve anahtarlar dahil)"
    },
    {
        "ID": 1842,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.09",
        "dc_NACE_BASLIK": "Hırsız ve yangın alarm sistemleri ve kapı konuşma sistemlerinin (diyafon)  (görüntülü olanlar dahil) imalatı (motorlu kara taşıtları için alarm sistemleri hariç)"
    },
    {
        "ID": 1843,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.10",
        "dc_NACE_BASLIK": "Ses, görüntü veya diğer verilerin alınması, dönüştürülmesi, iletilmesi/yeniden oluşturulması için kullanılan diğer makinelerin imalatı (alıcısı/vericisi bulunan telgraf, teleks cihazları ile anahtarlama ve yönlendirme cihazları dahil)"
    },
    {
        "ID": 1844,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.30.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer iletişim ekipmanlarının imalatı"
    },
    {
        "ID": 1845,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.40.90",
        "dc_NACE_BASLIK": "Bys. tüketici elektroniği ürünlerinin imalatı"
    },
    {
        "ID": 1846,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.80.01",
        "dc_NACE_BASLIK": "Boş manyetik ses ve görüntü kaset bantlarının imalatı (plak dahil)"
    },
    {
        "ID": 1847,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.80.02",
        "dc_NACE_BASLIK": "Manyetik şeritli kartların imalatı (boş telefon kartı dahil)"
    },
    {
        "ID": 1848,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.80.03",
        "dc_NACE_BASLIK": "Boş CD, DVD, disket, mavi ışınlı (blu-ray) disk, vb. ürünlerin imalatı (disk üretimi için kullanılan kalıp (matris) ve master dahil)"
    },
    {
        "ID": 1849,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "26.80.90",
        "dc_NACE_BASLIK": "Bys. manyetik ve optik ortamların imalatı"
    },
    {
        "ID": 1850,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "42.22.05",
        "dc_NACE_BASLIK": "Telekomünikasyon şebeke ve ağlarının bakım ve onarımı"
    },
    {
        "ID": 1851,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "46.43.04",
        "dc_NACE_BASLIK": "Plak, ses ve görüntü kasetleri, CD ve DVD toptan ticareti (boş olanlar hariç)"
    },
    {
        "ID": 1852,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "46.43.09",
        "dc_NACE_BASLIK": "Radyo, televizyon, video ve DVD cihazlarının toptan ticareti (antenler ile arabalar için radyo ve TV ekipmanları dahil)"
    },
    {
        "ID": 1853,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "46.52.01",
        "dc_NACE_BASLIK": "Telekomünikasyon ekipman ve parçalarının toptan ticareti (telefon ve iletişim ekipmanları dahil)"
    },
    {
        "ID": 1854,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "46.52.02",
        "dc_NACE_BASLIK": "Elektronik cihaz ve parçalarının toptan ticareti (elektronik valfler, tüpler, yarı iletken cihazlar, mikroçipler, entegre devreler, baskılı devreler, vb.) (seyrüsefer cihazları hariç)"
    },
    {
        "ID": 1855,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "46.52.04",
        "dc_NACE_BASLIK": "Boş ses ve görüntü kaset ve disketleri ile manyetik ve optik disk, CD ve DVD toptan ticareti"
    },
    {
        "ID": 1856,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "46.52.05",
        "dc_NACE_BASLIK": "Yön bulma pusulaları ve diğer seyrüsefer alet ve cihazlarının toptan ticareti"
    },
    {
        "ID": 1857,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "47.42.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda telekomünikasyon teçhizatının perakende ticareti (telefon, cep telefonu, faks vb.)"
    },
    {
        "ID": 1858,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "47.89.05",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla elektrikli alet, cihaz ve elektrik malzemeleri ile el aletleri perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 1859,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.10.15",
        "dc_NACE_BASLIK": "Kablolu telekomünikasyon faaliyetleri (kablolu ağlar üzerinden internet erişiminin sağlanması hariç)"
    },
    {
        "ID": 1860,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.10.17",
        "dc_NACE_BASLIK": "Kablolu ağlar üzerinden internet erişiminin sağlanması"
    },
    {
        "ID": 1861,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.20.02",
        "dc_NACE_BASLIK": "Kablosuz telekomünikasyon faaliyetleri (kablosuz ağlar üzerinden internet erişiminin sağlanması ve uydu üzerinden yapılanlar hariç)"
    },
    {
        "ID": 1862,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.20.03",
        "dc_NACE_BASLIK": "Kablosuz ağlar üzerinden internet erişiminin sağlanması"
    },
    {
        "ID": 1863,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.30.01",
        "dc_NACE_BASLIK": "Uydu üzerinden telekomünikasyon faaliyetleri"
    },
    {
        "ID": 1864,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.90.04",
        "dc_NACE_BASLIK": "Telekomünikasyon uygulamalarına yönelik radar istasyonlarının işletilmesi"
    },
    {
        "ID": 1865,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.90.07",
        "dc_NACE_BASLIK": "Telekomünikasyon hizmeti yeniden satıcılarının faaliyetleri"
    },
    {
        "ID": 1866,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "61.90.90",
        "dc_NACE_BASLIK": "Bys. diğer telekomünikasyon faaliyetleri (uydudan izleme, iletişim telemetresi vb. uzmanlık gerektiren telekomünikasyon uygulamalarının sağlanması, çevrim içi internet erişimi sağlanması, VOIP sağlanması, vb.)"
    },
    {
        "ID": 1867,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "80.20.01",
        "dc_NACE_BASLIK": "Güvenlik sistemleri hizmet faaliyetleri (hırsız ve yangın alarmı, elektronik kasa gibi güvenlik sistemlerinin kontrolü, kurulumu, bakımı, alınan alarm sinyali ile sistemin doğrulanması ve polis, itfaiye gibi birimlerin harekete geçirilmesi)"
    },
    {
        "ID": 1868,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "82.20.01",
        "dc_NACE_BASLIK": "Çağrı merkezlerinin faaliyetleri"
    },
    {
        "ID": 1869,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "82.99.06",
        "dc_NACE_BASLIK": "Telefona dayalı destek faaliyetleri (telefon cevaplama ve uyandırma hizmetleri)"
    },
    {
        "ID": 1870,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "95.12.01",
        "dc_NACE_BASLIK": "İletişim araç ve gereçlerinin onarımı (kablosuz telefonlar, telsizler, cep telefonları, çağrı cihazları, ticari kameralar vb.)"
    },
    {
        "ID": 1871,
        "dc_MESLEK_GRUBU": "67",
        "dc_MESLEK_GRUBU_ADI": "TELEKOMÜNİKASYON",
        "dc_NACE_KODU": "95.21.01",
        "dc_NACE_BASLIK": "Tüketici elektroniği ürünlerinin bakım ve onarımı (televizyon, radyo, CD/DVD oynatıcıları, ev tipi video kameraları vb.)"
    },
    {
        "ID": 1872,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "16.29.04",
        "dc_NACE_BASLIK": "Ahşaptan iş aletleri, alet gövdeleri, alet sapları, süpürge veya fırça gövdeleri ile sapları, ayakkabı kalıpları, ahşap mandal, elbise ve şapka askıları imalatı"
    },
    {
        "ID": 1873,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "20.16.01",
        "dc_NACE_BASLIK": "Birincil formda poliamitler, üre reçineleri, melamin reçineleri, vb. plastik hammaddelerin imalatı"
    },
    {
        "ID": 1874,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "20.16.02",
        "dc_NACE_BASLIK": "Birincil formda alkid reçine, polyester reçine, epoksi reçine, poliasetal, polikarbonat ile diğer polieter ve polyester imalatı"
    },
    {
        "ID": 1875,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "20.16.03",
        "dc_NACE_BASLIK": "Birincil formda polimerlerin imalatı (etilen, propilen, stiren, vinil klorür, vinil asetat, vinil esterleri, akrilik vb. polimerleri ile sertleştirilmiş proteinler, doğal kauçuğun kimyasal türevleri dahil)"
    },
    {
        "ID": 1876,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "20.17.01",
        "dc_NACE_BASLIK": "Birincil formda sentetik kauçuk imalatı"
    },
    {
        "ID": 1877,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.11.17",
        "dc_NACE_BASLIK": "Kauçuktan iç lastiklerin imalatı (dış lastikler için değişebilir sırtlar, kolonlar ve şeritlerin imalatı dahil)"
    },
    {
        "ID": 1878,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.11.18",
        "dc_NACE_BASLIK": "Kauçuktan dış lastik imalatı (motosikletler, bisikletler, otomobiller, otobüsler, kamyonlar, hava taşıtları, traktörler ve diğer araç ve donanımlar için) (dolgu veya alçak basınçlı lastikler dahil)"
    },
    {
        "ID": 1879,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.11.19",
        "dc_NACE_BASLIK": "Lastik tekerleklerinin yeniden işlenmesi ve sırt geçirilmesi (lastiğin kaplanması)"
    },
    {
        "ID": 1880,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.01",
        "dc_NACE_BASLIK": "Kauçuktan hijyenik ve eczacılık ürünlerinin imalatı (prezervatifler, emzikler, hijyenik eldivenler vb. dahil)"
    },
    {
        "ID": 1881,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.02",
        "dc_NACE_BASLIK": "Kauçuktan tüp, boru ve hortumların imalatı (vulkanize kauçuktan)"
    },
    {
        "ID": 1882,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.03",
        "dc_NACE_BASLIK": "Kauçuktan giyim eşyası ve giysi aksesuarlarının imalatı (giysiler, eldivenler vb.)"
    },
    {
        "ID": 1883,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.04",
        "dc_NACE_BASLIK": "Kauçuktan süpürgelerin ve fırçaların imalatı"
    },
    {
        "ID": 1884,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.06",
        "dc_NACE_BASLIK": "Kauçuktan yer döşemeleri ve paspasların imalatı"
    },
    {
        "ID": 1885,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.07",
        "dc_NACE_BASLIK": "Kauçuk kaplanmış, emdirilmiş, sıvanmış ve lamine edilmiş tekstil kumaşlarının imalatı, ana bileşeni kauçuk olanlar (kord bezi hariç)"
    },
    {
        "ID": 1886,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.08",
        "dc_NACE_BASLIK": "Kauçuktan paket lastiği, tütün kesesi, cam silecekleri, tarih ıstampaları için karakterler, tapalar, lavabo pompaları, şişeler için tıpa ve halkalar ile sert kauçuktan diğer çeşitli eşyaların imalatı"
    },
    {
        "ID": 1887,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.09",
        "dc_NACE_BASLIK": "Kauçuktan konveyör bantları ve taşıma kayışlarının imalatı"
    },
    {
        "ID": 1888,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.10",
        "dc_NACE_BASLIK": "Rejenere kauçuk imalatı, birincil formda veya levha, tabaka veya şerit halinde"
    },
    {
        "ID": 1889,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.12",
        "dc_NACE_BASLIK": "Kauçuktan silgi, rondela, conta, tekne veya iskele usturmaçaları, gözenekli vulkanize kauçuktan teknik işlerde kullanılan diğer eşyalar ile demiryolu, kara yolu taşıtları ve diğer araçlar için kalıplanmış parçaların imalatı"
    },
    {
        "ID": 1890,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.19.13",
        "dc_NACE_BASLIK": "Vulkanize edilmiş (kükürtle sertleştirilmiş) kauçuk imalatı (ip, kordon, levha, tabaka, şerit, çubuk ve profil halinde)"
    },
    {
        "ID": 1891,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.21.03",
        "dc_NACE_BASLIK": "Plastikten mamul halde tüp, boru, hortum ve bunların bağlantı elemanlarının imalatı (suni bağırsaklar dahil)"
    },
    {
        "ID": 1892,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.21.04",
        "dc_NACE_BASLIK": "Plastikten yarı mamul halde profil, çubuk, tabaka, levha, blok, film, folyo, şerit, vb. ile monofilament imalatı (naylon brandalar dahil)"
    },
    {
        "ID": 1893,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.22.43",
        "dc_NACE_BASLIK": "Plastik poşet, çöp torbası, çanta, torba, çuval, file, sandık, kutu, kasa, damacana, şişe, bidon, makara, masura, bobin, tıpa, kapak, kapsül vb. paketleme malzemelerinin imalatı (idrar torbası dahil)"
    },
    {
        "ID": 1894,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.23.03",
        "dc_NACE_BASLIK": "Plastikten depo, tank, fıçı ve benzeri kapların imalatı"
    },
    {
        "ID": 1895,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.23.04",
        "dc_NACE_BASLIK": "Plastikten prefabrik yapıların imalatı"
    },
    {
        "ID": 1896,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.23.05",
        "dc_NACE_BASLIK": "Vinil, linolyum (muşamba) gibi esnek yer kaplamaları ile plastik zemin, duvar ve tavan kaplamalarının imalatı (duvar kağıdı hariç)"
    },
    {
        "ID": 1897,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.23.06",
        "dc_NACE_BASLIK": "Plastikten merdiven, merdiven korkuluğu, panjur, güneşlik, jaluzi, stor, vb. eşya ile bunların parçalarının imalatı"
    },
    {
        "ID": 1898,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.23.07",
        "dc_NACE_BASLIK": "Plastikten banyo küvetleri, lavabolar, klozet kapakları, oturakları ve rezervuarları ile benzeri sıhhi ürünlerin imalatı (kalıcı tesisat için kullanılan montaj ve bağlantı parçaları dahil)"
    },
    {
        "ID": 1899,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.23.08",
        "dc_NACE_BASLIK": "Plastikten/PVC'den kapı, pencere, bunların kasaları, pervazları, kapı eşikleri, vb. imalatı"
    },
    {
        "ID": 1900,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.23.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış plastik inşaat malzemelerinin imalatı (plastik suni taş-mermerit imalatı)"
    },
    {
        "ID": 1901,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.29.01",
        "dc_NACE_BASLIK": "Plastikten sofra, mutfak, banyoda kullanılan eşya (silikon kek kalıbı, leğen, tas, kova vb.) ve diğer ev eşyası imalatı"
    },
    {
        "ID": 1902,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.29.03",
        "dc_NACE_BASLIK": "Plastikten büro ve okul malzemelerinin imalatı"
    },
    {
        "ID": 1903,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.29.05",
        "dc_NACE_BASLIK": "Makine, mobilya, kaporta, el aletleri ve benzerlerinin plastikten bağlantı parçaları, plastikten taşıyıcı bantların ve konveyör bantlarının imalatı"
    },
    {
        "ID": 1904,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.29.06",
        "dc_NACE_BASLIK": "Plastik başlık (koruma amaçlı olanlar hariç), izolasyon bağlantı parçaları ile lambaların, aydınlatma ekipmanlarının, ışıklı tabelaların, vb.nin başka yerde sınıflandırılmamış plastik kısımlarının imalatı"
    },
    {
        "ID": 1905,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.29.07",
        "dc_NACE_BASLIK": "Plastikten mandal, askı, sünger, sabunluk, tarak,bigudi, toka, saç firketesi, boncuk, biblo, heykelcik ve diğer eşyalar ile mamul haldeki kendinden yapışkanlı levha, şerit vb. ürünlerin imalatı"
    },
    {
        "ID": 1906,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "22.29.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer plastik ürünlerin imalatı"
    },
    {
        "ID": 1907,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "25.73.05",
        "dc_NACE_BASLIK": "Plastikten kalıp ve döküm modeli imalatı (kek ve ayakkabı kalıpları hariç)"
    },
    {
        "ID": 1908,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "27.33.02",
        "dc_NACE_BASLIK": "Kablolamada kullanılan gereçlerin imalatı (fiş, soket, baskılı, düğmeli vb. anahtar, priz, duy, plastikten elektrik boru ve kablo tablaları, makine ve cihazları izole edici plastik bağlantı parçaları, vb.) (elektronik bileşenlerde kullanılanlar hariç)"
    },
    {
        "ID": 1909,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "31.09.08",
        "dc_NACE_BASLIK": "Plastikten bank, masa, tabure, sandalye vb. mobilyaların imalatı"
    },
    {
        "ID": 1910,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "32.40.10",
        "dc_NACE_BASLIK": "Tekerlekli oyuncaklar, oyuncak bebek arabaları, oyuncak trenler ve diğer küçültülmüş boyutlu modeller/maketler veya inşaat oyun takımları, yarış setleri imalatı (motorlu olanlar, pres döküm oyuncaklar ve plastik diğer oyuncaklar dahil)"
    },
    {
        "ID": 1911,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "32.91.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer süpürge ve fırçaların imalatı (elektrikli olanlar hariç)"
    },
    {
        "ID": 1912,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "32.99.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer imalatlar (bağırsak (ipek böceği guddesi hariç), kursak ve mesaneden mamul eşyalar dahil, tıbbi amaçlı steril olanlar hariç)"
    },
    {
        "ID": 1913,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "46.49.17",
        "dc_NACE_BASLIK": "Plastik sofra, mutfak ve diğer ev eşyası ile tuvalet eşyası toptan ticareti (plastik tepsi, bardak, tabak, poşet, sünger vb.)"
    },
    {
        "ID": 1914,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "46.73.15",
        "dc_NACE_BASLIK": "Plastik kapı, pencere ve bunların kasaları ile kapı eşikleri, panjurlar, jaluziler, storlar ve benzeri eşyaların toptan ticareti"
    },
    {
        "ID": 1915,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "46.73.17",
        "dc_NACE_BASLIK": "Plastikten prefabrik yapılar ve yapı elemanlarının toptan ticareti"
    },
    {
        "ID": 1916,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "46.73.20",
        "dc_NACE_BASLIK": "Plastikten inşaat amaçlı tabakalar, levhalar, filmler, folyolar, şeritler ve borular ile asfalt vb. malzemeden çatı kaplama ürünlerinin toptan ticareti (inşaat, sera vb. için naylon örtü, shingle, mantolama amaçlı strafor, vb. dahil)"
    },
    {
        "ID": 1917,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "46.76.04",
        "dc_NACE_BASLIK": "Birincil formdaki plastik ve kauçuk toptan ticareti (etilen, stiren, vinil klorür, akrilik, vb. polimerler ile birincil formda sentetik ve rejenere kauçuklar)"
    },
    {
        "ID": 1918,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "46.76.05",
        "dc_NACE_BASLIK": "Sanayide kullanım amaçlı plastik poşet, çanta, torba, çuval, vb. ambalaj malzemelerinin toptan ticareti"
    },
    {
        "ID": 1919,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "47.52.09",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda plastik kapı, pencere ve bunların kasaları ile kapı eşikleri, panjurlar, jaluziler, storlar ve benzeri eşyaların perakende ticareti (PVC olanlar dahil)"
    },
    {
        "ID": 1920,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "47.52.21",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda plastikten inşaat amaçlı levhalar, folyolar, şeritler ve borular ile asfalt vb. malzemeden çatı kaplama ürünlerinin perakende ticareti (inşaat için naylon örtü, shıngle, mantolama amaçlı strafor vb. dahil)"
    },
    {
        "ID": 1921,
        "dc_MESLEK_GRUBU": "68",
        "dc_MESLEK_GRUBU_ADI": "PLASTİK VE KAUÇUK",
        "dc_NACE_KODU": "47.59.07",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda plastikten sofra, mutfak, tuvalet ve diğer ev eşyalarının perakende ticareti (plastikten tabak, bardak, torba, kutu, şişe, matara, makara, bobin, mobilya parçaları, vb. dahil)"
    },
    {
        "ID": 1922,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "10.41.03",
        "dc_NACE_BASLIK": "Beziryağı imalatı"
    },
    {
        "ID": 1923,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "19.20.16",
        "dc_NACE_BASLIK": "Petrolden madeni yağların (yağlama ve makine yağları) imalatı (gres yağı dahil)"
    },
    {
        "ID": 1924,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "19.20.17",
        "dc_NACE_BASLIK": "Vazelin, parafin mumu, petrol mumu, petrol koku, petrol bitümeni ve diğer petrol ürünlerinin imalatı"
    },
    {
        "ID": 1925,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "19.20.19",
        "dc_NACE_BASLIK": "Ağırlık itibariyle %70 veya daha fazla oranda petrol yağları veya bitümenli yağlardan elde edilen diğer karışımların üretimi (%70 petrol yağı ile karıştırılmış biyodizelden ürünler dahil, madeni yağlar hariç)"
    },
    {
        "ID": 1926,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.11.01",
        "dc_NACE_BASLIK": "Sanayi gazları imalatı (hidrojen, asal gazlar, azot, oksijen, karbondioksit ve ametallerin diğer inorganik oksijen bileşikleri, soğutucu-dondurucu gazlar ile hava gibi sıvı veya sıkıştırılmış inorganik sanayi gazları ve tıbbi gazlar)"
    },
    {
        "ID": 1927,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.12.01",
        "dc_NACE_BASLIK": "Boya maddeleri ve pigment imalatı (birincil formda veya konsantre olarak herhangi bir kaynaktan) (hazır boyalar hariç)"
    },
    {
        "ID": 1928,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.12.02",
        "dc_NACE_BASLIK": "Tabaklanma ekstreleri, bitkisel kökenli; tanenler ve tuzları, eterleri, esterleri ve diğer türevleri; bitkisel veya hayvansal kökenli renklendirme maddelerinin imalatı"
    },
    {
        "ID": 1929,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.13.02",
        "dc_NACE_BASLIK": "Metalik halojenler, hipokloritler, kloratlar ve perkloratların imalatı (çamaşır suyu dahil)"
    },
    {
        "ID": 1930,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.13.03",
        "dc_NACE_BASLIK": "Sülfidler (sülfürler), sülfatlar, fosfinatlar, fosfonatlar, fosfatlar ve nitratların imalatı (şap dahil)"
    },
    {
        "ID": 1931,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.13.04",
        "dc_NACE_BASLIK": "Karbonatların imalatı (sodyum, kalsiyum ve diğerleri) (çamaşır sodası dahil)"
    },
    {
        "ID": 1932,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.13.07",
        "dc_NACE_BASLIK": "Diğer metal tuzları ve temel inorganik kimyasalların imalatı (izotoplar ve bunların bileşikleri, oksometalik/peroksometalik asitlerin tuzları, siyanürler, boratlar, hidrojen peroksit, kükürt, kavrulmuş demir piritler, piezo-elektrik kuvarsı vb.)"
    },
    {
        "ID": 1933,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.13.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış kimyasal elementler, inorganik asitler ve bileşiklerin imalatı (klor, iyot, flor, bor, silisyum, fosfor, arsenik gibi metaloidler, skandium, cıva, oksitler, hidroksitler, hidrojen klorür vb.)"
    },
    {
        "ID": 1934,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.14.01",
        "dc_NACE_BASLIK": "Temel organik kimyasalların imalatı (hidrokarbonlar, alkoller, asitler, aldehitler, ketonlar, sentetik gliserin, azot fonksiyonlu bileşikler vb.) (etil alkol, sitrik asit dahil)"
    },
    {
        "ID": 1935,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.14.05",
        "dc_NACE_BASLIK": "Tabi reçine ve türevleri,kolofanlar,kolofanın modifikasyon ve estrifikasyon ürünleri, çam terebentin ve çam terebentin esansları ile doğal zamk imalatı"
    },
    {
        "ID": 1936,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.15.01",
        "dc_NACE_BASLIK": "Fosfatlı veya potasyumlu gübreler, iki (azot ve fosfor veya fosfor ve potasyum) veya üç besin maddesi (azot, fosfor ve potasyum) içeren gübreler, sodyum nitrat ile diğer kimyasal ve mineral gübrelerin imalatı"
    },
    {
        "ID": 1937,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.15.02",
        "dc_NACE_BASLIK": "Bileşik azotlu ürünlerin imalatı (nitrik asit, sülfonitrik asit, saf amonyak, amonyum klorür (nişadır), amonyum karbonat, nitritler, potasyum nitratlar vb.) (gübreler hariç)"
    },
    {
        "ID": 1938,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.16.04",
        "dc_NACE_BASLIK": "Birincil formda silikon ve polimer esaslı iyon değiştiricileri imalatı"
    },
    {
        "ID": 1939,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.16.05",
        "dc_NACE_BASLIK": "Birincil formda diğer amino reçineler, fenolik reçineler, poliüretanlar, politerpenler, polisülfürler, selüloz ve kimyasal türevleri ile diğer petrol reçineleri imalatı"
    },
    {
        "ID": 1940,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.20.11",
        "dc_NACE_BASLIK": "Böcek ilacı, kemirgen ilacı, küf ve mantar ilacı, yabancı otla mücadele ilacı imalatı"
    },
    {
        "ID": 1941,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.20.12",
        "dc_NACE_BASLIK": "Dezenfektan imalatı (tarımsal ve diğer kullanımlar için) (hijyenik maddeler, bakteriostatlar ve sterilize ediciler dahil)"
    },
    {
        "ID": 1942,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.20.13",
        "dc_NACE_BASLIK": "Çimlenmeyi önleyici ve bitki gelişimini düzenleyici ürün imalatı"
    },
    {
        "ID": 1943,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.20.14",
        "dc_NACE_BASLIK": "Diğer zirai kimyasal ürünlerin imalatı (gübre ve azotlu bileşik imalatı hariç)"
    },
    {
        "ID": 1944,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.30.11",
        "dc_NACE_BASLIK": "Boya ve vernikler, akrilik ve vinil polimer esaslı olanların (sulu ortamda dağılanlar, çözülenler ve çözeltiler) imalatı"
    },
    {
        "ID": 1945,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.30.12",
        "dc_NACE_BASLIK": "Macun imalatı (dolgu, cam, sıvama için olanlar ile üstübeç, vb. dahil)"
    },
    {
        "ID": 1946,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.30.13",
        "dc_NACE_BASLIK": "Diğer boya, vernik ve ilgili ürünlerin imalatı (renk ayarlayıcılar, matbaa mürekkepleri, solventler, incelticiler (tiner))"
    },
    {
        "ID": 1947,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.30.14",
        "dc_NACE_BASLIK": "Boya ve vernikler, polyester, akrilik ve vinil polimer esaslı olanların (susuz ortamda dağılanlar, çözülenler ve çözeltiler) imalatı"
    },
    {
        "ID": 1948,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.30.15",
        "dc_NACE_BASLIK": "Hazır boya pigmentleri, matlaştırıcılar (opaklaştırıcı) ve renklendiriciler, camlaştırılabilir emay ve sırlar, astarlar, cam firit, sıvı cilalar ve benzerlerin imalatı"
    },
    {
        "ID": 1949,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.30.16",
        "dc_NACE_BASLIK": "Boya müstahzarları hazır kurutucu maddelerin imalatı"
    },
    {
        "ID": 1950,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.41.01",
        "dc_NACE_BASLIK": "Kapalı alanlar için kokulu müstahzarlar ve koku gidericiler ile suni mumların imalatı (kişisel kullanım için olanlar hariç)"
    },
    {
        "ID": 1951,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.41.03",
        "dc_NACE_BASLIK": "Ham gliserin (gliserol) imalatı"
    },
    {
        "ID": 1952,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.41.04",
        "dc_NACE_BASLIK": "Sabun, yıkama ve temizleme müstahzarları (deterjanlar) ile sabun olarak kullanılan müstahzarlar imalatı (kişisel bakım için olanlar ile ovalama toz ve kremleri hariç)"
    },
    {
        "ID": 1953,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.41.06",
        "dc_NACE_BASLIK": "Cila, krem ve ovalama krem ve tozlarının imalatı (ayakkabı, mobilya, yer döşemesi, kaporta, cam, metal vb. için)"
    },
    {
        "ID": 1954,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.51.21",
        "dc_NACE_BASLIK": "Barut, vb. itici tozların imalatı"
    },
    {
        "ID": 1955,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.51.22",
        "dc_NACE_BASLIK": "Hazır patlayıcılar, emniyet fitilleri, çarpma kapsülleri, infilak fitilleri, ateşleyiciler, dinamit, elektrikli kapsüller, havai fişekler, sis işaretleri, işaret fişekleri, vb. patlayıcı veya piroteknik malzeme imalatı (barut hariç)"
    },
    {
        "ID": 1956,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.51.23",
        "dc_NACE_BASLIK": "Kibrit imalatı"
    },
    {
        "ID": 1957,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.52.05",
        "dc_NACE_BASLIK": "Tutkal imalatı (kazein esaslı, hayvansal esaslı, nişasta esaslı, kauçuk esaslı, plastik esaslı, polimer esaslı vb. olanlar)"
    },
    {
        "ID": 1958,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.53.02",
        "dc_NACE_BASLIK": "Uçucu yağların imalatı"
    },
    {
        "ID": 1959,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.03",
        "dc_NACE_BASLIK": "Aktif karbon imalatı"
    },
    {
        "ID": 1960,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.04",
        "dc_NACE_BASLIK": "Yağlama müstahzarları (hidrolik fren sıvıları dahil), vuruntu önleyici müstahzarlar ile katkı maddeleri ve antifrizlerin imalatı"
    },
    {
        "ID": 1961,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.05",
        "dc_NACE_BASLIK": "Yazım ve çizim mürekkepleri ve diğer mürekkeplerin imalatı (matbaa mürekkebi imalatı hariç)"
    },
    {
        "ID": 1962,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.07",
        "dc_NACE_BASLIK": "Dişçilik mumları ve alçıya dayalı diğer müstahzarlar, laboratuvar için hazır kültür ortamları, model hamurları, kompozit diyagnostik reaktifler veya laboratuvar reaktifleri imalatı"
    },
    {
        "ID": 1963,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.08",
        "dc_NACE_BASLIK": "Elektronikte kullanılan macun kıvamında (dope edilmiş) olan kimyasal elementler ile bileşiklerin imalatı"
    },
    {
        "ID": 1964,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.09",
        "dc_NACE_BASLIK": "Bitirme (apreleme dahil) maddeleri, boya hammaddesi ve benzeri ürünlerin sabitlenmesini veya boyayıcılığını hızlandıran boya taşıyıcı maddelerin imalatı"
    },
    {
        "ID": 1965,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.10",
        "dc_NACE_BASLIK": "Dekapaj (temizleme) müstahzarları, eritkenler, hazır vulkanizasyon hızlandırıcı maddeler, kauçuk veya plastikler için plastikleştirici bileşikler ve stabilizatörler, başka yerde sınıflandırılmamış katalitik müstahzarlar imalatı"
    },
    {
        "ID": 1966,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.11",
        "dc_NACE_BASLIK": "Jelatin ve jelatin türevleri ile süt albüminlerinin imalatı (gıda endüstrisinde kullanılan jelatinler ve süt albüminleri hariç)"
    },
    {
        "ID": 1967,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.12",
        "dc_NACE_BASLIK": "Kimyasal olarak değiştirilmiş veya yenilemeyen hayvansal veya bitkisel katı ve sıvı yağlar ve yağ karışımlarının imalatı (linoksin, teknik ve sanayi amaçlı bitkisel sabit sıvı yağlar, sanayide kullanılan sıvı yağlar, vb.)"
    },
    {
        "ID": 1968,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.13",
        "dc_NACE_BASLIK": "Biyodizel, vb. biyoyakıt imalatı (bitkisel veya hayvansal yağlardan elde edilen uzun zincirli yağ asitlerinin mono alkil esterleri) (%70 veya daha fazla petrol yağı ile karıştırılmış biyodizelden ürünler hariç)"
    },
    {
        "ID": 1969,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.14",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer kimyasal ürünlerin imalatı (vakum tüpleri için emiciler, pirolinyitler, kazan taşı önleyici bileşikler, yağ emülsiyonlaştırıcıları, dökümhanelerde kullanılan yardımcı kimyasal ürünler ve  hazır bağlayıcılar, vb.)"
    },
    {
        "ID": 1970,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "20.59.15",
        "dc_NACE_BASLIK": "Yangın söndürücü müstahzarları ve dolum malzemeleri imalatı"
    },
    {
        "ID": 1971,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "25.61.01",
        "dc_NACE_BASLIK": "Metallerin ısıl işlem ve anodlama, sertleştirme, vernikleme, vb. yüzey işlemleri, elektroliz, çinkoyla galvanizleme veya kimyasal işlemlerle metalik kaplama (kalay ve nikel kaplama hariç) ve plastik, teflon, vb. metal dışı malzemelerle kaplama faaliyeti"
    },
    {
        "ID": 1972,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "25.61.02",
        "dc_NACE_BASLIK": "Metallerin kalay ile kaplanması (kalaycılık) faaliyeti"
    },
    {
        "ID": 1973,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "25.61.03",
        "dc_NACE_BASLIK": "Metallerin nikel ile kaplanması (nikelajcılık) faaliyeti"
    },
    {
        "ID": 1974,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "32.99.14",
        "dc_NACE_BASLIK": "Tebeşir imalatı (yazı, çizim veya terzi tebeşiri)"
    },
    {
        "ID": 1975,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "32.99.15",
        "dc_NACE_BASLIK": "Suni balmumu ile suni mumların ve müstahzar mumların imalatı"
    },
    {
        "ID": 1976,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "32.99.17",
        "dc_NACE_BASLIK": "Sigara çakmakları ve diğer çakmaklar ile çabuk tutuşan (piroforik) alaşımların imalatı (çakmaklar için kap hacmi ? 300cm3 sıvı veya sıvılaştırılmış gaz yakıtları dahil)"
    },
    {
        "ID": 1977,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "43.99.12",
        "dc_NACE_BASLIK": "Yapıların dış cepheleri için buharlı temizleme, kum püskürtme ve benzeri uzmanlaşmış inşaat faaliyetleri"
    },
    {
        "ID": 1978,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.12.01",
        "dc_NACE_BASLIK": "Katı, sıvı ve gaz haldeki yakıtların ve ilgili ürünlerin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar (motorlu taşıt yakıtları dahil)"
    },
    {
        "ID": 1979,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.12.02",
        "dc_NACE_BASLIK": "Endüstriyel kimyasallar, gübreler ve zirai kimyasal ürünlerin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 1980,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.12.03",
        "dc_NACE_BASLIK": "Birincil formdaki metaller ve metal cevherlerinin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar (inşaat demiri dahil)"
    },
    {
        "ID": 1981,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.44.04",
        "dc_NACE_BASLIK": "Cila ve krem (ayakkabı, mobilya, yer döşemesi, kaporta, cam veya metal için) toptan ticareti"
    },
    {
        "ID": 1982,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.73.02",
        "dc_NACE_BASLIK": "Boya, vernik ve lak toptan ticareti"
    },
    {
        "ID": 1983,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.75.01",
        "dc_NACE_BASLIK": "Endüstriyel kimyasalların toptan ticareti (anilin, matbaa mürekkebi, kimyasal yapıştırıcı, havai fişek, boyama maddeleri, sentetik reçine, metil alkol, parafin, esans ve tatlandırıcı, soda, sanayi tuzu, parafin, nitrik asit, amonyak, sanayi gazları vb.)"
    },
    {
        "ID": 1984,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.75.02",
        "dc_NACE_BASLIK": "Suni gübrelerin toptan ticareti (gübre mineralleri, gübre ve azot bileşikleri ve turba ile amonyum sülfat, amonyum nitrat, sodyum nitrat, potasyum nitrat vb. dahil, nitrik asit, sülfonitrik asit ve amonyak hariç)"
    },
    {
        "ID": 1985,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.75.03",
        "dc_NACE_BASLIK": "Hayvansal veya bitkisel gübrelerin toptan ticareti (kapalı alanda yapılan ticaret)"
    },
    {
        "ID": 1986,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.75.04",
        "dc_NACE_BASLIK": "Zirai kimyasal ürünlerin toptan ticareti (haşere ilaçları, yabancı ot ilaçları, dezenfektanlar, mantar ilaçları, çimlenmeyi önleyici ürünler, bitki gelişimini düzenleyiciler ve diğer zirai kimyasal ürünler)"
    },
    {
        "ID": 1987,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "46.75.05",
        "dc_NACE_BASLIK": "Hayvansal veya bitkisel gübrelerin toptan ticareti (açık alanda yapılan ticaret)"
    },
    {
        "ID": 1988,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "47.52.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda boya, vernik ve lak perakende ticareti"
    },
    {
        "ID": 1989,
        "dc_MESLEK_GRUBU": "69",
        "dc_MESLEK_GRUBU_ADI": "KİMYEVİ MADDE",
        "dc_NACE_KODU": "47.76.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda gübre ve zirai kimyasal ürünlerin perakende ticareti (turba, kimyasal gübreler, hayvansal veya bitkisel gübreler, haşere ilaçları, yabancı ot ilaçları vb.)"
    },
    {
        "ID": 1990,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "02.40.01",
        "dc_NACE_BASLIK": "Ormanda ağaçların kesilmesi, dallarından temizlenmesi, soyulması vb. destekleyici faaliyetler"
    },
    {
        "ID": 1991,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "02.40.02",
        "dc_NACE_BASLIK": "Ormanda kesilmiş ve temizlenmiş ağaçların taşınması, istiflenmesi ve yüklenmesi faaliyetleri"
    },
    {
        "ID": 1992,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.10.01",
        "dc_NACE_BASLIK": "Kereste imalatı (ağaçların biçilmesi, planyalanması, rendelenmesi ve şekillendirilmesi faaliyetleri)"
    },
    {
        "ID": 1993,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.10.02",
        "dc_NACE_BASLIK": "Ahşap demir yolu veya tramvay traversi imalatı"
    },
    {
        "ID": 1994,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.10.03",
        "dc_NACE_BASLIK": "Ağaç yünü, ağaç unu, ağaç talaşı, ağaç yonga imalatı"
    },
    {
        "ID": 1995,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.10.06",
        "dc_NACE_BASLIK": "Tomruk ve kerestelerin kurutulması, emprenye edilmesi veya kimyasal işlemden geçirilmesi hizmetleri (başkalarının adına olanlar)"
    },
    {
        "ID": 1996,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.21.01",
        "dc_NACE_BASLIK": "Ahşap, bambu ve diğer odunsu malzemelerden kaplamalık plaka, levha, vb. imalatı (yaprak halde) (preslenmemiş)"
    },
    {
        "ID": 1997,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.21.02",
        "dc_NACE_BASLIK": "Sıkıştırılmış lif, tahta ve tabakalardan kontrplak, mdf, sunta, vb. levha imalatı"
    },
    {
        "ID": 1998,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.22.01",
        "dc_NACE_BASLIK": "Birleştirilebilir ahşap parke yer döşemelerinin imalatı (lamine ve laminat parkeler hariç)"
    },
    {
        "ID": 1999,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.23.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış inşaat doğrama ve marangozluk ürünleri (ahşaptan kiriş, kalas, payanda, beton kalıbı, çatı padavrası, vb.) imalatı"
    },
    {
        "ID": 2000,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.24.01",
        "dc_NACE_BASLIK": "Kutu, sandık, fıçı ve benzeri ahşap ambalaj malzeme imalatı"
    },
    {
        "ID": 2001,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.24.02",
        "dc_NACE_BASLIK": "Palet, kutu palet ve diğer ahşap yükleme tablaları imalatı"
    },
    {
        "ID": 2002,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.24.03",
        "dc_NACE_BASLIK": "Ahşap kablo makarası, bobin, takoz, vb. imalatı"
    },
    {
        "ID": 2003,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.29.02",
        "dc_NACE_BASLIK": "Doğal mantar (kabaca köşelendirilmiş veya blok, levha vb. halde), ezilmiş veya granül haline getirilmiş mantar ile doğal mantar veya aglomera mantar ürünlerinin imalatı (mantardan yer döşemeleri, makara, tıpa ve tıkaç dahil)"
    },
    {
        "ID": 2004,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.29.05",
        "dc_NACE_BASLIK": "Ahşap çerçeve (tablo, fotoğraf, ayna ve benzeri nesneler için) ve ahşaptan diğer eşyaların imalatı (panolar, tuval için çerçeveler, ip vb. için makaralar, ayakkabının ahşap topuk ve tabanları, arı kovanları, köpek kulübeleri dahil)"
    },
    {
        "ID": 2005,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "16.29.07",
        "dc_NACE_BASLIK": "Hasır veya diğer örme malzemesinden (kamış, saz, saman vb.) eşyaların imalatı ile sepet türü ve hasır işi eşyaların imalatı"
    },
    {
        "ID": 2006,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "46.13.02",
        "dc_NACE_BASLIK": "Kereste ve kereste ürünlerinin bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 2007,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "46.73.01",
        "dc_NACE_BASLIK": "Ağacın ilk işlenmesinden elde edilen ürünlerin toptan ticareti (kereste, ağaç yünü, talaş ve yongası, demir yolu ve tramvay traversleri, kontrplak, yonga ve lifli levhalar (mdf, sunta vb.), parke panel, ahşap varil, fıçı ve diğer muhafazalar, vb.)"
    },
    {
        "ID": 2008,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "46.73.12",
        "dc_NACE_BASLIK": "İşlenmemiş ağaç (tomruk-ham haldeki) toptan ticareti (orman ağaçları, endüstriyel odunlar vb.)"
    },
    {
        "ID": 2009,
        "dc_MESLEK_GRUBU": "70",
        "dc_MESLEK_GRUBU_ADI": "ORMAN ÜRÜNLERİ",
        "dc_NACE_KODU": "47.52.10",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ağacın ilk işlenmesinden elde edilen ürünlerin perakende ticareti (kereste, ağaç talaşı ve yongası, kontrplak, yonga ve lifli levhalar (mdf, sunta vb.), parke, ahşap varil, fıçı ve diğer muhafazalar, vb.)"
    },
    {
        "ID": 2010,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.01.01",
        "dc_NACE_BASLIK": "Büro, okul, ibadethane, otel, lokanta, sinema, tiyatro vb. kapalı alanlar için mobilya imalatı (taş, beton, seramikten olanlar hariç) (vestiyer, dosya dolapları, mihraplar, minberler, kürsüler, öğrenci sıraları, büro tipi sandalye ve koltuklar, vb.)"
    },
    {
        "ID": 2011,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.01.02",
        "dc_NACE_BASLIK": "Laboratuvarlar ve teknik bürolar için tezgahların ve mobilyaların imalatı (mikroskop masaları, laboratuvar masaları (vitrinli, gaz memeli, musluk tertibatlı, vb. olsun olmasın), çeker ocaklar, teçhizatsız çizim masaları, vb.)"
    },
    {
        "ID": 2012,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.01.03",
        "dc_NACE_BASLIK": "Mağazalar için tezgah, banko, vitrin, raf, çekmeceli dolap vb. özel mobilya imalatı (laboratuvarlar ve teknik bürolar için olanlar hariç)"
    },
    {
        "ID": 2013,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.01.04",
        "dc_NACE_BASLIK": "Büro mobilyalarının iskeletlerinin imalatı"
    },
    {
        "ID": 2014,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.02.01",
        "dc_NACE_BASLIK": "Mutfak mobilyalarının imalatı"
    },
    {
        "ID": 2015,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.03.01",
        "dc_NACE_BASLIK": "Yatak imalatı (yatak destekleri, kauçuk şişme yatak ve su yatağı hariç)"
    },
    {
        "ID": 2016,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.03.02",
        "dc_NACE_BASLIK": "Yatak desteklerinin imalatı (yaylı veya çelik tel ağlı ahşap veya metal iskeletler, ahşap latalı döşenmiş somya bazaları, somya, karyola, vb.)"
    },
    {
        "ID": 2017,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.09.01",
        "dc_NACE_BASLIK": "Mobilyaların boyanması, verniklenmesi, cilalanması vb. tamamlayıcı işlerin yapılması"
    },
    {
        "ID": 2018,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.09.02",
        "dc_NACE_BASLIK": "Sandalyelerin, koltukların vb. döşenmesi gibi tamamlayıcı işlerin yapılması (büro ve ev mobilyalarının yeniden kaplanması hariç)"
    },
    {
        "ID": 2019,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.09.03",
        "dc_NACE_BASLIK": "Dikiş makinesi, TV, bilgisayar, vb. için dolap, sehpa, vb. mobilyaların imalatı"
    },
    {
        "ID": 2020,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.09.04",
        "dc_NACE_BASLIK": "Yatak odası, yemek odası, banyo dolabı, genç ve çocuk odası takımı, gardırop, vestiyer, vb. imalatı (gömme dolap, masa, zigon, vb. dahil)"
    },
    {
        "ID": 2021,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.09.05",
        "dc_NACE_BASLIK": "Sandalye, koltuk, kanepe, çekyat, divan, vb iskeletlerinin imalatı (iskeletçiler) (plastik olanlar ile bürolarda kullanılanlar hariç)"
    },
    {
        "ID": 2022,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.09.06",
        "dc_NACE_BASLIK": "Park ve bahçelerde kullanılan bank, masa, tabure, sandalye, koltuk, vb. mobilyaların imalatı (plastik olanlar hariç)"
    },
    {
        "ID": 2023,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "31.09.07",
        "dc_NACE_BASLIK": "Sandalye, koltuk, kanepe, oturma takımı, çekyat, divan, markiz, vb. imalatı (plastik olanlar ile bürolarda ve park ve bahçelerde kullanılanlar hariç)"
    },
    {
        "ID": 2024,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "43.32.01",
        "dc_NACE_BASLIK": "Hazır mutfaklar, mutfak tezgahları, gömme dolaplar, iç merdivenler ile ince tahta, lambri ve benzerlerinin montajı işleri"
    },
    {
        "ID": 2025,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "43.32.02",
        "dc_NACE_BASLIK": "Herhangi bir malzemeden yapılan kapı ve pencere kasaları, kapılar (zırhlı kapılar dahil, otomatik ve döner kapılar hariç), pencereler, kepenkler, panjurlar, garaj kapıları ve benzerlerinin montajı"
    },
    {
        "ID": 2026,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "43.32.03",
        "dc_NACE_BASLIK": "Seyyar bölme ve metal yapı üzerine asma tavan montaj işleri ile diğer doğrama tesisatı işleri"
    },
    {
        "ID": 2027,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "46.15.01",
        "dc_NACE_BASLIK": "Mobilyaların bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 2028,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "46.47.01",
        "dc_NACE_BASLIK": "Mobilya ve mobilya aksesuarları toptan ticareti (yatak dahil)"
    },
    {
        "ID": 2029,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "46.65.01",
        "dc_NACE_BASLIK": "Büro mobilyalarının toptan ticareti"
    },
    {
        "ID": 2030,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "47.59.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ev mobilyalarının ve aksesuarlarının perakende ticareti (baza, somya, karyola dahil, hasır ve sepetçi söğüdü gibi malzemelerden olanlar hariç)"
    },
    {
        "ID": 2031,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "47.59.08",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda büro mobilyaları ve aksesuarlarının perakende ticareti"
    },
    {
        "ID": 2032,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "47.59.10",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda bahçe mobilyalarının perakende ticareti"
    },
    {
        "ID": 2033,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "47.59.11",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda yatak perakende ticareti"
    },
    {
        "ID": 2034,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "47.89.01",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla ev ve büro mobilyaları (ağaç, metal, vb.) perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 2035,
        "dc_MESLEK_GRUBU": "71",
        "dc_MESLEK_GRUBU_ADI": "MOBİLYA",
        "dc_NACE_KODU": "95.24.01",
        "dc_NACE_BASLIK": "Mobilyaların ve ev döşemelerinin onarımı (büro ve ev mobilyalarının yeniden döşenmesi, kaplanması, onarımı ve yenilenmesi dahil, halı ve kilim onarımı hariç)"
    },
    {
        "ID": 2036,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.39.03",
        "dc_NACE_BASLIK": "Meyve ve sebzelerden jöle, pekmez, marmelat, reçel vb. imalatı (pestil imalatı dahil)"
    },
    {
        "ID": 2037,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.41.06",
        "dc_NACE_BASLIK": "Kakao yağı, badem yağı, kekik yağı, defne yağı, hurma çekirdeği veya babassu yağı, keten tohumu yağı, Hint yağı, tung yağı ve diğer benzer yağların imalatı (bezir yağı hariç)"
    },
    {
        "ID": 2038,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.71.01",
        "dc_NACE_BASLIK": "Taze pastane ürünleri imalatı (yaş pasta, kuru pasta, poğaça, kek, börek, pay, turta, waffles vb.)"
    },
    {
        "ID": 2039,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.71.03",
        "dc_NACE_BASLIK": "Hamur tatlıları imalatı (tatlandırılmış kadayıf, lokma tatlısı, baklava vb.)"
    },
    {
        "ID": 2040,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.72.01",
        "dc_NACE_BASLIK": "Peksimet, bisküvi, gofret, dondurma külahı, kağıt helva vb. ürünlerin imalatı (çikolata kaplı olanlar dahil)"
    },
    {
        "ID": 2041,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.72.02",
        "dc_NACE_BASLIK": "Tatlı veya tuzlu hafif dayanıklı fırın ve pastane ürünlerinin imalatı (kurabiyeler, krakerler, galeta, gevrek halkalar vb.)"
    },
    {
        "ID": 2042,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.72.03",
        "dc_NACE_BASLIK": "Tatlandırılmamış dayanıklı hamur tatlıları imalatı (pişirilmiş olsun olmasın tatlandırılmamış kadayıf, baklava vb.) (yufka imalatı dahil)"
    },
    {
        "ID": 2043,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.81.01",
        "dc_NACE_BASLIK": "Şeker kamışından, pancardan, palmiyeden, akça ağaçtan şeker (sakkaroz) ve şeker ürünleri imalatı veya bunların rafine edilmesi (sıvı şeker ve melas üretimi dahil)"
    },
    {
        "ID": 2044,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.81.03",
        "dc_NACE_BASLIK": "Akçaağaç şurubu imalatı"
    },
    {
        "ID": 2045,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.82.01",
        "dc_NACE_BASLIK": "Çikolata ve kakao içeren şekerlemelerin imalatı (beyaz çikolata ve sürülerek yenilebilen kakaolu ürünler hariç)"
    },
    {
        "ID": 2046,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.82.02",
        "dc_NACE_BASLIK": "Şekerlemelerin ve şeker pastillerinin imalatı (bonbon şekeri vb.) (kakaolu şekerlemeler hariç)"
    },
    {
        "ID": 2047,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.82.03",
        "dc_NACE_BASLIK": "Sürülerek yenebilen kakaolu ürünler imalatı"
    },
    {
        "ID": 2048,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.82.04",
        "dc_NACE_BASLIK": "Lokum, pişmaniye, helva, karamel, koz helva, fondan, beyaz çikolata vb. imalatı (tahin helvası dahil)"
    },
    {
        "ID": 2049,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.82.05",
        "dc_NACE_BASLIK": "Ciklet imalatı (sakız)"
    },
    {
        "ID": 2050,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.82.06",
        "dc_NACE_BASLIK": "Sert kabuklu meyve, meyve kabuğu ve diğer bitki parçalarından şekerleme imalatı (meyan kökü hülasaları dahil)"
    },
    {
        "ID": 2051,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.82.07",
        "dc_NACE_BASLIK": "Kakao tozu, kakao ezmesi/hamuru ve kakao yağı imalatı"
    },
    {
        "ID": 2052,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.83.01",
        "dc_NACE_BASLIK": "Çay ürünleri imalatı (siyah çay, yeşil çay ve poşet çay ile çay ekstreleri, esansları ve konsantreleri)"
    },
    {
        "ID": 2053,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.83.02",
        "dc_NACE_BASLIK": "Kahve ürünleri imalatı (çekilmiş kahve, eritilebilir kahve ile kahve ekstre, esans ve konsantreleri)"
    },
    {
        "ID": 2054,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "10.83.03",
        "dc_NACE_BASLIK": "Bitkisel çayların imalatı (nane, yaban otu, papatya, ıhlamur, kuşburnu vb. çaylar)."
    },
    {
        "ID": 2055,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "11.07.04",
        "dc_NACE_BASLIK": "Boza imalatı"
    },
    {
        "ID": 2056,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "46.36.01",
        "dc_NACE_BASLIK": "Çikolata ve şekerleme toptan ticareti (helva, lokum, akide şekeri, bonbon şekeri vb. dahil)"
    },
    {
        "ID": 2057,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "47.24.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda çikolata ve şekerleme perakende ticareti (bonbon şekeri, akide şekeri, lokum, helva vb. dahil, dondurma hariç)"
    },
    {
        "ID": 2058,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "47.24.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda dondurma, aromalı yenilebilir buzlar vb. perakende ticareti (pastanelerde verilen hizmetler hariç)"
    },
    {
        "ID": 2059,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "47.81.11",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla şekerleme perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 2060,
        "dc_MESLEK_GRUBU": "72",
        "dc_MESLEK_GRUBU_ADI": "BAKLAVA, PASTA VE ŞEKERLİ MAMÜLLER",
        "dc_NACE_KODU": "56.10.09",
        "dc_NACE_BASLIK": "Pastanelerin ve tatlıcıların faaliyeti (garson servisi sunanlar ile self servis sunanlar dahil, imalatçıların ve al götür tesislerin faaliyetleri ile seyyar olanlar hariç)"
    },
    {
        "ID": 2061,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "15.12.10",
        "dc_NACE_BASLIK": "Plastik veya kauçuk saat kayışı imalatı"
    },
    {
        "ID": 2062,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "15.12.11",
        "dc_NACE_BASLIK": "Kumaş ve diğer malzemelerden saat kayışı imalatı (metal olanlar hariç)"
    },
    {
        "ID": 2063,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "23.19.02",
        "dc_NACE_BASLIK": "Duvar saati, kol saati veya gözlük için camlar (bombeli, kavisli, içi oyuk vb. şekilde fakat, optik açıdan işlenmemiş) ile bu tür camların imalatı için kullanılan içi boş küre ve bunların parçalarının imalatı"
    },
    {
        "ID": 2064,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "26.51.04",
        "dc_NACE_BASLIK": "Hız ve mesafe ölçümünde kullanılan alet ve cihazların imalatı (taşıt hız göstergesi, takometre, taksimetre vb.)"
    },
    {
        "ID": 2065,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "26.51.08",
        "dc_NACE_BASLIK": "Yön bulma pusulaları ile diğer seyrüsefer alet ve cihazlarının ve radar cihazlarının imalatı (hava, kara ve deniz taşımacılığında kullanılanlar dahil)"
    },
    {
        "ID": 2066,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "26.51.90",
        "dc_NACE_BASLIK": "Bys. ölçme, test ve seyrüsefer amaçlı alet ve cihazların imalatı (hidrolik veya pnömatik otomatik ayar veya kontrol aletleri ile milometreler, pedometreler, stroboskoplar, monostatlar, kumpaslar, spektrometreler dahil)"
    },
    {
        "ID": 2067,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "26.52.03",
        "dc_NACE_BASLIK": "Devam kayıt cihazları, zaman kayıt cihazları, parkmetreler; duvar ve kol saati makineli zaman ayarlı anahtarların imalatı (vardiya saati vb.)"
    },
    {
        "ID": 2068,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "26.52.04",
        "dc_NACE_BASLIK": "Kol, masa, duvar ve cep saatlerinin, bunların makinelerinin, kasalarının ve diğer parçalarının imalatı (kronometreler ve taşıtlar için gösterge panellerinde bulunan saatler ve benzeri tipteki saatler dahil)"
    },
    {
        "ID": 2069,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "32.50.01",
        "dc_NACE_BASLIK": "Gözlük (göz kusurlarını giderici, düzeltici, koruyucu ve diğer amaçlı), gözlük camı, kontak lens ile gözlük ve benzeri için çerçeve ve çerçeve parçalarının imalatı"
    },
    {
        "ID": 2070,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "32.50.08",
        "dc_NACE_BASLIK": "Göz tedavisi ile ilgili cerrahi, tanı, test ve benzeri aletlerin imalatı (korneaya ait yuvarlak testereler, oftalmoskop, retinoskop, keratometreler, vb.)"
    },
    {
        "ID": 2071,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "46.43.11",
        "dc_NACE_BASLIK": "Optik ürünlerin toptan ticareti (gözlükler, saat ve gözlük camları, dürbün, vb.)"
    },
    {
        "ID": 2072,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "46.48.02",
        "dc_NACE_BASLIK": "Saat toptan ticareti (kol, masa, duvar, vb. saatler ile kronometreler)"
    },
    {
        "ID": 2073,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "47.77.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda saat (kol, masa, duvar vb. saatler ile kronometreler) perakende ticareti"
    },
    {
        "ID": 2074,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "47.78.03",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda gözlük, kontak lens, gözlük camı vb. perakende ticareti (gözlükçülerin hizmetleri)"
    },
    {
        "ID": 2075,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "47.78.07",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda optik ve hassas aletlerin perakende ticareti (mikroskop, dürbün ve pusula dahil, gözlük camı, fotografik ürünler hariç)"
    },
    {
        "ID": 2076,
        "dc_MESLEK_GRUBU": "73",
        "dc_MESLEK_GRUBU_ADI": "GÖZLÜKÇÜLÜK VE SAATÇİLİK",
        "dc_NACE_KODU": "95.25.01",
        "dc_NACE_BASLIK": "Saatlerin onarımı (kronometreler dahil, devam kayıt cihazları hariç)"
    },
    {
        "ID": 2077,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.42.09",
        "dc_NACE_BASLIK": "Diğer sığır ve manda yetiştiriciliği (sütü için yetiştirilenler hariç)"
    },
    {
        "ID": 2078,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.44.01",
        "dc_NACE_BASLIK": "Deve yetiştiriciliği"
    },
    {
        "ID": 2079,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.45.01",
        "dc_NACE_BASLIK": "Koyun ve keçi (davar) yetiştiriciliği (işlenmemiş süt, kıl, tiftik, yapağı, yün vb. üretimi dahil)"
    },
    {
        "ID": 2080,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.46.01",
        "dc_NACE_BASLIK": "Domuz yetiştiriciliği"
    },
    {
        "ID": 2081,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.47.01",
        "dc_NACE_BASLIK": "Kümes hayvanlarının yetiştirilmesi (tavuk, hindi, ördek, kaz ve beç tavuğu vb.)"
    },
    {
        "ID": 2082,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.49.05",
        "dc_NACE_BASLIK": "Deve kuşlarının yetiştirilmesi"
    },
    {
        "ID": 2083,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.70.01",
        "dc_NACE_BASLIK": "Ticari olmayan av hayvanı ve yabani hayvan avlama ve yakalama faaliyetleri (yenilmesi, kürkleri, derileri, araştırmalarda kullanılmaları vb. amaçlar için) (balıkçılık hariç)"
    },
    {
        "ID": 2084,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "01.70.02",
        "dc_NACE_BASLIK": "Ticari olan av hayvanı ve yabani hayvan avlama ve yakalama faaliyetleri (yenilmesi, kürkleri, derileri, araştırmalarda kullanılmaları vb. amaçlar için) (balıkçılık hariç)"
    },
    {
        "ID": 2085,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.11.01",
        "dc_NACE_BASLIK": "Sığır, koyun, keçi vb. hayvanların kesimi ve kesim sırasındaki etin işlenmesi (mezbahacılık) (taze, soğutulmuş veya dondurulmuş olarak saklanması dahil)"
    },
    {
        "ID": 2086,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.12.01",
        "dc_NACE_BASLIK": "Kümes hayvanları etlerinin üretimi (taze veya dondurulmuş) (yenilebilir sakatatları dahil)"
    },
    {
        "ID": 2087,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.12.02",
        "dc_NACE_BASLIK": "Kümes hayvanlarının kesilmesi, temizlenmesi veya paketlenmesi işi ile uğraşan mezbahaların faaliyetleri"
    },
    {
        "ID": 2088,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.12.03",
        "dc_NACE_BASLIK": "Kümes hayvanlarının yağlarının sofra yağına çevrilmesi"
    },
    {
        "ID": 2089,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.13.01",
        "dc_NACE_BASLIK": "Et ve kümes hayvanları etlerinden üretilen pişmemiş köfte vb. ürünlerin imalatı"
    },
    {
        "ID": 2090,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.13.02",
        "dc_NACE_BASLIK": "Et ve kümes hayvanları etlerinden üretilen sosis, salam, sucuk, pastırma, kavurma et, konserve et, salamura et, jambon vb. tuzlanmış, kurutulmuş veya tütsülenmiş ürünlerin imalatı (yemek olanlar hariç)"
    },
    {
        "ID": 2091,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.13.03",
        "dc_NACE_BASLIK": "Et ve sakatat unları imalatı (et ve kümes hayvanları etlerinden üretilen)"
    },
    {
        "ID": 2092,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "10.13.04",
        "dc_NACE_BASLIK": "Sığır, koyun, keçi vb. hayvanların sakatat ve yağlarından yenilebilir ürünlerin imalatı"
    },
    {
        "ID": 2093,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "46.11.02",
        "dc_NACE_BASLIK": "Canlı hayvanların bir ücret veya sözleşmeye dayalı olarak toptan satışını yapan aracılar"
    },
    {
        "ID": 2094,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "46.23.01",
        "dc_NACE_BASLIK": "Canlı hayvanların toptan ticareti (celepçilik) (kümes hayvanları hariç)"
    },
    {
        "ID": 2095,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "46.23.02",
        "dc_NACE_BASLIK": "Canlı kümes hayvanları (tavuk, hindi, vb.) toptan ticareti"
    },
    {
        "ID": 2096,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "46.32.01",
        "dc_NACE_BASLIK": "Kümes hayvanları ve av hayvanları etlerinin toptan ticareti"
    },
    {
        "ID": 2097,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "46.32.02",
        "dc_NACE_BASLIK": "Et toptan ticareti (av hayvanları ve kümes hayvanları etleri hariç)"
    },
    {
        "ID": 2098,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "46.32.03",
        "dc_NACE_BASLIK": "Yenilebilir sakatat (ciğer, işkembe, böbrek, taşlık vb.) toptan ticareti"
    },
    {
        "ID": 2099,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "46.32.04",
        "dc_NACE_BASLIK": "Et ürünlerinin toptan ticareti (salam, sosis, sucuk, pastırma vb.)"
    },
    {
        "ID": 2100,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "47.22.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda et perakende ticareti (sakatatlar, av ve kümes hayvanı etleri ile kasaplar dahil)"
    },
    {
        "ID": 2101,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "47.22.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda et ürünleri perakende ticareti (sosis, salam, sucuk, pastırma vb.)"
    },
    {
        "ID": 2102,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "47.78.28",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda canlı büyükbaş ve küçükbaş hayvanların perakende ticareti (ev hayvanları hariç)"
    },
    {
        "ID": 2103,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "47.78.29",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda canlı kümes hayvanlarının perakende ticareti"
    },
    {
        "ID": 2104,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "47.81.03",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla et ve et ürünleri (sucuk, salam, pastırma, kümes hayvanı eti, vb.) perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 2105,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "47.89.03",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla canlı büyük ve küçük baş hayvan perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 2106,
        "dc_MESLEK_GRUBU": "74",
        "dc_MESLEK_GRUBU_ADI": "ET VE ET ÜRÜNLERİ",
        "dc_NACE_KODU": "47.89.14",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla canlı kümes hayvanı perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 2107,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.10.02",
        "dc_NACE_BASLIK": "Frigorifik depolama ve antrepoculuk faaliyetleri (bozulabilir gıda ürünleri dahil dondurulmuş veya soğutulmuş mallar için depolama)"
    },
    {
        "ID": 2108,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.10.03",
        "dc_NACE_BASLIK": "Hububat depolama ve antrepoculuk faaliyetleri (hububat silolarının işletilmesi vb.)"
    },
    {
        "ID": 2109,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.10.04",
        "dc_NACE_BASLIK": "Petrol, petrol ürünleri, kimyasallar, gaz, vb. depolama ve antrepoculuk faaliyetleri"
    },
    {
        "ID": 2110,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.10.05",
        "dc_NACE_BASLIK": "Dökme sıvı depolama ve antrepoculuk faaliyetleri (yağ, şarap, vb. dahil, petrol, petrol ürünleri, kimyasallar, gaz, vb. hariç)"
    },
    {
        "ID": 2111,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.10.90",
        "dc_NACE_BASLIK": "Diğer depolama ve antrepoculuk faaliyetleri (frigorifik depolar ile hububat, kimyasallar, dökme sıvı ve gaz depolama faaliyetleri hariç)"
    },
    {
        "ID": 2112,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.21.06",
        "dc_NACE_BASLIK": "Kara taşımacılığına yönelik emanet büroları işletmeciliği (demir yollarında yapılanlar dahil)"
    },
    {
        "ID": 2113,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.24.08",
        "dc_NACE_BASLIK": "Su yolu taşımacılığıyla ilgili kargo ve bagaj yükleme boşaltma hizmetleri (konteyner yükleme boşaltma hizmetleri dahil)"
    },
    {
        "ID": 2114,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.24.09",
        "dc_NACE_BASLIK": "Hava yolu taşımacılığıyla ilgili kargo ve bagaj yükleme boşaltma hizmetleri"
    },
    {
        "ID": 2115,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.24.10",
        "dc_NACE_BASLIK": "Kara yolu taşımacılığıyla ilgili kargo yükleme boşaltma hizmetleri"
    },
    {
        "ID": 2116,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "52.24.11",
        "dc_NACE_BASLIK": "Demir yolu taşımacılığıyla ilgili kargo yükleme boşaltma hizmetleri"
    },
    {
        "ID": 2117,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "53.10.01",
        "dc_NACE_BASLIK": "Evrensel hizmet yükümlülüğü altında postacılık faaliyetleri (kargo ve kurye şirketlerinin faaliyetleri hariç)"
    },
    {
        "ID": 2118,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "53.20.08",
        "dc_NACE_BASLIK": "Gıda, mobilya vb. satın alınan şeylere ilişkin evlere dağıtım faaliyetleri (şehir içi yük taşımacılığı ve evden eve nakliyat vb. hariç)"
    },
    {
        "ID": 2119,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "53.20.09",
        "dc_NACE_BASLIK": "Kurye faaliyetleri (kara, deniz ve hava yolu ile yapılanlar dahil, evrensel hizmet yükümlülüğü altında postacılık faaliyetleri hariç)"
    },
    {
        "ID": 2120,
        "dc_MESLEK_GRUBU": "75",
        "dc_MESLEK_GRUBU_ADI": "KARGO, POSTA VE DEPOLAMA",
        "dc_NACE_KODU": "53.20.10",
        "dc_NACE_BASLIK": "Paket ve koli gibi kargoların toplanması, sınıflandırılması, taşınması ve dağıtımı faaliyetleri (dökme yükler ve evrensel hizmet yükümlülüğü altında postacılık faaliyetleri hariç)"
    },
    {
        "ID": 2121,
        "dc_MESLEK_GRUBU": "76",
        "dc_MESLEK_GRUBU_ADI": "LPG, SIVILAŞTIRILMIŞ VE SIKIŞTIRILMIŞ GAZLAR",
        "dc_NACE_KODU": "19.20.15",
        "dc_NACE_BASLIK": "Petrol türevi yakıtların,  petrol gazları ve diğer hidrokarbonların imalatı"
    },
    {
        "ID": 2122,
        "dc_MESLEK_GRUBU": "76",
        "dc_MESLEK_GRUBU_ADI": "LPG, SIVILAŞTIRILMIŞ VE SIKIŞTIRILMIŞ GAZLAR",
        "dc_NACE_KODU": "46.71.03",
        "dc_NACE_BASLIK": "Gazlı yakıtlar ve bunlarla ilgili ürünlerin toptan ticareti (LPG (bütan ve propan), tüpgaz, doğalgaz (LNG, CNG) vb. dahil, şebeke üzerinden yapılanlar hariç)"
    },
    {
        "ID": 2123,
        "dc_MESLEK_GRUBU": "76",
        "dc_MESLEK_GRUBU_ADI": "LPG, SIVILAŞTIRILMIŞ VE SIKIŞTIRILMIŞ GAZLAR",
        "dc_NACE_KODU": "47.78.10",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda evlerde kullanılan tüpgaz perakende ticareti"
    },
    {
        "ID": 2124,
        "dc_MESLEK_GRUBU": "76",
        "dc_MESLEK_GRUBU_ADI": "LPG, SIVILAŞTIRILMIŞ VE SIKIŞTIRILMIŞ GAZLAR",
        "dc_NACE_KODU": "49.50.04",
        "dc_NACE_BASLIK": "Boru hattı ile doğalgaz taşımacılığı"
    },
    {
        "ID": 2125,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.14",
        "dc_NACE_BASLIK": "Kot kumaşı imalatı"
    },
    {
        "ID": 2126,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.16",
        "dc_NACE_BASLIK": "Pamuklu dokuma kumaş imalatı (havlu, peluş, vb. ilmeği kesilmemiş kumaşlar ile kot, kadife ve tafting kumaşlar hariç)"
    },
    {
        "ID": 2127,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.17",
        "dc_NACE_BASLIK": "Doğal kıl ve yünden dokuma kumaş imalatı"
    },
    {
        "ID": 2128,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.19",
        "dc_NACE_BASLIK": "Doğal ipekten kumaş imalatı"
    },
    {
        "ID": 2129,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.20",
        "dc_NACE_BASLIK": "Keten, rami, kenevir, jüt elyafları ile diğer bitkisel tekstil elyaflarından dokuma kumaş imalatı (pamuk hariç)"
    },
    {
        "ID": 2130,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.21",
        "dc_NACE_BASLIK": "Havlı, şönil, havlu, pelüş, tırtıl ve benzeri ilmeği kesilmemiş dokuma kumaşlar ile tafting kumaş imalatı"
    },
    {
        "ID": 2131,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.22",
        "dc_NACE_BASLIK": "Suni ve sentetik filamentlerden ve devamsız elyaflardan dokuma kumaş imalatı  (havlu, peluş, vb. ilmeği kesilmemiş kumaşlar ile kadife ve tafting kumaşlar hariç)"
    },
    {
        "ID": 2132,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.23",
        "dc_NACE_BASLIK": "Dokuma yoluyla imitasyon (taklit) kürk kumaş imalatı"
    },
    {
        "ID": 2133,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.20.24",
        "dc_NACE_BASLIK": "Cam elyafından dokuma kumaş imalatı (cam elyafından dar kumaşlar dahil)"
    },
    {
        "ID": 2134,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.92.05",
        "dc_NACE_BASLIK": "Battaniye imalatı"
    },
    {
        "ID": 2135,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.96.01",
        "dc_NACE_BASLIK": "Dokunabilir ipliklerden metalize iplik ve metalize gipe iplik ile bunlardan dokuma kumaş imalatı (giyim ve döşemecilikte kullanılan)"
    },
    {
        "ID": 2136,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "13.96.06",
        "dc_NACE_BASLIK": "Kord bezi imalatı"
    },
    {
        "ID": 2137,
        "dc_MESLEK_GRUBU": "77",
        "dc_MESLEK_GRUBU_ADI": "DOKUMA",
        "dc_NACE_KODU": "14.19.02",
        "dc_NACE_BASLIK": "Yazma, tülbent, eşarp, vb. imalatı (dokuma, örgü veya tığ işi kumaştan)"
    },
    {
        "ID": 2138,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "01.11.07",
        "dc_NACE_BASLIK": "Baklagillerin yetiştirilmesi (fasulye (taze ve kuru), bakla, nohut, mercimek, acı bakla, bezelye, araka vb.)"
    },
    {
        "ID": 2139,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "01.11.12",
        "dc_NACE_BASLIK": "Tahıl yetiştiriciliği (buğday, dane mısır, süpürge darısı, arpa, çavdar, yulaf, darı, kuş yemi vb.) (pirinç hariç)"
    },
    {
        "ID": 2140,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "01.11.14",
        "dc_NACE_BASLIK": "Yağlı tohum yetiştiriciliği (soya fasulyesi, yer fıstığı, pamuk çekirdeği, kene otu çekirdeği (Hint yağı çekirdeği), keten tohumu, hardal tohumu, nijer tohumu, kolza, aspir tohumu, susam tohumu, ayçiçeği tohumu vb.)"
    },
    {
        "ID": 2141,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "01.12.14",
        "dc_NACE_BASLIK": "Çeltik (kabuklu pirinç) yetiştirilmesi"
    },
    {
        "ID": 2142,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "01.25.09",
        "dc_NACE_BASLIK": "Fındık yetiştiriciliği"
    },
    {
        "ID": 2143,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "01.63.02",
        "dc_NACE_BASLIK": "Sert kabuklu ürünlerin kabuklarının kırılması ve temizlenmesi ile ilgili faaliyetler"
    },
    {
        "ID": 2144,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "10.39.02",
        "dc_NACE_BASLIK": "Kavrulmuş, tuzlanmış vb. şekilde işlem görmüş sert kabuklu yemişler ile bu meyvelerin püre ve ezmelerinin imalatı (pişirilerek yapılanlar)"
    },
    {
        "ID": 2145,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "10.39.06",
        "dc_NACE_BASLIK": "Leblebi imalatı ile kavrulmuş çekirdek, yerfıstığı vb. üretimi (sert kabuklular hariç)"
    },
    {
        "ID": 2146,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.21.02",
        "dc_NACE_BASLIK": "Tahıl toptan ticareti (buğday, arpa, çavdar, yulaf, mısır, çeltik vb.)"
    },
    {
        "ID": 2147,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.21.03",
        "dc_NACE_BASLIK": "Yağlı tohum ve yağlı meyvelerin toptan ticareti (soya fasulyesi, yer fıstığı, pamuk çekirdeği, keten tohumu, kolza, ayçiçeği tohumu, pamuk çekirdeği vb.)"
    },
    {
        "ID": 2148,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.21.08",
        "dc_NACE_BASLIK": "Tohum (yağlı tohumlar hariç) toptan ticareti (sebze tohumları, çiçek tohumları ve orman ağacı tohumları dahil)"
    },
    {
        "ID": 2149,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.31.01",
        "dc_NACE_BASLIK": "Fındık, antep fıstığı, yer fıstığı ve ceviz toptan ticareti (kavrulmuş olanlar hariç)"
    },
    {
        "ID": 2150,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.31.08",
        "dc_NACE_BASLIK": "Kuru bakliyat ürünleri toptan ticareti (fasulye, mercimek, nohut, vb.)"
    },
    {
        "ID": 2151,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.31.09",
        "dc_NACE_BASLIK": "Kavrulmuş veya işlenmiş kuruyemiş toptan ticareti (leblebi, kavrulmuş fındık, fıstık, çekirdek vb.)"
    },
    {
        "ID": 2152,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.31.10",
        "dc_NACE_BASLIK": "Kuru üzüm toptan ticareti"
    },
    {
        "ID": 2153,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.31.11",
        "dc_NACE_BASLIK": "Kuru incir toptan ticareti"
    },
    {
        "ID": 2154,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "46.31.12",
        "dc_NACE_BASLIK": "Kuru kayısı toptan ticareti"
    },
    {
        "ID": 2155,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "47.21.04",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kuru bakliyat ürünleri perakende ticareti (fasulye, mercimek, nohut, vb.)"
    },
    {
        "ID": 2156,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "47.21.05",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kuruyemiş perakende ticareti"
    },
    {
        "ID": 2157,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "47.29.06",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda hububat, un ve zahire ürünleri perakende ticareti (bulgur, pirinç, mısır, vb.)"
    },
    {
        "ID": 2158,
        "dc_MESLEK_GRUBU": "78",
        "dc_MESLEK_GRUBU_ADI": "HUBUBAT, BAKLİYAT, KURUYEMİŞ VE KURU MEYVE",
        "dc_NACE_KODU": "47.81.90",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla diğer gıda ürünleri perakende ticareti (bal, un, tahıl, pirinç, bakliyat, vb. dahil, seyyar satıcılar hariç)"
    },
    {
        "ID": 2159,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "20.59.01",
        "dc_NACE_BASLIK": "Fotografik levha ve filmlerin (hassaslaştırılmış, ışığa maruz kalmamış olanlar), anında baskılanan filmlerin, fotoğrafçılıkta kullanılan kimyasal müstahzarların ve karışımsız (saf) ürünlerin imalatı"
    },
    {
        "ID": 2160,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "26.70.16",
        "dc_NACE_BASLIK": "Fotoğraf makinesi imalatı (dijital, anında görüntü basan, dokümanların mikrofilm, vb. üzerine kaydedilmesinde, deniz altında, hava fotoğrafçılığında, adli tıp veya kriminolojik laboratuvarlarda, vb. kullanılanlar)"
    },
    {
        "ID": 2161,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "26.70.19",
        "dc_NACE_BASLIK": "Flaş lambaları, fotografik agrandisörler (büyütücüler), fotoğraf laboratuvarları için cihazlar, negatoskoplar (ince ışıklı panel), projeksiyon ekranları, likit kristal cihazlar ile lazerlerin (lazer diyotlar hariç) imalatı"
    },
    {
        "ID": 2162,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "27.40.01",
        "dc_NACE_BASLIK": "Deşarj ampulü, mor ötesi veya kızıl ötesi ampul, ark ampulü, tungsten halojen filamentli ampul, diğer filamentli ampul ile fotoğrafçılıkta kullanılan flaş ampulü, flaş küpü ve benzerlerinin imalatı"
    },
    {
        "ID": 2163,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "33.13.03",
        "dc_NACE_BASLIK": "Profesyonel optik aletlerin ve fotoğrafçılık ekipmanlarının bakım ve onarımı (tüketici elektronik ürünlerinin onarımı hariç)"
    },
    {
        "ID": 2164,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "46.43.10",
        "dc_NACE_BASLIK": "Fotoğrafçılıkla ilgili ürünlerin toptan ticareti (flaş lambaları, fotoğrafçılık emülsiyonları, polarizan maddeler, fotografik levha ve filmler vb.)"
    },
    {
        "ID": 2165,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "46.49.23",
        "dc_NACE_BASLIK": "Sanatsal reprodüksiyon ürünlerinin toptan ticareti (resim, fotoğraf vb.)"
    },
    {
        "ID": 2166,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "46.49.24",
        "dc_NACE_BASLIK": "Resim, fotoğraf vb. için çerçeve toptan ticareti"
    },
    {
        "ID": 2167,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "47.78.22",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda fotoğrafçılık malzemeleri ve aletlerinin perakende ticareti"
    },
    {
        "ID": 2168,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "47.89.07",
        "dc_NACE_BASLIK": "Tezgahlar ve pazar yerleri vasıtasıyla fotoğrafçılık malzemeleri perakende ticareti (seyyar satıcılar hariç)"
    },
    {
        "ID": 2169,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "74.20.22",
        "dc_NACE_BASLIK": "Tüketicilere yönelik fotoğrafçılık faaliyetleri (pasaport, okul, düğün vb. için vesikalık ve portre fotoğrafçılığı vb.)"
    },
    {
        "ID": 2170,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "74.20.25",
        "dc_NACE_BASLIK": "Hava ve su altı fotoğrafçılığı faaliyetleri"
    },
    {
        "ID": 2171,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "74.20.26",
        "dc_NACE_BASLIK": "Reklamcılık ile ilgili fotoğrafçılık faaliyetleri (reklam görselleri, broşür, gazete ilanı, katalog vb. için ticari ürünlerin, moda kıyafetlerinin, makinelerin, binaların, kişilerin, vb.nin fotoğraflarının çekilmesi)"
    },
    {
        "ID": 2172,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "74.20.27",
        "dc_NACE_BASLIK": "Etkinlik fotoğrafçılığı ve etkinliklerin videoya çekilmesi faaliyetleri (düğün, mezuniyet, konferans, resepsiyon, moda gösterileri, spor ve diğer ilgi çekici olayların fotoğraflanması veya videoya çekilmesi)"
    },
    {
        "ID": 2173,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "74.20.28",
        "dc_NACE_BASLIK": "Bağımsız foto muhabirlerinin faaliyetleri"
    },
    {
        "ID": 2174,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "74.20.29",
        "dc_NACE_BASLIK": "Fotoğraf işleme faaliyetleri (negatiflerin tab edilmesi ve resimlerin basılması, negatiflerin veya slaytların çoğaltılması, fotografik slaytların hazırlanması, filmlerin kopyalanması vb.)"
    },
    {
        "ID": 2175,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "74.20.90",
        "dc_NACE_BASLIK": "Diğer fotoğrafçılık faaliyetleri (fotomikrografi, mikrofilm hizmetleri, fotoğrafların restorasyonu ve rötuşlama, vb.)"
    },
    {
        "ID": 2176,
        "dc_MESLEK_GRUBU": "79",
        "dc_MESLEK_GRUBU_ADI": "FOTOĞRAFÇILIK",
        "dc_NACE_KODU": "96.09.16",
        "dc_NACE_BASLIK": "Jeton ile çalışan kişisel hizmet makinelerinin işletilmesi faaliyetleri (jetonlu makinelerle vesikalık fotoğraf, emanet dolapları, tartı, tansiyon ölçümü vb. hizmetler dahil, oyun ve kumar makineleri ile çamaşırhane hizmetleri hariç)"
    },
    {
        "ID": 2177,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "16.29.01",
        "dc_NACE_BASLIK": "Ahşap mutfak ve sofra eşyası imalatı (kaşık, kepçe, spatula, bardak, havan, havan eli, tepsi vb.)"
    },
    {
        "ID": 2178,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "16.29.03",
        "dc_NACE_BASLIK": "Sedef kakma ahşap işleri, kakma ile süslü ahşap eşyalar, mücevher için veya çatal-kaşık takımı ve benzeri eşyalar için ahşap kutular, ahşap biblo, heykel ve diğer süslerin imalatı"
    },
    {
        "ID": 2179,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "23.13.01",
        "dc_NACE_BASLIK": "Camdan şişe, kavanoz ve diğer muhafaza kapları, bardaklar, termos ve diğer vakumlu kapların camdan yapılmış iç yüzeyleri ile camdan sofra ve mutfak eşyaları imalatı (ampuller hariç)"
    },
    {
        "ID": 2180,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "23.13.02",
        "dc_NACE_BASLIK": "Tuvalet, banyo, büro, iç dekorasyon, vb. amaçlarla kullanılan cam ve kristal eşya imalatı (camdan biblo, boncuk vb. küçük cam eşyalar hariç)"
    },
    {
        "ID": 2181,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "23.41.01",
        "dc_NACE_BASLIK": "Seramik veya porselenden sofra takımları (tabak, bardak, fincan, vb.) ve diğer ev ve tuvalet eşyasının imalatı (çiniden olanlar ve sıhhi ürünler hariç)"
    },
    {
        "ID": 2182,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "46.44.01",
        "dc_NACE_BASLIK": "Porselen ve cam eşyalar ile toprak ve seramikten yapılan ürünlerin toptan ticareti (çini, billuriye, cam veya porselenden çanak, tabak, bardak, vazo, tepsi, süs eşyası, vb.)"
    },
    {
        "ID": 2183,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "47.59.01",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda elektrikli olmayan ev aletleri ile çatal bıçak takımı, tabak-çanak, cam eşya, porselen ve çömlek ürünleri gibi züccaciye ürünlerinin perakende ticareti (metal tabak-çanak hariç)"
    },
    {
        "ID": 2184,
        "dc_MESLEK_GRUBU": "80",
        "dc_MESLEK_GRUBU_ADI": "ZÜCCACİYE",
        "dc_NACE_KODU": "47.59.04",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda ahşap, mantar ve hasır eşyaların perakende ticareti (ahşap sofra ve mutfak eşyaları, ahşap çerçeveler, sepetçi ürünleri, mücevher vb. için ahşap kutular, ahşap biblolar, mantar ürünler, hasır vb.)"
    },
    {
        "ID": 2185,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "02.10.01",
        "dc_NACE_BASLIK": "Baltalık olarak işletilen ormanların yetiştirilmesi (kağıtlık ve yakacak odun üretimine yönelik olanlar dahil)"
    },
    {
        "ID": 2186,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "02.20.01",
        "dc_NACE_BASLIK": "Endüstriyel ve yakacak odun üretimi (geleneksel yöntemlerle odun kömürü üretimi dahil)"
    },
    {
        "ID": 2187,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "05.10.01",
        "dc_NACE_BASLIK": "Taş kömürü madenciliği"
    },
    {
        "ID": 2188,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "05.20.01",
        "dc_NACE_BASLIK": "Linyit madenciliği"
    },
    {
        "ID": 2189,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "08.92.01",
        "dc_NACE_BASLIK": "Turba çıkarılması ve toplanması"
    },
    {
        "ID": 2190,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "16.29.90",
        "dc_NACE_BASLIK": "Başka yerde sınıflandırılmamış diğer ağaç ürünleri ile enerji için yakıt kütükleri ve peletlerinin imalatı (karbonlaştırılmamış olanlar)"
    },
    {
        "ID": 2191,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "19.10.10",
        "dc_NACE_BASLIK": "Linyit ve turbadan kok fırını ürünlerinin imalatı (kok ve yarı kok kömürü, karni kömürü, katran, zift ve zift koku vb. ürünlerin imalatı ile kok kömürünün topak haline getirilmesi dahil)"
    },
    {
        "ID": 2192,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "19.10.11",
        "dc_NACE_BASLIK": "Taşkömüründen kok fırını ürünlerinin imalatı (kok ve yarı kok kömürü, karni kömürü, katran, zift ve zift koku vb. ürünlerin imalatı ile kok kömürünün topak haline getirilmesi dahil)"
    },
    {
        "ID": 2193,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "19.20.12",
        "dc_NACE_BASLIK": "Turba, linyit ve taş kömürü briketleri imalatı (kömür tozundan basınçla elde edilen yakıt)"
    },
    {
        "ID": 2194,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "20.14.04",
        "dc_NACE_BASLIK": "Odunun ve kömür katranının damıtılması (odun kreozotu, odun naftası, bitkisel zift, benzol, toluol, fenol, naftalin vb.)"
    },
    {
        "ID": 2195,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "35.21.02",
        "dc_NACE_BASLIK": "Kömürün karbonlaştırılması, tarımsal yan ürün veya atıklarından gaz üretimi"
    },
    {
        "ID": 2196,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "46.71.02",
        "dc_NACE_BASLIK": "Katı yakıtlar ve bunlarla ilgili ürünlerin toptan ticareti (linyit, taş kömürü, odun kömürü, kok kömürü, yakacak odun ve mangal kömürü vb.)"
    },
    {
        "ID": 2197,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "47.78.02",
        "dc_NACE_BASLIK": "Belirli bir mala tahsis edilmiş mağazalarda kömür ve yakacak odun perakende ticareti"
    },
    {
        "ID": 2198,
        "dc_MESLEK_GRUBU": "81",
        "dc_MESLEK_GRUBU_ADI": "DOĞAL VE İŞLENMİŞ KATI YAKIT",
        "dc_NACE_KODU": "47.99.12",
        "dc_NACE_BASLIK": "Mağaza, tezgah, pazar yeri dışında müşterinin istediği yere ulaştırılarak yapılan doğrudan yakıt satışı (kalorifer yakıtı, yakacak odun ve odun kömürü, mangal kömürü vb.)"
    }
]