import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }


    onExpense(expenseType: string, amount: number, date: string, comments: string) {
        console.log('invoked onExpense');
        console.log(expenseType);
        console.log(amount);
        console.log(date);
        console.log(comments);
    }


    onExpenseRef(expenseType: HTMLSelectElement) {
        console.log('invoked onExpense');
        console.log(expenseType.value);
    }

}
