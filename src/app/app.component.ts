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
  gst: any;
  goldRate: any;
  totalValue: any;
  constructor() {
  }

  calculateRate(){
    this.gst = parseFloat(((0.03) * this.purchaseValue).toFixed(2));
    this.goldRate = parseFloat((this.goldMarketRate * this.totalGram).toFixed(2));
    this.makingCharge = parseFloat((this.purchaseValue - this.goldRate).toFixed(2));
    this.percentage = parseFloat((((this.makingCharge * 100) / this.purchaseValue)).toFixed(2));
    this.totalValue = (this.gst + this.goldRate + this.makingCharge).toFixed(2);

    // console.log('purchaseValue', this.purchaseValue, this.goldMarketRate);
    
  }

}
