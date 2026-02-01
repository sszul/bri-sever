
import { Convention } from './types';

export const INITIAL_CONVENTIONS: Convention[] = [
  // --- CEVAP KONVANSİYONLARI ---
  {
    id: 'stayman',
    name: 'Stayman',
    category: 'Cevap',
    shortDescription: "1NT açışına karşı 4'lü majör aramak için kullanılır.",
    fullDescription: "1NT (15-17) açışından sonra cevapçı 2♣ diyerek açıcıda 4'lü majör olup olmadığını sorar. Açıcının 2♦ cevabı majörü olmadığını, 2♥/2♠ cevapları ise o majörden 4 tane olduğunu belirtir.",
    exampleSequence: ['1NT', '2♣', '2♥'],
    pointsNeeded: '8+ HCP'
  },
  {
    id: 'jacoby-transfer',
    name: 'Jacoby Transferleri',
    category: 'Cevap',
    shortDescription: "1NT açışına karşı zayıf veya güçlü majör ellerini göstermek için kullanılır.",
    fullDescription: "1NT açışına 2♦ cevabı Körleri, 2♥ cevabı Pikleri transfer eder. Bu, güçlü elin gizli kalmasını ve açıcının deklaran olmasını sağlar.",
    exampleSequence: ['1NT', '2♦', '2♥'],
    pointsNeeded: '0+ HCP'
  },
  {
    id: 'texas-transfer',
    name: 'Texas Transferleri',
    category: 'Cevap',
    shortDescription: "1NT veya 2NT açışına karşı 4 seviyesinde transfer.",
    fullDescription: "4♦ deklarasyonu Körlere, 4♥ deklarasyonu Piklere transfer eder. Genellikle 6'lı renk ve oyun forsu el ile yapılır. Jacoby transferinden sonra 4 seviyesinde konuşmak yerine direkt 4 seviyesinde transfer yapılır.",
    exampleSequence: ['1NT', '4♦', '4♥'],
    pointsNeeded: '10+ HCP'
  },
  {
    id: 'smolen',
    name: 'Smolen',
    category: 'Cevap',
    shortDescription: "Stayman sonrası 5-4 majör dağılımını göstermek için.",
    fullDescription: "1NT - 2♣ - 2♦ sekansından sonra, cevapçı 3 seviyesinde 4'lü olan majörünü söyler. Bu, diğer majörden 5 tane olduğunu gösterir ve güçlü elin (açıcı) deklaran olmasını sağlar.",
    exampleSequence: ['1NT', '2♣', '2♦', '3♥'],
    pointsNeeded: '10+ HCP'
  },
  {
    id: 'puppet-stayman',
    name: 'Puppet Stayman',
    category: 'Cevap',
    shortDescription: "2NT veya güçlü 1NT açışına karşı 5'li veya 4'lü majör aramak için.",
    fullDescription: "3♣ sorusuna açıcı 3♦ diyerek en az bir tane 4'lü majörü olduğunu, 3♥/3♠ diyerek 5'li majörü olduğunu, 3NT diyerek majörü olmadığını belirtir. Stayman'dan farkı 5'li majörleri de bulabilmesidir.",
    exampleSequence: ['2NT', '3♣', '3♦'],
    pointsNeeded: '5+ HCP'
  },
  {
    id: 'bergen-raises',
    name: 'Bergen Raises',
    category: 'Cevap',
    shortDescription: "Majör açışına 4'lü destek ve puan limitlerini net göstermek için.",
    fullDescription: "1Majör açışına karşı: 3♣ (6-9 HCP, 4 koz), 3♦ (10-12 HCP, 4 koz - Limit Raise). Bu sayede 'Losing Trick Count' (LTC) prensibine göre hızlı şlem veya baraj kararı verilir.",
    exampleSequence: ['1♥', '3♣'],
    pointsNeeded: '6-12 HCP'
  },
  {
    id: 'drury',
    name: 'Drury (2-Way)',
    category: 'Cevap',
    shortDescription: "Pas geçmiş ortağın majör açışını kontrol etmek için.",
    fullDescription: "3. veya 4. pozisyonda 1♥/1♠ açan ortağa, pas geçmiş cevapçı 2♣ (3'lü destek) veya 2♦ (4'lü destek) diyerek iyi bir el (10-12) olduğunu belirtir.",
    exampleSequence: ['Pas', 'Pas', '1♠', '2♣'],
    pointsNeeded: '10-12 HCP'
  },
  {
    id: 'nmf',
    name: 'New Minor Forcing (NMF)',
    category: 'Cevap',
    shortDescription: "Açıcı 1NT rebid yaptığında majör fitini bulmak için.",
    fullDescription: "1x - 1y - 1NT sekansından sonra söylenmemiş 'yeni minör' (genellikle 2♣ veya 2♦) forsingdir. Açıcıdan öncelikli olarak cevapçının majörüne 3'lü destek veya diğer majörde 4'lü kart göstermesi istenir.",
    exampleSequence: ['1♦', '1♠', '1NT', '2♣'],
    pointsNeeded: '11+ HCP'
  },
  {
    id: '4sf',
    name: 'Dördüncü Renk Forsing',
    category: 'Cevap',
    shortDescription: "Dördüncü rengi söyleyerek elin limitini belirlemek veya durdurucu sormak için.",
    fullDescription: "Üç farklı renk konuşulduktan sonra dördüncü rengin deklare edilmesi genellikle yapaydır ve 'Game Force' yaratır. Durdurucu sormak veya daha iyi bir yer bulmak için zaman kazandırır.",
    exampleSequence: ['1♣', '1♦', '1♥', '1♠'],
    pointsNeeded: '12+ HCP'
  },
  {
    id: 'inverted-minors',
    name: 'Inverted Minors',
    category: 'Cevap',
    shortDescription: "Minör açışına verilen desteğin anlamını tersine çevirir.",
    fullDescription: "1♣ - 2♣ veya 1♦ - 2♦ sekansı güçlü (10+ HCP) ve forsingdir. 1m - 3m ise zayıf ve baraj amaçlıdır.",
    exampleSequence: ['1♦', '2♦'],
    pointsNeeded: '10+ HCP'
  },
  {
    id: 'lebensohl',
    name: 'Lebensohl',
    category: 'Cevap',
    shortDescription: "1NT açışına rakip araya girdiğinde kullanılan karmaşık sistem.",
    fullDescription: "Rakip 2 seviyesinde araya girdiğinde 2NT deklarasyonu 'kukla' (relay) olarak kullanılır ve 3♣'i zorunlu kılar. Zayıf elleri kaçırmak veya durdurucu (stopper) sormak için farklı yollar sunar.",
    exampleSequence: ['1NT', '2♠', '2NT', '3♣'],
    pointsNeeded: '0-12 HCP'
  },

  // --- AÇIŞ KONVANSİYONLARI ---
  {
    id: 'precision-1c',
    name: 'Precision 1♣',
    category: 'Açış',
    shortDescription: "Güçlü el gösteren yapay açış sistemi.",
    fullDescription: "Precision sisteminde 1♣ açışı 16+ HCP gösterir ve tamamen yapaydır. Herhangi bir dağılımda olabilir. Cevapçı 0-7 puanla 1♦ diyerek 'negatif' yanıt verir.",
    exampleSequence: ['1♣', '1♦'],
    pointsNeeded: '16+ HCP'
  },
  {
    id: 'weak-two',
    name: 'Zayıf İkili (Weak Two)',
    category: 'Açış',
    shortDescription: "Baraj amacıyla 6'lı renk ile düşük puanla açış.",
    fullDescription: "2♦, 2♥ veya 2♠ açışları 6'lı güzel bir renk ve 6-10 puan gösterir. Rakibi rahatsız etmek için kullanılır.",
    exampleSequence: ['2♥'],
    pointsNeeded: '6-10 HCP'
  },
  {
    id: 'multi-2d',
    name: 'Multi 2♦',
    category: 'Açış',
    shortDescription: "Belirsiz zayıf majör veya çok güçlü elleri gösteren yapay açış.",
    fullDescription: "Zayıf bir Kör veya Pik (6'lı renk, 6-10 HCP) açışını gizler. Ayrıca çok güçlü dengeli eller (20-21 NT) veya güçlü minör ellerini içerebilir.",
    exampleSequence: ['2♦', '2♥'],
    pointsNeeded: '6-25 HCP'
  },
  {
    id: 'gambling-3nt',
    name: 'Gambling 3NT',
    category: 'Açış',
    shortDescription: "Sağlam 7'li minör rengi ile açış.",
    fullDescription: "Kenarda majör as veya papazı olmadan, AKQxxxx gibi sağlam bir minör rengine dayanır. Rakibin lövelerini toplamasını engellemek için kumar amaçlıdır.",
    exampleSequence: ['3NT'],
    pointsNeeded: "7'li sağlam minör"
  },
  {
    id: 'namyats',
    name: 'Namyats',
    category: 'Açış',
    shortDescription: "4 seviyesindeki majör açışlarının kalitesini belirtir.",
    fullDescription: "4♣ açışı 4♥ açışından daha iyi bir el (genellikle tek kayıplı) gösterir. 4♦ açışı ise 4♠ açışından daha kalitelidir.",
    exampleSequence: ['4♣', '4♥'],
    pointsNeeded: '8-9 Löve'
  },

  // --- DEFANS KONVANSİYONLARI ---
  {
    id: 'michaels-cuebid',
    name: 'Michaels Cue-bid',
    category: 'Defans',
    shortDescription: "Rakibin açışına karşı iki renkli elleri göstermek için.",
    fullDescription: "Rakip 1♣/1♦ açtığında aynı rengi söylemek majörleri (5-5) gösterir. 1♥/1♠ açışına cue-bid ise diğer majör ve bir minörü gösterir.",
    exampleSequence: ['1♦', '2♦'],
    pointsNeeded: '8-12 veya 16+'
  },
  {
    id: 'unusual-nt',
    name: 'Unusual NT',
    category: 'Defans',
    shortDescription: "Rakip açışına karşı en düşük iki söylenmemiş rengi gösterir.",
    fullDescription: "Rakip 1♥ veya 1♠ açtığında 2NT demek, minörleri (5-5) gösterir. Zayıf veya çok güçlü ellerle yapılır.",
    exampleSequence: ['1♠', '2NT'],
    pointsNeeded: '8-12 veya 16+'
  },
  {
    id: 'negative-double',
    name: 'Negatif Kontur',
    category: 'Defans',
    shortDescription: "Rakibin araya girişi sonrası söylenmemiş renkleri göstermek için.",
    fullDescription: "Ortak açtı, rakip araya girdi. Sizin 'Kontur'ünüz söylenmemiş majör(leri) gösterir. Ceza konturu değildir.",
    exampleSequence: ['1♣', '1♠', 'Kontur'],
    pointsNeeded: '6+ HCP'
  },
  {
    id: 'support-double',
    name: 'Destek Konturu',
    category: 'Defans',
    shortDescription: "Açıcının, cevapçının majörüne tam 3'lü destek göstermesi.",
    fullDescription: "Açıcı bir minör açar, cevapçı bir majör söyler, rakip araya girerse; açıcının Konturu cevapçının rengine tam 3'lü destek gösterir.",
    exampleSequence: ['1♣', 'Pas', '1♥', '1♠', 'Kontur'],
    pointsNeeded: 'Açış gücü'
  },
  {
    id: 'cappelletti',
    name: 'Cappelletti',
    category: 'Defans',
    shortDescription: "1NT açışına karşı savunma sistemi.",
    fullDescription: "2♣: Tek renkli el, 2♦: Majörler, 2♥: Kör+Minör, 2♠: Maça+Minör, Kontur: Ceza.",
    exampleSequence: ['1NT', '2♣'],
    pointsNeeded: '10+ HCP'
  },
  {
    id: 'dont',
    name: 'DONT',
    category: 'Defans',
    shortDescription: "Disturb Opponents No Trump - 1NT'yi bozma sistemi.",
    fullDescription: "Kontur: Herhangi bir tek renkli el, 2♣: Kulüp + bir üst renk, 2♦: Karo + bir üst renk, 2♥: Kör + Maça.",
    exampleSequence: ['1NT', 'Kontur'],
    pointsNeeded: 'Dağılım ağırlıklı'
  },

  // --- SLAM KONVANSİYONLARI (AS VE RUA SORULARI) ---
  {
    id: 'rkcb-1430',
    name: 'RKCB 1430',
    category: 'Slam',
    shortDescription: "Kozun 'Key Card'larını (4 As + Koz Papazı) sormak için kullanılan modern As sorma.",
    fullDescription: "4NT deklarasyonu ile sorulur. Toplam 5 Key Card vardır (4 As ve Koz Papazı). Yanıtlar: 5♣ (1/4), 5♦ (0/3), 5♥ (2 Key Card, Koz Kızı yok), 5♠ (2 Key Card + Koz Kızı).",
    exampleSequence: ['1♠', '3♠', '4NT', '5♣'],
    pointsNeeded: 'Şlem ilgisi'
  },
  {
    id: 'rkcb-0314',
    name: 'RKCB 0314',
    category: 'Slam',
    shortDescription: "RKCB'nin alternatif yanıt sistemi (0 veya 3 As gösteren 5♣).",
    fullDescription: "1430'un alternatifi olup, 5♣ deklarasyonu 0 veya 3 Key Card, 5♦ deklarasyonu ise 1 veya 4 Key Card gösterir. Diğer yanıtlar 1430 ile aynıdır.",
    exampleSequence: ['1♠', '3♠', '4NT', '5♣'],
    pointsNeeded: 'Şlem ilgisi'
  },
  {
    id: 'rua-sorma',
    name: 'Rua Sorma (5NT)',
    category: 'Slam',
    shortDescription: "Aslar tamamlandıktan sonra kaç tane Rua olduğunu sormak için kullanılır.",
    fullDescription: "RKCB sonrası 5NT deklarasyonu, ortağa kaç tane Rua'sı (koz ruası hariç diğer 3 rua) olduğunu sorar. Yanıtlar: 6♣ (0), 6♦ (1), 6♥ (2), 6♠ (3).",
    exampleSequence: ['4NT', '5♣', '5NT'],
    pointsNeeded: 'Büyük Şlem ilgisi'
  },
  {
    id: 'spesifik-rua-sorma',
    name: 'Spesifik Rua Sorma',
    category: 'Slam',
    shortDescription: "Doğrudan belirli bir renkteki Rua'yı sormak için kullanılır.",
    fullDescription: "Bazı sistemlerde 5NT yerine, 5 seviyesindeki yeni renkler o rengin Rua'sını sorar. Bu, büyük şlem araştırmasında çok daha hassas bilgi sağlar.",
    exampleSequence: ['4NT', '5♦', '6♣'],
    pointsNeeded: 'Büyük Şlem ilgisi'
  },
  {
    id: 'gerber',
    name: 'Gerber (4♣)',
    category: 'Slam',
    shortDescription: "NT sekanslarında direkt As sormak için.",
    fullDescription: "Özellikle 1NT veya 2NT açışlarından sonra direkt 4♣ as sormaktır. Yanıtlar: 4♦(0/4), 4♥(1), 4♠(2), 4NT(3). 5♣ ise Rua sormak için kullanılır.",
    exampleSequence: ['1NT', '4♣'],
    pointsNeeded: 'Şlem ilgisi'
  },
  {
    id: 'quantitative-4nt',
    name: 'Kantitatif 4NT',
    category: 'Slam',
    shortDescription: "Dengeli ellerde As sormak yerine sadece puan gücüyle şlem daveti.",
    fullDescription: "Açıcı 1NT veya 2NT açtıktan sonra söylenen 4NT as sorma değildir. 'Puanın maksimumsa 6NT'ye git' davetidir. Açıcı maksimumdaysa 6NT der, minimumdaysa Pas geçer.",
    exampleSequence: ['1NT', '4NT'],
    pointsNeeded: '16-17 HCP (açıcıya karşı)'
  },
  {
    id: 'splinter',
    name: 'Splinter Bids',
    category: 'Slam',
    shortDescription: "Tek veya şigan göstererek şlem daveti.",
    fullDescription: "Koz fiti bulunduktan sonra yapılan gereksiz sıçrama, o renkte kısalık ve şlem ilgisi gösterir.",
    exampleSequence: ['1♠', '4♣'],
    pointsNeeded: '13+ HCP'
  },
  {
    id: 'control-bids',
    name: 'Kontrol Deklarasyonları (Cue-bids)',
    category: 'Slam',
    shortDescription: "As veya Papaz kontrollerini göstererek şlem araştırması.",
    fullDescription: "Koz belirlendikten sonra 4NT öncesi yapılan yan renk deklarasyonları, o renkteki ilk veya ikinci tur kontrolünü (As/Papaz/Tek/Şigan) gösterir.",
    exampleSequence: ['1♠', '3♠', '4♣'],
    pointsNeeded: 'Şlem ilgisi'
  },
  {
    id: 'ekcb',
    name: 'Exclusion RKCB',
    category: 'Slam',
    shortDescription: "Belli bir renkteki ası saymadan Key Card sorma.",
    fullDescription: "Genellikle bir Splinter sonrası veya sıçramalı yeni renk ile yapılır. Söylenen renkteki asın dışındaki 4 Key Card sorulur.",
    exampleSequence: ['1♠', '3♠', '5♣'],
    pointsNeeded: 'Büyük Şlem ilgisi'
  },
  {
    id: 'gsf',
    name: 'Grand Slam Force (5NT)',
    category: 'Slam',
    shortDescription: "Koz onörlerini sormak için.",
    fullDescription: "5NT deklarasyonu ortağa kozun AKQ onörlerinden kaç tanesine sahip olduğunu sorar. 6 koz = 2 onör, 7 koz = 3 onör.",
    exampleSequence: ['1♠', '3♠', '5NT'],
    pointsNeeded: '7 seviyesi ilgisi'
  }
];
