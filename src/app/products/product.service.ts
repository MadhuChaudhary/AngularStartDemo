import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ConfigService } from "../shared/config.service";

@Injectable()
export class ProductService{

    constructor(private httpClient: HttpClient, private configService: ConfigService)
    {

    }

    webApiBaseUrl:string;

    getProduct(): Observable<IProduct[]>
    {
        this.webApiBaseUrl =  this.configService.getConfiguration().webAPIBaseUrl;
        let  productUrl: string ;
       productUrl =  this.webApiBaseUrl + "api/Product";

       return this.httpClient.get<IProduct[]>(productUrl);
       
    }
}