import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                "x-rapidapi-key": "1d8fb320b0msh68b5afe28e668e4p11990fjsnc1d455a2e8e7",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            }, 
            setParams: {
               key: "", 
            }
        });
    return next.handle(req)
    }
}
