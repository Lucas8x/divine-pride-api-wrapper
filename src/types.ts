export type ServerTypes =
  | 'bRO'
  | 'cRO'
  | 'dpRO'
  | 'GGH'
  | 'idRO'
  | 'iRO'
  | 'jRO'
  | 'kROM'
  | 'kROS'
  | 'kROZ'
  | 'kROZS'
  | 'ropEU'
  | 'ropRU'
  | 'thROC'
  | 'thROG'
  | 'twRO'
  | 'vnRO';

export type HeaderLanguage =
  | 'en-US'
  | 'id-ID'
  | 'ja-JP'
  | 'ko-KR'
  | 'pt-BR'
  | 'ru-RU'
  | 'th-TH';

export interface GetAchievementResponse {
  id: number;
  title: string;
  summary: string;
  details: string;
  score: number;
  text: string;
  count: number;
  shortcut: number;
  itemId: number;
  titleId: number;
  buffId: number;
  ui_type: number;
  group: string;
  major: number;
  minor: number;
}

export interface GetBuffResponse {
  id: number;
  description: string;
  image: string;
  resetDead: boolean;
  resetDispel: boolean;
  save: boolean;
  debuff: boolean;
}

// ------------------------------------

export interface Experience {
  [key: string]: number;
}

export interface GetExperienceResponse {
  base_normal: Experience;
  base_rebirth: Experience;
}

// ------------------------------------

export interface GetItemResponse {
  classNum: number;
  sets: any[];
  soldBy: any[];
  id: number;
  name: string;
  description: string;
  slots: number;
  setname: any;
  itemTypeId: number;
  itemSubTypeId: number;
  itemSummonInfoContainedIn: Array<{
    Type: number;
    sourceId: number;
    sourceName: string;
    targetId: number;
    targetName: string;
    count: number;
    totalOfSource: number;
    summonType: any;
    chance: number;
  }>;
  itemSummonInfoContains: any[];
  attack: any;
  defense: number;
  weight: number;
  requiredLevel: any;
  limitLevel: any;
  itemLevel: any;
  job: number;
  compositionPos: any;
  attribute: any;
  location: string;
}

export interface GetMapResponse {
  mapname: string;
  name: string;
  mp3: string;
  spawn: any[];
  npcs: Array<{
    id: number;
    name: string;
    job: number;
    x: number;
    y: number;
    type: string;
  }>;
}

// ------------------------------------

export interface Stats {
  attackRange: number;
  level: number;
  health: number;
  str: number;
  int: number;
  vit: number;
  dex: number;
  agi: number;
  luk: number;
  attack: Attack;
  defense: number;
  baseExperience: number;
  jobExperience: number;
  aggroRange: number;
  escapeRange: number;
  movementSpeed: number;
  attackSpeed: number;
  attackedSpeed: number;
  element: number;
  scale: number;
  race: number;
  magicDefense: number;
  hit: number;
  flee: number;
  ai: string;
  mvp: number;
  class: number;
}

export interface Attack {
  minimum: number;
  maximum: number;
}

export interface Drop {
  itemId: number;
  chance: number;
  stealProtected: boolean;
}

export interface Spawn {
  mapname: string;
  amount: number;
  respawnTime: number;
}

export interface Skill {
  skillId: number;
  status: string;
  level: number;
  chance: number;
  casttime: number;
  delay: number;
  interruptable: boolean;
  condition: any;
  conditionValue: any;
}

export interface PropertyTable {
  [elementIndex: string]: number;
}

export interface GetMonsterResponse {
  id: number;
  dbname: string;
  name: string;
  stats: Stats;
  spawnSet: any[];
  slaves: any[];
  metamorphosis: any[];
  sounds: string[];
  questObjective: number[];
  drops: Drop[];
  mapDrops: any[];
  mvpdrops: any[];
  spawn: Spawn[];
  skill: Skill[];
  propertyTable: PropertyTable;
}

// ------------------------------------

export interface GetNpcIdentityResponse {
  [x: string]: number;
}

export interface GetQuestResponse {
  id: number;
  title: string;
  image: string;
  quickinfo: string;
  info: string;
  time: number;
  hunt: any;
  qitem_mob: any;
  qitem_name: any;
  qitem_percent: number;
  qitem_job: number;
}

export interface GetSkillResponse {
  id: number;
  globalization: Array<{
    name: string;
    description: string;
    server: number;
    language: number;
  }>;
}

export interface GetTitleResponse {
  id: number;
  title: string;
  achievement: {
    id: number;
    title: string;
    summary: any;
    details: any;
    score: number;
    text: any;
    count: any;
    shortcut: any;
    itemId: any;
    titleId: any;
    buffId: any;
    ui_type: number;
    group: any;
    major: number;
    minor: any;
  };
}

// ------------------------------------

declare class DivinePride {
  private apiKey;
  private server;
  private acceptLanguage;
  private fetchOptions;
  constructor(
    apiKey: string,
    server?: ServerTypes | string,
    acceptLanguage?: HeaderLanguage | string
  );
  getServer(): string;
  setServer(server: ServerTypes | string): void;
  getAcceptLanguage(): string;
  setLanguage(language: HeaderLanguage | string): void;
  private request;
  getAchievement(id: number): Promise<GetAchievementResponse>;
  getBuff(id: number): Promise<GetBuffResponse>;
  getExperience(): Promise<GetExperienceResponse>;
  getItem(id: number): Promise<GetItemResponse>;
  getMap(id: string): Promise<GetMapResponse>;
  getMonster(id: number): Promise<GetMonsterResponse>;
  getNpcIdentity(id: number): Promise<GetNpcIdentityResponse>;
  getQuest(id: number): Promise<GetQuestResponse>;
  getSkill(id: number): Promise<GetSkillResponse>;
  getTitle(id: number): Promise<GetTitleResponse>;
}
