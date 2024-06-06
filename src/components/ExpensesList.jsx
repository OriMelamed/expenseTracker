import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensesList({ expensesList, total, onDeleteHandler }) {
    const [transportationExpense, setTransportationExpense] = useState(0);
    const [householdExpense, setHouseholdExpense] = useState(0);
    const [entertainmentExpense, setEntertainmentExpense] = useState(0);
    const [foodExpense, setFoodExpense] = useState(0);

    useEffect(() => {
        setTransportationExpense(expensesList.reduce((acc, expense) => expense.category === 'Transportation' ? acc + expense.amount : acc, 0));
        setHouseholdExpense(expensesList.reduce((acc, expense) => expense.category === 'Household' ? acc + expense.amount : acc, 0));
        setEntertainmentExpense(expensesList.reduce((acc, expense) => expense.category === 'Entertainment' ? acc + expense.amount : acc, 0));
        setFoodExpense(expensesList.reduce((acc, expense) => expense.category === 'Food' ? acc + expense.amount : acc, 0));
    }, [expensesList]);

    const data = {
        labels: ['Transportation', 'Household', 'Entertainment', 'Food'],
        datasets: [
            {
                label: 'Expenses',
                data: [transportationExpense, householdExpense, entertainmentExpense, foodExpense],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="flex h-screen">
                <div className="w-1/2 items-center justify-center">
                    <h2 className="text-2xl font-bold text-fuchsia-950 mx-2 mt-2 mb-5 p-2 text-center">Expenses List</h2>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expensesList.map(expense => (
                                <tr key={expense.id} className="bg-gray-100 p-4 m-2 rounded-lg h-8 text-center">
                                    <td>{expense.title}</td>
                                    <td>${expense.amount.toFixed(2)}</td> {/* Fixed to 2 decimal places */}
                                    <td>{expense.category}</td>
                                    <td>{expense.date.toISOString().slice(0, 10)}</td>
                                    <td><button onClick={() => onDeleteHandler(expense.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-1/2 bg-slate-200 items-center justify-center rounded-md">
                    <h1 className="text-white text-center text-2xl">Your Expenses Pie:</h1>
                    <div>
                        <Pie data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpensesList;
