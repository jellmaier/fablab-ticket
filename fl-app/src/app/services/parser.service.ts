import { Injectable } from '@angular/core';

export interface CardData{
  cardid?: string;
  name?: string;
  surename?: string;
  email?: string;
}

interface CardDataConfig{
  cardid: string;
  name: string;
  surename: string;
  email?: string;
  elementseperator?: string;
  itemseperator?: string;
}

@Injectable()
export class ParserService {

  private card_data_config: CardDataConfig = { 
    cardid: 'cardid', 
    name: 'name', 
    surename: 'nachname', 
    email: 'email', 
    elementseperator: ',',
    itemseperator: ':'
  };

  constructor() {}

  public parseCardData(input:string):CardData {
    let result:CardData = {};

    if(input.includes(this.card_data_config.itemseperator)) {
      this.stringToInterface(result, input);
    } else {
      result.cardid = input;
    }

    return result;
  }

  private mapCardData(result: CardData, key: string, value:string):void {
    key = key.trim();
    value = value.trim();

    if(key == this.card_data_config.cardid) {
      result.cardid = value;
    } else if(key == this.card_data_config.name) {
      result.name = value;
    } else if(key == this.card_data_config.surename) {
      result.surename = value;
    } else if(key == this.card_data_config.email){
      result.email = value;
    }
  }


  private stringToInterface(result:CardData, input:string):void {

    input.split(this.card_data_config.elementseperator).forEach(elemet => {
        let elemet_array = elemet.split(this.card_data_config.itemseperator);
        //console.log('key: ' + elemet_array[0] + ', value: ' + elemet_array[1]);
        this.mapCardData(result, elemet_array[0], elemet_array[1]);
        //result[elemet_array[0]] = elemet_array[1];
        //result_array.set(elemet_array[0], elemet_array[1]);
    });
  }

}
