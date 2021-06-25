import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  hetGAmeList(
    ordering: string,
    search?: string
  );Observable<APIResponse<Game>>{
    let params = new HttpParams().set("ordering", ordering);
    if(search) {
      params = new HttpParams().set("ordering", ordering).set("search", search)
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params: params,
    })
  }
}
