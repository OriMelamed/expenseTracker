import React from 'react'
import OvalCard from './CalcCard'

function ExpensesCalc({ budget, remainingBudget, salary, expectedExpense, total }) {
    const selectCardColor = () => {
        return 'bg-white'
    }
    return (
        <div className="flex w-full justify-between">
            <OvalCard title='Budget' number={budget} bgColor=' bg-blue-200' />
            <OvalCard title='remainingBudget' number={remainingBudget} bgColor={selectCardColor()} />
            <OvalCard title='salary' number={salary} bgColor=' bg-green-200' />
            <OvalCard title='expectedExpense' number={expectedExpense} bgColor='bg-red-200' />
            <OvalCard title='total' number={total} bgColor={selectCardColor()} />
        </div>
    )
}

export default ExpensesCalc