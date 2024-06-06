import { useEffect, useState } from "react"
import AddExpense from "./components/AddExpense"
import ExpensesList from "./components/ExpensesList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import WelcomeBudget from "./components/WelcomeBudget"

export const expensesList_1 = [{
  id: '1',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
  category: 'Transportation'
},
{
  id: '2',
  title: 'Toilet Paper',
  amount: 94.67,
  date: new Date(2021, 2, 28),
  category: 'Household'
},
{
  id: '3',
  title: 'New TV',
  amount: 294.67,
  date: new Date(2021, 2, 28),
  category: 'Entertainment'
},
]

function App() {
  const [budget, setBudget] = useState(0)
  const [name, setName] = useState('')

  const [totalExpensesAmount, setTotalExpensesAmount] = useState(0)
  const [expensesList, setExpensesList] = useState(expensesList_1)

  const [isPopupOpen, setIsPopupOpen] = useState(false);



  const totalAmount = () => {
    const totalAmount = expensesList.reduce((acc, expense) => {
      return acc + expense.amount
    }, 0)
    setTotalExpensesAmount(totalAmount)
  }

  useEffect(() => {
    totalAmount()
  }
    , [expensesList])

  const onDeleteHandler = (id) => {
    setExpensesList(expensesList.filter(expense => expense.id !== id))
  }

  const settingsHandler = (b, n) => {
    setBudget(b)
    setName(n)
  }
  const addExpenseHandler = (expense) => {
    setExpensesList(prevExpenses => [
      ...prevExpenses,
      { ...expense, id: Math.random().toString() }
    ]);
    setIsPopupOpen(false);
  };


  return (
    <>
      {budget === 0 ?
        <WelcomeBudget settings={settingsHandler} />
        :
        < div className="flex flex-col h-screen" >
          <header className="p-4 bg-gray-100"> <Header name={name} /></header>
          <main className="p-4 flex-grow">
            <div className="flex items-center justify-center">
              <button
                className="mb-4 px-4 py-2 justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsPopupOpen(true)}
              >
                Add Expense
              </button>
            </div>
            {isPopupOpen && <AddExpense onClose={() => setIsPopupOpen(false)} onSave={addExpenseHandler} />}
            <ExpensesList expensesList={expensesList} total={totalExpensesAmount} onDeleteHandler={onDeleteHandler} />
          </main>
          <footer className="p-4 bg-gray-100"><Footer /></footer>
        </div >
      }
    </>
  )
}

export default App
