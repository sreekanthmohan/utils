import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  goldMarketRate:any;
  purchaseValue:any;
  makingCharge:any;
  totalGram:any;
  percentage:any;
  constructor() {
  }

  calculateRate(){

    this.makingCharge = ((this.purchaseValue - ( ((3/100) * this.purchaseValue) ) ) - (this.goldMarketRate * this.totalGram)).toFixed(2);
    this.percentage = (((this.makingCharge * 100) / this.purchaseValue)).toFixed(2);

    console.log('purchaseValue', this.purchaseValue, this.goldMarketRate);
    
  }

}
