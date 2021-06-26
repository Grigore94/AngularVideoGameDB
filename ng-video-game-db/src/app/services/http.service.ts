import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { APIResponse, Game } from './modules';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set("ordering", ordering);
    if (search) {
      params = new HttpParams().set("ordering", ordering).set("search", search)
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    })
  }
  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailerRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenShotsRequest = this.http.get(`${env.BASE_URL}/game/${id}/screenshots`);


    return forkJoin({
      gameInfoRequest,
      gameScreenShotsRequest,
      gameTrailerRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp["gameInfoRequest"],
          screenshots: resp["gameScreenshotsrequest"]?.resutls,
          trailer: resp["gameTrailerRequest"]?.results,
        }
      })

    )

  }
}
