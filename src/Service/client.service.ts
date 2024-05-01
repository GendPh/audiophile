import { Client } from "../Model/client.model";

export class ClientService {

  client: Client = new Client();

  ConstructClient(attribute: string, value: any) {
    this.client[attribute] = value;

    if (attribute === 'paymentMethod' && value === 'delivery') {
      this.client.eMoneyNumber = "";
      this.client.eMoneyPin = "";
    }

  }

}