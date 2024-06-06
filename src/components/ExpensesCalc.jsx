import React from 'react'

function ExpensesCalc({ budget, remainingBudget, salary, expectedExpense, total }) {
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Budget: {budget}</h1>
                    <h1 className="text-2xl font-bold">Salary: {salary}</h1>
                    <h1 className="text-2xl font-bold">Expected Expense: {expectedExpense}</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Total Amount of Expenses: {total}</h1>
                    <h1 className="text-2xl font-bold">Remaining Budget: {remainingBudget}</h1>
                </div>
            </div>
        </div>
    )
}

export default ExpensesCalc