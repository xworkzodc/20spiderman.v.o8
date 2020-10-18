import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


    productModel: ProductModel = new ProductModel('', '', 0, 0);

    constructor(private service: ProductService) { }

    ngOnInit(): void {
    }

    onSave() {
        console.log('invoked onSave');
        this.service.save(this.productModel).subscribe();
    }

}
