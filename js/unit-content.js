// unit-content.js — bundled, grounded Study Companion content per unit.
// Prepared from the official Discover Canada guide (canada.ca). AI-prepared; verify separately.
// Shape: CONTENT[id] = { summaryEn, summaryTr, diagram:{labelEn,labelTr,children:[]}, toughWords:[{term,turkish,easyEn,easyTr}], chapterText }
const BASE = 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/';
export const SOURCE = {
  1: 'applying-citizenship.html', 2: 'rights-responsibilities-citizenship.html', 3: 'who-are-canadians.html',
  4: 'canadas-history.html', 5: 'canadas-history.html', 6: 'modern-canada.html',
  7: 'how-canadians-govern-themselves.html', 8: 'federal-elections.html', 9: 'justice-system.html',
  10: 'canadian-symbols.html', 11: 'canadas-economy.html', 12: 'canadas-regions.html',
};
export const sourceUrl = id => BASE + (SOURCE[id] || '');
export const CONTENT = {};
export const hasContent = id => !!(CONTENT[id] && CONTENT[id].summaryEn);

Object.assign(CONTENT, {
  7: {
    summaryEn: "Canada's system of government rests on three ideas: it is a federal state, a parliamentary democracy, and a constitutional monarchy. Powers are divided between the federal government (defence, foreign policy, citizenship, criminal law, currency) and the provinces (education, health, highways, natural resources), with a few shared areas such as agriculture and immigration — a division first set out in 1867. Parliament has three parts: the Sovereign (King or Queen), the Senate, and the House of Commons. People elect the members of the House of Commons; senators are appointed by the Governor General on the Prime Minister's advice and serve until age 75. A bill becomes law only after both chambers pass it and it receives royal assent. The Sovereign is the head of state, while the Prime Minister is the head of government who actually directs the country — represented federally by the Governor General.",
    summaryTr: "Kanada'nın yönetim sistemi üç temele dayanır: federal bir devlet, parlamenter bir demokrasi ve anayasal bir monarşi. Yetkiler, federal hükümet (savunma, dış politika, vatandaşlık, ceza hukuku, para) ile eyaletler (eğitim, sağlık, karayolları, doğal kaynaklar) arasında paylaşılır; tarım ve göç gibi birkaç alan ise ortaktır — bu ayrım ilk kez 1867'de belirlenmiştir. Parlamento üç bölümden oluşur: Hükümdar (Kral ya da Kraliçe), Senato ve Avam Kamarası. Halk, Avam Kamarası üyelerini seçer; senatörler ise Başbakan'ın tavsiyesiyle Genel Vali tarafından atanır ve 75 yaşına kadar görev yapar. Bir yasa tasarısı, ancak her iki meclisten geçtikten ve kraliyet onayı aldıktan sonra yasalaşır. Hükümdar devletin başıdır; Başbakan ise ülkeyi fiilen yöneten hükümetin başıdır ve federal düzeyde Genel Vali tarafından temsil edilir.",
    diagram: {
      labelEn: "Canada's government", labelTr: "Kanada'nın yönetimi", children: [
        { labelEn: "Sovereign — head of state (King/Queen)", labelTr: "Hükümdar — devlet başkanı (Kral/Kraliçe)", children: [
          { labelEn: "Governor General — represents the Sovereign", labelTr: "Genel Vali — Hükümdar'ı temsil eder" } ] },
        { labelEn: "Parliament — makes the laws", labelTr: "Parlamento — yasaları yapar", children: [
          { labelEn: "House of Commons — elected", labelTr: "Avam Kamarası — seçilmiş" },
          { labelEn: "Senate — appointed, until age 75", labelTr: "Senato — atanmış, 75 yaşına kadar" } ] },
        { labelEn: "Prime Minister — head of government", labelTr: "Başbakan — hükümetin başı", children: [
          { labelEn: "Cabinet ministers", labelTr: "Kabine bakanları" } ] } ] },
    toughWords: [
      { term: "constitutional monarchy", turkish: "anayasal monarşi", easyEn: "A country with a king or queen whose powers are limited by the constitution.", easyTr: "Kral ya da kraliçesi olan, ama yetkileri anayasayla sınırlı bir ülke." },
      { term: "federal state", turkish: "federal devlet", easyEn: "A country where power is shared between a national government and regional (provincial) ones.", easyTr: "Gücün ulusal hükümet ile bölgesel (eyalet) hükümetler arasında paylaşıldığı ülke." },
      { term: "parliamentary democracy", turkish: "parlamenter demokrasi", easyEn: "A system where people elect representatives to a parliament that makes the laws.", easyTr: "Halkın, yasaları yapan bir parlamentoya temsilci seçtiği sistem." },
      { term: "Sovereign", turkish: "hükümdar", easyEn: "The King or Queen — Canada's head of state.", easyTr: "Kral ya da Kraliçe — Kanada'nın devlet başkanı." },
      { term: "Governor General", turkish: "genel vali", easyEn: "The person who represents the King or Queen in Canada.", easyTr: "Kanada'da Kral ya da Kraliçe'yi temsil eden kişi." },
      { term: "House of Commons", turkish: "Avam Kamarası", easyEn: "The elected part of Parliament; its members are chosen by the people.", easyTr: "Parlamento'nun seçilmiş bölümü; üyelerini halk seçer." },
      { term: "Senate", turkish: "Senato", easyEn: "The part of Parliament whose members are appointed, not elected.", easyTr: "Üyeleri seçilmeyip atanan Parlamento bölümü." },
      { term: "royal assent", turkish: "kraliyet onayı", easyEn: "The final approval that turns a bill into law.", easyTr: "Bir tasarıyı yasaya dönüştüren son onay." }
    ],
    chapterText: `There are three key facts about Canada's system of government: it is a federal state, a parliamentary democracy and a constitutional monarchy.

Federal state: There are federal, provincial, territorial and municipal governments. The responsibilities of the federal and provincial governments were defined in 1867 in the British North America Act (now the Constitution Act, 1867). The federal government takes responsibility for matters of national and international concern: defence, foreign policy, interprovincial trade and communications, currency, navigation, criminal law and citizenship. The provinces are responsible for municipal government, education, health, natural resources, property and civil rights, and highways. The federal government and the provinces share jurisdiction over agriculture and immigration. Every province has its own elected Legislative Assembly. The three northern territories are not provinces but their governments carry out many of the same functions.

Parliamentary democracy: The people elect members to the House of Commons and to provincial and territorial legislatures. Cabinet ministers must retain the confidence of the House. Parliament has three parts: the Sovereign (Queen or King), the Senate and the House of Commons. The Prime Minister selects the Cabinet ministers and is responsible for government policy. The House of Commons is elected by the people, traditionally every four years. Senators are appointed by the Governor General on the advice of the Prime Minister and serve until age 75. No bill can become law until it is passed by both the House of Commons and the Senate and receives royal assent, granted by the Governor General on behalf of the Sovereign.

How a bill becomes law (the legislative process): First Reading, Second Reading, Committee Stage, Report Stage, Third Reading, then the Senate (a similar process), then Royal Assent.

Constitutional monarchy: Canada's head of state is a hereditary Sovereign (Queen or King) who reigns according to the Constitution. There is a clear distinction between the head of state (the Sovereign) and the head of government (the Prime Minister, who directs the governing of the country). The Sovereign is represented in Canada by the Governor General, appointed by the Sovereign on the advice of the Prime Minister, usually for five years. In each of the ten provinces the Sovereign is represented by the Lieutenant Governor. The three branches of government are the Executive, the Legislative and the Judicial. In each province the Premier has a role similar to the Prime Minister; in the territories the Commissioner represents the federal government.`
  }
});

