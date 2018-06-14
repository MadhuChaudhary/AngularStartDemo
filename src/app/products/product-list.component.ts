import {Component, OnInit} from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector : 'pm-products',
    templateUrl: '../products/product-list.component.html',
    styleUrls:['../products/product-list-component.css']
})
export class ProductListComponent implements OnInit
{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    showImageTitle : string = 'Show Image';
    _listFilter: string ;
    get listFilter():string
    {
        return this._listFilter;
    }
    set listFilter(value : string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[];
        

    constructor(private _productService: ProductService)
    {
    }

    performFilter(filterBy: string) :IProduct[]
        {
            filterBy = filterBy.toLowerCase();
            return this.products.filter(a =>a.productName.toLowerCase().indexOf(filterBy) != -1);
        }
    toggleButton(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
          this._productService.getProduct().subscribe(data =>
        {
            this.products = data;
            this.filteredProducts = this.products;
        });
       
    }

        onNotify(message: string): void
        {
            this.pageTitle = "dscdsfsfs";
        }
}