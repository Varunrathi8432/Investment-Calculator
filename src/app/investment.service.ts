import { Injectable } from "@angular/core";

import type { Data } from "./investment-results/investment-result.model";
import type { Investment } from "./user-input/user-input.model";

@Injectable({providedIn:"root"})
export class InvestmentService{
    data!:Data[];

    calculateInvestmentResults(investment:Investment) {
        const annualData = [];
        let investmentValue = investment.initialInvestment;
      
        for (let i = 0; i < investment.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
          investmentValue += interestEarnedInYear + investment.annualInvestment;
          const totalInterest =
            investmentValue - investment.annualInvestment * year - investment.initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: investment.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: investment.initialInvestment + investment.annualInvestment * year,
          });
        }
        this.data=annualData;
      }
}