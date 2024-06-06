import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1500,
})

function AddExpensePopup({ onClose, onSave }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSave = () => {
        console.log(title, amount, category, date)
        if (title == '' || amount == '' || date == '' || category == '') {
            Toast.fire({
                icon: 'error',
                title: 'Please fill all fields'
            });
            return
        }
        Toast.fire({
            icon: 'success',
            title: 'Expense successfully added'
        });
        onSave({
            title,
            amount: parseFloat(amount),
            date: new Date(date),
            category
        });

    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-4">Add New Expense</h2>
                <div className="mb-4">
                    <label className="block text-sm text-gray-700 dark:text-gray-200">Title</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-gray-700 dark:text-gray-200">Amount</label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-gray-700 dark:text-gray-200">Date</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-gray-700 dark:text-gray-200">Category</label>
                    <select
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Household">Household</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Food">Food</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddExpensePopup;
