import { Injectable } from '@angular/core'
import { throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() {}

    handleError(error:any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) { // erreur côté client
          errorMessage = `Error: ${error.error.message}`;
        } else {                                // erreur côté serveur
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
      }
}