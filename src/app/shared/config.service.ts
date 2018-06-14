import { Injectable } from "@angular/core";

import {HttpClient } from '@angular/common/http';
import { promise } from "protractor";
import { Configuration } from "../config";

@Injectable()
export class ConfigService
{
    private config: Configuration;
    constructor(private _http: HttpClient)
    {
    }

    load(url: string)
    {
        return new Promise((resolve) =>{
                this._http.get<Configuration>(url).subscribe(config =>{
                    this.config = config;
                    resolve();
                });  
        });
    }

     getConfiguration():Configuration
     {
         return this.config;
     }
}