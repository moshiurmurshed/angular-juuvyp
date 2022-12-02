import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const prodIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find((p) => p.id == prodIdFromRoute);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(product.name + ' is added to cart');
  }
}
