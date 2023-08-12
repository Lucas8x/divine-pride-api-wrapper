import axios from 'axios';
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
  HeaderLanguage,
  ServerTypes,
} from './types';

class DivinePride {
  constructor(
    private apiKey: string,
    private server: ServerTypes = 'iRO',
    private acceptLanguage: HeaderLanguage = 'en-US'
  ) {
    if (!apiKey)
      throw new Error(
        'Please provide DivinePride API key. You can get one here: https://www.divine-pride.net/account'
      );
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
   * @param {(ServerTypes | string)} server
   * @memberof DivinePride
   */
  public setServer(server: ServerTypes) {
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
   * @param {(string | HeaderLanguage)} language
   * @memberof DivinePride
   */
  public setLanguage(language: HeaderLanguage) {
    this.acceptLanguage = language;
  }

  private async request(endpoint: string) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://www.divine-pride.net/api/database/${endpoint}`,
        headers: {
          'Accept-Language': this.acceptLanguage,
        },
        params: {
          apiKey: this.apiKey,
          server: this.server,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get achievement information by id.
   * @param {number} id the achievement id
   * @return {*}  {Promise<GetAchievementResponse>}
   * @memberof DivinePride
   */
  async getAchievement(id: number): Promise<GetAchievementResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Achievement/${id}`);
  }

  /**
   * Get buff information by id.
   * @param {number} id the buff id
   * @return {*}  {Promise<GetBuffResponse>}
   * @memberof DivinePride
   */
  async getBuff(id: number): Promise<GetBuffResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Buff/${id}`);
  }

  /**
   * List of experience for different types.
   * @return {*}  {Promise<GetExperience>}
   * @memberof DivinePride
   */
  async getExperience(): Promise<GetExperienceResponse> {
    return await this.request(`Experience`);
  }

  /**
   * Get a specific item by id.
   * @param {number} id item id
   * @return {*}  {Promise<GetItem>}
   * @memberof DivinePride
   */
  async getItem(id: number): Promise<GetItemResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Item/${id}`);
  }

  /**
   * Get map information by string id  ex: prt_fild08
   * @param {string} id map id
   * @return {*}  {Promise<GetMap>}
   * @memberof DivinePride
   */
  async getMap(id: string): Promise<GetMapResponse> {
    if (typeof id !== 'string') throw new Error('ID must be a string');
    return await this.request(`Map/${id}`);
  }

  /**
   * Get monster information by id.
   * @param {number} id monster id
   * @return {*}  {Promise<GetMonster>}
   * @memberof DivinePride
   */
  getMonster(id: number): Promise<GetMonsterResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return this.request(`Monster/${id}`);
  }

  /**
   * List of monster id and monster name
   * @param {number} id
   * @return {*}  {Promise<GetNpcIdentity>}
   * @memberof DivinePride
   */
  async getNpcIdentity(id: number): Promise<GetNpcIdentityResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`NpcIdentity/${id}`);
  }

  /**
   * Get quest information by id.
   * @param {number} id quest id
   * @return {*}  {Promise<GetQuest>}
   * @memberof DivinePride
   */
  async getQuest(id: number): Promise<GetQuestResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Quest/${id}`);
  }

  /**
   * Get skill information by id.
   * @param {number} id skill id
   * @return {*}  {Promise<GetSkill>}
   * @memberof DivinePride
   */
  async getSkill(id: number): Promise<GetSkillResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Skill/${id}`);
  }

  /**
   * Get title information by id.
   * @param {number} id
   * @return {*}  {Promise<GetTitle>}
   * @memberof DivinePride
   */
  async getTitle(id: number): Promise<GetTitleResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Title/${id}`);
  }
}

export { DivinePride };
export default DivinePride;
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
  HeaderLanguage,
  ServerTypes,
};
export type {
  Attack,
  Drop,
  Experience,
  PropertyTable,
  Skill,
  Spawn,
  Stats,
} from './types';
export { Servers, HeaderLanguages } from './constants';
