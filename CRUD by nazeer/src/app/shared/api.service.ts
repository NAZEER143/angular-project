import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // create by post
  poststudent(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data).
    pipe(map((res:any)=>{
      return res;
    }))
  }

  // get
  getstudent(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  //update
  updatestudent(data:any,id:number){
    return this.http.put("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
//delete
deletestudent(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
