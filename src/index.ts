import axios from 'axios';

class DivinePride {
  private apiKey: string;
  server?: string | ServerTypes;
  acceptLanguage?: string | HeaderLanguage;

  constructor(
    apiKey: string,
    server: ServerTypes = 'iRO',
    acceptLanguage: HeaderLanguage = 'en-US'
  ) {
    if (!apiKey)
      throw new Error(
        'Please provide DivinePride API key. You can get one here: https://www.divine-pride.net/account'
      );
    this.apiKey = apiKey;
    this.server = server;
    this.acceptLanguage = acceptLanguage;
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

  async getAchievement(id: number): Promise<GetAchievementResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Achievement/${id}`);
  }

  async getBuff(id: number): Promise<GetBuffResponse> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Buff/${id}`);
  }

  async getExperience(): Promise<GetExperience> {
    return await this.request(`Experience`);
  }

  async getItem(id: number): Promise<GetItem> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Item/${id}`);
  }

  async getMap(id: string): Promise<GetMap> {
    if (typeof id !== 'string') throw new Error('ID must be a string');
    return await this.request(`Map/${id}`);
  }

  async getMonster(id: number): Promise<GetMonster> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Monster/${id}`);
  }

  async getNpcIdentity(id: number): Promise<GetNpcIdentity> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`NpcIdentity/${id}`);
  }

  async getQuest(id: number): Promise<GetQuest> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Quest/${id}`);
  }

  async getSkill(id: number): Promise<GetSkill> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Skill/${id}`);
  }

  async getTitle(id: number): Promise<GetTitle> {
    if (isNaN(id)) throw new Error('ID must be a number');
    return await this.request(`Title/${id}`);
  }
}

export { DivinePride };
export default DivinePride;
