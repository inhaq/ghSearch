import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id: '7d106b535e671198ee4b';
  private client_secret: 'da43c572d4459e4980a55418d0fd3d07218fb99c';

  constructor(private _http: Http) {
    // console.log("Github service Ready");
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }
  updateUser(username:string){
    this.username = username;
  }
}
