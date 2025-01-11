import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone:true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule]
})
export class UserInputComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = ''; 
  duration = '';

  constructor(private investmentService:InvestmentService){}

  onCalculate(){
    this.investmentService.calculateInvestmentResults({
        initialInvestment:Number(this.initialInvestment),
        annualInvestment:Number(this.annualInvestment),
        expectedReturn:Number(this.expectedReturn),
        duration:Number(this.duration)
    });
  }
}
