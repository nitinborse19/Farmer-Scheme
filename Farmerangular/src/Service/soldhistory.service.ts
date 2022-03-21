import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SoldHistory } from "src/app/Model/soldhistory.model";

@Injectable()
export class SoldHistorySevice
{
    constructor(private http:HttpClient)
    {

    }
    //.net core webapi Url
    readonly uri="http://localhost:60828/api/SoldHistory";

    getsoldhistory()
    {
        
        return this.http.get(this.uri);
    }
}