import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SAVE_PRODUCT_URL } from "../app.constants";
import { Observable } from "rxjs";
import { ProductModel } from "./product.model";
//mandatory as service needs httpClient
@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {
    }


    save(model: ProductModel): Observable<Object> {

        var jsonData = {
            'product': model
        };

        console.log(jsonData);

        let resposneObservable = this.http.post(SAVE_PRODUCT_URL, jsonData);

        return resposneObservable;
    }
}