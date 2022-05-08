import logo from './logo.svg';
import './App.css';
import image from './Cloud-Service-Models.png'

function App() {
  return (
    <div className="App">
      <h1>Bulut Tabanlı Yazılım</h1>
      <h3>Bulut Tabanlı Nedir?</h3>
      <p>
      Bulut Teknolojisi ya da Cloud Computing olarak da bilinen Bulut Tabanlı; akıllı telefon, tablet ya da bilgisayar gibi çeşitli teknolojik cihazlar ile ulaşılabilen, veri paylaşımı sağlayan, internet tabanlı bir veri depolama sistemidir. Bulut tabanlı ile yer ve zaman kısıtlaması olmadan işlemler yapılabilir. Bulut tabanlı depolama sistemlerinin çeşitli avantajları vardır. Örneğin; hiçbir kurulum gerektirmediği için pratiktir, maliyet tasarrufu sağlar, hızlıdır ve güvenlidir. Bu gibi çeşitli avantajlarından dolayı bulut tabanlı uygulama ya da depolama sistemleri günümüzde sık sık kullanılıyor.
      </p>
      <h3>Bulut Hizmetleri Türleri</h3>
      <p>Bulut bilişimin sunduğu en yaygın üç bulut hizmeti türü vardır. Kullanıcıların ihtiyaçlarına bağlı olarak, herhangi bir tür bulut bilişim hizmeti ya ayrı ayrı ya da başkalarıyla birlikte kullanılır. SaaS, PaaS ve IaaS olmak üzere üç bulut hizmeti türü bulunmaktadır.</p>
      <img src={image}></img>
      <h3>Hizmet olarak yazılım (SaaS)</h3>
      <p>SaaS kullanıcıları, çeşitli yazılımların lisansını tamamen satın almak yerine, yazılımı düzenli aralıklarla kiralar ve bir İnternet tarayıcısı aracılığıyla kullanır. SaaS tarafından sağlanan yazılım çeşitliliği çok geniştir.
      Bu hizmet modelinde bulut tabanlı uygulamalar isteğe bağlı olarak müşteriye hizmet olarak sunulmaktadır. "Buluttaki" uzak bilgisayarlarda çalışan, başkaları tarafından sahip olunan ve işletilen ve kullanıcıların bilgisayarlarına İnternet üzerinden ve tipik olarak bir web tarayıcısı üzerinden bağlanan hizmetin tek bir örneğidir. Facebook, Twitter, Flickr ve Google gibi sosyal ağ sitelerinin tümü SaaS örnekleridir, ancak kullanıcılar hizmetlere İnternet özellikli herhangi bir cihaz üzerinden erişebilir.
      </p>
      <h3>Hizmet olarak platform (PaaS)</h3>
      <p>PaaS, bulut bilişim kullanıcıları için bilgisayar platformları sağlar. Aynı zamanda bulut bilişim tarafından sağlanan diğer iki hizmet arasındaki bağlantıdır; SaaS ve IaaS.
      PaaS'ın sağladığı olanaklardan bazıları barındırma, uygulama, test ve uygulama geliştirme ve uygulama tasarımını içerir. Ayrıca, PaaS sunan bulut hizmeti sağlayıcıları, uygulamaları tasarlamak, test etmek, uygulamak, yönetmek ve çalıştırmak için bir dizi özellik içerir. Tüm bu imkanlar, sunulan tüm özelliklerle tek bir pakete abone olarak hem bireysel hem de kurumsal müşteriler tarafından kullanılabilir.
      Hizmet olarak platform (PaaS) modeli, hizmet kurulumu olarak yazılımın bir üst düzeyidir ve bir müşterinin kendi uygulamasını ve yazılımını tasarlayabilmesi için donanım, ağ ve işletim sistemi sağlar. Ölçeklenebilirlik ve yönetilebilirlik gibi uygulamaların gereksinimlerini karşılamak için, önceden tanımlanmış bir işletim sistemi işletim sistemi ve PaaS satıcılarından uygulama sunucuları kombinasyonu. Örneğin, sitelerini geliştirme, test etme ve nihayetinde barındırma sürecinin herhangi bir aşamasında, Web geliştiricileri bireysel PaaS ortamlarını kullanabilir.
      </p>
      <h3>Hizmet Olarak Altyapı (IaaS)</h3>
      <p>IaaS, buluttaki üçüncü bilgi işlem türüdür. Tıpkı PaaS ve SaaS gibi, farklı yazılım ve donanım cihazları bir bulut platformunda hizmet verirken, IaaS sanallaştırılmış bir platform sağlar. Donanım sanallaştırma süreci, kullanıcılara fiziksel işlevler yerine yalnızca soyut bilgi işlem platformunu gösterir. Bu tür sanallaştırma, bulut bilişimin üçüncü parçası olan Hizmet olarak Arayüzün yaratılması olan "sanal makine monitörü" veya "hipervizör" olarak adlandırılan bir yaratılışın ortaya çıkmasına neden olur.
      Hizmet Olarak Altyapı (IaaS), ağ üzerinden standartlaştırılmış bir hizmet tarafından sağlanan temel bir bilgi işlem ve depolama alanıdır. Bu model, veri merkezi alanı, depolama sistemleri, ağ cihazları, sunucular vb. konsolide ederek ve sağlayarak iş yükünü kolaylaştırdı. Ayrıca müşteri kendi işletim sistemlerini, yazılımlarını ve uygulamalarını geliştirebilir ve kurabilir.
      Bulut bilgisayar teknolojisini kullanmanın bir takım avantajları vardır. Bununla birlikte, her tür bulut hizmetinin kendi avantajları ve dezavantajları vardır. Doğru kararı vermek için, kullanıcıların artıları ve eksileri dikkatlice tartması zorunludur.
      </p>
    </div>
  );
}

export default App;
