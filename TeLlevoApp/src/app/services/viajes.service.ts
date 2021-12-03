import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
    }
    apiURL = 'http://192.168.1.83:3000';
   //192.168.1.83:3000 jsonplaceholder.typicode.com
    //json-server -H 192.168.1.83 .\db.json
    constructor(private http:HttpClient) { }

    getUsuario(userId): Observable<any>{
      return this.http.get(this.apiURL + '/users/' + userId). pipe(
        retry(3)
      );
    }
    getUsuarios(): Observable<any>{
      return this.http.get(this.apiURL + '/users/'). pipe(
        retry(3)
      );
    }

    getPosts():Observable<any>{
      return this.http.get(this.apiURL+'/posts/').pipe(
        retry(3)
      );
    }
    getPost(id):Observable<any>{
      return this.http.get(this.apiURL+'/posts/'+id).pipe(
        retry(3)
      );
    }
    createPost(post):Observable<any>{
      return this.http.post(this.apiURL+'/posts',post,this.httpOptions).pipe(
        retry(3)
      );
      }
    updatePost(id,post):Observable<any>{
      return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(
        retry(3)
      );
      }
    deletePost(id):Observable<any>{
      return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
      }
         
  }