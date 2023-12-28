import { Component, OnInit } from '@angular/core';
import { product } from '../../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: product[] | undefined

  constructor(private product: ProductService) { }
  ngOnInit(): void {
    this.product.getAllProduct().subscribe((result) => {
      if (result) {
        this.items = result;
      }
    })
  }

}
