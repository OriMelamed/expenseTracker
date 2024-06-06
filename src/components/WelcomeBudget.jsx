import React, { useRef } from 'react';

function WelcomeBudget({ settings }) {
    const budgetRef = useRef();
    const nameRef = useRef();
    const salaryRef = useRef();
    const expectedExpenseRef = useRef();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Welcome to My Expense Tracker</h1>
                <div className="flex items-start flex-col justify-start mb-4 w-full">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Name:</label>
                    <input type="text" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" ref={nameRef} />
                </div>
                <div className="flex items-start flex-col justify-start mb-4 w-full">
                    <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Budget:</label>
                    <input type="number" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" ref={budgetRef} />
                </div>
                <div className="flex items-start flex-col justify-start mb-4 w-full">
                    <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Salary:</label>
                    <input type="number" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" ref={salaryRef} />
                </div>
                <div className="flex items-start flex-col justify-start mb-4 w-full">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Expected Expense:</label>
                    <input type="number" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" ref={expectedExpenseRef} />
                </div>
                <button onClick={() => settings(budgetRef.current.value, nameRef.current.value)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Continue</button>
            </div>
        </div>
    );
}

export default WelcomeBudget;
