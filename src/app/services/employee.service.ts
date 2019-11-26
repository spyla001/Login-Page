import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // tslint:disable-next-line:ban-types
  datasource: Object;

  constructor(private http: HttpClient) {
  }

  employeedetails() {
    this.http.get('https://employeedetails-faf25.firebaseio.com/data.json')
      .pipe(
        map(
          responsedata => {
            const array = [];
            for (const key in responsedata) {
              if (responsedata.hasOwnProperty(key)) {
                array.push(responsedata[key]);
              }
            }
            return array;
          }
        )
      )
      .subscribe(posts => {
        console.log('posts', posts);
      });
  }

  postdata(x: any) {
    this.http.post('https://employeedetails-faf25.firebaseio.com/data.json', x)
  }

  get() {

  }
}
// .pipe(map(responsedata => {
//   console.log('yolo');
//   const postsArray = [];
//   // tslint:disable-next-line:forin
//   for (const key in responsedata) {
//     postsArray.push({...responsedata[key], id: key});
//   }
//   this.datasource = postsArray;
//   return postsArray;
// }))
