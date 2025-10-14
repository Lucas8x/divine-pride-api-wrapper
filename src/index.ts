import packageJson from '../package.json';
import { InvalidIdError, MissingApiKeyError } from './errors';
import {
  ServersMap,
  type ServersTypes,
  HeaderLanguagesMap,
  type HeaderLanguagesTypes,
} from './constants';

import type {
  GetAchievementResponse,
  GetBuffResponse,
  GetExperienceResponse,
  GetItemResponse,
  GetMapResponse,
  GetMonsterResponse,
  GetNpcIdentityResponse,
  GetQuestResponse,
  GetSkillResponse,
  GetTitleResponse,
} from './types';

import { validateID } from './validate-id';

/**
 * Main class for interacting with DivinePride API.
 * @class DivinePride
 * @param {string} apiKey API key from DivinePride
 * @param {ServersTypes} [server='iRO'] Server to query
 * @param {HeaderLanguagesTypes} [acceptLanguage='en-US'] Language to use for querying
 * @param {RequestInit} [fetchOptions] Options to pass to the fetch API
 */
class DivinePride {
  constructor(
    private apiKey: string,
    private server: ServersTypes = ServersMap.iRO,
    private acceptLanguage = HeaderLanguagesMap['en-US'],
    private fetchOptions?: RequestInit
  ) {
    if (!apiKey) {
      throw new MissingApiKeyError();
    }
    this.apiKey = apiKey;
    this.server = server;
    this.acceptLanguage = acceptLanguage;
  }

  /**
   * Return string of the current server setting
   * @return {*}  {string}
   * @memberof DivinePride
   */
  public getServer(): string {
    return this.server;
  }

  /**
   * Change the current server setting.
   * Seems to take precedence over language setting.
   * @param {(ServersTypes | string)} server
   * @memberof DivinePride
   */
  public setServer(server: ServersTypes) {
    this.server = server;
  }

  /**
   * Return string of the current language setting
   * @return {*}  {string}
   * @memberof DivinePride
   */
  public getAcceptLanguage(): string {
    return this.acceptLanguage;
  }

  /**
   * Change the current language setting
   * @param {(string | HeaderLanguagesTypes)} language
   * @memberof DivinePride
   */
  public setLanguage(language: HeaderLanguagesTypes) {
    this.acceptLanguage = language;
  }

  private async request(endpoint: string) {
    const params = new URLSearchParams({
      apiKey: this.apiKey,
      server: this.server,
    });

    const response = await fetch(
      `https://www.divine-pride.net/api/database/${endpoint}?${params}`,
      {
        method: 'GET',
        headers: {
          'Accept-Language': this.acceptLanguage,
          'User-Agent': `${packageJson.name}/${packageJson.version}`,
        },
        ...this.fetchOptions,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  }

  /**
   * Get achievement information by id.
   * @param {number} id the achievement id
   * @return {*}  {Promise<GetAchievementResponse>}
   * @memberof DivinePride
   */
  async getAchievement(id: number): Promise<GetAchievementResponse> {
    const validId = validateID(id);
    return await this.request(`Achievement/${validId}`);
  }

  /**
   * Get buff information by id.
   * @param {number} id the buff id
   * @return {*}  {Promise<GetBuffResponse>}
   * @memberof DivinePride
   */
  async getBuff(id: number): Promise<GetBuffResponse> {
    const validId = validateID(id);
    return await this.request(`Buff/${validId}`);
  }

  /**
   * List of experience for different types.
   * @return {*}  {Promise<GetExperienceResponse>}
   * @memberof DivinePride
   */
  async getExperience(): Promise<GetExperienceResponse> {
    return await this.request(`Experience`);
  }

  /**
   * Get a specific item by id.
   * @param {number} id item id
   * @return {*}  {Promise<GetItemResponse>}
   * @memberof DivinePride
   */
  async getItem(id: number): Promise<GetItemResponse> {
    const validId = validateID(id);
    return await this.request(`Item/${validId}`);
  }

  /**
   * Get map information by string id  ex: prt_fild08
   * @param {string} id map id
   * @return {*}  {Promise<GetMapResponse>}
   * @memberof DivinePride
   */
  async getMap(id: string): Promise<GetMapResponse> {
    if (typeof id !== 'string' || id === '') {
      throw new InvalidIdError(id, 'Expected a string.');
    }
    return await this.request(`Map/${id}`);
  }

  /**
   * Get monster information by id.
   * @param {number} id monster id
   * @return {*}  {Promise<GetMonster>}
   * @memberof DivinePride
   */
  getMonster(id: number): Promise<GetMonsterResponse> {
    const validId = validateID(id);
    return this.request(`Monster/${validId}`);
  }

  /**
   * List of monster id and monster name
   * @param {number} id
   * @return {*}  {Promise<GetNpcIdentityResponse>}
   * @memberof DivinePride
   */
  async getNpcIdentity(id: number): Promise<GetNpcIdentityResponse> {
    const validId = validateID(id);
    return await this.request(`NpcIdentity/${validId}`);
  }

  /**
   * Get quest information by id.
   * @param {number} id quest id
   * @return {*}  {Promise<GetQuestResponse>}
   * @memberof DivinePride
   */
  async getQuest(id: number): Promise<GetQuestResponse> {
    const validId = validateID(id);
    return await this.request(`Quest/${validId}`);
  }

  /**
   * Get skill information by id.
   * @param {number} id skill id
   * @return {*}  {Promise<GetSkillResponse>}
   * @memberof DivinePride
   */
  async getSkill(id: number): Promise<GetSkillResponse> {
    const validId = validateID(id);
    return await this.request(`Skill/${validId}`);
  }

  /**
   * Get title information by id.
   * @param {number} id
   * @return {*}  {Promise<GetTitleResponse>}
   * @memberof DivinePride
   */
  async getTitle(id: number): Promise<GetTitleResponse> {
    const validId = validateID(id);
    return await this.request(`Title/${validId}`);
  }
}

export { DivinePride };
export default DivinePride;

export {
  HeaderLanguages,
  Servers,
  type HeaderLanguagesTypes,
  ServersMap,
  type ServersTypes,
} from './constants';

export { InvalidIdError, MissingApiKeyError };

export type {
  Attack,
  Drop,
  Experience,
  PropertyTable,
  Skill,
  Spawn,
  Stats,
} from './types';

export type {
  GetAchievementResponse,
  GetBuffResponse,
  GetExperienceResponse,
  GetItemResponse,
  GetMapResponse,
  GetMonsterResponse,
  GetNpcIdentityResponse,
  GetQuestResponse,
  GetSkillResponse,
  GetTitleResponse,
};
