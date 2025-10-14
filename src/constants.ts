export const Servers = [
  'bRO',
  'cRO',
  'dpRO',
  'GGH',
  'idRO',
  'iRO',
  'jRO',
  'kROM',
  'kROS',
  'kROZ',
  'kROZS',
  'LATAM',
  'ropEU',
  'ropRU',
  'thROC',
  'thROG',
  'twRO',
  'twROZ',
  'vnRO',
] as const;

export type ServersTypes = (typeof Servers)[number];

export const ServersMap = Object.fromEntries(
  Servers.map((c) => [c, c])
) as Record<ServersTypes, ServersTypes>;

// ------------------------------------

export const HeaderLanguages = [
  'en-US',
  'id-ID',
  'ja-JP',
  'ko-KR',
  'pt-BR',
  'ru-RU',
  'th-TH',
] as const;

export type HeaderLanguagesTypes = (typeof HeaderLanguages)[number];

export const HeaderLanguagesMap = Object.fromEntries(
  HeaderLanguages.map((c) => [c, c])
) as Record<HeaderLanguagesTypes, HeaderLanguagesTypes>;
