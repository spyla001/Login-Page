import { Injectable } from '@angular/core';

export interface loginData {
  'username':string;
  'password': string;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

    constructor() {
      
     }
     

}
