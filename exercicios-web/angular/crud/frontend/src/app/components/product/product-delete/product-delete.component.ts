import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {} as Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.productService.readById(id).subscribe(product => {
      this.product = this.product
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id as number).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(["/products"])
    })
  }
  
  cancel(): void {
    this.router.navigate(["/products"])
  }
}
