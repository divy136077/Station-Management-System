import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // [x: string]: any;
  route: any;
  empForm: any;
  router: any;
  listview: any;

  constructor(private http: HttpClient) { 
  }
  IsloggedIn(){

    return !!localStorage.getItem("authToken") 
  }


  collects() { return this.http.get('http://localhost:8000/provider/getid'); }

  getId(id:string , auth:string) { return this.http.get<any>(`http://localhost:8000/user/` + id ,  {  headers: new HttpHeaders().set('auth-token',auth) }) }

  // searchAPI (obj?: any){ return this.http.get<any>('http://localhost:8000/auth', { params: obj })}

  getAllData(obj:any , auth:string){ return this.http.get<any>('http://localhost:8000/create-user' ,  {  headers: new HttpHeaders().set('auth-token',auth), params: obj })}

  add(data:any){ return this.http.post("http://localhost:8000/create-user/createuser", data)}

  edit(id:any, data:any, auth:string){ return this.http.put(`http://localhost:8000/user/update/${id}`, data ,{  headers: new HttpHeaders().set('auth-token',auth)} )}

  deleteUser(id:any , auth:string){ return this.http.delete<any>(`http://localhost:8000/user/delete/${id}`,{  headers: new HttpHeaders().set('auth-token',auth)}) }

  login(obj: any){ return this.http.post<any>('http://localhost:8000/login', obj)}

  // createuser(obj: any){ return this.http.post('http://localhost:8000/login/createuser', obj)}

  // remove(_id: any){ return this.http.delete<any>(`http://localhost:8000/usre/delete/${_id}` )}

}




