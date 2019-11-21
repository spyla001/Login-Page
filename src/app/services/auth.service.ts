import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  allUsers;                                                                 //Is an instance variable

  //method 1 register 
  // get user register data from component and check that data with localstorage users data
  public register(userData) {
    //need to fetch all users
    // in genral we hit with api send                                                  [] for empty arry initially
    this.allUsers = JSON.parse(localStorage.getItem('users')) || [];                // just getting it from local storage, since we dont have api, 
        if(this.findUser(userData, this.allUsers)){                               // find entered user in the data available in the localstorage
      return {
        error: 'email already exsist',                                         //handle error
        status: ''
      }
    }
    else if ( this.usernameTaken(userData, this.allUsers)){
      return {
        error: 'username already taken',
        status: ''
      }
    }
    else{
      this.allUsers.push(userData);                                           // push the new entered data into an array     
      localStorage.setItem('users', JSON.stringify(this.allUsers));           // set it and set it in localstorage
      return {
        error: '',
        status: 'success'
      }
      
    };
  }

  private findUser(userData, users) {  
      if(!users || !users.length){                                        // if there is no user initially
        return;
      }                                     // default value
    return users.find(user => user.email === userData.email);                  // match email to see if it already exsist
  }
  private usernameTaken(userData,users){  
    if(!users || !users.length){
      return;
    }                                       // check if the user name is alreday taken or not 
    return users.find(user => user.username === userData.username); 
  }

  public Login(LoginData){                                                    // Login Authentication 
    if(this.matchUser(LoginData, this.allUsers)) {                            // finds the data in the stored data                         
      return {
        error: '',
        status: 'success'
      }
    }
    else{                                                                      // if the user does not exsisit in the storage
      return{
        error: 'Username or password is incorrect',
        status: ''
      }
    
    };
  }

  private matchUser (LoginData, users) {
    if(!users || !users.length){                                        // if there is no user initially
      return;
    }  
    return users.find(user => user.username === LoginData.username && user.password === LoginData.password);       // matches the data that is entered with the exsisting data
  }


  public error (message) {                                                      //eror handling function
    return window.alert(message);
  }
}