Object.assign(CONTENT, {
  "1": {
    "summaryEn": "This chapter explains how to apply for Canadian citizenship and how to prepare for the citizenship test. When you apply, officials check your status, confirm you are not prohibited from applying, and make sure you meet the requirements. The process can take several months, so you must keep the Call Centre updated with your correct address. To prepare, you should study the Discover Canada guide, practise questions with friends or family, look for citizenship classes, and take the free English or French language classes the government offers. The test is usually written but may be an interview, and it checks your knowledge of Canada and of the rights and responsibilities of citizenship. Adequate knowledge of English or French is a separate requirement, assessed through other evidence rather than graded by the test. Applicants aged 18 to 54 must take the test; adults 55 and over do not. If you pass and meet all requirements, you receive a Notice to Appear, take the Oath of Citizenship, sign the oath form, and receive your Canadian Citizenship Certificate.",
    "summaryTr": "Bu bölüm, Kanada vatandaşlığına nasıl başvurulacağını ve vatandaşlık sınavına nasıl hazırlanılacağını anlatır. Başvurduğunuzda yetkililer durumunuzu kontrol eder, başvurmanızın yasak olmadığını doğrular ve şartları karşıladığınızdan emin olur. Süreç birkaç ay sürebilir, bu yüzden Çağrı Merkezi'nde her zaman doğru adresinizin bulunması gerekir. Hazırlanmak için Discover Canada rehberini çalışmalı, soruları aileniz ya da arkadaşlarınızla prova etmeli, vatandaşlık derslerini araştırmalı ve devletin ücretsiz sunduğu İngilizce veya Fransızca dil derslerine katılmalısınız. Sınav genellikle yazılıdır ama bir görüşme de olabilir; Kanada hakkındaki bilginizi ve vatandaşlığın hak ve sorumluluklarını ölçer. Yeterli İngilizce ya da Fransızca bilgisi ise ayrı bir koşuldur ve sınavla değil, başka kanıtlarla değerlendirilir. 18 ile 54 yaş arası başvuranlar sınava girmek zorundadır; 55 yaş ve üstü yetişkinler girmez. Sınavı geçer ve tüm şartları karşılarsanız bir Davet Bildirimi alır, Vatandaşlık Yemini eder, yemin formunu imzalar ve Kanada Vatandaşlık Belgenizi alırsınız.",
    "diagram": {
      "labelEn": "Applying for Citizenship",
      "labelTr": "Vatandaşlığa Başvurma",
      "children": [
        {
          "labelEn": "The Application",
          "labelTr": "Başvuru",
          "children": [
            {
              "labelEn": "Officials check status & requirements; takes months",
              "labelTr": "Yetkililer durumu ve şartları kontrol eder; aylar sürer"
            }
          ]
        },
        {
          "labelEn": "The Citizenship Test",
          "labelTr": "Vatandaşlık Sınavı",
          "children": [
            {
              "labelEn": "Ages 18-54 take it (55+ exempt); covers knowledge of Canada",
              "labelTr": "18-54 yaş girer (55+ muaf); Kanada bilgisi ölçülür"
            }
          ]
        },
        {
          "labelEn": "After Passing",
          "labelTr": "Geçtikten Sonra",
          "children": [
            {
              "labelEn": "Notice to Appear, Oath, Citizenship Certificate",
              "labelTr": "Davet Bildirimi, Yemin, Vatandaşlık Belgesi"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "prohibited",
        "turkish": "yasaklanmış",
        "easyEn": "Prohibited means you are not allowed to do something.",
        "easyTr": "Prohibited, bir şeyi yapmana izin verilmemesi demektir."
      },
      {
        "term": "requirements",
        "turkish": "şartlar, gereklilikler",
        "easyEn": "Requirements are the things you must have or do.",
        "easyTr": "Requirements, sahip olman ya da yapman gereken şeylerdir."
      },
      {
        "term": "citizenship test",
        "turkish": "vatandaşlık sınavı",
        "easyEn": "The citizenship test checks what you know about Canada.",
        "easyTr": "Vatandaşlık sınavı, Kanada hakkında ne bildiğini ölçer."
      },
      {
        "term": "Oath of Citizenship",
        "turkish": "Vatandaşlık Yemini",
        "easyEn": "The Oath of Citizenship is a promise you say to become a citizen.",
        "easyTr": "Vatandaşlık Yemini, vatandaş olmak için ettiğin bir sözdür."
      },
      {
        "term": "Notice to Appear",
        "turkish": "Davet (katılım) bildirimi",
        "easyEn": "A Notice to Appear tells you when and where your ceremony is.",
        "easyTr": "Davet bildirimi, törenin ne zaman ve nerede olduğunu söyler."
      },
      {
        "term": "Citizenship Certificate",
        "turkish": "Vatandaşlık Belgesi",
        "easyEn": "The Citizenship Certificate is the paper that proves you are a citizen.",
        "easyTr": "Vatandaşlık Belgesi, vatandaş olduğunu kanıtlayan kağıttır."
      },
      {
        "term": "ceremony",
        "turkish": "tören",
        "easyEn": "A ceremony is a special event with set steps.",
        "easyTr": "Tören, belli adımları olan özel bir etkinliktir."
      },
      {
        "term": "adequate knowledge",
        "turkish": "yeterli bilgi",
        "easyEn": "Adequate knowledge means knowing enough, not everything.",
        "easyTr": "Yeterli bilgi, her şeyi değil yeterince bilmek demektir."
      }
    ],
    "chapterText": "When you apply for Canadian citizenship, officials check your status, verify you are not prohibited from applying, and ensure you meet the requirements. Processing may take several months, so applicants must keep the Call Centre updated with their correct address. To prepare for the citizenship test, the guide advises studying Discover Canada, practising questions with a friend or family member, contacting a local school, school board, college, community centre or immigrant-serving organization for citizenship classes, and taking the free English or French language classes offered by the Government of Canada. The citizenship test is usually a written test but could be an interview. It assesses two basic requirements: (1) knowledge of Canada and of the rights and responsibilities of citizenship, and (2) adequate knowledge of English or French. The citizenship test itself is not used to assess language ability; that is a separate requirement assessed through other evidence. Adult applicants 55 years of age and over do not need to write the test. Applicants 18-54 years of age when they apply must demonstrate adequate knowledge of Canada and of English or French. All test questions are based on the subject areas in the Citizenship Regulations, and all required information is in the study guide. After the test: if you pass and meet all other requirements, you receive a Notice to Appear to Take the Oath of Citizenship, which gives the date, time and place of your citizenship ceremony. At the ceremony you take the Oath of Citizenship, sign the oath form, and receive your Canadian Citizenship Certificate."
  },
  "2": {
    "summaryEn": "Canadian citizens have both rights and responsibilities that come from history, are protected by Canadian law, and reflect shared traditions and values. Canadian law has several sources, including laws passed by Parliament and provincial legislatures, English common law, the civil code of France, and an unwritten constitution inherited from Great Britain. Together these protect an 800-year-old tradition of ordered liberty dating back to Magna Carta, signed in England in 1215. Fundamental freedoms include freedom of conscience and religion; thought, belief, opinion and expression; peaceful assembly; and association. Habeas corpus, the right to challenge unlawful detention, comes from English common law. In 1982 the Constitution was amended to add the Canadian Charter of Rights and Freedoms, which also guarantees mobility, Aboriginal, and official language rights, and recognizes multiculturalism. Men and women are equal under the law. Responsibilities include obeying the law, supporting yourself and your family, serving on a jury, voting, helping others, and protecting Canada's heritage and environment. There is no compulsory military service.",
    "summaryTr": "Kanada vatandaşlarının hem hakları hem de sorumlulukları vardır; bunlar tarihten gelir, Kanada yasalarıyla korunur ve ortak gelenek ve değerleri yansıtır. Kanada hukukunun birkaç kaynağı vardır: Parlamento ve eyalet meclislerinin çıkardığı yasalar, İngiliz örf ve adet hukuku, Fransa'nın medeni kanunu ve Büyük Britanya'dan miras kalan yazısız anayasa. Bunlar birlikte, 1215'te İngiltere'de imzalanan Magna Carta'ya dayanan 800 yıllık düzenli özgürlük geleneğini korur. Temel özgürlükler arasında vicdan ve din özgürlüğü; düşünce, inanç, görüş ve ifade özgürlüğü; barışçıl toplanma; ve örgütlenme yer alır. Yasa dışı gözaltına itiraz hakkı olan habeas corpus, İngiliz örf hukukundan gelir. 1982'de Anayasa, Kanada Haklar ve Özgürlükler Şartı'nı eklemek için değiştirildi; bu Şart ayrıca dolaşım, Yerli halk ve resmi dil haklarını güvence altına alır ve çokkültürlülüğü tanır. Kadın ve erkek yasa önünde eşittir. Sorumluluklar arasında yasaya uymak, kendinize ve ailenize bakmak, jüri görevinde bulunmak, oy vermek, başkalarına yardım etmek ve Kanada'nın mirasını ve çevresini korumak vardır. Zorunlu askerlik yoktur.",
    "diagram": {
      "labelEn": "Rights and Responsibilities",
      "labelTr": "Haklar ve Sorumluluklar",
      "children": [
        {
          "labelEn": "Sources & History",
          "labelTr": "Kaynaklar ve Tarih",
          "children": [
            {
              "labelEn": "Magna Carta 1215; Charter entrenched 1982",
              "labelTr": "Magna Carta 1215; Şart 1982'de eklendi"
            }
          ]
        },
        {
          "labelEn": "Fundamental Freedoms",
          "labelTr": "Temel Özgürlükler",
          "children": [
            {
              "labelEn": "Religion, expression, assembly; women & men equal",
              "labelTr": "Din, ifade, toplanma; kadın ve erkek eşit"
            }
          ]
        },
        {
          "labelEn": "Responsibilities",
          "labelTr": "Sorumluluklar",
          "children": [
            {
              "labelEn": "Obey law, vote, jury, help others; army voluntary",
              "labelTr": "Yasaya uy, oy ver, jüri, yardım; askerlik gönüllü"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "ordered liberty",
        "turkish": "düzenli özgürlük",
        "easyEn": "Ordered liberty means freedom that follows fair rules.",
        "easyTr": "Düzenli özgürlük, adil kurallara uyan özgürlük demektir."
      },
      {
        "term": "Magna Carta",
        "turkish": "Magna Carta (Büyük Özgürlük Fermanı)",
        "easyEn": "Magna Carta is an old English law from 1215 about freedom.",
        "easyTr": "Magna Carta, 1215'ten kalma, özgürlükle ilgili eski bir İngiliz yasasıdır."
      },
      {
        "term": "habeas corpus",
        "turkish": "habeas corpus (gözaltına itiraz hakkı)",
        "easyEn": "Habeas corpus lets you challenge being held in jail unfairly.",
        "easyTr": "Habeas corpus, haksız yere tutulmana itiraz etmeni sağlar."
      },
      {
        "term": "Charter of Rights and Freedoms",
        "turkish": "Haklar ve Özgürlükler Şartı",
        "easyEn": "The Charter is the part of the Constitution that lists your rights.",
        "easyTr": "Şart, Anayasanın haklarını sıralayan bölümüdür."
      },
      {
        "term": "mobility rights",
        "turkish": "dolaşım (yerleşim) hakları",
        "easyEn": "Mobility rights let you live and work anywhere in Canada.",
        "easyTr": "Dolaşım hakları, Kanada'nın her yerinde yaşamana ve çalışmana izin verir."
      },
      {
        "term": "multiculturalism",
        "turkish": "çokkültürlülük",
        "easyEn": "Multiculturalism means many cultures living together with respect.",
        "easyTr": "Çokkültürlülük, birçok kültürün saygıyla bir arada yaşaması demektir."
      },
      {
        "term": "jury",
        "turkish": "jüri",
        "easyEn": "A jury is a group of citizens who help decide a court case.",
        "easyTr": "Jüri, bir mahkeme davasına karar vermeye yardım eden vatandaşlar grubudur."
      },
      {
        "term": "rule of law",
        "turkish": "hukukun üstünlüğü",
        "easyEn": "Rule of law means no person or group is above the law.",
        "easyTr": "Hukukun üstünlüğü, hiçbir kişi ya da grubun yasanın üstünde olmaması demektir."
      }
    ],
    "chapterText": "Canadian citizens have rights and responsibilities that come from history, are secured by Canadian law, and reflect shared traditions, identity and values. Canadian law has several sources: laws passed by Parliament and the provincial legislatures, English common law, the civil code of France, and the unwritten constitution inherited from Great Britain. Together these secure an 800-year-old tradition of ordered liberty dating back to the signing of Magna Carta (the Great Charter of Freedoms) in 1215 in England. Fundamental freedoms include: freedom of conscience and religion; freedom of thought, belief, opinion and expression, including freedom of speech and of the press; freedom of peaceful assembly; and freedom of association. Habeas corpus, the right to challenge unlawful detention by the state, comes from English common law. The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms. Key rights include Mobility Rights (live, work, enter and leave Canada, apply for a passport), Aboriginal Peoples' Rights, Official Language Rights and Minority Language Educational Rights (French and English have equal status in Parliament and government), and Multiculturalism. In Canada men and women are equal under the law; barbaric cultural practices such as spousal abuse, honour killings, female genital mutilation and forced marriage are severely punished. Citizenship responsibilities are: obeying the law; taking responsibility for oneself and one's family; serving on a jury when called; voting in federal, provincial/territorial and local elections; helping others in the community; and protecting and enjoying Canada's heritage and environment. There is no compulsory military service, but serving in the Canadian Forces, Coast Guard or emergency services is encouraged."
  },
  "3": {
    "summaryEn": "Canada is known as a strong and free country with the oldest continuous constitutional tradition in the world and is the only constitutional monarchy in North America. Its institutions uphold 'Peace, Order, and Good Government,' a phrase from the 1867 British North America Act. To understand Canada, you must know its three founding peoples: Aboriginal, French and British. Aboriginal peoples are believed to have migrated from Asia long ago and include three groups: First Nations, Inuit and Metis. Territorial rights were first guaranteed by the Royal Proclamation of 1763. From the 1800s to the 1980s many Aboriginal children were placed in residential schools; Ottawa apologized in 2008. English and French are the official languages, with 18 million Anglophones and 7 million Francophones. The Acadians and Quebecers have distinct French-speaking identities. Most Canadians were born in Canada, but it is called a land of immigrants. Many ethnic and religious groups, including a large Christian majority and growing minorities, share one Canadian identity in a multicultural society.",
    "summaryTr": "Kanada, dünyanın en eski kesintisiz anayasal geleneğine sahip, güçlü ve özgür bir ülke olarak bilinir ve Kuzey Amerika'daki tek anayasal monarşidir. Kurumları, 1867 tarihli British North America Act'ten gelen 'Barış, Düzen ve İyi Yönetim' ilkesini korur. Kanada'yı anlamak için üç kurucu halkı bilmek gerekir: Yerli halklar, Fransızlar ve İngilizler. Yerli halkların çok önce Asya'dan göç ettiğine inanılır ve üç gruba ayrılır: First Nations, Inuit ve Metis. Toprak hakları ilk kez 1763 Kraliyet Bildirisi ile güvence altına alındı. 1800'lerden 1980'lere kadar birçok Yerli çocuk yatılı okullara yerleştirildi; Ottawa 2008'de özür diledi. İngilizce ve Fransızca resmi dillerdir; 18 milyon Anglofon ve 7 milyon Frankofon vardır. Acadialılar ve Quebecliler ayrı Fransızca konuşan kimliklere sahiptir. Kanadalıların çoğu Kanada'da doğmuştur ama ülke bir göçmenler ülkesi olarak anılır. Büyük bir Hristiyan çoğunluk ve büyüyen azınlıklar dahil birçok etnik ve dini grup, çokkültürlü bir toplumda ortak bir Kanada kimliğini paylaşır.",
    "diagram": {
      "labelEn": "Who We Are",
      "labelTr": "Biz Kimiz",
      "children": [
        {
          "labelEn": "Canadian Identity",
          "labelTr": "Kanada Kimliği",
          "children": [
            {
              "labelEn": "Only monarchy in N. America; Peace, Order, Good Govt (1867)",
              "labelTr": "K. Amerika'daki tek monarşi; Barış, Düzen, İyi Yönetim (1867)"
            }
          ]
        },
        {
          "labelEn": "Three Founding Peoples",
          "labelTr": "Üç Kurucu Halk",
          "children": [
            {
              "labelEn": "Aboriginal (First Nations, Inuit, Metis), French, British",
              "labelTr": "Yerli (First Nations, Inuit, Metis), Fransız, İngiliz"
            }
          ]
        },
        {
          "labelEn": "Diversity & Languages",
          "labelTr": "Çeşitlilik ve Diller",
          "children": [
            {
              "labelEn": "18M Anglophones, 7M Francophones; land of immigrants",
              "labelTr": "18M Anglofon, 7M Frankofon; göçmenler ülkesi"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "constitutional monarchy",
        "turkish": "anayasal monarşi",
        "easyEn": "A constitutional monarchy has a king or queen but rules by law.",
        "easyTr": "Anayasal monarşide bir kral ya da kraliçe vardır ama yönetim yasayla olur."
      },
      {
        "term": "founding peoples",
        "turkish": "kurucu halklar",
        "easyEn": "Founding peoples are the first groups that built the country.",
        "easyTr": "Kurucu halklar, ülkeyi kuran ilk gruplardır."
      },
      {
        "term": "Aboriginal peoples",
        "turkish": "Yerli halklar",
        "easyEn": "Aboriginal peoples are the first peoples of Canada: First Nations, Inuit and Metis.",
        "easyTr": "Yerli halklar, Kanada'nın ilk halklarıdır: First Nations, Inuit ve Metis."
      },
      {
        "term": "treaty",
        "turkish": "antlaşma",
        "easyEn": "A treaty is a formal agreement between two groups or nations.",
        "easyTr": "Antlaşma, iki grup ya da ulus arasında resmi bir anlaşmadır."
      },
      {
        "term": "residential schools",
        "turkish": "yatılı okullar (asimilasyon okulları)",
        "easyEn": "Residential schools took Aboriginal children to make them give up their culture.",
        "easyTr": "Yatılı okullar, kültürlerini bırakmaları için Yerli çocukları aldı."
      },
      {
        "term": "Anglophone",
        "turkish": "Anglofon (İngilizce konuşan)",
        "easyEn": "An Anglophone is a person who speaks English as a first language.",
        "easyTr": "Anglofon, ana dili İngilizce olan kişidir."
      },
      {
        "term": "Francophone",
        "turkish": "Frankofon (Fransızca konuşan)",
        "easyEn": "A Francophone is a person who speaks French as a first language.",
        "easyTr": "Frankofon, ana dili Fransızca olan kişidir."
      },
      {
        "term": "land of immigrants",
        "turkish": "göçmenler ülkesi",
        "easyEn": "A land of immigrants is a country built by people who came from abroad.",
        "easyTr": "Göçmenler ülkesi, dışarıdan gelen insanların kurduğu bir ülkedir."
      }
    ],
    "chapterText": "Canada is known as a strong and free country and has inherited the oldest continuous constitutional tradition in the world. It is the only constitutional monarchy in North America. Its institutions uphold 'Peace, Order, and Good Government,' a key phrase from Canada's original 1867 constitutional document, the British North America Act. Understanding Canada requires knowing its three founding peoples: Aboriginal, French and British. The ancestors of Aboriginal peoples are believed to have migrated from Asia many thousands of years ago. Territorial rights were first guaranteed through the Royal Proclamation of 1763 by King George III. From the 1800s until the 1980s, the federal government placed many Aboriginal children in residential schools to assimilate them; in 2008 Ottawa formally apologized. 'Aboriginal peoples' refers to three groups: Indian/First Nations (about half live on reserve land in about 600 communities), Inuit (meaning 'the people,' living across the Arctic), and Metis (mixed Aboriginal and European ancestry, mostly in the Prairie provinces). About 65% of Aboriginal people are First Nations, 30% Metis and 4% Inuit. English and French are the official languages; there are 18 million Anglophones and 7 million Francophones. New Brunswick is the only officially bilingual province. The Acadians are descendants of French colonists who settled the Maritimes from 1604; many were deported between 1755 and 1763. Quebecers are mostly descendants of French settlers from the 1600s and 1700s; in 2006 the House of Commons recognized that the Quebecois form a nation within a united Canada. Most Canadians were born in Canada, yet it is called a land of immigrants. Most Canadians identify as Christian, the largest affiliation being Catholic, with growing numbers of Muslims, Jews, Hindus and Sikhs."
  },
  "4": {
    "summaryEn": "Long before Europeans came, Aboriginal peoples lived across Canada — the Huron-Wendat and Iroquois farmed and hunted, the Cree and Dene were hunter-gatherers, the Sioux followed the bison, and the Inuit lived off Arctic wildlife. Vikings reached the coast about 1,000 years ago, and John Cabot mapped the Atlantic shore in 1497. Between 1534 and 1542 Jacques Cartier claimed the land for France; the Iroquoian word 'kanata' gave Canada its name. The French built New France from 1604, trading furs with First Nations. After Britain defeated France at the Battle of the Plains of Abraham in 1759, it governed Quebec. The Quebec Act of 1774 protected French Catholic rights. Loyalists fled the American Revolution in 1776, and the Constitutional Act of 1791 created Upper and Lower Canada. Slavery was abolished, the War of 1812 kept Canada independent, and after the 1837-38 rebellions, responsible government developed, leading toward Confederation.",
    "summaryTr": "Avrupalılar gelmeden çok önce, Kanada'nın her bölgesinde Yerli halklar yaşıyordu — Huron-Wendat ve Iroquois çiftçilik ve avcılık yapardı, Cree ve Dene avcı-toplayıcıydı, Sioux bizon sürülerini takip eder, Inuit ise Kuzey Kutbu yaban hayatından geçinirdi. Vikingler yaklaşık 1.000 yıl önce kıyıya ulaştı ve John Cabot 1497'de Atlantik kıyısının haritasını çıkardı. Jacques Cartier 1534-1542 arasında toprakları Fransa adına talep etti; Irokua dil ailesindeki 'kanata' sözcüğü Kanada'ya adını verdi. Fransızlar 1604'ten itibaren Yeni Fransa'yı kurdu ve First Nations halklarıyla kürk ticareti yaptı. Britanya, 1759'da İbrahim Ovaları Muharebesi'nde Fransa'yı yenince Quebec'i yönetmeye başladı. 1774 Quebec Yasası, Fransız Katoliklerin haklarını korudu. Sadıklar (Loyalists) 1776'da Amerikan Devrimi'nden kaçtı ve 1791 Anayasa Yasası Yukarı ile Aşağı Kanada'yı oluşturdu. Kölelik kaldırıldı, 1812 Savaşı Kanada'yı bağımsız tuttu ve 1837-38 isyanlarından sonra sorumlu hükûmet gelişerek Konfederasyon'a giden yolu açtı.",
    "diagram": {
      "labelEn": "Canada Before Confederation",
      "labelTr": "Konfederasyon Öncesi Kanada",
      "children": [
        {
          "labelEn": "Aboriginal Peoples",
          "labelTr": "Yerli Halklar",
          "children": [
            {
              "labelEn": "Huron-Wendat & Iroquois (farmers)",
              "labelTr": "Huron-Wendat ve Iroquois (çiftçiler)"
            },
            {
              "labelEn": "Cree, Dene, Sioux, Inuit",
              "labelTr": "Cree, Dene, Sioux, Inuit"
            }
          ]
        },
        {
          "labelEn": "First Europeans & New France",
          "labelTr": "İlk Avrupalılar ve Yeni Fransa",
          "children": [
            {
              "labelEn": "John Cabot 1497; Cartier 1534-42",
              "labelTr": "John Cabot 1497; Cartier 1534-42"
            },
            {
              "labelEn": "Champlain founds Québec 1608; fur trade",
              "labelTr": "Champlain Québec'i kurar 1608; kürk ticareti"
            }
          ]
        },
        {
          "labelEn": "British Rule",
          "labelTr": "Britanya Yönetimi",
          "children": [
            {
              "labelEn": "Plains of Abraham 1759",
              "labelTr": "İbrahim Ovaları 1759"
            },
            {
              "labelEn": "Quebec Act 1774; Loyalists 1776",
              "labelTr": "Quebec Yasası 1774; Sadıklar 1776"
            }
          ]
        },
        {
          "labelEn": "Road to Confederation",
          "labelTr": "Konfederasyon'a Giden Yol",
          "children": [
            {
              "labelEn": "War of 1812; Rebellions 1837-38",
              "labelTr": "1812 Savaşı; İsyanlar 1837-38"
            },
            {
              "labelEn": "Responsible government 1847-49",
              "labelTr": "Sorumlu hükûmet 1847-49"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "Aboriginal peoples",
        "turkish": "Yerli halklar",
        "easyEn": "These are the first peoples who lived in Canada before Europeans came.",
        "easyTr": "Bunlar, Avrupalılar gelmeden önce Kanada'da yaşayan ilk halklardır."
      },
      {
        "term": "fur trade",
        "turkish": "kürk ticareti",
        "easyEn": "Europeans and First Nations bought and sold animal furs, especially beaver.",
        "easyTr": "Avrupalılar ve First Nations halkları hayvan kürkü, özellikle kunduz kürkü alıp sattı."
      },
      {
        "term": "New France",
        "turkish": "Yeni Fransa",
        "easyEn": "New France was the French colony in North America starting in 1604.",
        "easyTr": "Yeni Fransa, 1604'te başlayan Kuzey Amerika'daki Fransız kolonisiydi."
      },
      {
        "term": "Loyalists",
        "turkish": "Sadıklar (Krala bağlı olanlar)",
        "easyEn": "Loyalists were people loyal to the British Crown who fled the American Revolution to Canada.",
        "easyTr": "Sadıklar, Britanya Tacı'na bağlı olup Amerikan Devrimi'nden Kanada'ya kaçan kişilerdi."
      },
      {
        "term": "Quebec Act (1774)",
        "turkish": "Quebec Yasası (1774)",
        "easyEn": "This law let French Catholics keep their religion and laws under British rule.",
        "easyTr": "Bu yasa, Fransız Katoliklerin Britanya yönetimi altında dinlerini ve yasalarını korumasına izin verdi."
      },
      {
        "term": "abolition of slavery",
        "turkish": "köleliğin kaldırılması",
        "easyEn": "This was the end of slavery; Britain abolished it across its Empire in 1833.",
        "easyTr": "Bu, köleliğin sonuydu; Britanya 1833'te tüm İmparatorluğu'nda kaldırdı."
      },
      {
        "term": "responsible government",
        "turkish": "sorumlu hükûmet",
        "easyEn": "It means ministers must have the support of elected representatives to govern.",
        "easyTr": "Bakanların yönetmek için seçilmiş temsilcilerin desteğine sahip olması gerektiği anlamına gelir."
      },
      {
        "term": "War of 1812",
        "turkish": "1812 Savaşı",
        "easyEn": "The United States invaded but failed, so Canada stayed separate from the U.S.",
        "easyTr": "Amerika Birleşik Devletleri işgal etti ama başarısız oldu, böylece Kanada ABD'den ayrı kaldı."
      }
    ],
    "chapterText": "When Europeans arrived, native peoples occupied every region of Canada. The Huron-Wendat and the Iroquois were farmers and hunters; the Cree and Dene of the Northwest were hunter-gatherers; the Sioux were nomadic, following the bison; the Inuit lived off Arctic wildlife. European diseases killed many Aboriginals, but the two peoples formed strong economic, religious and military bonds. Vikings reached Newfoundland and Labrador about 1,000 years ago. John Cabot mapped the East Coast in 1497. Between 1534 and 1542 Jacques Cartier made three voyages, claiming the land for King Francis I; the Iroquoian word 'kanata' (village) gave Canada its name. In 1604 the first French settlement was founded, and Samuel de Champlain built a fortress at Québec City in 1608. The French and Aboriginal peoples ran a vast fur-trade economy. In 1670 King Charles II granted the Hudson's Bay Company trading rights. In 1759 the British defeated the French at the Battle of the Plains of Abraham; commanders Wolfe and Montcalm both died. The Quebec Act of 1774 granted religious freedom to Catholics. In 1776 the 13 American colonies declared independence; over 40,000 Loyalists fled to Nova Scotia and Quebec. The Constitutional Act of 1791 created Upper Canada (mainly English) and Lower Canada (mainly French). Upper Canada moved to abolish slavery in 1793; Britain abolished it in 1833. In the War of 1812 the U.S. invasion failed, defended by Brock, Tecumseh, de Salaberry and Laura Secord. After the 1837-38 rebellions, Lord Durham recommended responsible government, first attained in Nova Scotia in 1847-48."
  },
  "5": {
    "summaryEn": "From 1864 to 1867 the Fathers of Confederation built a new country. The British Parliament passed the British North America Act, and the Dominion of Canada was born on July 1, 1867, with Ontario, Quebec, Nova Scotia and New Brunswick. Sir John A. Macdonald became the first Prime Minister. The Dominion grew westward, adding provinces and territories until Nunavut in 1999. When Canada took the Northwest in 1869, Louis Riel led the Metis in resistance; Manitoba became a province in 1870. The Canadian Pacific Railway's last spike was driven on November 7, 1885, linking the country. Over 600,000 Canadians served in the First World War, and 60,000 were killed; the capture of Vimy Ridge in April 1917 became a symbol of nationhood. Most women won the federal vote in 1918. After the Great Depression and the creation of the Bank of Canada in 1934, more than a million Canadians served in the Second World War, storming Juno Beach on D-Day, June 6, 1944.",
    "summaryTr": "1864'ten 1867'ye kadar Konfederasyon'un Kurucu Babaları yeni bir ülke inşa etti. Britanya Parlamentosu, Britanya Kuzey Amerika Yasası'nı kabul etti ve Kanada Dominyonu 1 Temmuz 1867'de Ontario, Quebec, Nova Scotia ve New Brunswick ile doğdu. Sir John A. Macdonald ilk Başbakan oldu. Dominyon batıya doğru büyüdü; 1999'da Nunavut'a kadar eyaletler ve bölgeler eklendi. Kanada 1869'da Kuzeybatı'yı aldığında, Louis Riel Metis halkına direnişte öncülük etti; Manitoba 1870'te eyalet oldu. Kanada Pasifik Demiryolu'nun son çivisi 7 Kasım 1885'te çakılarak ülkeyi birleştirdi. Birinci Dünya Savaşı'nda 600.000'den fazla Kanadalı görev yaptı ve 60.000'i hayatını kaybetti; Nisan 1917'de Vimy Sırtı'nın ele geçirilmesi ulus olmanın bir simgesi hâline geldi. Çoğu kadın 1918'de federal oy hakkını kazandı. Büyük Buhran'dan ve 1934'te Kanada Merkez Bankası'nın kurulmasından sonra, bir milyondan fazla Kanadalı İkinci Dünya Savaşı'nda görev yaptı ve 6 Haziran 1944 Çıkarma Günü'nde Juno Plajı'na çıktı.",
    "diagram": {
      "labelEn": "Canada Since Confederation (1867)",
      "labelTr": "Konfederasyon'dan Beri Kanada (1867)",
      "children": [
        {
          "labelEn": "Birth of the Dominion 1867",
          "labelTr": "Dominyon'un Doğuşu 1867",
          "children": [
            {
              "labelEn": "BNA Act; July 1, 1867",
              "labelTr": "BNA Yasası; 1 Temmuz 1867"
            },
            {
              "labelEn": "Sir John A. Macdonald, 1st PM",
              "labelTr": "Sir John A. Macdonald, 1. Başbakan"
            }
          ]
        },
        {
          "labelEn": "Building the Nation",
          "labelTr": "Ulusun İnşası",
          "children": [
            {
              "labelEn": "Riel & Metis; Manitoba 1870",
              "labelTr": "Riel ve Metis; Manitoba 1870"
            },
            {
              "labelEn": "CPR last spike Nov 7, 1885",
              "labelTr": "CPR son çivi 7 Kasım 1885"
            }
          ]
        },
        {
          "labelEn": "The World Wars",
          "labelTr": "Dünya Savaşları",
          "children": [
            {
              "labelEn": "WWI: Vimy Ridge 1917",
              "labelTr": "1. Dünya Savaşı: Vimy Sırtı 1917"
            },
            {
              "labelEn": "WWII: D-Day, Juno Beach 1944",
              "labelTr": "2. Dünya Savaşı: Çıkarma Günü, Juno Plajı 1944"
            }
          ]
        },
        {
          "labelEn": "Society Changes",
          "labelTr": "Toplumsal Değişimler",
          "children": [
            {
              "labelEn": "Women's vote (federal) 1918",
              "labelTr": "Kadınların oyu (federal) 1918"
            },
            {
              "labelEn": "Great Depression; Bank of Canada 1934",
              "labelTr": "Büyük Buhran; Kanada Merkez Bankası 1934"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "Confederation",
        "turkish": "Konfederasyon",
        "easyEn": "Confederation is when the provinces joined to form the country of Canada in 1867.",
        "easyTr": "Konfederasyon, eyaletlerin 1867'de birleşerek Kanada ülkesini kurmasıdır."
      },
      {
        "term": "Dominion of Canada",
        "turkish": "Kanada Dominyonu",
        "easyEn": "This was the official name for the new, self-governing country born in 1867.",
        "easyTr": "Bu, 1867'de doğan yeni, kendi kendini yöneten ülkenin resmî adıydı."
      },
      {
        "term": "British North America Act",
        "turkish": "Britanya Kuzey Amerika Yasası",
        "easyEn": "This 1867 law created Canada and set up its federal and provincial governments.",
        "easyTr": "Bu 1867 yasası Kanada'yı kurdu ve federal ile eyalet hükûmetlerini oluşturdu."
      },
      {
        "term": "Metis",
        "turkish": "Metis (Melez halk)",
        "easyEn": "The Metis are people of mixed Aboriginal and European ancestry; Louis Riel was their leader.",
        "easyTr": "Metis, karışık Yerli ve Avrupa kökenli kişilerdir; Louis Riel onların lideriydi."
      },
      {
        "term": "Canadian Pacific Railway (CPR)",
        "turkish": "Kanada Pasifik Demiryolu (CPR)",
        "easyEn": "This railway crossed Canada from east to west; the last spike was driven in 1885.",
        "easyTr": "Bu demiryolu Kanada'yı doğudan batıya kat etti; son çivi 1885'te çakıldı."
      },
      {
        "term": "Vimy Ridge",
        "turkish": "Vimy Sırtı",
        "easyEn": "Canadian soldiers captured this place in France in 1917, a proud moment for the nation.",
        "easyTr": "Kanadalı askerler Fransa'daki bu yeri 1917'de ele geçirdi; ulus için gurur veren bir andı."
      },
      {
        "term": "women's suffrage",
        "turkish": "kadınların oy hakkı",
        "easyEn": "This was the movement for women to get the right to vote, won federally in 1918.",
        "easyTr": "Bu, kadınların oy hakkını kazanması için verilen mücadeleydi; federal düzeyde 1918'de kazanıldı."
      },
      {
        "term": "Great Depression",
        "turkish": "Büyük Buhran",
        "easyEn": "After 1929 many people lost their jobs and money during this hard economic time.",
        "easyTr": "1929'dan sonra bu zorlu ekonomik dönemde birçok insan işini ve parasını kaybetti."
      }
    ],
    "chapterText": "From 1864 to 1867 representatives of Nova Scotia, New Brunswick and the Province of Canada — the Fathers of Confederation — worked together to build a new country. The British Parliament passed the British North America Act, and the Dominion of Canada was officially born on July 1, 1867, made up of Ontario, Quebec, Nova Scotia and New Brunswick. Sir Leonard Tilley suggested the term 'Dominion.' Sir John A. Macdonald became the first Prime Minister. The Dominion expanded: Manitoba, the Northwest Territories and British Columbia by 1871, Prince Edward Island in 1873, Alberta and Saskatchewan in 1905, Newfoundland in 1949 and Nunavut in 1999. When Canada took over the northwest in 1869, the Metis under Louis Riel resisted; Manitoba was made a province in 1870. A second rebellion in 1885 led to Riel's execution. Macdonald formed the North West Mounted Police in 1873. On November 7, 1885, the last spike of the Canadian Pacific Railway was driven, linking Canada from coast to coast. Sir Wilfrid Laurier, the first French-Canadian Prime Minister, encouraged immigration to the West. In the First World War over 600,000 Canadians served and about 60,000 were killed; the Canadian Corps captured Vimy Ridge in April 1917 (about 10,000 killed or wounded there), a battle that became a symbol of Canadian nationhood. Most women gained the federal right to vote in 1918. The Great Depression of the 1930s brought severe hardship; the Bank of Canada was created in 1934. More than one million Canadians served in the Second World War; on D-Day, June 6, 1944, Canadians stormed Juno Beach in Normandy, and about 44,000 Canadians were killed."
  },
  "6": {
    "summaryEn": "After the Second World War, Canada enjoyed record prosperity. The discovery of oil in Alberta in 1947 began the modern energy industry, and by 1951 most Canadians could afford adequate food, shelter and clothing. Social programs grew, including unemployment insurance, Old Age Security, and the Canada and Quebec Pension Plans (1965). Canada helped found NATO and joined NORAD and the United Nations, fighting in the Korean War (1950-53) and many peacekeeping missions. Quebec's Quiet Revolution in the 1960s led to the Official Languages Act of 1969, while votes on Quebec sovereignty were defeated in 1980 and 1995. Society became more open: Japanese-Canadians gained the vote in 1948 and Aboriginal people in 1960. Immigration made Canada more multicultural. Canadians achieved greatness in arts, with the Group of Seven, and in sport, where basketball was invented by James Naismith in 1891 and Terry Fox inspired the nation. Canadian inventions include the telephone and insulin.",
    "summaryTr": "İkinci Dünya Savaşı'ndan sonra Kanada rekor düzeyde refah yaşadı. 1947'de Alberta'da petrolün bulunması modern enerji sanayisini başlattı ve 1951'e gelindiğinde çoğu Kanadalı yeterli yiyecek, barınma ve giyime gücü yetirebiliyordu. İşsizlik sigortası, Yaşlılık Güvencesi ve Kanada ile Quebec Emeklilik Planları (1965) gibi sosyal programlar gelişti. Kanada NATO'nun kurulmasına yardım etti, NORAD'a ve Birleşmiş Milletler'e katıldı, Kore Savaşı'nda (1950-53) ve birçok barış gücü görevinde yer aldı. Quebec'in 1960'lardaki Sessiz Devrim'i 1969 Resmî Diller Yasası'na yol açtı; Quebec egemenliği üzerine yapılan oylamalar 1980 ve 1995'te reddedildi. Toplum daha açık hâle geldi: Japon kökenli Kanadalılar 1948'de, Yerli halk ise 1960'ta oy hakkı kazandı. Göç, Kanada'yı daha çok kültürlü yaptı. Kanadalılar sanatta Yedili Grup ile, sporda ise 1891'de James Naismith'in basketbolu icat etmesi ve Terry Fox'un ulusa ilham vermesiyle büyük başarılar elde etti. Kanada icatları arasında telefon ve insülin bulunur.",
    "diagram": {
      "labelEn": "Modern Canada",
      "labelTr": "Modern Kanada",
      "children": [
        {
          "labelEn": "Prosperity & Social Programs",
          "labelTr": "Refah ve Sosyal Programlar",
          "children": [
            {
              "labelEn": "Oil in Alberta 1947",
              "labelTr": "Alberta'da petrol 1947"
            },
            {
              "labelEn": "Pension Plans 1965",
              "labelTr": "Emeklilik Planları 1965"
            }
          ]
        },
        {
          "labelEn": "On the World Stage",
          "labelTr": "Dünya Sahnesinde",
          "children": [
            {
              "labelEn": "NATO & NORAD; UN",
              "labelTr": "NATO ve NORAD; BM"
            },
            {
              "labelEn": "Korean War 1950-53; peacekeeping",
              "labelTr": "Kore Savaşı 1950-53; barış gücü"
            }
          ]
        },
        {
          "labelEn": "Canada & Quebec",
          "labelTr": "Kanada ve Quebec",
          "children": [
            {
              "labelEn": "Quiet Revolution; Official Languages Act 1969",
              "labelTr": "Sessiz Devrim; Resmî Diller Yasası 1969"
            },
            {
              "labelEn": "Referendums 1980 & 1995",
              "labelTr": "Referandumlar 1980 ve 1995"
            }
          ]
        },
        {
          "labelEn": "Diverse, Creative Society",
          "labelTr": "Çeşitli, Yaratıcı Toplum",
          "children": [
            {
              "labelEn": "Multiculturalism; broader voting rights",
              "labelTr": "Çok kültürlülük; genişleyen oy hakları"
            },
            {
              "labelEn": "Arts, sport & inventions",
              "labelTr": "Sanat, spor ve icatlar"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "prosperity",
        "turkish": "refah / bolluk",
        "easyEn": "Prosperity means a time when people have plenty of money and live well.",
        "easyTr": "Refah, insanların bol parası olduğu ve iyi yaşadığı bir dönem demektir."
      },
      {
        "term": "Quiet Revolution",
        "turkish": "Sessiz Devrim",
        "easyEn": "This was a time of fast change in Quebec society during the 1960s.",
        "easyTr": "Bu, 1960'larda Quebec toplumunda yaşanan hızlı değişim dönemiydi."
      },
      {
        "term": "Official Languages Act",
        "turkish": "Resmî Diller Yasası",
        "easyEn": "This 1969 law guarantees French and English services in the federal government.",
        "easyTr": "Bu 1969 yasası, federal hükûmette Fransızca ve İngilizce hizmetlerini güvence altına alır."
      },
      {
        "term": "referendum",
        "turkish": "referandum / halkoylaması",
        "easyEn": "A referendum is a public vote where people decide an important question.",
        "easyTr": "Referandum, halkın önemli bir soruyu oyladığı bir halkoylamasıdır."
      },
      {
        "term": "multiculturalism",
        "turkish": "çok kültürlülük",
        "easyEn": "Multiculturalism means many different cultures living together in one country.",
        "easyTr": "Çok kültürlülük, birçok farklı kültürün bir ülkede birlikte yaşaması demektir."
      },
      {
        "term": "NATO",
        "turkish": "NATO (Kuzey Atlantik Antlaşması Örgütü)",
        "easyEn": "NATO is a military alliance of democratic Western countries that Canada helped form.",
        "easyTr": "NATO, Kanada'nın kurulmasına yardım ettiği demokratik Batı ülkelerinin askerî ittifakıdır."
      },
      {
        "term": "peacekeeping",
        "turkish": "barışı koruma (barış gücü)",
        "easyEn": "Peacekeeping is when soldiers help keep peace in troubled places around the world.",
        "easyTr": "Barışı koruma, askerlerin dünyanın sorunlu yerlerinde barışı sağlamaya yardım etmesidir."
      },
      {
        "term": "standard of living",
        "turkish": "yaşam standardı",
        "easyEn": "Standard of living means how comfortable and wealthy people's daily lives are.",
        "easyTr": "Yaşam standardı, insanların günlük yaşamının ne kadar rahat ve varlıklı olduğu demektir."
      }
    ],
    "chapterText": "Postwar Canada enjoyed record prosperity. The discovery of oil in Alberta in 1947 began Canada's modern energy industry, and by 1951 a majority of Canadians could afford adequate food, shelter and clothing. Social programs grew: unemployment insurance (now employment insurance) was introduced in 1940, Old Age Security was developed, and the Canada and Quebec Pension Plans began in 1965. The Canada Health Act ensures a basic standard of health coverage. In the Cold War, Canada helped form the North Atlantic Treaty Organization (NATO) and joined the United States in NORAD. It joined the United Nations and fought in the Korean War (1950-53), and took part in many peacekeeping missions. Quebec's Quiet Revolution in the 1960s led to the Official Languages Act (1969), guaranteeing French and English federal services. Quebec sovereignty was defeated in referendums in 1980 and 1995, and the Constitution was amended in 1982. Society opened up: Japanese-Canadians gained the vote in 1948 and Aboriginal people in 1960; today every citizen over 18 may vote. Canada welcomed refugees, including Hungarians in 1956 and Vietnamese after 1975. Multiculturalism grew. In the arts, the Group of Seven was founded in 1920. James Naismith invented basketball in 1891; Wayne Gretzky starred in hockey; and Terry Fox began his Marathon of Hope in 1980. Canadian inventions include the telephone (Alexander Graham Bell) and insulin (Banting and Best)."
  },
  "8": {
    "summaryEn": "Canadians vote in federal elections to choose members of the House of Commons, also called members of Parliament or MPs. By law, elections are held on the third Monday in October every four years, though the Prime Minister may ask the Governor General to call an earlier one. Canada is divided into 308 electoral districts, also called ridings or constituencies; each elects one MP. Any Canadian citizen 18 or older may run as a candidate; the candidate with the most votes wins. To vote you must be a Canadian citizen, at least 18 on voting day, and on the voters' list produced by Elections Canada from the National Register of Electors. Voting is by secret ballot. After an election, the leader of the party with the most seats is asked to form the government and becomes Prime Minister, leading either a majority or minority government. Canada also has provincial, territorial, and municipal levels of government.",
    "summaryTr": "Kanadalılar, Avam Kamarası üyelerini (milletvekilleri ya da MP olarak da anılır) seçmek için federal seçimlerde oy kullanır. Yasaya göre seçimler her dört yılda bir, ekim ayının üçüncü pazartesi günü yapılır; ancak Başbakan, Genel Vali'den daha erken seçim çağrısı yapmasını isteyebilir. Kanada 308 seçim bölgesine ayrılmıştır; bunlara 'riding' veya 'constituency' de denir ve her biri tek bir milletvekili seçer. 18 yaşını doldurmuş her Kanada vatandaşı aday olabilir; en çok oyu alan aday kazanır. Oy kullanmak için Kanada vatandaşı olmak, oy günü en az 18 yaşında olmak ve Elections Canada'nın Ulusal Seçmen Kütüğü'nden hazırladığı seçmen listesinde bulunmak gerekir. Oylama gizli oy pusulasıyla yapılır. Seçimden sonra en çok sandalyeye sahip partinin lideri hükümeti kurmaya çağrılır ve Başbakan olur; çoğunluk ya da azınlık hükümeti kurabilir. Kanada'da ayrıca eyalet, bölgesel ve belediye düzeyinde yönetimler de vardır.",
    "diagram": {
      "labelEn": "Federal Elections",
      "labelTr": "Federal Seçimler",
      "children": [
        {
          "labelEn": "How elections work",
          "labelTr": "Seçimler nasıl işler",
          "children": [
            {
              "labelEn": "Third Monday in October, every 4 years",
              "labelTr": "Her 4 yılda bir, ekimin üçüncü pazartesi"
            },
            {
              "labelEn": "308 electoral districts (ridings)",
              "labelTr": "308 seçim bölgesi (riding)"
            },
            {
              "labelEn": "Candidate with most votes becomes MP",
              "labelTr": "En çok oyu alan aday MP olur"
            }
          ]
        },
        {
          "labelEn": "Who can vote",
          "labelTr": "Kimler oy kullanabilir",
          "children": [
            {
              "labelEn": "Citizen, 18+, on voters' list",
              "labelTr": "Vatandaş, 18+, seçmen listesinde"
            },
            {
              "labelEn": "Secret ballot",
              "labelTr": "Gizli oy"
            }
          ]
        },
        {
          "labelEn": "After the election",
          "labelTr": "Seçimden sonra",
          "children": [
            {
              "labelEn": "Majority or minority government",
              "labelTr": "Çoğunluk ya da azınlık hükümeti"
            },
            {
              "labelEn": "Other levels: provincial & municipal",
              "labelTr": "Diğer düzeyler: eyalet ve belediye"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "electoral district (riding)",
        "turkish": "seçim bölgesi",
        "easyEn": "An electoral district is an area that elects one MP.",
        "easyTr": "Seçim bölgesi, bir milletvekili seçen bir alandır."
      },
      {
        "term": "Member of Parliament (MP)",
        "turkish": "milletvekili",
        "easyEn": "An MP is a person elected to the House of Commons.",
        "easyTr": "MP, Avam Kamarası'na seçilen bir kişidir."
      },
      {
        "term": "ballot",
        "turkish": "oy pusulası",
        "easyEn": "A ballot is the paper you mark to vote.",
        "easyTr": "Oy pusulası, oy vermek için işaretlediğiniz kağıttır."
      },
      {
        "term": "constituency",
        "turkish": "seçim çevresi",
        "easyEn": "A constituency is another name for an electoral district.",
        "easyTr": "Constituency, seçim bölgesinin başka bir adıdır."
      },
      {
        "term": "majority government",
        "turkish": "çoğunluk hükümeti",
        "easyEn": "A majority government holds at least half of the seats.",
        "easyTr": "Çoğunluk hükümeti, sandalyelerin en az yarısına sahiptir."
      },
      {
        "term": "minority government",
        "turkish": "azınlık hükümeti",
        "easyEn": "A minority government holds less than half of the seats.",
        "easyTr": "Azınlık hükümeti, sandalyelerin yarısından azına sahiptir."
      },
      {
        "term": "voters' list",
        "turkish": "seçmen listesi",
        "easyEn": "The voters' list shows the names of people who can vote.",
        "easyTr": "Seçmen listesi, oy kullanabilecek kişilerin adlarını gösterir."
      },
      {
        "term": "Official Opposition",
        "turkish": "Resmi Muhalefet",
        "easyEn": "The Official Opposition is the largest party not in power.",
        "easyTr": "Resmi Muhalefet, iktidarda olmayan en büyük partidir."
      }
    ],
    "chapterText": "Canadians vote in federal elections to choose the people who represent them in the House of Commons. These representatives are called members of Parliament, or MPs. Under legislation passed by Parliament, federal elections must be held on the third Monday in October every four years following the most recent general election, but the Prime Minister may ask the Governor General to call an earlier election. Canada is divided into 308 electoral districts, also known as ridings or constituencies; each is a geographical area whose citizens elect one MP. Any Canadian citizen 18 or older may run as a candidate. The candidate who receives the most votes in a district becomes its MP. To vote in a federal election or referendum you must be a Canadian citizen, at least 18 years old on voting day, and on the voters' list. Elections Canada, a neutral agency, produces the voters' list from the National Register of Electors. Once an election is called, Elections Canada mails a voter information card stating when and where to vote. Canadian law secures a secret ballot. After an election, the Governor General invites the leader of the party with the most seats to form the government; that leader becomes Prime Minister. Holding at least half the seats is a majority government; less than half is a minority government. The Prime Minister chooses Cabinet ministers, mostly from the House of Commons, who run government departments and propose most laws. Opposition parties oppose or improve government proposals; the largest is the Official Opposition. The three major parties in the House are the Conservative Party, the Liberal Party, and the New Democratic Party. Canada also has provincial, territorial, and municipal governments, each with its own elected officials and responsibilities."
  },
  "9": {
    "summaryEn": "The Canadian justice system guarantees everyone due process under the law. It rests on the presumption of innocence in criminal matters, meaning everyone is innocent until proven guilty. Canada's legal system is based on a heritage that includes the rule of law, freedom under the law, democratic principles, and due process, the principle that government must respect all legal rights a person is entitled to. Laws are written rules made by elected representatives; courts settle disputes and police enforce the laws. The law applies to everyone, including judges, politicians, and the police. The Supreme Court of Canada is the country's highest court, and the Federal Court deals with matters concerning the federal government. Most provinces have an appeal court and a trial court, plus provincial courts for lesser offences, family, traffic, and small claims courts. Police keep people safe and enforce the law; the Royal Canadian Mounted Police (RCMP) enforce federal laws and serve as provincial police everywhere except Ontario and Quebec. Lawyers help with legal problems, and legal aid offers free or low-cost help.",
    "summaryTr": "Kanada adalet sistemi herkese yasalar önünde adil yargılanma (due process) güvencesi verir. Sistem, ceza davalarında masumiyet karinesine dayanır; yani herkes suçlu olduğu kanıtlanana kadar masumdur. Kanada'nın hukuk sistemi; hukukun üstünlüğü, yasa altında özgürlük, demokratik ilkeler ve devletin kişinin tüm yasal haklarına saygı göstermesi anlamına gelen adil yargılanma mirasına dayanır. Yasalar, seçilmiş temsilciler tarafından yapılan yazılı kurallardır; mahkemeler anlaşmazlıkları çözer, polis yasaları uygular. Yasa, hakimler, siyasetçiler ve polis dahil herkes için geçerlidir. Kanada Yüksek Mahkemesi ülkenin en üst mahkemesidir; Federal Mahkeme ise federal hükümetle ilgili konulara bakar. Çoğu eyalette bir istinaf mahkemesi ve bir asliye mahkemesi, ayrıca küçük suçlar için eyalet mahkemeleri, aile, trafik ve küçük talep mahkemeleri vardır. Polis insanları korur ve yasaları uygular; Kraliyet Kanada Atlı Polisi (RCMP) federal yasaları uygular ve Ontario ile Quebec dışında her yerde eyalet polisi olarak görev yapar. Avukatlar hukuki sorunlarda yardımcı olur; adli yardım ise ücretsiz ya da düşük maliyetli destek sunar.",
    "diagram": {
      "labelEn": "The Justice System",
      "labelTr": "Adalet Sistemi",
      "children": [
        {
          "labelEn": "Founding principles",
          "labelTr": "Temel ilkeler",
          "children": [
            {
              "labelEn": "Presumption of innocence",
              "labelTr": "Masumiyet karinesi"
            },
            {
              "labelEn": "Rule of law & due process",
              "labelTr": "Hukukun üstünlüğü ve adil yargılanma"
            },
            {
              "labelEn": "Law applies to everyone",
              "labelTr": "Yasa herkes için geçerlidir"
            }
          ]
        },
        {
          "labelEn": "Courts",
          "labelTr": "Mahkemeler",
          "children": [
            {
              "labelEn": "Supreme Court of Canada (highest)",
              "labelTr": "Kanada Yüksek Mahkemesi (en üst)"
            },
            {
              "labelEn": "Federal Court",
              "labelTr": "Federal Mahkeme"
            },
            {
              "labelEn": "Provincial appeal & trial courts",
              "labelTr": "Eyalet istinaf ve asliye mahkemeleri"
            }
          ]
        },
        {
          "labelEn": "Police & legal help",
          "labelTr": "Polis ve hukuki yardım",
          "children": [
            {
              "labelEn": "RCMP enforce federal laws",
              "labelTr": "RCMP federal yasaları uygular"
            },
            {
              "labelEn": "Legal aid: free or low-cost",
              "labelTr": "Adli yardım: ücretsiz ya da ucuz"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "due process",
        "turkish": "adil yargılanma",
        "easyEn": "Due process means the government must respect your legal rights.",
        "easyTr": "Adil yargılanma, devletin yasal haklarınıza saygı göstermesi demektir."
      },
      {
        "term": "presumption of innocence",
        "turkish": "masumiyet karinesi",
        "easyEn": "It means a person is innocent until proven guilty.",
        "easyTr": "Bu, bir kişinin suçlu olduğu kanıtlanana kadar masum sayılması demektir."
      },
      {
        "term": "rule of law",
        "turkish": "hukukun üstünlüğü",
        "easyEn": "Rule of law means the law applies equally to everyone.",
        "easyTr": "Hukukun üstünlüğü, yasanın herkese eşit uygulanması demektir."
      },
      {
        "term": "Supreme Court of Canada",
        "turkish": "Kanada Yüksek Mahkemesi",
        "easyEn": "It is Canada's highest court.",
        "easyTr": "Bu, Kanada'nın en üst mahkemesidir."
      },
      {
        "term": "RCMP",
        "turkish": "Kraliyet Kanada Atlı Polisi",
        "easyEn": "The RCMP enforce federal laws across Canada.",
        "easyTr": "RCMP, Kanada genelinde federal yasaları uygular."
      },
      {
        "term": "legal aid",
        "turkish": "adli yardım",
        "easyEn": "Legal aid gives free or cheap legal help to people.",
        "easyTr": "Adli yardım, insanlara ücretsiz ya da ucuz hukuki destek verir."
      },
      {
        "term": "to enforce the law",
        "turkish": "yasayı uygulamak",
        "easyEn": "To enforce the law means to make sure people follow it.",
        "easyTr": "Yasayı uygulamak, insanların ona uymasını sağlamak demektir."
      },
      {
        "term": "to settle disputes",
        "turkish": "anlaşmazlıkları çözmek",
        "easyEn": "Courts settle disputes between people.",
        "easyTr": "Mahkemeler, insanlar arasındaki anlaşmazlıkları çözer."
      }
    ],
    "chapterText": "The Canadian justice system guarantees everyone due process under the law. Our judicial system is founded on the presumption of innocence in criminal matters, meaning everyone is innocent until proven guilty. Canada's legal system is based on a heritage that includes the rule of law, freedom under the law, democratic principles, and due process. Due process is the principle that the government must respect all of the legal rights a person is entitled to under the law. Canada is governed by an organized system of laws, which are written rules made by elected representatives. The courts settle disputes and the police enforce the laws. The law in Canada applies to everyone, including judges, politicians and the police. The laws are intended to provide order in society, give a peaceful way to settle disputes, and express the values and beliefs of Canadians. The Supreme Court of Canada is the country's highest court. The Federal Court of Canada deals with matters concerning the federal government. In most provinces there is an appeal court and a trial court, sometimes called the Court of Queen's Bench or the Supreme Court. There are also provincial courts for lesser offences, family courts, traffic courts, and small claims courts for civil cases involving small sums of money. The police keep people safe and enforce the law. There are provincial police forces in Ontario and Quebec and municipal police departments in many cities. The Royal Canadian Mounted Police (RCMP) enforce federal laws throughout Canada and serve as the provincial police in all provinces and territories except Ontario and Quebec. You can question the police about their service or conduct. Lawyers can help with legal problems and act for you in court; if you cannot pay, most communities offer legal aid services free of charge or at low cost."
  },
  "10": {
    "summaryEn": "Canada has many important symbols that express its national identity. The Crown has symbolized the state for 400 years; Canada has been a constitutional monarchy since Confederation in 1867. A new Canadian flag was first raised in 1965, with red and white as national colours since 1921. The maple leaf is Canada's best-known symbol, used by French-Canadians since the 1700s. The fleur-de-lys is a symbol of French heritage. After the First World War, Canada adopted a coat of arms and the motto A Mari Usque Ad Mare, Latin for 'from sea to sea.' The Parliament Buildings, with the Peace Tower completed in 1927, honour those who died in the war. Hockey is the national winter sport and lacrosse the official summer sport. The beaver is another emblem. English and French are the two official languages, recognized by the Official Languages Act of 1969. O Canada became the national anthem in 1980. The Victoria Cross is the highest honour, awarded to 96 Canadians since 1854.",
    "summaryTr": "Kanada'nın ulusal kimliğini yansıtan birçok önemli simgesi vardır. Taç (Crown), 400 yıldır devletin simgesi olmuştur; Kanada, 1867'deki Konfederasyon'dan bu yana anayasal bir monarşidir. Yeni Kanada bayrağı ilk kez 1965'te göndere çekilmiştir; kırmızı ve beyaz ise 1921'den beri ulusal renklerdir. Akçaağaç yaprağı, Kanada'nın en tanınan simgesidir ve Fransız kökenli Kanadalılar tarafından 1700'lerden beri kullanılır. Fleur-de-lys, Fransız mirasının bir simgesidir. Birinci Dünya Savaşı'ndan sonra Kanada bir arma ve Latince 'denizden denize' anlamına gelen A Mari Usque Ad Mare sloganını benimsemiştir. 1927'de tamamlanan Barış Kulesi'nin de bulunduğu Parlamento Binaları, savaşta ölenleri anar. Hokey ulusal kış sporu, lakros ise resmi yaz sporudur. Kunduz da bir başka simgedir. İngilizce ve Fransızca iki resmi dildir ve 1969 tarihli Resmi Diller Yasası ile tanınır. O Canada, 1980'de ulusal marş olmuştur. Victoria Haçı en yüksek nişandır ve 1854'ten beri 96 Kanadalıya verilmiştir.",
    "diagram": {
      "labelEn": "Canadian Symbols",
      "labelTr": "Kanada Simgeleri",
      "children": [
        {
          "labelEn": "Crown & flags",
          "labelTr": "Taç ve bayraklar",
          "children": [
            {
              "labelEn": "Crown: state symbol for 400 years",
              "labelTr": "Taç: 400 yıldır devlet simgesi"
            },
            {
              "labelEn": "New flag raised in 1965",
              "labelTr": "Yeni bayrak 1965'te çekildi"
            },
            {
              "labelEn": "Maple leaf & fleur-de-lys",
              "labelTr": "Akçaağaç yaprağı ve fleur-de-lys"
            }
          ]
        },
        {
          "labelEn": "National emblems",
          "labelTr": "Ulusal amblemler",
          "children": [
            {
              "labelEn": "Motto: 'from sea to sea'",
              "labelTr": "Slogan: 'denizden denize'"
            },
            {
              "labelEn": "Beaver",
              "labelTr": "Kunduz"
            },
            {
              "labelEn": "Sports: hockey & lacrosse",
              "labelTr": "Sporlar: hokey ve lakros"
            }
          ]
        },
        {
          "labelEn": "Language, anthem & honours",
          "labelTr": "Dil, marş ve nişanlar",
          "children": [
            {
              "labelEn": "Two official languages (Act 1969)",
              "labelTr": "İki resmi dil (1969 Yasası)"
            },
            {
              "labelEn": "O Canada anthem (1980)",
              "labelTr": "O Canada marşı (1980)"
            },
            {
              "labelEn": "Victoria Cross: highest honour",
              "labelTr": "Victoria Haçı: en yüksek nişan"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "the Crown",
        "turkish": "Taç",
        "easyEn": "The Crown is a symbol of the state and government in Canada.",
        "easyTr": "Taç, Kanada'da devletin ve hükümetin simgesidir."
      },
      {
        "term": "maple leaf",
        "turkish": "akçaağaç yaprağı",
        "easyEn": "The maple leaf is Canada's best-known symbol.",
        "easyTr": "Akçaağaç yaprağı, Kanada'nın en tanınan simgesidir."
      },
      {
        "term": "fleur-de-lys",
        "turkish": "zambak çiçeği (fleur-de-lys)",
        "easyEn": "The fleur-de-lys is a lily flower that symbolizes French heritage.",
        "easyTr": "Fleur-de-lys, Fransız mirasını simgeleyen bir zambak çiçeğidir."
      },
      {
        "term": "coat of arms",
        "turkish": "arma",
        "easyEn": "A coat of arms is an official design that represents Canada.",
        "easyTr": "Arma, Kanada'yı temsil eden resmi bir tasarımdır."
      },
      {
        "term": "motto",
        "turkish": "slogan / özdeyiş",
        "easyEn": "Canada's motto means 'from sea to sea.'",
        "easyTr": "Kanada'nın sloganı 'denizden denize' anlamına gelir."
      },
      {
        "term": "national anthem",
        "turkish": "ulusal marş",
        "easyEn": "O Canada is the national anthem.",
        "easyTr": "O Canada, ulusal marştır."
      },
      {
        "term": "Victoria Cross",
        "turkish": "Victoria Haçı",
        "easyEn": "The Victoria Cross is the highest honour available to Canadians.",
        "easyTr": "Victoria Haçı, Kanadalıların alabileceği en yüksek nişandır."
      },
      {
        "term": "lacrosse",
        "turkish": "lakros",
        "easyEn": "Lacrosse is Canada's official summer sport, first played by Aboriginal peoples.",
        "easyTr": "Lakros, ilk olarak Yerli halkların oynadığı, Kanada'nın resmi yaz sporudur."
      }
    ],
    "chapterText": "Canada has many important symbols that together express the national identity. The Crown has been a symbol of the state in Canada for 400 years; Canada has been a constitutional monarchy since Confederation in 1867. The Crown symbolizes government, including Parliament, the legislatures, the courts, police services and the Canadian Forces. A new Canadian flag was raised for the first time in 1965; red and white have been Canada's official national colours since 1921. The Union Jack is the official Royal Flag, and the Canadian Red Ensign served as the flag for about 100 years. The maple leaf is Canada's best-known symbol, adopted by French-Canadians in the 1700s. The fleur-de-lys, a symbol of French royalty, was adopted by Quebec for its own flag in 1948. After the First World War Canada adopted an official coat of arms and the motto A Mari Usque Ad Mare, Latin for 'from sea to sea.' The Centre Block of the Parliament Buildings burned in 1916 and was rebuilt; the Peace Tower was completed in 1927 in memory of the First World War. Hockey is the most popular spectator sport and the national winter sport; the Stanley Cup was donated by Lord Stanley in 1892. Lacrosse, first played by Aboriginal peoples, is the official summer sport. The beaver is an emblem seen on the five-cent coin. English and French are the two official languages; Parliament passed the Official Languages Act in 1969. O Canada was proclaimed the national anthem in 1980, first sung in 1880. The Victoria Cross (V.C.) is the highest honour available to Canadians, awarded for the most conspicuous bravery; 96 Canadians have received it since 1854."
  },
  "11": {
    "summaryEn": "Canada has always been a trading nation, and commerce remains the engine of its economic growth; Canadians could not maintain their standard of living without trading with other nations. In 1988 Canada enacted free trade with the United States, and Mexico joined in 1994 under the North American Free Trade Agreement (NAFTA). Today Canada has one of the ten largest economies in the world and belongs to the G8 group of leading industrialized countries. Canada's economy includes three main types of industries: service industries (transportation, education, health care, banking, communications and more), which employ more than 75% of working Canadians; manufacturing industries, which make goods such as paper, aerospace technology, automobiles and food; and natural resources industries, including forestry, fishing, agriculture, mining and energy. The United States is Canada's largest trading partner, and over three-quarters of Canadian exports go there across the world's longest undefended border.",
    "summaryTr": "Kanada her zaman bir ticaret ülkesi olmuştur ve ticaret, ekonomik büyümenin itici gücü olmaya devam etmektedir; Kanadalılar diğer uluslarla ticaret yapmadan yaşam standartlarını koruyamazlardı. Kanada 1988'de Amerika Birleşik Devletleri ile serbest ticareti yürürlüğe koydu ve Meksika 1994'te Kuzey Amerika Serbest Ticaret Anlaşması'na (NAFTA) katıldı. Bugün Kanada, dünyanın en büyük on ekonomisinden birine sahiptir ve önde gelen sanayileşmiş ülkelerden oluşan G8 grubunun bir üyesidir. Kanada ekonomisi üç ana sanayi türünü içerir: çalışan Kanadalıların %75'inden fazlasını istihdam eden hizmet sanayileri (ulaşım, eğitim, sağlık, bankacılık, iletişim ve daha fazlası); kağıt, havacılık teknolojisi, otomobil ve gıda gibi ürünler yapan imalat sanayileri; ve ormancılık, balıkçılık, tarım, madencilik ve enerjiyi kapsayan doğal kaynak sanayileri. Amerika Birleşik Devletleri Kanada'nın en büyük ticaret ortağıdır ve Kanada ihracatının dörtte üçünden fazlası dünyanın en uzun korumasız sınırından oraya gider.",
    "diagram": {
      "labelEn": "Canada's Economy",
      "labelTr": "Kanada Ekonomisi",
      "children": [
        {
          "labelEn": "A Trading Nation",
          "labelTr": "Bir Ticaret Ülkesi",
          "children": [
            {
              "labelEn": "Free trade with U.S. (1988)",
              "labelTr": "ABD ile serbest ticaret (1988)"
            },
            {
              "labelEn": "NAFTA with Mexico (1994)",
              "labelTr": "Meksika ile NAFTA (1994)"
            },
            {
              "labelEn": "Member of the G8",
              "labelTr": "G8 üyesi"
            }
          ]
        },
        {
          "labelEn": "Three Main Industries",
          "labelTr": "Üç Ana Sanayi",
          "children": [
            {
              "labelEn": "Service (over 75% of workers)",
              "labelTr": "Hizmet (işçilerin %75'inden fazlası)"
            },
            {
              "labelEn": "Manufacturing",
              "labelTr": "İmalat"
            },
            {
              "labelEn": "Natural Resources",
              "labelTr": "Doğal Kaynaklar"
            }
          ]
        },
        {
          "labelEn": "Largest Trading Partner: U.S.",
          "labelTr": "En Büyük Ticaret Ortağı: ABD"
        }
      ]
    },
    "toughWords": [
      {
        "term": "trade",
        "turkish": "ticaret",
        "easyEn": "Trade means buying and selling goods between countries.",
        "easyTr": "Ticaret, ülkeler arasında mal alıp satmak demektir."
      },
      {
        "term": "commerce",
        "turkish": "ticaret / iş hayatı",
        "easyEn": "Commerce is the activity of buying and selling things.",
        "easyTr": "Ticaret, bir şeyleri alıp satma faaliyetidir."
      },
      {
        "term": "standard of living",
        "turkish": "yaşam standardı",
        "easyEn": "Standard of living is how comfortable and rich people's lives are.",
        "easyTr": "Yaşam standardı, insanların hayatının ne kadar rahat ve zengin olduğudur."
      },
      {
        "term": "free trade",
        "turkish": "serbest ticaret",
        "easyEn": "Free trade lets countries buy and sell with few or no taxes.",
        "easyTr": "Serbest ticaret, ülkelerin az vergiyle ya da vergisiz alışveriş yapmasını sağlar."
      },
      {
        "term": "manufacturing",
        "turkish": "imalat / üretim",
        "easyEn": "Manufacturing means making products in factories.",
        "easyTr": "İmalat, fabrikalarda ürün yapmak demektir."
      },
      {
        "term": "natural resources",
        "turkish": "doğal kaynaklar",
        "easyEn": "Natural resources are useful things from nature, like trees, fish and minerals.",
        "easyTr": "Doğal kaynaklar, ağaçlar, balıklar ve mineraller gibi doğadan gelen faydalı şeylerdir."
      },
      {
        "term": "exports",
        "turkish": "ihracat",
        "easyEn": "Exports are goods that one country sells to other countries.",
        "easyTr": "İhracat, bir ülkenin başka ülkelere sattığı mallardır."
      },
      {
        "term": "trading partner",
        "turkish": "ticaret ortağı",
        "easyEn": "A trading partner is a country you do a lot of business with.",
        "easyTr": "Ticaret ortağı, çok iş yaptığınız bir ülkedir."
      }
    ],
    "chapterText": "Canada has always been a trading nation, and commerce remains the engine of economic growth. Canadians could not maintain their standard of living without trading with other nations. In 1988, Canada enacted free trade with the United States. Mexico became a partner in 1994 in the broader North American Free Trade Agreement (NAFTA). Today, Canada has one of the ten largest economies in the world and is part of the G8 group of leading industrialized countries, along with the United States, Germany, the United Kingdom, Italy, France, Japan and Russia. Canada's economy includes three main types of industries. Service industries provide jobs in transportation, education, health care, construction, banking, communications, retail, tourism and government; more than 75% of working Canadians now have jobs in service industries. Manufacturing industries make products to sell in Canada and around the world, including paper, high technology equipment, aerospace technology, automobiles, machinery, food and clothing. Natural resources industries include forestry, fishing, agriculture, mining and energy, and a large percentage of Canada's exports are natural resources commodities. Canada and the United States are each other's largest trading partner. Over three-quarters of Canadian exports are destined for the U.S.A. Millions of Canadians and Americans cross what is traditionally known as the world's longest undefended border."
  },
  "12": {
    "summaryEn": "Canada is the second largest country on earth, about 10 million square kilometres, bordered by three oceans: the Pacific in the west, the Atlantic in the east and the Arctic to the north. Its southern edge is the Canada-United States boundary. Canada has five distinct regions: the Atlantic Provinces, Central Canada, the Prairie Provinces, the West Coast and the Northern Territories. It has ten provinces and three territories, each with its own capital city. Ottawa, on the Ottawa River, was chosen as the national capital in 1857 by Queen Victoria. The Atlantic Provinces depend on fishing, farming, forestry and mining. Central Canada (Quebec and Ontario) is the industrial and manufacturing heartland, producing more than three-quarters of Canadian manufactured goods. The Prairie Provinces are rich in energy and fertile farmland. British Columbia is Canada's Pacific gateway. The Northern Territories hold one-third of Canada's land but only about 100,000 people. Canada's population is about 34 million.",
    "summaryTr": "Kanada, yaklaşık 10 milyon kilometrekare ile dünyanın en büyük ikinci ülkesidir ve üç okyanusla çevrilidir: batıda Pasifik, doğuda Atlantik ve kuzeyde Arktik. Güney sınırı Kanada-Amerika Birleşik Devletleri sınırıdır. Kanada'nın beş farklı bölgesi vardır: Atlantik Eyaletleri, Orta Kanada, Çayır (Prairie) Eyaletleri, Batı Sahili ve Kuzey Bölgeleri. Her birinin kendi başkenti olan on eyaleti ve üç bölgesi vardır. Ottawa Nehri kıyısındaki Ottawa, 1857'de Kraliçe Victoria tarafından ulusal başkent olarak seçildi. Atlantik Eyaletleri balıkçılık, tarım, ormancılık ve madenciliğe bağlıdır. Orta Kanada (Quebec ve Ontario), Kanada imalat mallarının dörtte üçünden fazlasını üreten sanayi ve imalat merkezidir. Çayır Eyaletleri enerji kaynakları ve verimli tarım arazileri bakımından zengindir. British Columbia, Kanada'nın Pasifik kapısıdır. Kuzey Bölgeleri, Kanada topraklarının üçte birini kapsar ancak yalnızca yaklaşık 100.000 kişiye sahiptir. Kanada'nın nüfusu yaklaşık 34 milyondur.",
    "diagram": {
      "labelEn": "Canada's Five Regions",
      "labelTr": "Kanada'nın Beş Bölgesi",
      "children": [
        {
          "labelEn": "Atlantic Provinces",
          "labelTr": "Atlantik Eyaletleri",
          "children": [
            {
              "labelEn": "Newfoundland and Labrador (St. John's)",
              "labelTr": "Newfoundland ve Labrador (St. John's)"
            },
            {
              "labelEn": "Prince Edward Island (Charlottetown)",
              "labelTr": "Prince Edward Adası (Charlottetown)"
            },
            {
              "labelEn": "Nova Scotia (Halifax)",
              "labelTr": "Nova Scotia (Halifax)"
            },
            {
              "labelEn": "New Brunswick (Fredericton)",
              "labelTr": "New Brunswick (Fredericton)"
            }
          ]
        },
        {
          "labelEn": "Central Canada",
          "labelTr": "Orta Kanada",
          "children": [
            {
              "labelEn": "Quebec (Québec City)",
              "labelTr": "Quebec (Québec şehri)"
            },
            {
              "labelEn": "Ontario (Toronto)",
              "labelTr": "Ontario (Toronto)"
            }
          ]
        },
        {
          "labelEn": "Prairie Provinces",
          "labelTr": "Çayır Eyaletleri",
          "children": [
            {
              "labelEn": "Manitoba (Winnipeg)",
              "labelTr": "Manitoba (Winnipeg)"
            },
            {
              "labelEn": "Saskatchewan (Regina)",
              "labelTr": "Saskatchewan (Regina)"
            },
            {
              "labelEn": "Alberta (Edmonton)",
              "labelTr": "Alberta (Edmonton)"
            }
          ]
        },
        {
          "labelEn": "West Coast",
          "labelTr": "Batı Sahili",
          "children": [
            {
              "labelEn": "British Columbia (Victoria)",
              "labelTr": "British Columbia (Victoria)"
            }
          ]
        },
        {
          "labelEn": "Northern Territories",
          "labelTr": "Kuzey Bölgeleri",
          "children": [
            {
              "labelEn": "Nunavut (Iqaluit)",
              "labelTr": "Nunavut (Iqaluit)"
            },
            {
              "labelEn": "Northwest Territories (Yellowknife)",
              "labelTr": "Kuzeybatı Bölgeleri (Yellowknife)"
            },
            {
              "labelEn": "Yukon (Whitehorse)",
              "labelTr": "Yukon (Whitehorse)"
            }
          ]
        }
      ]
    },
    "toughWords": [
      {
        "term": "region",
        "turkish": "bölge",
        "easyEn": "A region is a large area of a country.",
        "easyTr": "Bölge, bir ülkenin büyük bir alanıdır."
      },
      {
        "term": "province",
        "turkish": "eyalet",
        "easyEn": "A province is a part of Canada with its own government.",
        "easyTr": "Eyalet, kendi hükümeti olan bir Kanada parçasıdır."
      },
      {
        "term": "territory",
        "turkish": "bölge (territory)",
        "easyEn": "A territory is a northern area of Canada with fewer people.",
        "easyTr": "Territory, Kanada'nın daha az insanın yaşadığı kuzey bir alanıdır."
      },
      {
        "term": "capital",
        "turkish": "başkent",
        "easyEn": "A capital is the main city where the government is.",
        "easyTr": "Başkent, hükümetin bulunduğu ana şehirdir."
      },
      {
        "term": "boundary",
        "turkish": "sınır",
        "easyEn": "A boundary is the line that separates two countries.",
        "easyTr": "Sınır, iki ülkeyi ayıran çizgidir."
      },
      {
        "term": "Confederation",
        "turkish": "Konfederasyon",
        "easyEn": "Confederation is when Canada's provinces joined to form the country.",
        "easyTr": "Konfederasyon, Kanada eyaletlerinin birleşip ülkeyi kurmasıdır."
      },
      {
        "term": "tundra",
        "turkish": "tundra",
        "easyEn": "Tundra is a cold, flat northern land with no trees and frozen soil.",
        "easyTr": "Tundra, ağaçsız ve donmuş topraklı, soğuk ve düz bir kuzey arazisidir."
      },
      {
        "term": "Land of the Midnight Sun",
        "turkish": "Gece Yarısı Güneşi Diyarı",
        "easyEn": "This name means the North, where in summer daylight can last up to 24 hours.",
        "easyTr": "Bu isim, yazın gün ışığının 24 saate kadar sürebildiği Kuzey'i anlatır."
      }
    ],
    "chapterText": "Canada is the second largest country on earth, about 10 million square kilometres, with three oceans on its frontiers: the Pacific in the west, the Atlantic in the east and the Arctic to the north. Its southern edge is the Canada-United States boundary. Canada has five distinct regions and includes ten provinces and three territories, each with its own capital city. The population is about 34 million. Ottawa, on the Ottawa River, was chosen as the capital in 1857 by Queen Victoria. The Atlantic Provinces are Newfoundland and Labrador (capital St. John's), Prince Edward Island (Charlottetown), Nova Scotia (Halifax) and New Brunswick (Fredericton); they depend on fishing, farming, forestry and mining. Prince Edward Island is the smallest province and the birthplace of Confederation. New Brunswick is the only officially bilingual province. Central Canada is Quebec (capital Québec City) and Ontario (capital Toronto), the industrial and manufacturing heartland; together they produce more than three-quarters of all Canadian manufactured goods. More than three-quarters of Quebecers speak French, and Quebec is Canada's largest producer of hydro-electricity. Ontario holds Toronto, Canada's largest city and main financial centre. The Prairie Provinces are Manitoba (Winnipeg), Saskatchewan (Regina) and Alberta (Edmonton), rich in energy and fertile farmland; Alberta is the largest producer of oil and gas. The West Coast is British Columbia (capital Victoria), Canada's Pacific gateway, with the Port of Vancouver. The Northern Territories are Nunavut (Iqaluit), the Northwest Territories (Yellowknife) and Yukon (Whitehorse); they contain one-third of Canada's land mass but only about 100,000 people."
  }
});
