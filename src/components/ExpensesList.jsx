import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

function ExpensesList({ expensesList, total, onDeleteHandler }) {
    return (
        <div >
            <div className="flex h-screen">
                <div className="w-1/2  items-center justify-center">
                    <h2 className='text-2xl font-bold text-fuchsia-950 mx-2 mt-2 mb-5 p-2 text-center'>Expenses List - {total.toFixed(2)}</h2>
                    <ul>
                        {expensesList.map(expense => (
                            <li key={expense.id} className='bg-gray-100 p-4 m-2 rounded-lg'>
                                <h3>{expense.title}</h3>
                                <p>${expense.amount} on {expense.date.toISOString().slice(0, 10)}</p>
                                <p>{expense.category}</p>
                                <button onClick={() => onDeleteHandler(expense.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>                </div>
                <div className="w-1/2 bg-slate-400 flex items-center justify-center">
                    <h1 className="text-white text-2xl">Right Section</h1>
                    <div>
                        <Pie data={data} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExpensesList