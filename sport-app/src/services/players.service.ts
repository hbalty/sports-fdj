import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UtilityService } from './utility.service';


@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    constructor(private _http: HttpClient, private _utility: UtilityService ) {}

    getPlayersByTeam(teamId = '') {
        return this._http.get<any[]>(`http://localhost:3000/players-by-team?teamId=${teamId}`)
        .pipe(
            retry(1),
            catchError(this._utility.handleError));
    }

    
    
    
}

