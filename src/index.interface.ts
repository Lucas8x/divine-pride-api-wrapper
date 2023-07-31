type ServerTypes =
  | 'aRO'
  | 'bRO'
  | 'fRO'
  | 'idRO'
  | 'iRO'
  | 'jRO'
  | 'kROM'
  | 'kROZ'
  | 'kROZS'
  | 'GGH'
  | 'ruRO'
  | 'thROG'
  | 'twRO'
  | 'cRO'
  | 'iROC';

type HeaderLanguage = 'en-US' | 'pt-BR' | 'ko-KR';

interface GetAchievementResponse {
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

interface GetBuffResponse {
  id: number;
  description: string;
  image: string;
  resetDead: boolean;
  resetDispel: boolean;
  save: boolean;
  debuff: boolean;
}

interface Experience {
  [key: string]: number;
}

interface GetExperience {
  base_normal: Experience;
  base_rebirth: Experience;
}

interface GetItem {
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

interface GetMap {
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

interface Stats {
  attackRange: number;
  level: number;
  health: number;
  str: number;
  _int: number;
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
  _class: number;
}

interface Attack {
  minimum: number;
  maximum: number;
}

interface Drop {
  itemId: number;
  chance: number;
  stealProtected: boolean;
}

interface Spawn {
  mapname: string;
  amount: number;
  respawnTime: number;
}

interface Skill {
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

interface GetMonster {
  id: number;
  name: string;
  stats: Stats;
  slaves: any[];
  sounds: string[];
  questObjective: number[];
  drops: Drop[];
  mvpdrops: any[];
  spawn: Spawn[];
  skill: Skill[];
}

interface GetNpcIdentity {
  [x: string]: number;
}

interface GetQuest {
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

interface GetSkill {
  id: number;
  globalization: Array<{
    name: string;
    description: string;
    server: number;
    language: number;
  }>;
}

interface GetTitle {
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
