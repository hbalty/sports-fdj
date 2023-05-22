import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, retry } from 'rxjs/operators';
import { UtilityService } from './utility.service';


@Injectable({
    providedIn: 'root'
})
export class LeagueService {

    constructor(private _http: HttpClient, private _utility: UtilityService) {}

    getLeaguesByKeyword(keyword = '') {
        return this._http.get<any[]>(`http://localhost:3000/leagues?keyword=${keyword}`)
        .pipe(
            retry(1),
            catchError(this._utility.handleError)
        );
    }

    getAllLeagues() {
        return this._http.get(`http://localhost:3000/leagues`)
        .pipe(
            retry(1),
            catchError(this._utility.handleError)
        );;
    }
}