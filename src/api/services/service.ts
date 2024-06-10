import { AxiosInstance } from "axios";

export abstract class Service {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  protected get call(): AxiosInstance {
    return this.client;
  }
}

export default Service;