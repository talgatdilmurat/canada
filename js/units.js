// units.js — the 12 study units (Discover Canada). Titles are the user's locked split.
// `chapter` maps each unit to its source chapter on canada.ca (for Pass 2 grounding).
// `companion` (Summary/Diagram/ToughWords/chapterText) is bundled in Pass 2.
export const UNITS = [
  { id: 1,  titleEn: 'Applying for Citizenship',                     titleTr: 'Vatandaşlığa Başvuru',                         chapter: 'applying-citizenship' },
  { id: 2,  titleEn: 'Rights and Responsibilities of Citizenship',   titleTr: 'Vatandaşlığın Hak ve Sorumlulukları',          chapter: 'rights-responsibilities' },
  { id: 3,  titleEn: 'Who We Are',                                   titleTr: 'Biz Kimiz',                                    chapter: 'who-we-are' },
  { id: 4,  titleEn: 'Canada’s History — Before Confederation',      titleTr: 'Kanada Tarihi — Konfederasyon Öncesi',         chapter: 'history-before' },
  { id: 5,  titleEn: 'Canada’s History — Since Confederation (1867)',titleTr: 'Kanada Tarihi — Konfederasyon’dan Sonra (1867)',chapter: 'history-since' },
  { id: 6,  titleEn: 'Modern Canada',                                titleTr: 'Modern Kanada',                                chapter: 'modern-canada' },
  { id: 7,  titleEn: 'Federal Government',                           titleTr: 'Federal Hükümet',                              chapter: 'how-canadians-govern' },
  { id: 8,  titleEn: 'Elections',                                    titleTr: 'Seçimler',                                     chapter: 'federal-elections' },
  { id: 9,  titleEn: 'The Justice System',                           titleTr: 'Adalet Sistemi',                               chapter: 'justice-system' },
  { id: 10, titleEn: 'Canadian Symbols',                             titleTr: 'Kanada Sembolleri',                            chapter: 'canadian-symbols' },
  { id: 11, titleEn: 'Canada’s Economy',                             titleTr: 'Kanada Ekonomisi',                             chapter: 'canadas-economy' },
  { id: 12, titleEn: 'Canada’s Regions',                             titleTr: 'Kanada’nın Bölgeleri',                         chapter: 'canadas-regions' },
];
export const unitById = id => UNITS.find(u => u.id === Number(id)) || null;
