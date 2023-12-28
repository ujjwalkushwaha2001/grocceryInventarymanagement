import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from '../../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  message: string | undefined
  productSave: boolean=false
  constructor(private product: ProductService) { }
  ngOnInit(): void {

  }
  time = () => {
    this.productSave = false;
}
  submit(data: product, form: NgForm) {
    this.product.saveproduct(data).subscribe((result) => {
      if (result) {
        form.reset();
        this.message = "Your product added successfully";
        this.productSave = true;
      }
    })
    setTimeout(this.time, 2000);
  }

  resetForm(form: any) {
    form.reset();
  }
}
