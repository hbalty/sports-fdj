import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, retry } from 'rxjs/operators';
import { BASE_URL, UtilityService } from '../service/utility.api';
import { League } from 'src/app/domain/league'
import { Observable, lastValueFrom } from 'rxjs'


@Injectable({
    providedIn: 'root'
})
export class LeagueApi{

    constructor(private _http: HttpClient, private _utility: UtilityService) {}

    getLeaguesByKeyword(keyword = ''): Promise<League[]> {
        return lastValueFrom(this._http.get<League[]>(`${BASE_URL}/leagues?keyword=${keyword}`)
        .pipe(
            retry(1),
            catchError(this._utility.handleError)
        ));
    }
}